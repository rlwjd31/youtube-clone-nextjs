"use client";

import IconButton from "@/components/elements/IconButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Logo({
  isInDrawer = false,
  onClickClose = () => {},
}: {
  isInDrawer?: boolean;
  onClickClose?: () => void;
}) {
  const router = useRouter();

  const onClickLogo = () => router.push("/");
  const onClickMenu = () => {};

  return (
    <section className="flex items-center gap-3">
      {isInDrawer && <IconButton Icon={IoClose} onClickIcon={onClickClose} />}
      {!isInDrawer && (
        <IconButton Icon={RxHamburgerMenu} onClickIcon={onClickMenu} />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src="/main-logo.svg" alt="logo" width={100} height={30}></Image>
      </div>
    </section>
  );
}
