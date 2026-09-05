import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const paltforms = [
  { label: "اختر المنصة", value: null },
  { label: "PC", value: "apple" },
  { label: "PS5", value: "banana" },
  { label: "XBOX Series X", value: "blueberry" },
  { label: "XBOX Series S", value: "grapes" },
  { label: "NENTENDO", value: "pineapple" },
]

export function Platforms() {
  return (
    <Select items={paltforms} >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>المنصات</SelectLabel>
          {paltforms.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
