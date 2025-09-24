import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      <nav className="w-[240px] border-r border-neutral-600">
        <div className="p-6">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
}
