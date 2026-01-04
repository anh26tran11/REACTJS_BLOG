import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, image, title, desc, tags, tag }) => {
  const displayTags = tags || (tag ? [tag] : []);

  return (
    <div>
      <Link className="grid h-full" to={`/blog-details/${_id}`}>
        <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
          <img alt={title} className="w-full h-48 object-cover" src={image} />
          <div className="p-4 bg-card">
            <div className="flex gap-2 mb-2">
              {displayTags.map((tagItem, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full"
                >
                  {tagItem}
                </span>
              ))}
            </div>
            <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
              {title}
            </h5>
            <p className="text-foreground mb-2 text-xs">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
