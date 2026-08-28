import { Button } from "@/shared/components/Button";
import { HeroSection } from "@/features/home/widgets/HeroSection";
import { AveragesSection } from "@/features/home/widgets/AveragesSection";
import { TrendsSection } from "@/features/home/widgets/TrendsSection";

export function HomePage() {
  return (
    <div className="flex flex-col gap-y-12 xl:gap-y-16">
      <HeroSection />
      <Button className="w-fit self-center">Log today's mood</Button>
      <div className="flex flex-col gap-8 xl:flex-row">
        <AveragesSection />
        <TrendsSection className="flex-1" />
      </div>
    </div>
  );
}
