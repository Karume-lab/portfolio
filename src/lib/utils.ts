import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeSinceOrDate = (
  inputDate: string | number | Date,
  thresholdMonths: number = 2,
): string => {
  const now = new Date();
  const date = new Date(inputDate);

  const diffMs = now.getTime() - date.getTime();

  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const month = Math.floor(day / 30);

  if (month >= thresholdMonths) {
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  if (month > 0) return `${month}mo ago`;
  if (day > 0) return `${day}d ago`;
  if (hr > 0) return `${hr}h ago`;
  if (min > 0) return `${min}m ago`;
  return `${sec}s ago`;
};
