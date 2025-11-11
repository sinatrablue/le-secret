import { SpecialContent } from "@/components/SpecialContent";
import {
  CONTENT_FOR_ALIENOR,
  CONTENT_FOR_ASSIA,
  CONTENT_FOR_LAURE,
  CONTENT_FOR_LEA,
  CONTENT_FOR_MANUE,
  CONTENT_FOR_ROBIN,
  CONTENT_FOR_SONIA,
  NAMES,
  VISITORS,
} from "@/constants";
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

  const mainContent = useMemo(() => {
    switch (visitor) {
      case VISITORS[0]:
        return (
          <SpecialContent
            contextText="Tu détiens toi aussi une information cruciale, susceptible d'aider tout le
        groupe."
            encryptedText="2.250576"
            hintText="– Quelqu'un aurait des informations là-bas ?"
          />
        );
      case VISITORS[1]:
        return (
          <SpecialContent
            contextText="Tu es porteuse d'un indice mystérieux."
            encryptedText="aquaman"
            hintText="– À quoi cela va-t-il bien servir ?"
          />
        );
      case VISITORS[2]:
        return (
          <SpecialContent
            contextText="Tu détiens une information cruciale, susceptible d'aider tout le
      groupe."
            encryptedText="50.750041"
            hintText="– Es-tu la seule ?"
          />
        );
      case VISITORS[3]:
        return CONTENT_FOR_LAURE;
      case VISITORS[4]:
        return CONTENT_FOR_SONIA;
      case VISITORS[5]:
        return CONTENT_FOR_ALIENOR;
      case VISITORS[6]:
        return CONTENT_FOR_LEA;
      case VISITORS[7]:
        return CONTENT_FOR_MANUE;
      case VISITORS[8]:
        return CONTENT_FOR_ASSIA;
      case VISITORS[9]:
        return CONTENT_FOR_ROBIN;
      default:
        return "Aucune information n'est disponible pour le moment.";
    }
  }, [visitor]);

  return { visitorName, mainContent };
};
