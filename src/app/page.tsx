import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div>
      Application main Page
      <div className="fixed bottom-10 right-10 shadow-2xl">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
