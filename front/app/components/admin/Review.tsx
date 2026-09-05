import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ratings = [
  { label: "اختر التقييم", value: null },
  { label: "90 - 100", value: "90" },
  { label: "80 - 89", value: "80" },
  { label: "70 - 79", value: "70" },
  { label: "60 - 69", value: "60" },
  { label: "50 - 59", value: "50" },
  { label: "أقل من 50", value: "0" },
];

export function Reviews() {
  return (
    <Select items={ratings} >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>المنصات</SelectLabel>
          {ratings.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
