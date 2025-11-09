"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

const subscribeSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }),
});

type SubscribeSchema = z.infer<typeof subscribeSchema>;

export const SubscribeForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SubscribeSchema>({
    defaultValues: { email: "" },
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeSchema) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Nameless",
          email: data.email,
          message: "Add me to your newsletter subscriptions",
        }),
      });

      if (res.ok) {
        form.reset();
        toast.success("Subscribed successfully!");
      } else {
        toast.error("Failed to subscribe. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onError = (errors: typeof form.formState.errors) => {
    if (errors.email) toast.error(errors.email.message);
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Subscribe to my newsletter</h3>
        <p className="text-sm text-muted-foreground">
          Get updates on my latest projects, blog posts, and more. No spam, just
          good stuff!
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 min-w-[250px]">
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="w-full"
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" disabled={loading}>
            {loading ? <Spinner className="h-4 w-4" /> : "Subscribe"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
