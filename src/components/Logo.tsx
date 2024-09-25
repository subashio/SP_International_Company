import React from "react";

export default function Logo({ d }: { d: string }) {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d={d} clipRule="evenodd" />
    </svg>
  );
}
