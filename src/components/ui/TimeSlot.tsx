import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface TimeSlotProps {
  availableTimes: string[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

function TimeSlot({
  availableTimes,
  selectedTime,
  onTimeSelect,
}: TimeSlotProps) {
  if (availableTimes.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No available times for this date.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {availableTimes.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? 'default' : 'outline'}
          onClick={() => onTimeSelect(time)}
          className="w-full"
        >
          {time}
        </Button>
      ))}
    </div>
  );
}

export { TimeSlot };