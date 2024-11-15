import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Store name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex border-cyan-300 items-center gap-3 justify-between flex-row border-2 rounded-full p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        } bg-cyan-50`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-cyan-500 hidden md:block"
          aria-label="Search icon"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-xl focus-visible:ring-0"
                  placeholder={placeHolder}
                  aria-label="Search input"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="rounded-full border-cyan-300 text-cyan-500 hover:bg-cyan-100 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!form.watch("searchQuery")}
          aria-label="Reset search input"
        >
          Reset
        </Button>
        <Button
          type="submit"
          className="rounded-full bg-sky-500 text-white text-lg px-6 py-3 font-semibold shadow-md hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 transition-transform transform hover:scale-105"
          aria-label="Submit search query"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
