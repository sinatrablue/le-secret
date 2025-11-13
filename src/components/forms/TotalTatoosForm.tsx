import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface TotalTatoosFormProps {
  setIsNextDisabled(isDisabled: boolean): void;
}

const FormSchema = z.object({
  tatoos: z
    .string()
    .nonempty({ message: "Non mais compte sur tes doigts au pire" }),
});

export const TotalTatoosForm: FC<TotalTatoosFormProps> = ({
  setIsNextDisabled,
}) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const val = parseInt(data.tatoos);
    if (val === 25) {
      setSuccess(true);
      setIsNextDisabled(false);
      return;
    }
    if (val > 30) {
      form.setError("tatoos", {
        message: "On est pas siiii riches que ça",
        type: "value",
      });
      return;
    }
    if (val < 10) {
      form.setError("tatoos", {
        message: "Vous nous prenez pour qui en fait ?",
        type: "value",
      });
      return;
    }
    if (val < 20) {
      form.setError("tatoos", {
        message: "Vous nous avez pas vu tout nus, c'est vrai...",
        type: "value",
      });
      return;
    }
    form.setError("tatoos", {
      message: "Nope, essaye encore !",
      type: "value",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10 min-h-fit"
      >
        <FormField
          control={form.control}
          name="tatoos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Combien de tatouages avons-nous à nous deux ?
              </FormLabel>
              <FormControl>
                <Input placeholder="118" {...field} />
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
