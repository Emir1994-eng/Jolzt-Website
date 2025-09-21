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

  const defaultDate = {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  }

  const [selectedDate, setSelectedDate] = React.useState<DateRange>(date || defaultDate)
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

      if (isSelectingStart) {
        setSelectedDate({
          from: newDate,
          to: undefined,
        })
        setIsSelectingStart(false)
      } else {
        const fromDate = selectedDate.from || newDate
        const toDate = newDate

        if (toDate < fromDate) {
          setSelectedDate({
            from: toDate,
            to: fromDate,
          })
          onDateChange({
            from: toDate,
            to: fromDate,
          })
        } else {
          setSelectedDate({
            from: fromDate,
            to: toDate,
          })
          onDateChange({
            from: fromDate,
            to: toDate,
          })
        }
        setIsSelectingStart(true)
      }
    },
    [selectedDate, isSelectingStart, onDateChange]
  )

  const isInRange = React.useCallback(
    (dateToCheck: Date) => {
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
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate?.from ? (
                selectedDate.to ? (
                  <>
                    {format(selectedDate.from, "MMM d, yyyy")} -{" "}
                    {format(selectedDate.to, "MMM d, yyyy")}
                  </>
                ) : (
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
              mode="range"
              defaultMonth={selectedDate?.from}
              selected={selectedDate}
              onSelect={handleDateSelect}
              numberOfMonths={2}
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
          <LocationSelector onLocationChange={onLocationChange} />
        </div>
      )}
    </div>
  )
}