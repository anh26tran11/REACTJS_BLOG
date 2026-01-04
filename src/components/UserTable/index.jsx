import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BadgeLayout from "../ui/BadgeLayout";
import { Trash2, Key } from "lucide-react";

import { useEffect, useState } from "react";
import { getUserById } from "@/services/api/user";
import { useParams } from "react-router-dom";

export default function UserTable({
  onOpenDialogChangeRole,
  onOpenDialogDelete,
  users,
}) {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            🧩 <span>User Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">USERNAME</th>
                  <th className="py-3">EMAIL</th>
                  <th className="py-3">ROLE</th>
                  <th className="py-3 text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{user.username}</td>
                    <td className="py-3">{user.email}</td>
                    <td className="py-3">
                      <BadgeLayout
                        variant={
                          user.role === "Admin" ? "default" : "secondary"
                        }
                      >
                        {user.role}
                      </BadgeLayout>
                    </td>
                    <td className="py-3">
                      <div className="flex justify-center gap-2">
                        <Button
                          onClick={() => onOpenDialogDelete(user)}
                          size="icon"
                          variant="destructive"
                          className="rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() =>
                            onOpenDialogChangeRole(user._id, user.role)
                          }
                          size="icon"
                          variant="outline"
                          className="rounded-lg text-primary"
                        >
                          <Key className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
