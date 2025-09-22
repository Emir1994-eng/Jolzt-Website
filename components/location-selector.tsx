"use client"

import React, { useState, useRef } from "react"
import { MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LocationSelectorProps {
  onLocationChange: (value: string, label: string) => void;
  custom?: boolean;
}

export function LocationSelector({ onLocationChange, custom = false }: LocationSelectorProps) {
  const [inputValue, setInputValue] = useState("")
  const [selectedOption, setSelectedOption] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelectOption = (value: string, label: string) => {
    setInputValue(label)
    setSelectedOption(value)
    onLocationChange(value, label)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    setSelectedOption('custom')
    onLocationChange('custom', event.target.value)
  }

  const handleCustomAddressClick = () => {
    setInputValue("")
    setSelectedOption("custom")
    onLocationChange('custom', "")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <MapPin className="h-4 w-4 text-orange-600 absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={custom ? "Enter custom address within Skopje" : "Airport or City"}
          value={inputValue}
          onChange={handleInputChange}
          className="pl-10"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors",
            selectedOption === "skopje-airport" && "bg-orange-500 text-white"
          )}
          onClick={() => handleSelectOption("skopje-airport", "Skopje Airport (SKP)")}
        >
          Skopje Airport (SKP)
        </Button>
        <Button
          variant="outline"
          className={cn(
            "px-4 py-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors",
            selectedOption === "skopje" && "bg-orange-500 text-white"
          )}
          onClick={() => handleSelectOption("skopje", "Skopje City")}
        >
          Skopje City
        </Button>
        {custom && (
          <Button
            variant="outline"
            className={cn(
              "px-4 py-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors",
              selectedOption === "custom" && "bg-orange-500 text-white"
            )}
            onClick={handleCustomAddressClick}
          >
            Custom Address
          </Button>
        )}
      </div>
    </div>
  )
}