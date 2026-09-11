const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export async function getGenres(

) {

    const response = await fetch(
        `${apiUrl}/genre/genres`,
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





