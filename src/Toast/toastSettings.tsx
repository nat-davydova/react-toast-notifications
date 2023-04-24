import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
} from "@tabler/icons-react";

export const toastSettings = {
  success: {
    icon: <IconCircleCheckFilled />,
    progressBarClass: "success",
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    progressBarClass: "warning",
  },
  info: {
    icon: <IconInfoCircleFilled />,
    progressBarClass: "info",
  },
  error: {
    icon: <IconCircleXFilled />,
    progressBarClass: "error",
  },
};
