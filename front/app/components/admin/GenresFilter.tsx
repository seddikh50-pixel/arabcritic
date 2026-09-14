"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface typePlat {
  id: string
  name: string,
  slug: string
}

interface PropsPlat {
  genres: typePlat[]
}

export function GenresFilter({ genres }: PropsPlat) {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [genreValue, setGenreValue] = useState<string>(searchParams.get("genre") ?? "")

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (!genreValue.trim() || genreValue === "كل التصنيفات") {
      params.delete("genre");
    } else {
      params.set('genre', genreValue)
    }


    router.push(`?${params.toString()}`);
  }, [genreValue])



  return (
    <Select items={genres.map((genre) => ({
      label: genre.name,
      value: genre.slug,
    }))}

      onValueChange={(value) => {
        setGenreValue(value as string)

      }}
    >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue placeholder="البحث بالتصنيف" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="كل التصنيفات">
            كل التصنيفات
          </SelectItem>
          {genres.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
