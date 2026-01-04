import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function CloudinaryUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="grid gap-2">
      <Label>Blog Image</Label>
      <Input
        className="cursor-pointer"
        type="file"
        onChange={handleUpload}
        accept="image/*"
      />
      {preview && (
        <div className="w-40 my-2">
          <img
            src={preview}
            alt="uploaded"
            style={{ maxWidth: "300px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}
