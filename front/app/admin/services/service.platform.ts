export async function getPlatforms(
  
) {
    const response = await fetch(
        `http://localhost:5000/api/platform/platforms`,
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

