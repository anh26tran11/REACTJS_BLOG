import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import ChangeUserRoleDialog from "../components/ChangeUserRoleDialog";
import ConfirmDelete from "../components/ConfirmDelete";
import { deleteUser, changeUserRole } from "../services/api/user";
import { getUsers } from "@/services/api/user";

const UserManagement = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [openDialogChangeRole, setOpenDialogChangeRole] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log(response);
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleOpenDialogDelete = (user) => {
    setDeletingUser(user);
    console.log("user", user);
    setOpenDelete(true);
  };

  const handleOpenDialogChangeRole = (userId, role) => {
    setOpenDialogChangeRole(true);
    setSelectedUser({ userId, role });
    setSelectedRole(role);
    console.log("user", { userId, role });
  };
  const handleConfirmDelete = async () => {
    try {
      await deleteUser(deletingUser._id);
      setDeletingUser(null);
      setOpenDelete(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const handleChangeRole = async () => {
    try {
      await changeUserRole(selectedUser.userId, selectedRole);
      setOpenDialogChangeRole(false);
      fetchUsers();
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };
  return (
    <div>
      <UserTable
        onOpenDialogChangeRole={handleOpenDialogChangeRole}
        onOpenDialogDelete={handleOpenDialogDelete}
        users={users}
      />
      <ChangeUserRoleDialog
        open={openDialogChangeRole}
        onOpenChange={setOpenDialogChangeRole}
        selectedUser={selectedUser}
        handleChangeRole={handleChangeRole}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <ConfirmDelete
        open={openDelete}
        onOpenChange={setOpenDelete}
        onConfirm={() => {
          setDeletingUser(null);
          setOpenDelete(false);
        }}
        deletingUser={deletingUser}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default UserManagement;
