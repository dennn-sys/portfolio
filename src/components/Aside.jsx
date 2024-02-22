import InfoCard from "./InfoCard";
import Gallery from "./Gallery";

export default function Aside() {
  return (
    <div className="w-full space-y-5 lg:sticky lg:top-[90px] lg:w-[40%]">
      <InfoCard />
      <Gallery />
    </div>
  );
}
