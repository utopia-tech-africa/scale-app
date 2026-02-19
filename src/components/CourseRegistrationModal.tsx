"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
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
import { courses } from "@/constants/courses";
import { ageRanges, currentRoles, yearsOfExperience } from "@/constants/forms";

const formSchema = z.object({
  course: z.string().min(1, "Please select a program"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  ageRange: z.string().min(1, "Please select age range"),
  location: z.string().min(2, "City/Country is required"),
  currentRole: z.string().min(1, "Please select your role"),
  organization: z.string().optional(),
  experience: z.string().min(1, "Please select experience level"),
  motivation: z.string().min(10, "Please tell us why you want to join"),
  challenge: z.string().min(5, "Please share a leadership challenge"),
  success: z.string().min(5, "Please describe what success looks like"),
});

type FormValues = z.infer<typeof formSchema>;

interface CourseRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseRegistrationModal = ({
  isOpen,
  onClose,
}: CourseRegistrationModalProps) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: "",
      fullName: "",
      email: "",
      phone: "",
      ageRange: "",
      location: "",
      currentRole: "",
      organization: "",
      experience: "",
      motivation: "",
      challenge: "",
      success: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your application...");

    try {
      const response = await fetch(`${BASE_URL}api/forms/course-registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Failed to submit registration" }));
        throw new Error(errorData?.message || "Failed to submit registration");
      }

      toast.success("Registration submitted successfully!", { id: toastId });
      form.reset();
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit registration",
        { id: toastId },
      );
      setIsSubmitting(false);
    }
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      title="ScaleApp Course Registration"
    >
      {showSuccess ? (
        <div className="p-6 text-center text-white text-lg">
          Registration submitted successfully!
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Program */}
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Program *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {courses.map((c) => (
                        <SelectItem key={c.title} value={c.title}>
                          {c.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your full name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="you@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="+233..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Age & Location */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="ageRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age Range *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ageRanges.map((a) => (
                          <SelectItem key={a} value={a}>
                            {a}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City / Country *</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Accra, Ghana" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Role & Experience */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {currentRoles.map((r) => (
                          <SelectItem key={r} value={r}>
                            {r}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {yearsOfExperience.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Organization */}
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your company or organization"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Motivation */}
            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to join? *</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Your motivation..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Challenge */}
            <FormField
              control={form.control}
              name="challenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leadership challenge *</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe your challenge..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Success */}
            <FormField
              control={form.control}
              name="success"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What would success look like? *</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your vision of success..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Apply to Join"}
            </Button>
          </form>
        </Form>
      )}
    </ModalContainer>
  );
};

export default CourseRegistrationModal;
