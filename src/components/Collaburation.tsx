// import { Logos } from "@/constants/detailes";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Collaburation() {
  return (
    <MaxWidthWrapper className="relative flex h-16 items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
      {/* <InfiniteMovingCards items={Logos} speed="fast" direction="right" /> */}
      {/* <h1>Trusted Brand</h1> */}
      <Link href="/Products/tormacpumps">
        <img src="/logos/tormaclogo.png" alt="" className="h-10" />
      </Link>
    </MaxWidthWrapper>
  );
}
