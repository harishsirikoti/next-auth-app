import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const email = searchParams.get("email");
    if (!email) {
        return NextResponse.json({ error: "User email is required" }, { status: 400 });
    }
    const user = await prisma.user.findUnique({
        where: { email: email },
    });
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
}
export async function PUT(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const email = searchParams.get("email");
    if (!email) {
        return NextResponse.json({ error: "User email is required" }, { status: 400 });
    }
    const { name, address, phone } = await request.json();
    const updatedUser = await prisma.user.update({
        where: { email: email },
        data: { name, address, phone },
    });
    return NextResponse.json(updatedUser);
}
