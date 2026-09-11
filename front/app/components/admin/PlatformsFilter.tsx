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
  platforms: typePlat[]
}

export function PlatformsFilter({ platforms }: PropsPlat) {
  return (
    <Select items={platforms.map((platform) => ({
      label: platform.name,
      value: platform.slug,
    }))} >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>المنصات</SelectLabel>
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
