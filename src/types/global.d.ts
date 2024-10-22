import { ReactNode } from "react";

declare global {
  interface TLogos {
    id: string | number;
    // href: string;
    img: string;
    alt: string;
  }
  type TNav = {
    id: string | number;
    name: string;
    href: string;
  };
  type TCard = {
    id: string | number;
    name: string;
    src: string;
    href: string;
    style?: string;
    type: "Product" | "Services";
  };
  type TList = {
    id: string | number;
    name: string;
  };
  type TFeedbacks = {
    id: string | number;
    avatar: string;
    message: string;
    Qoutes: string;
    name: string;
    position: string;
  };
  type TfooterSvg = {
    id: string | number;
    d: string;
  };

  type TProductCard = {
    id?: string | number;
    name: string;
    description: string;
    img: string | undefined;
    className?: string;
    type: "Product" | "Services";
  };
  type TAboutCards = {
    id: string | number;
    name: string;
    description: string;
    img: string | undefined;
  };
  interface ImageArrayItem {
    name?: string;
    img: string;
    className?: string;
  }
  interface TormacPumpData {
    QRcode?: string | undefined;
  }

  interface ProductImageProps {
    imgArray: ImageArrayItem[];
    Details: TProductDetails | undefined;
  }
  interface Points {
    content: string;
  }
  type TProductDetails = {
    id: number;
    title: string;
    description: string;
    className?: string;
    img: string;
    imgArray: ImageArrayItem[];
    points?: Points[];
    points2?: Points[];
    subTitles: string[];
    pumpsData?: TormacPumpData[];
  };
  type TServicesDetails = {
    id: number;
    title: string;
    description: string;
    className?: string;
    img: string;
    imgArray: ImageArrayItem[];
    points?: Points[];
    points2?: Points[];
    subTitles: string[];
    pumpsData?: TormacPumpData[];
  };
  type TfaqArry = {
    value: string;
    answer: string;
    question: string;
  };
  interface ContactMessage {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  interface PumpData {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  }
}
