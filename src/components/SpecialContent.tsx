import DecryptedText from "@/components/DecryptedText";
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState, type FC } from "react";

interface SpecialContentProps {
  contextText: string;
  encryptedText: string;
  hintText: string;
}

export const SpecialContent: FC<SpecialContentProps> = ({
  contextText,
  encryptedText,
  hintText,
}) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="flex flex-col max-sm:gap-8 md:gap-12">
      {contextText}
      <div className="flex flex-col justify-center max-sm:px-4 md:px-6 h-20">
        {revealed ? (
          <FadeContent blur duration={200} easing="ease-out" initialOpacity={0}>
            <DecryptedText
              text={encryptedText}
              speed={100}
              maxIterations={20}
              animateOn="view"
              className="text-4xl tracking-widest font-mono font-bold"
              encryptedClassName="text-4xl tracking-widest font-mono font-bold"
            />
          </FadeContent>
        ) : (
          <Button
            className="bg-gray-950/80 flex items-center gap-2"
            onClick={() => setRevealed(true)}
          >
            Révéler
            <Eye />
          </Button>
        )}
      </div>
      {revealed && (
        <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
          <span className="text-xs">{hintText}</span>
        </FadeContent>
      )}
    </div>
  );
};
