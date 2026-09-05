



import Image from "next/image";
import Pagination from "@/app/components/admin/Pagination";
import { Game } from "@/types/game";

import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Platforms } from "@/app/components/admin/Platforms";
import { Genres } from "@/app/components/admin/Genres";
import { Reviews } from "@/app/components/admin/Review";
import GameSearch from "@/app/components/admin/GameSearch";
import DeleteGameButton from "@/app/components/admin/DeleteGameButton";
import { getGames } from "../services/service.game";

type Props = {
    searchParams: Promise<{
        q?: string;
        page?: string;
    }>;
};

export default async function Page({ searchParams }: Props) {
    const params = await searchParams;

    const q = params.q ?? "";
    const page = Number(params.page ?? "1");

    const { games, total } = await getGames( q, page );


    return (


        <div className="p-2">

            {/* ================= العنوان ================= */}
            <h1 className="mb-5 text-4xl font-bold">
                قائمة الألعاب
            </h1>

            {/* ================= البحث والفلاتر ================= */}
            <form
                method="GET"
                className="flex gap-5"
            >
                {/* Search */}
                {/* <input
                    type="text"
                    name="q"
                    defaultValue={q}
                    placeholder="البحث عن الألعاب..."
                    className="rounded-md border-2 border-gray-400 px-2 py-1"
                /> */}
                <GameSearch />

                {/* Platform */}
                <div className="w-60 rounded-md border-2 border-gray-400 px-2 py-1">
                    <Platforms />
                </div>

                {/* Genre */}
                <div className="w-60 rounded-md border-2 border-gray-400 px-2 py-1">
                    <Genres />
                </div>

                {/* Reviews */}
                <div className="w-60 rounded-md border-2 border-gray-400 px-2 py-1">
                    <Reviews />
                </div>

                <Button
                    type="submit"
                    className="rounded-md bg-green-600 px-5 hover:bg-green-700"
                >
                    بحث
                </Button>
            </form>

            {/* ================= Games ================= */}
            <div className="mt-5 overflow-hidden rounded-lg border border-gray-200 bg-white">

                {/* ================= Header ================= */}
                <div className="grid grid-cols-[80px_180px_120px_120px_120px_120px_120px_1fr] gap-4 border-b bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600">

                    <div>
                        الغلاف
                    </div>

                    <div>
                        اللعبة
                    </div>

                    <div>
                        المنصة
                    </div>

                    <div>
                        التصنيف
                    </div>

                    <div>
                        تقييم النقاد
                    </div>

                    <div>
                        تقييم المستخدمين
                    </div>

                    <div>
                        تاريخ الإصدار
                    </div>

                    <div>
                        الإجراءات
                    </div>

                </div>

                {/* ================= Games ================= */}
                <div className="h-100 w-full overflow-y-auto">

                    {games.length === 0 ? (

                        <div className="py-10 text-center text-gray-500">
                            لا توجد ألعاب
                        </div>

                    ) : (

                        games.map((game) => (

                            <div
                                key={game.id}
                                className="grid grid-cols-[80px_180px_120px_120px_120px_120px_120px_1fr] items-center gap-4 border-b px-5 py-1 transition last:border-b-0 hover:bg-gray-50"
                            >

                                {/* ================= الغلاف ================= */}
                                <div>

                                    {game.cover ? (

                                        <Image
                                            src={game.cover}
                                            alt={game.title}
                                            width={50}
                                            height={70}
                                            className="h-[70px] w-[50px] rounded object-cover"
                                        />

                                    ) : (

                                        <div className="flex h-[70px] w-[50px] items-center justify-center rounded bg-gray-200 text-xs text-gray-500">
                                            N/A
                                        </div>

                                    )}

                                </div>

                                {/* ================= اللعبة ================= */}
                                <div>

                                    <h2 className="font-semibold text-gray-900">
                                        {game.title}
                                    </h2>

                                    <p className="mt-1 text-xs text-gray-500">
                                        {game.developer ?? "غير محدد"}
                                    </p>

                                </div>

                                {/* ================= المنصة ================= */}
                                <div className="text-sm text-gray-600">
                                    PC
                                </div>

                                {/* ================= التصنيف ================= */}
                                <div className="text-sm text-gray-600">
                                    RPG
                                </div>

                                {/* ================= تقييم النقاد ================= */}
                                <div>

                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                                        9.3
                                    </span>

                                </div>

                                {/* ================= تقييم المستخدمين ================= */}
                                <div>

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                        8.2
                                    </span>

                                </div>

                                {/* ================= تاريخ الإصدار ================= */}
                                <div className="text-sm text-gray-500">

                                    {game.releaseDate
                                        ? new Date(game.releaseDate).toLocaleDateString()
                                        : "—"}

                                </div>

                                {/* ================= الإجراءات ================= */}
                                <div className="flex gap-2">

                                    {/* تعديل */}
                                    <Button
                                        variant="outline"
                                        className="flex items-center justify-center gap-2 rounded-sm bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
                                    >
                                        <Pencil size={15} />
                                        تعديل
                                    </Button>

                                    {/* حذف */}
                                   <DeleteGameButton gameId={game.id} />

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

            {/* ================= Pagination ================= */}
            <Pagination
                total={total}
                currentPage={page}
            />

        </div>




    );
}

