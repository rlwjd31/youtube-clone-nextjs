"use client";

import { dummyPlaylistArray } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { IconType } from "react-icons";
import { FiCompass, FiMusic, FiPlus } from "react-icons/fi";
import { GoHome } from "react-icons/go";

type RouteItem = {
  icon: IconType;
  label: "홈" | "둘러보기" | "보관함";
  href: string;
  isActive: boolean;
};

export default function Navigator() {
  // * 현재 경로를 알 수 있게 해주는 hook => usePathname
  const pathname = usePathname();

  // * isActive가 바뀌기 때문에 dependency array에 pathname을 넣어줌
  const routes = useMemo<ReadonlyArray<RouteItem>>(() => {
    return [
      {
        icon: GoHome,
        label: "홈",
        href: "/",
        isActive: pathname === "/",
      },
      {
        icon: FiCompass,
        label: "둘러보기",
        href: "/explore",
        isActive: pathname === "/explore",
      },
      {
        icon: FiMusic,
        label: "보관함",
        href: "/library",
        isActive: pathname === "/library",
      },
    ];
  }, [pathname]);
  return (
    <>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex items-center gap-4 p-2 hover:bg-neutral-700 rounded-sm",
                  route.isActive && "bg-neutral-800"
                )}
              >
                <Icon size={24} />
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <div className="px-6">
        <div className="h-[1px] bg-neutral-700" />
      </div>
      <section className="px-6">
        <div className="cursor-pointer flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 my-6 rounded-3xl p-2 font-normal">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        {dummyPlaylistArray.map((playList) => (
          <div key={playList.id}>{playList.owner}</div>
        ))}
      </section>
    </>
  );
}
