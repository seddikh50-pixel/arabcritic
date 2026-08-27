"use client"

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import getReview from "@/lib/getColorAndReview"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Autoplay } from "swiper/modules";

import "swiper/css"
import Image from "next/image"

export default function NewCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)

  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateButtons = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }


  const games = [
    {
      name: "The Last of Us Part II",
      image: "/games/the-last-of-us-2.jpg",
      review: 93
    },
    {
      name: "Red Dead Redemption 2",
      image: "/games/red-dead-redemption-2.jpg",
      review: 97
    },
    {
      name: "God of War Ragnarök",
      image: "/games/god-of-war-ragnarok.jpg",
      review: 93
    },
    {
      name: "Elden Ring",
      image: "/games/elden-ring.jpg",
      review: 96
    },
    {
      name: "Cyberpunk 2077",
      image: "/games/cyberpunk-2077.jpg",
      review: 85
    },
    {
      name: "Ghost of Tsushima",
      image: "/games/ghost-of-tsushima.jpg",
      review: 78
    },
    {
      name: "Hogwarts Legacy",
      image: "/games/hogwarts-legacy.png",
      review: 84
    },
    {
      name: "Spider-Man 2",
      image: "/games/spider-man-2.jpg",
      review: 65
    },
    {
      name: "Assassin's Creed Mirage",
      image: "/games/assassins-creed-mirage.jpg",
      review: 55
    },
    {
      name: "Resident Evil 4",
      image: "/games/resident-evil-4.jpg",
      review: 94
    },
    {
      name: "Black Myth Wukong",
      image: "/games/black-myth-wukong.jpg",
      review: 81
    },
    {
      name: "Alan Wake 2",
      image: "/games/alan-wake-2.jpg",
      review: 79
    },

    {
      name: "Phantom Blade Zero",
      image: "/games/phantom-blade-zero.jpg",
      review: null
    },
  ]

  return (
    <div className=" relative w-full mt-20  ">


      {/* الأزرار */}
      <div className="mb-2 flex justify-between gap-2 items-center mb-5">

        {/* Previous */}


        {/* Next */}


        <div className="flex items-center gap-5">
          <h1 className="text-2xl text-gray-600  font-bold whitespace-nowrap">الإصدارات الجديدة</h1>
          <h1 className="underline text-gray-500 whitespace-nowrap">عرض الكل</h1>
        </div>
        <div className="w-7/10 h-[2px]  bg-gray-200"></div>


        <div className="flex gap-2 ">
          <button
            type="button"
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-white shadow-sm transition ${isEnd
              ? "cursor-not-allowed opacity-30"
              : "hover:bg-gray-100"
              }`}
          >
            <ChevronRight size={20} />
          </button>


          <button
            type="button"
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-white shadow-sm transition ${isBeginning
              ? "cursor-not-allowed opacity-30"
              : "hover:bg-gray-100"
              }`}
          >
            <ChevronLeft size={20} />
          </button>
        </div>

      </div>
      {/* <div>
      <hr />
     </div> */}

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}

        className=" relative "
        autoplay={{
          delay: 3000, // 2 ثواني
          // disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={7}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          updateButtons(swiper)
        }}
        onSlideChange={updateButtons}
      >

        {games.map((game) => {
          const [color, label] = getReview(game.review);

          return (
            <SwiperSlide key={game.name}>
              <div className="overflow-hidden rounded-t-lg">

                <div className="relative h-70 w-full">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-2">
                  <h3 className="whitespace-nowrap text-sm font-semibold text-left">
                    {game.name}
                  </h3>
                </div>

                <div className="flex items-center justify-start gap-2">

                  <div
                    className={`${color} rounded-sm flex h-7 w-7 items-center justify-center p-3 text-sm font-bold text-white`}
                  >
                    {game.review ?? <h1 className=" text-xs">TBD</h1>}
                  </div>

                  <span className="text-sm">
                    {label}
                  </span>

                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white to-transparent" />
      </Swiper>

    </div>
  )
}