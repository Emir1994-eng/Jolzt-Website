"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { LocationSelector } from "@/components/location-selector"

interface DatePickerWithRangeProps {
  date?: DateRange
  onDateChange: (date: DateRange) => void
  pickupTime: string
  setPickupTime: (time: string) => void
  returnTime: string
  setReturnTime: (time: string) => void
  onLocationChange: (value: string, label: string) => void
}

export function DatePickerWithRange({
  date,
  onDateChange,
  pickupTime,
  setPickupTime,
  returnTime,
  setReturnTime,
  onLocationChange,
}: DatePickerWithRangeProps) {

  const [returnToDifferentLocation, setReturnToDifferentLocation] = React.useState(false)

  const defaultDate: DateRange = React.useMemo(() => {
    const today = new Date()
    const futureDate = new Date()
    futureDate.setDate(today.getDate() + 3)

    return {
      from: today,
      to: futureDate,
    }
  }, [])
  
  // Local state for the selected range
  const [selectedDate, setSelectedDate] = React.useState<DateRange>(date || defaultDate)
  
  // State to manually track if the user is selecting the start or end date
  // Start by assuming they will select the start of a new range
  const [isSelectingStart, setIsSelectingStart] = React.useState(true) 

  const timeOptions = React.useMemo(() => {
    const options = []
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 30) {
        const hour = i.toString().padStart(2, "0")
        const minute = j.toString().padStart(2, "0")
        options.push(`${hour}:${minute}`)
      }
    }
    return options
  }, [])

  const handleDateSelect = React.useCallback(
    (newDate: Date | undefined) => {
      if (!newDate) return

      // Logic to determine if we are starting a new range or completing the current one.
      
      // Case 1: Starting a new range (either nothing is selected, or a full range was just completed)
      if (isSelectingStart) {
        const newSelection: DateRange = { 
            from: newDate, 
            to: undefined 
        }
        setSelectedDate(newSelection)
        onDateChange(newSelection) 
        setIsSelectingStart(false) // Next click will be the 'to' date
        
      } else {
        // Case 2: Completing the current range (selectedDate.from is defined, isSelectingStart is false)
        
        const fromDate = selectedDate.from;
        const toDate = newDate;

        // Safety check, though fromDate should be defined here
        if (!fromDate) {
          setIsSelectingStart(true);
          return;
        }

        let finalDateRange: DateRange;

        // Ensure dates are correctly ordered (handle selecting 'to' before 'from')
        if (toDate < fromDate) {
          finalDateRange = { from: toDate, to: fromDate };
        } else {
          finalDateRange = { from: fromDate, to: toDate };
        }
        
        // Update both local and parent state with the completed range
        setSelectedDate(finalDateRange)
        onDateChange(finalDateRange) 
        
        setIsSelectingStart(true) // Next click will be the start of a new range
      }
    },
    [selectedDate.from, onDateChange, isSelectingStart]
  )

  const isInRange = React.useCallback(
    (dateToCheck: Date) => {
      // Ensure both dates exist before checking range
      if (!selectedDate.from || !selectedDate.to) return false
      return dateToCheck > selectedDate.from && dateToCheck < selectedDate.to
    },
    [selectedDate]
  )

  return (
    <div className="grid gap-4">
      {/* Date Picker */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !selectedDate.from && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate.from ? (
                selectedDate.to ? (
                  <>
                    {format(selectedDate.from, "MMM d, yyyy")} -{" "}
                    {format(selectedDate.to, "MMM d, yyyy")}
                  </>
                ) : (
                  // Display only the start date while waiting for the end date
                  format(selectedDate.from, "MMM d, yyyy")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              // Set mode to 'single' so we can manually control the range selection
              mode="single" 
              defaultMonth={selectedDate.from}
              // 'selected' receives the date that should be highlighted as the current selection
              selected={selectedDate.from} 
              onSelect={handleDateSelect} 
              numberOfMonths={2}
              // The 'modifiers' prop is used to visually apply the range highlights
              modifiers={{
                start: selectedDate.from,
                end: selectedDate.to,
                inRange: isInRange,
              }}
              modifiersStyles={{
                start: {
                  backgroundColor: '#f97316',
                  color: 'white',
                },
                end: {
                  backgroundColor: '#f97316',
                  color: 'white',
                },
                inRange: {
                  backgroundColor: '#fed7aa',
                },
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Selectors */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Select value={pickupTime} onValueChange={setPickupTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select pickup time" />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={returnTime} onValueChange={setReturnTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select return time" />
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Return Location Checkbox & Selector */}
      <div className="flex items-center space-x-2 mt-2">
        <Checkbox
          id="return-location"
          checked={returnToDifferentLocation}
          onCheckedChange={(checked) => setReturnToDifferentLocation(!!checked)}
        />
        <label
          htmlFor="return-location"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Return to different location
        </label>
      </div>

      {returnToDifferentLocation && (
        <div className="mt-2">
          <LocationSelector onLocationChange={onLocationChange} custom={true} />
        </div>
      )}
    </div>
  )
}