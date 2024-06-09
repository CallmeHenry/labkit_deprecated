"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../../utils"
import { Button } from "../../components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "../../components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "../../components/ui/popover"

const brands = [
    {
        value: "acer",
        label: "Acer"
    },
    {
        value: "asus",
        label: "Asus"
    },
    {
        value: "dell",
        label: "Dell"
    },

    {
        value: "lenovo",
        label: "Lenovo"
    }
]

import { useState } from 'react';

export default function ComboBox() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-black"
                >
                    {value
                        ? brands.find(brand => brand.value === value)?.label
                        : "Select brand..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Search brand..." />
                        <CommandEmpty>No brand found.</CommandEmpty>
                        <CommandGroup>
                            {brands.map(brand => (
                                <CommandItem
                                    key={brand.value}
                                    value={brand.value}
                                    onSelect={currentValue => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === brand.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {brand.label}
                                </CommandItem>
                            ))}

                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
