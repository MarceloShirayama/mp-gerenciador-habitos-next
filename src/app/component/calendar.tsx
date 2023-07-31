"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "./arrow-icon";
import { DayState } from "./day-state";
import { toggleHabit } from "@/app/actions";

type Props = {
  currentMonth: number;
  currentYear: number;
  habit: string;
  habitStreak: Record<string, boolean> | null;
};

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function Calendar({
  currentMonth,
  currentYear,
  habit,
  habitStreak,
}: Props) {
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const daysInMonth = getDaysInMonth(month, year);

  const goToPreviousMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  useEffect(() => {}, [month, year]);

  return (
    <div className="w-full mt-1 rounded-md bg-neutral-800">
      <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
        <button onClick={goToPreviousMonth}>
          <ArrowIcon width={16} height={16} className="stroke-neutral-400" />
        </button>
        <span>
          {months[month]} de {year}
        </span>
        <button onClick={goToNextMonth}>
          <ArrowIcon
            width={16}
            height={16}
            className="rotate-180 stroke-neutral-400"
          />
        </button>
      </div>

      <div className="grid w-full grid-cols-7 mt-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex flex-col items-center p-2">
            <span className="font-sans text-xs font-light text-neutral-200">
              {day}
            </span>
          </div>
        ))}

        {daysInMonth.map((day, i) => (
          <div
            key={i}
            onClick={() =>
              toggleHabit({
                habit,
                habitStreak,
                date: getDayString(day, month, year),
                done: habitStreak
                  ? habitStreak[getDayString(day, month, year)]
                  : true,
              })
            }
            className="flex flex-col items-center p-1"
          >
            <span className="font-sans text-xs font-light text-neutral-400">
              {day?.getDate()}
            </span>
            {day && (
              <DayState
                day={
                  habitStreak
                    ? habitStreak[getDayString(day, month, year)]
                    : undefined
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
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

function getDayString(day: Date, month: number, year: number) {
  const monthMore1With2NumbersToString = (month + 1)
    .toString()
    .padStart(2, "0");
  const dayWith2NumbersToString = day.getDate().toString().padStart(2, "0");
  const dayToString = `${year.toString()}-${monthMore1With2NumbersToString}-${dayWith2NumbersToString}`;

  return dayToString;
}
