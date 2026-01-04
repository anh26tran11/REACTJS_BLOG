import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ConfirmDelete({
  open,
  onOpenChange,
  handleConfirmDelete,
  deletingUser,
  loading,
  deletingPost,
}) {
  console.log("deletingPost", deletingPost);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-red-600">
            {`Confirm delete "${
              deletingUser?.title || deletingUser?.username
            }"`}
          </DialogTitle>
          <DialogDescription>
            "This action cannot be undone. Are you sure you want to delete?"
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={() => handleConfirmDelete(deletingPost._id)}
            disabled={loading}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
