"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
    >
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
          className="h-12 w-full rounded-xl border border-black/10 bg-white/70 px-4 text-sm text-black shadow-sm outline-none ring-0 placeholder:text-black/40 focus:border-black/20 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/20"
        />
        {errors.name ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
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
          className="h-12 w-full rounded-xl border border-black/10 bg-white/70 px-4 text-sm text-black shadow-sm outline-none ring-0 placeholder:text-black/40 focus:border-black/20 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/20"
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        {isSubmitting ? "Securing..." : "Secure My Spot"}
      </button>

      <div className="sm:col-span-3">
        {submitResult.type === "success" ? (
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            You’re on the list. We’ll email you when early access opens.
          </p>
        ) : null}
        {submitResult.type === "error" ? (
          <p className="text-sm text-red-700 dark:text-red-300">
            {submitResult.message}
          </p>
        ) : null}
        <p className="mt-2 text-xs text-black/60 dark:text-white/60">
          No spam—just one email when doors open.
        </p>
      </div>
    </form>
  );
}
