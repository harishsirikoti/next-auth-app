"use client";
import SubmitButton from "@/components/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { user } from "@/generated/prisma";
import React, { useState } from "react";
import { toast } from "sonner";

const ProfilePage = ({ user }: { user: user | null }) => {
    const [userData, setUserData] = useState(user);
  if (!userData) {
    return (
      <div className="text-red-500 bg-red-100 p-40 m-auto">
        User not found in Database
      </div>
    );
  }
  const UpdateUser = async (formData: FormData) => {
    const name = formData.get("name");
    const address = formData.get("address");
    const phone = formData.get("phone");
    const updatedUser = await fetch(`/api/users/single?email=${userData.email}`, {
      method: "PUT",
      body: JSON.stringify({ name, address, phone }),
    });
    const data = await updatedUser.json();
    setUserData(data);
    toast.success("User updated successfully");
    return data;
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <Card className="w-1/2 m-auto">
        <CardHeader>
          <CardTitle>User Data</CardTitle>
          <CardDescription>Update the user profile</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={UpdateUser} className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" defaultValue={userData.name} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" id="address" name="address" defaultValue={userData.address||''} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="text" id="phone" name="phone" minLength={10} defaultValue={userData.phone||''} />
                </div>
                <div className="flex justify-end"><SubmitButton text="Update Profile" /></div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
