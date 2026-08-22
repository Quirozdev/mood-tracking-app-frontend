import ThemeSwitcher from "@/features/theme/ui/ThemeSwitcher/ThemeSwitcher";
import { Suspense } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation(["common"]);

  return (
    <Suspense>
      <div className="min-h-screen">
        <ThemeSwitcher />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="ml-2 border bg-amber-50 p-1"
        >
          animated
        </motion.button>
        <p className="text-preset-6-italic rounded-4 bg-red-300 text-9xl italic">
          {t("hello")}
        </p>
      </div>
    </Suspense>
  );
}

export default App;
