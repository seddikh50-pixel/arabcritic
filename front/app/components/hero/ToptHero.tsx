




"use client"

import { Pagination, Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import getReview from "@/lib/getColorAndReview"

export default function Hero() {
    const games = [
        {
            name: "The Last of Us Part II",
            image: "/games/the-last-of-us-2.jpg",
            banner: "/games/banner/the-last-of-us-2.jpg",
            review: 75,
        },
        {
            name: "Red Dead Redemption 2",
            image: "/games/red-dead-redemption-2.jpg",
            banner: "/games/banner/red-dead-redemption-2.jpg",
            review: 97,
        },
        {
            name: "God of War Ragnarök",
            image: "/games/god-of-war-ragnarok.jpg",
            banner: "/games/banner/god-of-war-ragnarok.jpg",
            review: 85,
        },
    ]

    return (
        <div className="relative xl:h-130 lg:h-130  h-220 md:h-250 w-full  border-[1px] rounded-md overflow-hidden">



            <Swiper
                className="hero-swiper relative h-full "
                spaceBetween={50}
                slidesPerView={1}
                modules={[Pagination, Autoplay, Navigation]}
                navigation={{
                    nextEl: ".hero-next",
                    prevEl: ".hero-prev",
                    disabledClass: "hero-button-disabled",

                }}
                pagination={{
                    el: ".hero-pagination",
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >


                {games.map((game) => {
                    const [color, label] = getReview(game.review)
                    return (
                        <SwiperSlide key={game.name}>
                            <div className="flex h-full md:flex-col-reverse xl:flex-row flex-col-reverse   lg:flex-row  ">

                                {/* الصورة */}


                                {/* الكارد */}
                                <div
                                    className="
        relative
        h-[35%]
        w-full
        bg-black

        lg:h-full
        lg:w-1/4

        lg:before:absolute
        lg:before:-left-32
        lg:before:top-0
        lg:before:h-full
        lg:before:w-32

        lg:before:bg-gradient-to-r
        lg:before:from-transparent
        lg:before:via-black/70
        lg:before:to-black
        lg:before:content-['']
    "
                                >
                                    <div className="flex h-full flex-col justify-center px-5 py-4 md:px-8">

                                        {/* Header */}
                                        <div className="mb-4 md:mb-2 xl:mb-8 lg:mb-8">
                                            <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-500">
                                                ARABCRITIC
                                            </span>

                                            <h3 className="mt-2 text-2xl font-bold text-white md:mt-3 md:text-3xl">
                                                آخر التقييمات
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-400 md:mt-2">
                                                أحدث تقييمات مجتمع الألعاب
                                            </p>
                                        </div>

                                        <div className="mb-1  w-full bg-gray-800 md:mb-2 xl:mb-8 lg:mb-8    " />

                                        {/* Game + Score */}
                                        <div className="flex items-center justify-between gap-4">

                                            <div className="min-w-0">
                                                <p className="mb-1 text-xs text-gray-500 md:mb-2">
                                                    تقييم النقاد
                                                </p>

                                                <h4 className=" whitespace-nowrap     text-sm font-bold text-white">
                                                    {game.name}
                                                </h4>

                                                <p className="mt-1 text-sm text-gray-400 md:mt-2 xl:mb-8 lg:mb-8">
                                                    {label}
                                                </p>
                                            </div>

                                            {/* Score */}
                                            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center md:h-24 md:w-24">
                                                <div className="absolute inset-0 rounded-2xl border border-white/10" />

                                                <div
                                                    className={`
                                                     ${color}
                                                     flex h-14 w-14 items-center justify-center
                                                     rounded-xl text-2xl font-black text-white
                                                     shadow-2xl
                                                    md:h-20 md:w-20 md:rounded-2xl md:text-3xl
                                                 `}
                                                >
                                                    {game.review ?? "—"}
                                                </div>
                                            </div>

                                        </div>

                                        {/* Impression */}
                                        <div className="mt-2 md:mt-2 sm:mt-2">
                                            <div className="flex items-center gap-3">

                                                <div className={`h-8 w-1 rounded-full ${color} md:h-10`} />

                                                <div className="md:mb-3">
                                                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                                                        الانطباع العام
                                                    </p>

                                                    <p className="mt-1 text-sm font-bold text-white md:text-base">
                                                        {label}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="xl:mt-10 mt-4   cursor-pointer  w-1/4 xl:w-full lg:w-full  rounded-lg border border-white/10 bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                                        >
                                            عرض المزيد
                                        </button>

                                    </div>
                                </div>

                                <div className="relative h-[65%] w-full md:h-full xl:w-3/4 lg:w-3/4">
                                    <Image
                                        src={game.banner}
                                        alt={game.name}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                    <div
                                        className="
                                          absolute right-0 top-0 z-10
                                          h-full w-24
                                          bg-gradient-to-r
                                          from-transparent
                                          via-black/60
                                          to-black
                                      "
                                    />

                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                    {/* Game name */}
                                    <div className="absolute bottom-4 left-4 z-10 md:bottom-2 md:left-3">
                                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                                            {game.name}
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    )

                })}

                {/* Navigation */}
                <div className="absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center                                   ">
                    {/* Right / Next */}
                    <button
                        type="button"
                        className="hero-next flex h-10 w-18 cursor-pointer items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={22} strokeWidth={2} />

                    </button>

                    {/* Pagination */}
                    <div className="hero-pagination flex items-center justify-center gap-2" />

                    {/* Left / Previous */}
                    <button
                        type="button"
                        className="hero-prev flex h-10 w-18 cursor-pointer items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={22} strokeWidth={2} />

                    </button>

                </div>

            </Swiper>
        </div>
    )
}