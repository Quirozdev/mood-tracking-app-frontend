export type UpdateUserFormVariants = "onboarding" | "update";

export const updateUserFormVariantsMapping: Record<
  UpdateUserFormVariants,
  {
    title: string;
    subtitle: string;
    buttonText: string;
  }
> = {
  onboarding: {
    title: "Personalize your experience",
    subtitle: "Add your name and a profile picture to make Mood yours.",
    buttonText: "Start Tracking",
  },
  update: {
    title: "Update your profile",
    subtitle: "Personalize your account with your name and photo.",
    buttonText: "Save changes",
  },
};
