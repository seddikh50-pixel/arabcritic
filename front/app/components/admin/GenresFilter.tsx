import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface typePlat {
  id: string
  name: string,
  slug: string
}

interface PropsPlat {
  genres: typePlat[]
}

export function GenresFilter({ genres }: PropsPlat) {
  return (
    <Select items={genres.map((genre) => ({
      label: genre.name,
      value: genre.slug,
    }))} >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue placeholder="البحث بالتصنيف" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
