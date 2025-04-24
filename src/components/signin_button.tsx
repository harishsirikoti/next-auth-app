import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-2">
      <form
        action={async () => {
          "use server";
          await signIn("okta");
        }}
      >
        <Button type="submit" variant="outline" className="w-full">
          Signin with Okta
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit" variant="outline" className="w-full">
          Signin with Google
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button type="submit" variant="outline" className="w-full">
          Signin with Github
        </Button>
      </form>
    </div>
  );
}
