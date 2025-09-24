import Image from "next/image";

export default async function Home() {

  return (
    <div>
      <Image src="/untitle.avif" alt="unsplash" width={500} height={500} />
    </div>
  );
}
