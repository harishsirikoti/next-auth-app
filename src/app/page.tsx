import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    redirect("/dashboard");
  }
  const HelpFull= [
    {
      title: "Get GitHub screct for OAuth keys",
      description: "Get GitHub screct for OAuth keys",
      href: "https://www.youtube.com/watch?v=R9lxXQcy-nM&ab_channel=CodeJava"
    },
    {
      title: "Get Google screct for OAuth keys",
      description: "Get Google screct for OAuth keys",
      href: "https://www.youtube.com/watch?v=-vq32dsK_TI&ab_channel=Webigenci"
    },
    {
      title: "Get Okta screct for OAuth keys",
      description: "Get Okta screct for OAuth keys",
      href: "https://www.youtube.com/watch?v=PASiA_2ChFU&ab_channel=OktaDev"
    },
  ]
  return (
    <div>
       <div>
        <div className='px-20'>
          <h2 className='text-2xl font-bold'>Helpful links</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
           {HelpFull.map((link,i) => (
            <Card key={link.title+i}>
              <CardHeader>
                <CardTitle>{link.title}</CardTitle>
                <CardDescription className='text-muted-foreground text-justify'>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={link.href} target='_blank' rel="noopener noreferrer"><Button variant="outline"> <SquareArrowOutUpRight /> Read more</Button></a>
              </CardContent>
            </Card>
           ))}
          </div>
          <Card className=' my-5'>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription className='text-muted-foreground text-justify'>Contact us for more solutions in ReactJS, NextJS, TypeScript, Postgres, Supabase, Power Platform, SharePoint, Power Apps, Power BI, Power Automate</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  Mail : harish.siri@outlook.com
                  <br />
                  LinkedIn: <a href="https://www.linkedin.com/in/sirikotiharish/" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sirikotiharish/</a>
                </div>
              </CardContent>
            </Card>
        </div>
    </div>
      <div className="fixed bottom-10 right-10 shadow-2xl">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
