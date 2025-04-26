import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import ProfilePage from "./ProfilePage";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email!,
    },
  });
  // if (!user) {
  //   throw new Error("User not found");
  // }

  return (
    <div className="py-4 px-10">
      <div className="flex gap-4">
        {session?.user && (
          <div className="flex gap-4 items-center">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={session?.user.image ? session.user.image : "https://github.com/shadcn.png"}
              />
              <AvatarFallback>{session.user.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              {session.user.name}
              <span className="text-sm text-muted-foreground">
                {session.user.email}
              </span>
            </div>
          </div>
        )}
      </div>
      <ProfilePage user={user} />
    </div>
  );
};

export default page;
