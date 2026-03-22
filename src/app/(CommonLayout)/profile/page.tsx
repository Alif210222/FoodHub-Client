"use client";

import CustomerProfileCard from "@/components/customer/CustomerProfileService";
import { getUser } from "@/services/auth";

import { useEffect, useState } from "react";



export default function CustomerProfilePage() {
  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(()=>{
      const getCurrentUser = async() =>{
        const userData = await getUser()
        setUser(userData)
      }

      getCurrentUser()
    },[])

//   if (loading) {
//     return <div className="p-6">Loading profile...</div>;
//   }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Profile
      </h1>

      <CustomerProfileCard user={user} />
    </div>
  );
}