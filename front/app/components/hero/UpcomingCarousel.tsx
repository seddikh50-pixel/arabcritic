"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import getReview from "@/lib/getColorAndReview"
import { Autoplay, Navigation } from "swiper/modules"

import { ChevronLeft, ChevronRight } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"

export default function UpcomingCarousel() {
    const prevRef = useRef<HTMLButtonElement | null>(null)
    const nextRef = useRef<HTMLButtonElement | null>(null)

    const games = [
        {
            name: "The Last of Us Part II",
            image: "/games/the-last-of-us-2.jpg",
            review: null
        },
        {
            name: "Red Dead Redemption 2",
            image: "/games/red-dead-redemption-2.jpg",
            review: null
        },
        {
            name: "God of War Ragnarök",
            image: "/games/god-of-war-ragnarok.jpg",
            review: null
        },
        {
            name: "Elden Ring",
            image: "/games/elden-ring.jpg",
            review: null
        },
        {
            name: "Cyberpunk 2077",
            image: "/games/cyberpunk-2077.jpg",
            review: null
        },
        {
            name: "Ghost of Tsushima",
            image: "/games/ghost-of-tsushima.jpg",
            review: null
        },
        {
            name: "Hogwarts Legacy",
            image: "/games/hogwarts-legacy.png",
            review: null
        },
        {
            name: "Spider-Man 2",
            image: "/games/spider-man-2.jpg",
            review: null
        },
        {
            name: "Assassin's Creed Mirage",
            image: "/games/assassins-creed-mirage.jpg",
            review: null
        },
        {
            name: "Resident Evil 4",
            image: "/games/resident-evil-4.jpg",
            review: null
        },
        {
            name: "Black Myth Wukong",
            image: "/games/black-myth-wukong.jpg",
            review: null
        },
        {
            name: "Alan Wake 2",
            image: "/games/alan-wake-2.jpg",
            review: null
        },
        {
            name: "Phantom Blade Zero",
            image: "/games/phantom-blade-zero.jpg",
            review: null
        },
    ]

    return (
        <div className="relative w-full mt-20">

            {/* الأزرار */}
            <div className="flex justify-between gap-2 items-center mb-5">

                <div className="flex items-center gap-5">
                    <h1 className="text-2xl dark:text-gray-200 text-gray-600 font-bold whitespace-nowrap">
                        الألعاب القادمة
                    </h1>

                    {/* <h1 className="underline text-gray-500">
                        عرض الكل
                    </h1> */}
                </div>

                <div className="w-4/5 h-[2px] bg-gray-200"></div>

                <div className="flex gap-2">

                    {/* Next */}
                    <button
                        ref={nextRef}
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-white text-gray-900 shadow-sm transition
                        dark:border-gray-500 dark:bg-gray-800 dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Previous */}
                    <button
                        ref={prevRef}
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-white text-gray-900 shadow-sm transition
                        dark:border-gray-500 dark:bg-gray-800 dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700
                        disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>

                </div>
            </div>

            {/* Carousel */}
            <Swiper
                className="relative"
                modules={[Autoplay, Navigation]}

                autoplay={{
                    delay: 3000,
                    // disableOnInteraction: false,
                }}

                spaceBetween={10}
                slidesPerView={7}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                onBeforeInit={(swiper: SwiperType) => {
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean"
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                    }
                }}

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
            >

                {games.reverse().map((game) => {
                    const [color, label] = getReview(game.review)

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
                                        {game.review ?? (
                                            <h1 className="text-xs">
                                                TBD
                                            </h1>
                                        )}
                                    </div>

                                    <span className="text-sm">
                                        {label}
                                    </span>

                                </div>

                            </div>
                        </SwiperSlide>
                    )
                })}

                <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent" />

            </Swiper>

        </div>
    )
}