// src/pages/UserManagement.jsx
import React, { useState, useEffect } from "react";
import AddUser from "./Add_user";
import UserDetails from "./User_details";
import { BadgeInfo, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const apiUsers = await res.json();

        const localRaw = localStorage.getItem("local_added_users_v1");
        const localUsers = localRaw ? JSON.parse(localRaw) : [];

        const allUsers = [...apiUsers, ...localUsers];
        setUsers(allUsers);
        setFilteredUsers(allUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchData();
  }, []);

  // Filter users whenever search changes
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="min-h-screen p-6">
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-6 flex items-center justify-center gap-3 border-2 border-black dark:border-white rounded-lg ">
       <span><Search className="mx-2"/></span>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border-none outline-none bg-transparent text-gray-900 dark:text-white"
        />
        <Tooltip>
  <TooltipTrigger>
     <span>
            <BadgeInfo className="hover:cursor-pointer mx-2"/>
        </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>Search users by name or email</p>
  </TooltipContent>
</Tooltip>
       
      </div>

      {/* User Details */}
      <UserDetails users={filteredUsers} setUsers={setUsers} />

      {/* Add User Form */}
      <AddUser users={users}  />
    </div>
  );
};

export default UserManagement;
