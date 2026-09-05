

"use client";

import { enqueueSnackbar } from "notistack";
import { FormEvent, useState } from "react";

export default function NewGamePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setCoverPreview(URL.createObjectURL(file));
    }
  }

  function handleBannerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setBannerPreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;

    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);



    try {
      const response = await fetch("http://localhost:5000/api/game/add", {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        enqueueSnackbar(result.message || "حدث خطأ", {
          variant: "error",
        });

        return;
      }

      enqueueSnackbar(result.message, {
        variant: "success",
      });

      console.log(result);

    

      setMessage("تمت إضافة اللعبة بنجاح");

      formElement.reset();


      setCoverPreview(null);
      setBannerPreview(null);
    } catch (error) {
      console.error(error);

      setMessage(
        error instanceof Error
          ? error.message
          : "حدث خطأ أثناء إضافة اللعبة"
      );
    } finally {
      setLoading(false);
    }
  }


  const handleClick = () => {

  };

  return (
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

          <input
            type="text"
            name="title"
            required
            placeholder="GTA V"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-2 font-medium">
            Slug
          </label>

          <input
            type="text"
            name="slug"
            required
            placeholder="gta-v"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">
            الوصف
          </label>

          <textarea
            name="description"
            rows={5}
            placeholder="وصف اللعبة..."
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Cover */}
        <div>
          <label className="block mb-2 font-medium">
            غلاف اللعبة
          </label>

          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={handleCoverChange}
            className="w-full rounded-lg border p-3"
          />

          {coverPreview && (
            <div className="mt-4">
              <img
                src={coverPreview}
                alt="Cover preview"
                className="h-64 w-44 rounded-lg object-cover border"
              />
            </div>
          )}
        </div>

        {/* Banner */}
        <div>
          <label className="block mb-2 font-medium">
            Banner اللعبة
          </label>

          <input
            type="file"
            name="banner"
            accept="image/*"
            onChange={handleBannerChange}
            className="w-full rounded-lg border p-3"
          />

          {bannerPreview && (
            <div className="mt-4">
              <img
                src={bannerPreview}
                alt="Banner preview"
                className="w-full h-48 rounded-lg object-cover border"
              />
            </div>
          )}
        </div>

        {/* Release Date */}
        <div>
          <label className="block mb-2 font-medium">
            تاريخ الإصدار
          </label>

          <input
            type="date"
            name="releaseDate"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Developer */}
        <div>
          <label className="block mb-2 font-medium">
            المطور
          </label>

          <input
            type="text"
            name="developer"
            placeholder="Rockstar Games"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Publisher */}
        <div>
          <label className="block mb-2 font-medium">
            الناشر
          </label>

          <input
            type="text"
            name="publisher"
            placeholder="Rockstar Games"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
        >
          {loading ? "جاري الإضافة..." : "إضافة اللعبة"}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center font-medium">
            {message}
          </p>
        )}
      </form>
      <button onClick={handleClick}>
        Create Game
      </button>
    </main>
  );
}

