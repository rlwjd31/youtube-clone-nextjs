import { sleep } from "@/lib/sleep";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("channel layout page");
  await sleep(3000);
  return <div>{children}</div>;
}
