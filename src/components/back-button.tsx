import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className="animate-slide-from-down-and-fade-1 group mb-4 flex cursor-pointer flex-row items-center space-x-2"
    >
      <ArrowLeftIcon className="size-4 duration-200 group-hover:-translate-x-1" />
      <span className="text-lg duration-200">Back</span>
    </Link>
  );
}
