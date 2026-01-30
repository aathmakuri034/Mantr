"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../css/WaitlistForm.css";

const waitlistSchema = z.object({
  email: z.string().trim().email("Please enter a valid email."),
  name: z
    .string()
    .trim()
    .max(80, "Name is too long.")
    .optional()
    .or(z.literal("")),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [submitResult, setSubmitResult] = useState<
    { type: "idle" } | { type: "success" } | { type: "error"; message: string }
  >({ type: "idle" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "", name: "" },
    mode: "onSubmit",
  });

  const canSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

  async function onSubmit(values: WaitlistFormValues) {
    setSubmitResult({ type: "idle" });

    const payload = {
      email: values.email.trim(),
      name: values.name?.trim() ? values.name.trim() : undefined,
    };

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setSubmitResult({ type: "success" });
      reset({ email: "", name: "" });
      return;
    }

    const data = (await res.json().catch(() => null)) as {
      error?: string;
    } | null;
    setSubmitResult({
      type: "error",
      message: data?.error || "Something went wrong. Please try again.",
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="waitlist-form">
      <div className="sm:col-span-1">
        <label className="sr-only" htmlFor="name">
          Name (optional)
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name (optional)"
          autoComplete="name"
          {...register("name")}
          className="waitlist-input"
        />
        {errors.name ? (
          <p className="waitlist-error">{errors.name.message}</p>
        ) : null}
      </div>

      <div className="sm:col-span-1">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          required
          {...register("email")}
          className="waitlist-input"
        />
        {errors.email ? (
          <p className="waitlist-error">{errors.email.message}</p>
        ) : null}
      </div>

      <button type="submit" disabled={!canSubmit} className="waitlist-button">
        {isSubmitting ? "Securing..." : "Secure My Spot"}
      </button>

      <div className="sm:col-span-3">
        {submitResult.type === "success" ? (
          <p className="waitlist-success">
            You are on the list. We will email you when early access opens.
          </p>
        ) : null}
        {submitResult.type === "error" ? (
          <p className="waitlist-error-message">{submitResult.message}</p>
        ) : null}
        <p className="waitlist-disclaimer">
          No spam—just one email when doors open.
        </p>
      </div>
    </form>
  );
}
