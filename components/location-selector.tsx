"use client"

import React, { useCallback } from "react"
import { Check, ChevronsUpDown, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Update the locations array to include more options in Macedonia
const locations = [
  {
    value: "skopje",
    label: "Skopje",
  },
  {
    value: "skopje-airport",
    label: "Skopje International Airport",
  },
  {
    value: "ohrid",
    label: "Ohrid",
  },
  {
    value: "ohrid-airport",
    label: "Ohrid St. Paul the Apostle Airport",
  },
  {
    value: "bitola",
    label: "Bitola",
  },
  {
    value: "tetovo",
    label: "Tetovo",
  },
  {
    value: "strumica",
    label: "Strumica",
  },
  {
    value: "kumanovo",
    label: "Kumanovo",
  },
  {
    value: "prilep",
    label: "Prilep",
  },
  {
    value: "struga",
    label: "Struga",
  },
  {
    value: "veles",
    label: "Veles",
  },
  {
    value: "gostivar",
    label: "Gostivar",
  },
  {
    value: "kavadarci",
    label: "Kavadarci",
  },
]

interface LocationSelectorProps {
  onLocationChange: (value: string, label: string) => void;
}

export function LocationSelector({ onLocationChange }: LocationSelectorProps) {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("skopje")
  const [customInput, setCustomInput] = React.useState("")
  const [displayValue, setDisplayValue] = React.useState("Skopje")

  const handleSelect = React.useCallback((currentValue: string) => {
    const selectedLocation = locations.find((location) => location.value === currentValue)
    if (selectedLocation) {
      setValue(currentValue)
      setDisplayValue(selectedLocation.label)
      setCustomInput("")
      onLocationChange(currentValue, selectedLocation.label)
    }
    setOpen(false)
  }, [onLocationChange])

    const handleInputChange = React.useCallback(
    (input: string) => {
      setCustomInput(input)
      if (input) {
        setDisplayValue(input)
        // If user types a custom location, pass it up
        onLocationChange('custom', input)
      } else {
        const selectedLocation = locations.find((location) => location.value === value)
        setDisplayValue(selectedLocation?.label || "")
      }
    },
    [value, onLocationChange],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-600" />
            {displayValue || "Select location..."}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder="Type address, city, airport..."
            value={customInput}
            onValueChange={handleInputChange}
          />
          <CommandList>
            <CommandEmpty>
              {customInput ? (
                <div className="px-2 py-1.5 text-sm">Press Enter to use "{customInput}"</div>
              ) : (
                "No location found."
              )}
            </CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem key={location.value} value={location.value} onSelect={handleSelect}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === location.value && !customInput ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {location.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
