import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface YearMetFormProps {
  setIsNextDisabled(isDisabled: boolean): void;
}

const FormSchema = z.object({
  year: z.string().nonempty({ message: "Tentez votre chance, allez !" }),
});

export const YearMetForm: FC<YearMetFormProps> = ({ setIsNextDisabled }) => {
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      year: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const val = parseInt(data.year);
    if (val === 2016) {
      setSuccess(true);
      setIsNextDisabled(false);
      return;
    }
    if (val > 2018) {
      form.setError("year", {
        message: "Et les 7 ans couillon ?",
        type: "value",
      });
      return;
    }
    if (val < 2015) {
      form.setError("year", {
        message: "Arrêtez, Aéla et Sonia étaient encore en maternelle !",
        type: "value",
      });
      return;
    }
    form.setError("year", {
      message: "L'année que vous avez renseigné est invalide",
      type: "value",
    });
  }

  const options = useMemo(
    () => [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    [],
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10 min-h-fit"
      >
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                En quelle année nous sommes-nous rencontrés ?
              </FormLabel>
              <FormControl>
                <Select
                  disabled={success}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Choisir une année" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
              Bien vu ! Tu peux continuer !
            </span>
          )}
        </div>
      </form>
    </Form>
  );
};
