import { AverageCard } from "@/features/home/components/AverageCard";

export function AveragesSection() {
  return (
    <section className="bg-neutral-0 rounded-16 box-border flex flex-col gap-y-6 border border-blue-100 px-4 py-5 md:px-5 md:py-6">
      <AverageCard
        title="Average Mood"
        emptyStateTitle="Keep tracking!"
        emptyStateText="Log 5 check-ins to see your average mood."
      />
      <AverageCard
        title="Average Sleep"
        emptyStateTitle="Not enough data yet!"
        emptyStateText="Track 5 nights to view average sleep."
      />
    </section>
  );
}
