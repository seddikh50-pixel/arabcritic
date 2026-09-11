export async function getPlatforms(

) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(
        `${apiUrl}/platform/platforms`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        const errorText = await response.text();

        console.error("platforms API Error:", errorText);

        throw new Error("فشل في جلب المنصات");
    }

    return response.json();
}

