
"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { useSnackbar } from "notistack";

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
} from "@/components/ui/alert-dialog";

type Props = {
    gameId: string;
};

export default function DeleteGameButton({ gameId }: Props) {
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/game/delete/${gameId}`,
                {
                    method: "DELETE",
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                enqueueSnackbar(
                    result.message || "فشل حذف اللعبة",
                    {
                        variant: "error",
                    }
                );

                return;
            }

            enqueueSnackbar(result.message, {
                variant: "success",
            });

            // إعادة جلب البيانات من Server Component
            router.refresh();
        } catch (error) {
            console.error(error);

            enqueueSnackbar("حدث خطأ أثناء حذف اللعبة", {
                variant: "error",
            });
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-red-600 px-3 py-1.5 text-sm text-white transition hover:bg-red-700"
            >
                <Trash2 size={15} />
                حذف
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        هل أنت متأكد من حذف هذه اللعبة؟
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        لا يمكن التراجع عن هذا الإجراء. سيتم حذف اللعبة نهائيًا.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        حذف
                    </AlertDialogAction>

                    <AlertDialogCancel>
                        إلغاء
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

