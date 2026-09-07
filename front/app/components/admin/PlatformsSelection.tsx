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


interface PlatType {
    id: string;
    name: string
    slug: string
}

interface PlatformsSelectionProps {
    platforms: PlatType[];
    selectedPlatformIds: string[];
    setSelectedPlatformIds: Dispatch<SetStateAction<string[]>>;
}


const PlatformsSelection = ({ platforms, selectedPlatformIds, setSelectedPlatformIds, }: PlatformsSelectionProps) => {
    const anchor = useComboboxAnchor()






    return (
        <div>
            <div>
                <label>المنصات</label>
                <Combobox
                    multiple
                    autoHighlight
                    value={selectedPlatformIds}
                    items={platforms}
                    onValueChange={(values) => {
                        setSelectedPlatformIds(values);
                    }}

                >
                    <ComboboxChips ref={anchor} className="w-full max-w-xs">
                        <ComboboxValue>
                            {(values) => (
                                <>
                                    {values.map((value: string) => (
                                        <ComboboxChip key={value}>
                                            {value}
                                        </ComboboxChip>
                                    ))}

                                    <ComboboxChipsInput placeholder='اخترالمنصة' />
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

export default PlatformsSelection
