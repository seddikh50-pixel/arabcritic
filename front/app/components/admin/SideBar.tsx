"use client"
import {
  Gamepad2,
  UserStar,
  ChartBarStacked,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { GiPlatform } from "react-icons/gi";


export default function Sidebar() {
  const path = usePathname()
  const links = [

  {
    href: "/admin/games",
    label: "الألعاب",
    icon: Gamepad2,
  },
  {
    href: "/admin/reviews",
    label: "التقييمات",
    icon: UserStar,
  },
  {
    href: "/admin/platforms",
    label: "المنصات",
    icon: GiPlatform,
  },
  {
    href: "/admin/genres",
    label: "التصنيفات",
    icon: ChartBarStacked,
  },
];





  return (
    <aside className="fixed right-0 top-0 h-screen w-64 border-l bg-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">Game Admin</h1>
      </div>

      <nav className="px-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`mt-2 relative flex pr-10 overflow-hidden items-center gap-3 justify-start font-black text-2xl rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100  ${path.startsWith(link.href) ? "bg-green-100 text-green-700 font-black" : "bg-white"}`}
            >
              {path.startsWith(link.href) && <div className=" absolute right-0 w-1 h-full bg-green-700"></div>}
              {Icon && <Icon size={30} />}

              <span>{link.label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

