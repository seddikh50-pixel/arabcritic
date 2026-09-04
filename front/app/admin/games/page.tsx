"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Game } from "@/types/game";
import Pagination from "@/app/components/admin/Pagination";
import { deleteGame, getGames } from "../services/service.game";


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react";


export default function page() {
    const [games, setGames] = useState<Game[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        getGames(search, page, setCount, setGames);
    }, [search, page]);




    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold">قائمة الألعاب</h1>

            {/* Search */}

            <div className="flex">
                <input
                    type="text"
                    placeholder="Search games..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border p-2"
                />
                <div>المنصة</div>
                <div>التصنيف</div>
                <div>التقييم</div>
            </div>

            {/* Games */}

            <div className="mt-5 overflow-hidden rounded-lg border border-gray-200 bg-white">
                {/* Header */}
                <div className="grid grid-cols-[80px_180px_120px_120px_120px_120px_120px_1fr] gap-4 border-b bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600">
                    <div>الغلاف</div>
                    <div>اللعبة</div>
                    <div>المنصة</div>
                    <div>التصنيف</div>
                    <div>تقييم النقاد</div>
                    <div>تقييم المستخدمين</div>
                    <div>تاريخ الاصدار </div>
                    <div>الاجرات</div>
                </div>

                {/* Games */}
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="grid grid-cols-[80px_180px_120px_120px_120px_1fr] items-center gap-4 border-b px-5 py-3 transition hover:bg-gray-50"
                    >
                        {/* Cover */}
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

                        {/* Game */}
                        <div>
                            <h2 className="font-semibold text-gray-900">
                                {game.title}
                            </h2>

                            {/* 
                            <p className="mt-1 text-sm text-gray-500">
                                {game.slug}
                            </p> */}
                        </div>
                        <div>
                            PC
                        </div>
                        <div>
                            RPG
                        </div>

                        {/* Release Date */}
                        <div className="text-sm text-gray-500">
                            {game.releaseDate
                                ? new Date(game.releaseDate).toLocaleDateString()
                                : "—"}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            <button className="rounded-sm flex justify-center items-center gap-2 bg-blue-600    px-3 py-1.5 text-sm text-white hover:bg-gray-700">
                                <Pencil size={15} />
                                تعديل

                            </button>


                            <AlertDialog>
                                <AlertDialogTrigger render={<Button variant="destructive" className={"flex rounded-sm justify-center items-center text-white bg-red-600"}>
                                    <Trash2 />
                                    حذف
                                </Button>} />

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            هل أنت متأكد من حذف هذه اللعبة؟
                                        </AlertDialogTitle>

                                        <AlertDialogDescription>
                                            لا يمكن التراجع عن هذا الإجراء. سيتم حذف اللعبة نهائيًا.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter >


                                        <AlertDialogAction className={"  bg-green-500"}
                                            onClick={() => deleteGame(game.id, setGames)}
                                        >
                                            حذف
                                        </AlertDialogAction>
                                        <AlertDialogCancel >
                                            إلغاء
                                        </AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>


            <Pagination count={count} setPage={setPage} />

        </div>
    );
}