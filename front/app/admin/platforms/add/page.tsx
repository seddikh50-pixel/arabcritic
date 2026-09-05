"use client";

import { enqueueSnackbar } from "notistack";
import React, { useState, FormEvent } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();


    const form = new FormData(e.currentTarget);

    const response = await fetch(
      "http://localhost:5000/api/platform/add",
      {
        method: "POST",
        body: form,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
      enqueueSnackbar(data.message || "حدث خطأ", {
        variant: "error",
      });

      return;
    }

    enqueueSnackbar(data.message, {
      variant: "success",
    });
  }
  return (
    <main

      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        bg-slate-50
        dark:bg-slate-950
      "
    >
      <div className="w-full max-w-md">

        {/* العنوان */}
        <div className="mb-8 text-center">
          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            إضافة منصة جديدة
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            أضف منصة ألعاب جديدة إلى قاعدة البيانات
          </p>
        </div>

        {/* البطاقة */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-xl
            shadow-slate-200/50

            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-black/20
          "
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* اسم المنصة */}
            <div>
              <label
                htmlFor="name"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-200
                "
              >
                اسم المنصة
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: Xbox"
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  transition

                  placeholder:text-slate-400

                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20

                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500

                  dark:focus:border-indigo-500
                "
              />
            </div>

            {/* الرابط المختصر */}
            <div>
              <label
                htmlFor="slug"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-200
                "
              >
                الرابط المختصر (Slug)
              </label>

              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="مثال: xbox"

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-slate-900
                  outline-none
                  transition

                  placeholder:text-slate-400

                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20

                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500

                  dark:focus:border-indigo-500
                "
              />
            </div>

            {/* الزر */}
            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-indigo-600
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition

                hover:bg-indigo-700
                active:scale-[0.98]

                dark:bg-indigo-600
                dark:hover:bg-indigo-500
              "
            >
              إضافة المنصة
            </button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;

