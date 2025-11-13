import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface FavoriteBaeFormProps {
  setIsNextDisabled(isDisabled: boolean): void;
}

const baeOptions = [
  "Dada (Dodo)",
  "Valérian (Aéla & Robin)",
  "Léa (Hellébore & Assia)",
  "Hellébore (Léa & Robin)",
  "Mathilde (Aliénor)",
  "Matthias (Sonia)",
  "Parallax (Manue)",
  "Un mec riche du Qatar (Laure)",
] as const;

const FormSchema = z.object({
  bae: z.enum(baeOptions),
});

export const FavoriteBaeForm: FC<FavoriteBaeFormProps> = ({
  setIsNextDisabled,
}) => {
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!data.bae.includes("Qatar")) {
      setSuccess(true);
      setIsNextDisabled(false);
      return;
    }
    form.setError("bae", {
      message: "Non non non non et non, un effort !",
      type: "value",
    });
  }

  return (
    <div
      className="flex justify-center self-start pt-6 w-full"
      style={{
        all: "revert",
        display: "flex",
        justifyContent: "center",
        alignSelf: "flex-start",
        paddingTop: "1.5rem",
        width: "100%",
        fontSize: "14px",
        lineHeight: "1.5",
        letterSpacing: "normal",
      }}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="className=w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="bae"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>
                  Une facile maintenant : qui est notre +1 préféré du groupe ?
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    disabled={success}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col"
                  >
                    {baeOptions.map((option) => (
                      <FormItem
                        key={option}
                        className="flex items-center gap-3"
                      >
                        <FormControl>
                          <RadioGroupItem disabled={success} value={option} />
                        </FormControl>
                        <FormLabel>{option}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-3">
            <Button
              className="w-fit"
              type="submit"
              variant="secondary"
              size="sm"
              disabled={success}
            >
              Vérifier
            </Button>
            {success && (
              <span className="text-green-600 text-sm">
                Bien joué ! Tout était valable sauf le Qatari (déso Laure, on
                cautionne pas).
              </span>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};
