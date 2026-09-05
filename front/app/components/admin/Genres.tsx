import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const genres = [
  { label: "اختر التصنيف", value: null },
  { label: "تقمص الأدوار", value: "rpg" },
  { label: "أكشن", value: "action" },
  { label: "مغامرات", value: "adventure" },
  { label: "إطلاق النار", value: "shooter" },
  { label: "استراتيجية", value: "strategy" },
  { label: "محاكاة", value: "simulation" },
  { label: "رياضة", value: "sports" },
  { label: "سباقات", value: "racing" },
  { label: "قتال", value: "fighting" },
  { label: "رعب", value: "horror" },
  { label: "ألغاز", value: "puzzle" },
  { label: "منصات", value: "platformer" },
  { label: "بقاء", value: "survival" },
  { label: "تخفي", value: "stealth" },
  { label: "ألعاب جماعية ضخمة", value: "mmo" },
  { label: "باتل رويال", value: "battle-royale" },
  { label: "أركيد", value: "arcade" },
  { label: "رواية مرئية", value: "visual-novel" },
];
export function Genres() {
  return (
    <Select items={genres} >
      <SelectTrigger className="w-full max-w-64 h-3  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>المنصات</SelectLabel>
          {genres.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
