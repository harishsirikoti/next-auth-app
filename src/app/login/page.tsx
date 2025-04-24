import { redirect } from "next/navigation";
import { signIn, auth } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import SignIn from "@/components/signin_button";

const LoginForm = async ({ searchParams }: { searchParams: { error?: string } }) => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col gap-6 lg:max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          {searchParams?.error && (
            <div className="text-red-500 mb-4">{searchParams.error}</div>
          )}
          <form
            className="my-5"
            action={async (formData) => {
              "use server";
              const email = formData.get("email");
              const password = formData.get("password");

              try {
                const res = await signIn("credentials", {
                  redirect: false,
                  email,
                  password,
                });

                if (res?.error) {
                  redirect(`/login?error=Invalid credentials`);
                }

                redirect("/dashboard");
              } catch (error) {
                redirect(`/login?error=Invalid credentials`);
              }
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </div>
          </form>
          <SignIn />

        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
