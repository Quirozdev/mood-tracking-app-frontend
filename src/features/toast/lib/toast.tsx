import toast from "react-hot-toast";
import HappyFaceIcon from "@/assets/images/icon-happy-color.svg";
import SadFaceIcon from "@/assets/images/icon-sad-color.svg";
import { ToastIcon } from "@/shared/components/ToastIcon";

export function showToast(type: "success" | "error", message: string) {
  switch (type) {
    case "success":
      toast.success(message, {
        icon: <ToastIcon src={HappyFaceIcon} alt="Happy face" />,
      });
      break;
    case "error":
      toast.error(message, {
        icon: <ToastIcon src={SadFaceIcon} alt="Sad face" />,
      });
      break;
  }
}
