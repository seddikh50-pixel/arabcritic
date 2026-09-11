'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface typePlat {
  id: string
  name: string,
  slug: string
}

interface PropsPlat {
  platforms: typePlat[]
}

export function PlatformsFilter({ platforms }: PropsPlat) {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [platformValue, setPlatFormValue] = useState<string>(searchParams.get("platform") ?? "")





  useEffect(() => {
    console.log(platformValue);
    const params = new URLSearchParams(searchParams.toString())
    if (!platformValue.trim() || platformValue === "كل المنصات") {
      params.delete("platform");
    } else {
      params.set('platform', platformValue)
    }


    router.push(`?${params.toString()}`);
  }, [platformValue])




  return (
    <Select items={platforms.map((platform) => ({
      label: platform.name,
      value: platform.slug,
    }))}

      onValueChange={(value) => {
        setPlatFormValue(value as string)

      }}
    >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue placeholder="البحث بالمنصة" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="كل المنصات">
            كل المنصات
          </SelectItem>
          {platforms.map((item) => (

            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
