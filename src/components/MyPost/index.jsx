import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";
import { GetAllPost } from "@/services/api/blog";
import { useNavigate } from "react-router-dom";

const MyPost = ({ handleOpenDialogDelete, posts, allPosts }) => {
  const navigate = useNavigate();
  console.log(allPosts);
  return (
    <div className="w-full px-10 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10 flex items-center justify-center gap-2">
        ✍️ My Post
      </h1>

      {/* Table */}
      <div className="rounded-xl border shadow-sm bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">TITLE</TableHead>
              <TableHead>CONTENT</TableHead>
              <TableHead className="text-center w-[150px]">ACTION</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {allPosts.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center py-6 text-muted-foreground"
                >
                  Bạn chưa có bài viết nào
                </TableCell>
              </TableRow>
            ) : (
              posts.map((post) => (
                <TableRow key={post._id}>
                  <TableCell className="font-medium truncate max-w-[300px]">
                    {post.title}
                  </TableCell>

                  <TableCell className="truncate max-w-[600px]">
                    {/* <p>Vinh Ngu</p> => Vinh Ngu => remove html */}
                    {post.content.replace(/<\/?[^>]+(>|$)/g, "")}
                  </TableCell>

                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        size="icon"
                        className="bg-blue-500 hover:bg-blue-600"
                        onClick={() => navigate(`/blog-details/${post._id}`)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>

                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleOpenDialogDelete(post)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyPost;
