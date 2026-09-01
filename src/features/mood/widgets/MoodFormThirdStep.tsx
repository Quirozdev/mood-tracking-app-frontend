import { Counter } from "@/shared/components/Counter";
import { TextArea } from "@/shared/components/TextArea";

interface Props {
  journalEntry: string;
  onJournalEntryChange: (value: string) => void;
}

export function MoodFormThirdStep({
  journalEntry,
  onJournalEntryChange,
}: Props) {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        Write about your day...
      </h4>
      <div className="flex flex-col gap-y-2">
        <TextArea
          name="journal-entry"
          id="journal-entry"
          placeholder="Today, I felt..."
          maxLength={150}
          rows={5}
          value={journalEntry}
          onChange={(e) => {
            onJournalEntryChange(e.target.value);
          }}
        />
        <Counter count={journalEntry.length} max={150} className="self-end" />
      </div>
    </div>
  );
}
