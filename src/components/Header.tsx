import PagePadding from "@/components/PagePadding";
import UserIcon from "@/components/UserIcon";
import Image from "next/image";
import { ReactNode } from "react";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            src="https://images.unsplash.com/photo-1569715442753-2eef87d75db3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="unsplash"
            className="object-cover"
          />
          <div className="w-full h-full bg-gradient-to-t from-background absolute top-0" />
        </div>
      </section>
      <section className="sticky top-0">
        <PagePadding>
          <div className="flex justify-between items-center">
            <article className="flex items-center h-12 min-w-[480px] bg-black/15 rounded-2xl px-4 gap-4">
              <FiSearch size={24} />
              <input
                type="text"
                className="h-full w-full bg-transparent outline-none placeholder:text-white/50"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <article className="flex gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute bg-black text-white">{children}</section>
    </header>
  );
}
