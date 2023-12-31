import Head from "next/head";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col max-w-lg gap-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <p>1.</p>
            </div>
            <div className="col-span-3">
              <p>wechat</p>
            </div>
            <div className="col-span-3">
              <p>2000</p>
            </div>
            <div className="col-span-3">
              <p>empty</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 col-start-2"><Input type="text" placeholder="Title" /></div>
            <div className="col-span-3"><Input type="number" placeholder="Amount" /></div>
            <div className="col-span-3"><Input type="text" placeholder="Note" /></div>
            <div className="col-span-2"><Button type="submit">Add</Button></div>
          </div>
        </div>
      </main>
    </>
  );
}
