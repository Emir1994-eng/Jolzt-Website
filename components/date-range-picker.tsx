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
}

export function DatePickerWithRange({ date, onDateChange }: DatePickerWithRangeProps) {
  // Set default dates if not provided
  const defaultDate = {
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 3)),
  }

  const selectedDate = date || defaultDate

  // Generate time options
  const timeOptions = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 30) {
      const hour = i.toString().padStart(2, "0")
      const minute = j.toString().padStart(2, "0")
      timeOptions.push(`${hour}:${minute}`)
    }
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm mb-2">Pick-up date</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate?.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate?.from ? (
                  format(selectedDate.from, "MMM d, yyyy")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="single"
                defaultMonth={selectedDate?.from}
                selected={selectedDate?.from}
                onSelect={(date) => {
                  if (date) {
                    const adjustedTo = selectedDate.to && date > selectedDate.to
                      ? new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000)
                      : selectedDate.to;

                    onDateChange({
                      from: date,
                      to: adjustedTo,
                    });
                  }
                }}
                numberOfMonths={2}
              />

            </PopoverContent>
          </Popover>
        </div>
        <div>
          <div className="text-sm mb-2">Return date</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !selectedDate?.to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate?.to ? (
                  format(selectedDate.to, "MMM d, yyyy")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={selectedDate?.from}
                selected={selectedDate}
                onSelect={(range) => {
                  if (range?.from && range?.to) {
                    onDateChange(range)
                  } else if (range?.from) {
                    // If only start date is selected, set end date to start date + 3 days
                    onDateChange({
                      from: range.from,
                      to: new Date(range.from.getTime() + 3 * 24 * 60 * 60 * 1000)
                    })
                  }
                }}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Select defaultValue="12:30">
            <SelectTrigger>
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
          <Select defaultValue="08:30">
            <SelectTrigger>
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