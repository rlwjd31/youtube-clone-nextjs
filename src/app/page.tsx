import { sleep } from "@/lib/sleep";
import Image from "next/image";

export default async function Home() {
  // console.log('sleep before page');
  // await sleep(6000);
  // console.log('sleep after page');
  return (
    <div>
      <Image src="/untitle.avif" alt="unsplash" width={500} height={500} />
    </div>
  );
}
