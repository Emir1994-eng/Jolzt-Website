"use client"

import React, { useState, useEffect } from "react"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LocationSelectorProps {
  onLocationChange: (value: string, label: string) => void;
}

export function LocationSelector({ onLocationChange }: LocationSelectorProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSelectOption = (value: string, label: string) => {
    setInputValue(label)
    onLocationChange(value, label)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    onLocationChange('custom', event.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <MapPin className="h-4 w-4 text-orange-600 absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          type="text"
          placeholder="Airport or city"
          value={inputValue}
          onChange={handleInputChange}
          className="pl-10"
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="px-4 py-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
          onClick={() => handleSelectOption("skopje-airport", "Skopje Airport (SKP)")}
        >
          Skopje Airport (SKP)
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 rounded-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
          onClick={() => handleSelectOption("skopje", "Skopje City")}
        >
          Skopje City
        </Button>
      </div>
    </div>
  )
}