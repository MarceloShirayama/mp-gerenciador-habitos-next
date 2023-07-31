import { ArrowIcon } from "@/app/component/arrow-icon";
import { Calendar } from "@/app/component/calendar";
import { kv } from "@vercel/kv";
import Link from "next/link";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export default async function HabitPage({
  params: { habit_name },
}: {
  params: { habit_name: string };
}) {
  const decodedHabitName = decodeURI(habit_name);
  const habitStreak = (await kv.hget("habits", decodedHabitName)) as Record<
    string,
    boolean
  > | null;

  return (
    <main className="container relative flex flex-col gap-4 px-10 pt-6">
      <h1 className="text-white text-2xl font-light text-center font-display">
        {decodedHabitName}
      </h1>

      <Link
        href="/"
        className="flex items-center font-sans text-xs text-neutral-300 gap-1"
      >
        <ArrowIcon width={16} height={16} />
        voltar
      </Link>

      <Calendar
        currentMonth={currentMonth}
        currentYear={currentYear}
        habit={decodedHabitName}
        habitStreak={habitStreak}
      />
    </main>
  );
}

// https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object
function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const dayOfWeekOfFirstDayOfMonth = date.getDay();
  const numberOfEmptyDays = Array(dayOfWeekOfFirstDayOfMonth).fill(null);
  const days = [...numberOfEmptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
