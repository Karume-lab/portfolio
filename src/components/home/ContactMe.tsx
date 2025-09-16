"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Asterisk, Linkedin, Loader2, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod/v3";

import SectionHeader from "@/components/core/SectionHeader";
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
import { Textarea } from "@/components/ui/textarea";

const contactMeSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Please write a message"),
});

interface ContactMeFormValues extends z.infer<typeof contactMeSchema> {}

const ContactMe = () => {
  const form = useForm<ContactMeFormValues>({
    resolver: zodResolver(contactMeSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        form.clearErrors();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors, form]);

  const handleSubmit = async (values: ContactMeFormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(
          "An error occurred while sending your message. Please wait and try again."
        );
      }
    } catch (err) {
      console.error(err);
      toast.error(
        "An error occurred while sending your message. Please wait and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 md:px-8 py-12 max-w-5xl mx-auto" id="contact-me">
      <div className="text-right">
        <SectionHeader title="HOW TO REACH ME?" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <Image
              src={"/contact-me/call-me.png"}
              alt=""
              className="hover-to-reveal"
              width={200}
              height={200}
            />
            <p className="text-sm text-muted-foreground mt-2">
              Feel free to reach out to me via email or connect on socials.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 text-sm">
            <Button
              variant="outline"
              size="lg"
              className="aspect-square size-20"
              asChild
            >
              <Link href="tel:+254704150182">
                <Phone className="size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="aspect-square size-20"
              asChild
            >
              <Link href="mailto:danielkarume.work@gmail.com">
                <Mail className="size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="aspect-square size-20"
              asChild
            >
              <Link
                href="https://github.com/Karume-lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="aspect-square size-20"
              asChild
            >
              <Link
                href="https://linkedin.com/in/daniel-karume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="aspect-square size-20"
              asChild
            >
              <Link
                href="https://x.com/karume_lab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiX className="size-5" />
              </Link>
            </Button>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 bg-card rounded-xl p-6 shadow-md"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="gap-0">
                    Name <Asterisk size={12} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="John the Recruiter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="gap-0">
                    Email <Asterisk size={12} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="hire.me@job.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="gap-0">
                    Message <Asterisk size={12} />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      className="h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactMe;
