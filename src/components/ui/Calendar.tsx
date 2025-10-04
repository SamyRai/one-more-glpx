import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  isDateAvailable: (date: Date) => boolean;
}

function Calendar({
  selectedDate,
  onDateSelect,
  isDateAvailable,
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  );
  const startDate = new Date(startOfMonth);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const days = [];
  const day = startDate;
  while (day <= endOfMonth || days.length % 7 !== 0) {
    days.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const isSameDay = (d1: Date, d2: Date | null) => {
    if (!d2) return false;
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {days.map((d, i) => {
          const available = isDateAvailable(d);
          const isCurrentMonth = d.getMonth() === currentMonth.getMonth();
          const isSelected = isSameDay(d, selectedDate);

          return (
            <button
              key={i}
              disabled={!available || !isCurrentMonth}
              onClick={() => onDateSelect(d)}
              className={cn(
                "rounded-full p-2 transition-colors",
                isCurrentMonth ? "text-foreground" : "text-muted-foreground/50",
                available && isCurrentMonth
                  ? "hover:bg-accent hover:text-accent-foreground"
                  : "",
                isSelected
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "",
                !available && isCurrentMonth
                  ? "cursor-not-allowed opacity-50"
                  : "",
              )}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
