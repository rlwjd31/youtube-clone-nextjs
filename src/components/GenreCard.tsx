import { generateRandomHex } from "@/lib/utils";

export default function GenreCard({ genre }: { genre: string }) {
  const bgColor = generateRandomHex();
  return (
    <div className="flex h-12 w-full cursor-pointer rounded-lg bg-neutral-800">
      <div
        className="h-full w-2 rounded-l-lg"
        style={{ backgroundColor: bgColor, opacity: 0.8 }}
      />
      <div className="flex items-center justify-center px-4 font-bold">
        {genre}
      </div>
    </div>
  );
}
