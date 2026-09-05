export type Mood = "very_sad" | "sad" | "neutral" | "happy" | "very_happy";

export type SleepHours =
  "0-2_hours" | "3-4_hours" | "5-6_hours" | "7-8_hours" | "9+";

export interface MoodEntry {
  id: string;
  day: string;
  mood: Mood;
  feelings: string[];
  journalEntry: string;
  sleepHours: SleepHours;
  createdAt: string;
  updatedAt: string | null;
}

export interface LogMoodInput {
  mood: Mood;
  feelings: string[];
  journalEntry: string;
  sleepHours: SleepHours;
}

export interface MoodAverages {
  mood: {
    value: Mood;
    average: number;
    days: number;
  };
  sleepHours: {
    value: SleepHours;
    average: number;
    days: number;
  };
}

export type GetMoodEntriesResponse = Omit<MoodEntry, "createdAt" | "updatedAt">;
