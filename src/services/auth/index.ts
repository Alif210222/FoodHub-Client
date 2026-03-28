"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const registerUser = async (payload: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};


export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    const result = await res.json();
    const storeCookie = await cookies();
    if (result.success) {
      storeCookie.set("token", result?.data?.token);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

//get current user
export const getMyProfile = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/user/me`;

  console.log("Fetching from:", url); 

  const res = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  const text = await res.text();
  console.log("Response:", text); // 🔥

  const data = JSON.parse(text);

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch profile");
  }

  return data.data;
};


export const getUser = async () => {
  const storeCookie = await cookies();
  const token = storeCookie.get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = await jwtDecode(token);
    return decodedData;
  } else {
    return null;
  }
};

export const UserLogOut = async () => {
  const storeCookie = await cookies();
  storeCookie.delete("token");
};