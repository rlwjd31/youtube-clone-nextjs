import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PagePadding({ children }: Props) {
  return <div className="px-3 py-2 lg:px-24">{children}</div>;
}
