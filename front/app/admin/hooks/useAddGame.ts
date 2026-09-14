"use client";

import { FormEvent, useState } from "react";
import { enqueueSnackbar } from "notistack";
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type Props = {
    selectedPlatformIds: string[];
    selectedGenresIds: string[];
    onSuccess?: () => void;
};

export function useAddGame({
    selectedPlatformIds,
    selectedGenresIds,
    onSuccess,
}: Props) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

           const formElement = e.currentTarget;

    const form = new FormData(formElement);

        form.append(
            "platformIds",
            JSON.stringify(selectedPlatformIds)
        );

        form.append(
            "genreIds",
            JSON.stringify(selectedGenresIds)
        );
        try {
            setLoading(true);

            const response = await fetch(
               `${apiUrl}/game/add`,
                {
                    method: "POST",
                    body: form,
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "حدث خطأ");
            }

            enqueueSnackbar(result.message, {
                variant: "success",
            });
    

            formElement.reset();

            onSuccess?.();

        } catch (error) {
            enqueueSnackbar(
                error instanceof Error
                    ? error.message
                    : "حدث خطأ أثناء إضافة اللعبة",
                {
                    variant: "error",
                }
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        handleSubmit,
        loading,
    };
}