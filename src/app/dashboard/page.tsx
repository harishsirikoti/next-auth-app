import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import React from 'react';

const page = async () => {
    const session = await auth();
    if(!session?.user){
        redirect("/");
    }
  return (
    <>
    <div>
        <h1>Dashboard</h1>
    </div>
    </>
  )
}

export default page