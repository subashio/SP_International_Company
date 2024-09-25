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
    style: string;
  };
  type TList = {
    id: number;
    name: string;
  };
  type TFeedbacks = {
    id: number;
    avatar: string;
    message: string;
    Qoutes: string;
    name: string;
    position: string;
  };
  type TfooterSvg = {
    id: number;
    d: string;
  };

  type TProductCard = {
    id: number;
    name: String;
    description: string;
    img: string | undefined;
  };
}
