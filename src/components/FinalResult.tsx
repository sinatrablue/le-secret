import DecryptedText from "@/components/DecryptedText";
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const FinalResult = () => (
  <>
    <h1 className="stack-sans-notch-h1 max-sm:text-2xl md:text-4xl">
      Nous pouvons donc vous faire confiance.
    </h1>
    <Card className="bg-gray-950/70 text-purple-50 self-center">
      <CardHeader>
        <CardTitle className="text-center">
          Voici les dernières informations dont vous aurez besoin. RDV le 21 au
          soir ! Félicitations :)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <FadeContent
          delay={200}
          className="flex flex-col items-center gap-6 text-4xl max-sm:py-8 md:py-16"
        >
          <DecryptedText
            animateOn="view"
            speed={100}
            maxIterations={20}
            text="50.822897"
          />
          <DecryptedText
            animateOn="view"
            speed={100}
            maxIterations={20}
            text="2.117835"
          />
        </FadeContent>
        <FadeContent delay={800} className="self-center">
          <a href="https://maps.app.goo.gl/b5C2iaxdshSPwJdM8">
            <Button variant="secondary" className="flex items-center gap-3">
              <MapPin />
              Ouvrir sur Maps
            </Button>
          </a>
        </FadeContent>
      </CardContent>
      <CardFooter className="text-xs max-sm:pt-4 md:pt-10">
        <FadeContent delay={1000}>
          Il ne s'agit que du point de rdv, inutile de s'y rendre en amont.
        </FadeContent>
      </CardFooter>
    </Card>
  </>
);
