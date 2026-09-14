
"use client";

import { useState } from "react";
import PlatformsSelection from "./PlatformsSelection";
import GenresSelection from "./GenresSelection";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useAddGame } from "@/app/admin/hooks/useAddGame";

interface PlatType {
  id: string;
  name: string
  slug: string
}

interface GenType {
  id: string;
  name: string
  slug: string
}

interface PlatProps {
  platforms: PlatType[]
  genres: GenType[]
}

const AddGameForm = ({ platforms, genres }: PlatProps) => {
  const defaultCover = "/imagecover.jpg";

  const inputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);
  const [bannerPreview, setBannerPreview] = useState(defaultCover);
  const [selectedPlatformIds, setSelectedPlatformIds] = useState<string[]>([]);
  const [selectedGenresIds, setSelectedGenresIds] = useState<string[]>([]);
  const [cover, setCover] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState(defaultCover);
  const [banner, setBanner] = useState<File | null>(null);

  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cover" | "banner"
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    if (type === "cover") {
      setCover(file);
      setCoverPreview(preview);
    } else {
      setBanner(file);
      setBannerPreview(preview);
    }
  }

  function handleImageRemove(type: "cover" | "banner") {
    if (type === "cover") {
      setCover(null);
      setCoverPreview(defaultCover);
      inputRef.current!.value = "";
    } else {
      setBanner(null);
      setBannerPreview(defaultCover);
      bannerInputRef.current!.value = "";
    }
  }
  const { handleSubmit, loading } = useAddGame({
    selectedPlatformIds,
    selectedGenresIds,

    onSuccess: () => {
      setCoverPreview(defaultCover);
      setBannerPreview(defaultCover);
      setCover(null);
      setBanner(null);
    },
  });



  return (
    <div>
      <main className="max-w-3xl mx-auto p-6" dir="rtl">
        <h1 className="text-3xl font-bold mb-8">
          إضافة لعبة
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              اسم اللعبة
            </label>

            <input type="text" name="title" required placeholder="GTA V" className="w-full rounded-lg border p-3" />
          </div>

          <div>
            < PlatformsSelection platforms={platforms} selectedPlatformIds={selectedPlatformIds} setSelectedPlatformIds={setSelectedPlatformIds} />
          </div>
          <div>
            < GenresSelection genres={genres} selectedPlatformIds={selectedGenresIds} setSelectedPlatformIds={setSelectedGenresIds} />
          </div>

          {/* Slug */}
          <div>
            <label className="block mb-2 font-medium">
              Slug
            </label>
            <input type="text" name="slug" required placeholder="gta-v" className="w-full rounded-lg border p-3" />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              الوصف
            </label>

            <textarea name="description" rows={5} placeholder="وصف اللعبة..." className="w-full rounded-lg border p-3"
            />
          </div>



          {/* Cover */}
          <div>
            <label className="block mb-2 font-medium">
              غلاف اللعبة
            </label>

            <input ref={inputRef} id="cover" type="file" name="cover" accept="image/*" onChange={(e) => handleImageChange(e, "cover")} className="w-full rounded-lg border p-3" hidden
            />

            <div className="relative w-40 h-56">
              <label htmlFor="cover" className="  block  w-full h-full">
                <Image src={coverPreview} alt="غلاف اللعبة" fill className="rounded-lg object-cover border"
                />


              </label>
              {cover && (
                <X
                  className="absolute top-2 left-2 z-10 cursor-pointer text-white"
                  onClick={() => handleImageRemove("cover")}
                />
              )}
            </div>
          </div>

          {/* Banner */}
          <div>
            <label className="block mb-2 font-medium">
              بانر اللعبة            </label>

            <input ref={bannerInputRef} id="banner" type="file" name="banner" accept="image/*" onChange={(e) => handleImageChange(e, "banner")} className="w-full rounded-lg border p-3" hidden
            />

            <div className="relative  h-56">
              <label htmlFor="banner" className="  block  w-full h-full">
                <Image src={bannerPreview} alt="غلاف اللعبة" fill className="rounded-lg object-cover border"
                />


              </label>
              {banner && (
                <X
                  className="absolute top-2 left-2 z-10 cursor-pointer text-white"
                  onClick={() => handleImageRemove("banner")}
                />
              )}
            </div>
          </div>

          {/* Release Date */}
          <div>
            <label className="block mb-2 font-medium">
              تاريخ الإصدار
            </label>

            <input type="date" name="releaseDate" className="w-full rounded-lg border p-3"
            />
          </div>

          {/* Developer */}
          <div>
            <label className="block mb-2 font-medium">
              المطور
            </label>

            <input type="text" name="developer" placeholder="Rockstar Games" className="w-full rounded-lg border p-3"
            />
          </div>

          {/* Publisher */}
          <div>
            <label className="block mb-2 font-medium">
              الناشر
            </label>

            <input type="text" name="publisher" placeholder="Rockstar Games" className="w-full rounded-lg border p-3"
            />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="w-full rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
          >
            {loading ? "جاري الإضافة..." : "إضافة لعبة"}
          </button>

        </form>

      </main>
    </div >
  )
}

export default AddGameForm
