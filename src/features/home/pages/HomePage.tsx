import { Button } from "@/shared/components/Button";
import { HeroSection } from "@/features/home/widgets/HeroSection";
import { AveragesSection } from "@/features/home/widgets/AveragesSection";
import { TrendsSection } from "@/features/home/widgets/TrendsSection";
import { useState } from "react";
import { Overlay } from "@/shared/components/Overlay";
import { LogMoodForm } from "@/features/mood/widgets/LogMoodForm";

export function HomePage() {
  const [isLogMoodFormVisible, setIsLogMoodFormVisible] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-12 xl:gap-y-16">
      <HeroSection />
      <Button
        className="w-fit self-center"
        onClick={() => {
          setIsLogMoodFormVisible(true);
        }}
      >
        Log today's mood
      </Button>
      <div className="flex flex-col gap-8 xl:flex-row">
        <AveragesSection className="shrink-0" />
        <TrendsSection className="flex-1" />
      </div>
      <Overlay
        isVisible={isLogMoodFormVisible}
        onVisibilityChange={setIsLogMoodFormVisible}
      >
        <div className="mx-auto max-w-xl">
          <LogMoodForm onClose={() => setIsLogMoodFormVisible(false)} />
        </div>
      </Overlay>
    </div>
  );
}
