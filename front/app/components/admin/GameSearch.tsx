"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GameSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(
    searchParams.get("q") ?? ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (value.trim()) {
        params.set("q", value);
      } else {
        params.delete("q");
      }

      params.set("page", "1");

      router.push(`?${params.toString()}`);
    }, 400);

    // إلغاء الـ timer السابق
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <input
      type="text"
      name="q"
    //   defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => setValue(e.target.value)}
      placeholder="البحث عن الألعاب..."
      className="rounded-md border-2 border-gray-400 px-2 py-1"
    />
  );
}