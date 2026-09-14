type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function EditGamePage({ params }: Props) {
    const { slug } = await params;

    return (
        <div className="p-5">
            <h1 className="mb-5 text-3xl font-bold">
                تعديل اللعبة
            </h1>

            <p>Slug: {slug}</p>
        </div>
    );
}