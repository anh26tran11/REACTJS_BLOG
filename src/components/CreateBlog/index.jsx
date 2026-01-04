import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { X } from "lucide-react"; // Import icon để xóa tag
import CloudinaryUpload from "../CloudinaryUpload";
import { createBlog } from "@/services/api/blog";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  const uploadImageToCloudinary = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: formData }
    );

    if (!res.ok) throw new Error("Cloudinary upload failed");
    const result = await res.json();
    return result.secure_url;
  };

  const handleCreateBlog = async () => {
    if (!title || !content || tags.length === 0 || !image) {
      toast.error("Please fill in all fields (Title, Content, Tags, Image)");
      return;
    }

    try {
      setIsLoading(true);
      const imageUrl = await uploadImageToCloudinary(image);
      const data = {
        title,
        content,
        tags,
        image: imageUrl,
      };

      console.log("Submitting Blog Data:", data);
      await createBlog(data);

      toast.success("Create blog successfully!");
      setTitle("");
      setContent("");
      setTags([]);
      setImage(null);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to create blog");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = (file) => {
    setImage(file);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        📝 Create a New Blog
      </h1>

      {/* Image Upload */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Blog Image</label>
        <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50">
          {/* Component này cần trả về File Object qua onUpload */}
          <CloudinaryUpload onUpload={handleUpload} />
          {image && (
            <p className="mt-2 text-sm text-green-600">
              Selected: {image.name}
            </p>
          )}
        </div>
      </div>

      {/* Title */}
      <label className="block font-medium mb-2">Blog Title</label>
      <input
        className="w-full border rounded-lg px-4 py-2 mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Content (TinyMCE) */}
      <label className="block font-medium mb-2">Blog Content</label>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={content}
        onEditorChange={setContent}
      />

      {/* Tags */}
      <div className="mt-6">
        <label className="block font-medium mb-2">Blog Tags</label>
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTag()} // Enter để add tag
            placeholder="Enter blog tag and press Enter"
          />
          <button
            onClick={handleAddTag}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition"
            type="button"
          >
            Add Tag
          </button>
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-1"
            >
              #{tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="hover:text-red-500 ml-1"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleCreateBlog}
          disabled={isLoading}
          className={`px-8 py-3 rounded-xl text-white font-semibold transition-all ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl"
          }`}
        >
          {isLoading ? "Processing..." : "Create Blog"}
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
