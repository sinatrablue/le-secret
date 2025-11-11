import { NAMES, VISITORS } from "@/constants";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

export const useVisitor = () => {
  const [visitor] = useQueryState("visitor");

  const visitorName = useMemo(() => {
    switch (visitor) {
      case VISITORS[0]:
        return NAMES[0];
      case VISITORS[1]:
        return NAMES[1];
      case VISITORS[2]:
        return NAMES[2];
      case VISITORS[3]:
        return NAMES[3];
      case VISITORS[4]:
        return NAMES[4];
      case VISITORS[5]:
        return NAMES[5];
      case VISITORS[6]:
        return NAMES[6];
      case VISITORS[7]:
        return NAMES[7];
      case VISITORS[8]:
        return NAMES[8];
      case VISITORS[9]:
        return NAMES[9];
      default:
        return null;
    }
  }, [visitor]);

  return { visitorName };
};
