import Image from "next/image";
import { DayState } from "./component/day-state";
import Link from "next/link";

const today = new Date();
const todayWeekDay = today.getDay() + 1;
const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const sortedWeekDays = daysOfWeek
  .slice(todayWeekDay)
  .concat(daysOfWeek.slice(0, todayWeekDay));

export default function Home() {
  const habits = {
    "beber água": {
      "2023-07-30": true,
      "2023-07-31": false,
      "2023-08-01": false,
    },
    "estudar programação": {
      "2023-07-30": true,
      "2023-07-31": false,
      "2023-08-01": false,
    },
  };

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
      {habits === null ||
        (Object.keys(habits).length === 0 ? (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Você não tem hábitos cadastrados
          </h1>
        ) : (
          <>
            {Object.entries(habits).map(([habit, habitsStreak]) => (
              <div key={habit} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-light text-white font-sans">
                    {habit}
                  </span>
                  <button>
                    <Image
                      src="/images/trash.svg"
                      width={20}
                      height={20}
                      alt="ícone de lixeira vermelha"
                    />
                  </button>
                </div>

                <div className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                  {sortedWeekDays.map((dayOfWeek) => (
                    <div
                      key={dayOfWeek}
                      className="flex flex-col last:font-bold"
                    >
                      <span className="font-sans text-xs text-white text-center">
                        {dayOfWeek}
                      </span>
                      <DayState day={false} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ))}

      <Link
        href="new-habit"
        className={`
        fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2
        text-neutral-900 bg-[#45edad] font-display font-normal text-2xl
         rounded-md py-2
        `}
      >
        novo hábito
      </Link>
    </main>
  );
}
