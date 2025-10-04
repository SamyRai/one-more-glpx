import * as React from 'react';
import { useBooking } from '@/hooks/useBooking';
import { Calendar } from '@/components/ui/Calendar';
import { TimeSlot } from '@/components/ui/TimeSlot';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

function BookingForm() {
  const {
    booking,
    setDate,
    setTime,
    handleInputChange,
    getAvailableTimes,
    isDateAvailable,
    submitBooking,
  } = useBooking();

  const availableTimes = getAvailableTimes(booking.date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitBooking();
  };

  return (
    <div className="mx-auto max-w-4xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>1. Select a Date</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  selectedDate={booking.date}
                  onDateSelect={setDate}
                  isDateAvailable={isDateAvailable}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>2. Select a Time</CardTitle>
              </CardHeader>
              <CardContent>
                {booking.date ? (
                  <TimeSlot
                    availableTimes={availableTimes}
                    selectedTime={booking.time}
                    onTimeSelect={setTime}
                  />
                ) : (
                  <p className="text-muted-foreground">
                    Please select a date first.
                  </p>
                )}
              </CardContent>
            </Card>

            {booking.time && (
              <Card>
                <CardHeader>
                  <CardTitle>3. Your Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={booking.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={booking.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={booking.notes}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Confirm Booking
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export { BookingForm };