import { ReactNode } from "react";

declare global {
  interface children {
    children: ReactNode;
    className?: string;
  }
  type TNav = {
    id: number;
    name: string | ReactNode;
    href: string;
  };
  type TCard = {
    id: number;
    name: string | ReactNode;
    src: string;
    href: string;
  };
}
