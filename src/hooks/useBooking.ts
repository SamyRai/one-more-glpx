import { useState } from 'react';
import { availability, Availability } from '@/data/availability';

export type BookingState = {
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  notes: string;
};

export function useBooking() {
  const [booking, setBooking] = useState<BookingState>({
    date: null,
    time: null,
    name: '',
    email: '',
    notes: '',
  });

  const setDate = (date: Date | null) => {
    setBooking((prev) => ({ ...prev, date, time: null }));
  };

  const setTime = (time: string | null) => {
    setBooking((prev) => ({ ...prev, time }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const getAvailableTimes = (date: Date | null): string[] => {
    if (!date) return [];
    const dateString = date.toISOString().split('T')[0];
    return availability[dateString] || [];
  };

  const isDateAvailable = (date: Date): boolean => {
    const dateString = date.toISOString().split('T')[0];
    return Object.keys(availability).includes(dateString);
  };

  const submitBooking = () => {
    console.log('Booking submitted:', booking);
    // Here you would typically send the data to a server
    alert('Booking successful!');
  };

  return {
    booking,
    setDate,
    setTime,
    handleInputChange,
    getAvailableTimes,
    isDateAvailable,
    submitBooking,
  };
}