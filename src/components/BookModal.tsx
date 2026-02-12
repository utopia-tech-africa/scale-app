"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ModalContainer from "./ModalContainer";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

const bookingReasons = [
  "Speaking Engagement",
  "Mentorship Session",
  "Business Consultation",
  "Workshop",
  "Panel Discussion",
  "Other",
];

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal = ({ isOpen, onClose }: BookModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Handle form submission here
    console.log("Booking data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onClose();
    form.reset();
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title="Book a Session with Ghizo"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-white text-sm font-medium">
                    First Name <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-white text-sm font-medium">
                    Last Name <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Doe"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-white text-sm font-medium">
                  Email <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-white text-sm font-medium">
                    Phone{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+2330000000"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-white text-sm font-medium">
                    Company{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your company"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-white text-sm font-medium">
                  Reason for Booking <span className="text-primary">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-11 px-4 focus:border-primary focus:ring-1 focus:ring-primary">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 border-white/10">
                    {bookingReasons.map((reason) => (
                      <SelectItem
                        key={reason}
                        value={reason}
                        className="text-white focus:bg-white/10 focus:text-white cursor-pointer py-2.5"
                      >
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-white text-sm font-medium">
                  Message <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your booking request..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-30 px-4 py-3 resize-none focus:border-primary focus:ring-1 focus:ring-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-black font-semibold h-12 text-base"
              disabled={isSubmitting}
            >
              <Calendar className="mr-2 h-5 w-5" />
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </div>
        </form>
      </Form>
    </ModalContainer>
  );
};

export default BookModal;
