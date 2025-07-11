"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DateRange } from "react-day-picker"

interface DatePickerWithRangeProps {
  date?: DateRange
  onDateChange: (date: DateRange) => void
  pickupTime: string
  setPickupTime: (time: string) => void
  returnTime: string
  setReturnTime: (time: string) => void
}

export function DatePickerWithRange({
  date,
  onDateChange,
  pickupTime,
  setPickupTime,
  returnTime,
  setReturnTime,
}: DatePickerWithRangeProps) {
  const defaultDate = {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  }

  const [selectedDate, setSelectedDate] = React.useState<DateRange>(date || defaultDate)
  const [isSelectingStart, setIsSelectingStart] = React.useState(true)

  const timeOptions = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i.toString().padStart(2, "0")
      const minute = j.toString().padStart(2, "0")
      timeOptions.push(`${hour}:${minute}`)
    }
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return

    if (isSelectingStart) {
      setSelectedDate({
        from: date,
        to: undefined
      })
      setIsSelectingStart(false)
    } else {
      if (date < selectedDate.from!) {
        setSelectedDate({
          from: date,
          to: selectedDate.from
        })
      } else {
        setSelectedDate(prev => ({
          from: prev.from!,
          to: date
        }))
      }
      setIsSelectingStart(true)
    }

    if (!isSelectingStart && selectedDate.from) {
      onDateChange({
        from: selectedDate.from,
        to: date
      })
    }
  }

  const isInRange = (date: Date) => {
    if (!selectedDate.from || !selectedDate.to) return false
    return date > selectedDate.from && date < selectedDate.to
  }

  return (
    <div className="grid gap-4">
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
              mode="single"
              defaultMonth={selectedDate?.from}
              selected={isSelectingStart ? selectedDate.from : selectedDate.to}
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Select value={pickupTime} onValueChange={setPickupTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select time" />
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
              <SelectValue placeholder="Select time" />
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
    </div>
  )
}
