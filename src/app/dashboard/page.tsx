import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';
import { RadialGaugeChart } from '@/components/RadialGraph';
const page = async () => {

    const useFullLinks= [
      {
        title: "Pdf Generator in NextJS",
        description: "This Method will work for tailwind css also",
        href: "https://medium.com/@harish.siri/pdf-generator-in-nextjs-fcaea81404a4"
      },
      {
        title: "Read Gmails in Next.JS",
        description: "Read Gmails in Next.JS",
        href: "https://medium.com/@harish.siri/read-gmails-in-next-js-a18ab77ddb5b"
      },
      {
        title: "Simple Audit Trail for Supabase Database",
        description: "Most applications that use Supabase Auth require a simple audit trail report for regulatory purposes. Here are some straightforward steps to implement one.",
        href: "https://medium.com/@harish.siri/simpe-audit-trail-for-supabase-database-efefcce622ff"
      },
      {
        title: "Send emails via Supabase Edge Function",
        description: "We cannot send emails directly from front-end JavaScript, so we need to use Node.js or other server-side code and deploy it. Fortunately, Supabase Edge Functions offer a simple solution for this.",
        href: "https://medium.com/@harish.siri/send-emails-via-supabase-edge-function-95daf2b4a14c"
      },
      {
        title: "Migrating SharePoint list and integrated PowerApps form",
        description: "While migrating SharePoint lists from one tenant to another is a known process, the challenge arises when the SharePoint list form is altered using PowerApps. Post-migration, the same PowerApps form doesn’t exist in the second tenant as it did in the first.",
        href: "https://medium.com/@harish.siri/migrating-sharepoint-list-and-integrated-powerapps-form-2bf674d312b0"
      },

      {
        title: "PDF Generation in Power Platform",
        description: "Generating dynamic PDFs in platforms like PowerApps and SharePoint has traditionally been complex and often required third-party tools, which can be costly. However, I’ve streamlined this process within PowerApps, eliminating the need for external solutions.",
        href: "https://medium.com/@harish.siri/pdf-generation-in-power-platform-85450465aab7"
      },
      {
        title: "Radial Graph By value",
        description: "At some point in their journey, most UI developers need a radial graph with a gradient effect. Here’s a simple example to help you get started.",
        href: "https://medium.com/@harish.siri/radial-graph-by-value-8845ecda0577"
      },
    ]
  return (
    <>
    <div>
        <div className='px-20'>
          <h2 className='text-2xl font-bold'>Use full links</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
           {useFullLinks.map((link,i) => (
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
           <Card >
              <CardHeader>
                <CardTitle>Radial Graph</CardTitle>
                <CardDescription className='text-muted-foreground text-justify'>A sample UI component</CardDescription>
              </CardHeader>
              <CardContent>
                <RadialGaugeChart value={4.0} maxValue={5} />
              </CardContent>
            </Card>
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
    </>
  )
}

export default page