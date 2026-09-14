"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/ui/combobox"


interface GenreType {
    id: string;
    name: string
    slug: string
}

interface GenresSelectionProps {
    genres: GenreType[];
    selectedPlatformIds: string[];
    setSelectedPlatformIds: Dispatch<SetStateAction<string[]>>;
}


const GenresSelection = ({ genres, selectedPlatformIds, setSelectedPlatformIds, }: GenresSelectionProps) => {
    const anchor = useComboboxAnchor()

    return (
        <div>
            <div>
                <label>التصنيفات</label>
                <Combobox
                    multiple
                    autoHighlight
                    value={selectedPlatformIds}
                    items={genres}
                    onValueChange={(values) => {
                        setSelectedPlatformIds(values);
                    }}

                >
                    <ComboboxChips ref={anchor} className="w-full max-w-xs">
                        <ComboboxValue>
                            {(values) => (
                                <>
                                    {values.map((value: string) => {
                                        const genre = genres.find(
                                            (p) => p.id === value
                                        );

                                        return (
                                            <ComboboxChip key={value}>
                                                {genre?.name}
                                            </ComboboxChip>
                                        );
                                    })}

                                    <ComboboxChipsInput placeholder="اختر المنصة" />
                                </>
                            )}
                        </ComboboxValue>
                    </ComboboxChips>

                    <ComboboxContent anchor={anchor}>
                        <ComboboxEmpty>
                            No items found.
                        </ComboboxEmpty>

                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.name}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

            </div>
        </div>
    )
}





export default GenresSelection
