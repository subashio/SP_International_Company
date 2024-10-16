import Collaburation from "@/components/Collaburation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { cn } from "@/lib/utils";
import ImageCard from "../../../components/ImageCard";
import Points from "../../../components/Points";
import { ServicesDetails } from "@/constants/ServicesData";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const Services = ServicesDetails.find(
    (item) => decodeURIComponent(item.title) === decodeURIComponent(id),
  );
  if (!Services) {
    return <p>Services not found {decodeURIComponent(id)}</p>;
  }
  return (
    <section key={Services.id}>
      <ScrollProgressBar type="circle" color="#00AEFF" showPercentage={true} />

      <div
        className="relative flex h-60 flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-[#ffffff] xl:h-96"
        style={{ backgroundImage: `url(${Services.img})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111]"></div>
        <p className="z-10 font-semibold text-[#a1d9f3]">Trusted Worldwide</p>
        <h1
          className={cn(
            "z-10 mb-2 font-bold uppercase leading-none tracking-wider",
            Services.className,
          )}
        >
          {Services.title}
        </h1>
        <p>Servicess </p>
      </div>
      {id == "Pumps" && <Collaburation />}
      <MaxWidthWrapper>
        <p className="flex max-w-5xl flex-col gap-4 py-10 text-gray-900 xl:text-[18px]">
          {Services.description}
        </p>
        <Points title={Services.subTitles[0]} points={Services.points} />
        <Points title={Services.subTitles[1]} points={Services.points2} />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="text-center">
        <ImageCard imgArray={Services.imgArray} Details={Services} />
      </MaxWidthWrapper>
    </section>
  );
}
