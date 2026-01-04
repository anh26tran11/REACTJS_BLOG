import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Badge from "@/components/ui/Badge";

const BlogDetail = ({ blogDetail }) => {
  if (!blogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Card className="border-none shadow-none">
        <CardContent className="flex flex-col items-center text-center gap-6">
          {/* Published date */}
          <p className="text-sm text-blue-600 font-medium">
            Published on {blogDetail.publishedAt}
          </p>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight">
            {blogDetail.title}
          </h1>

          {/* Author role */}
          <Badge
            variant="outline"
            className="px-4 py-1 rounded-full text-blue-600 border-blue-300"
          >
            {blogDetail.authorRole}
          </Badge>

          {/* Image */}
          <img
            src={blogDetail.image}
            alt={blogDetail.title}
            className="w-28 h-28 object-contain"
          />

          {/* Content */}
          <div className="w-full text-left mt-6">
            <p className="text-lg leading-relaxed text-gray-800">
              {/* {blogDetail.content} */}
              <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetail;
