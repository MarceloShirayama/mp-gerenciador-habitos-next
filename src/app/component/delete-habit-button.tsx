"use client";

import Image from "next/image";
import { deleteHabit } from "@/app/actions";

type Props = {
  habit: string;
};

export function DeleteHabitButton({ habit }: Props) {
  return (
    <button onClick={() => deleteHabit(habit)}>
      <Image
        src="/images/trash.svg"
        width={20}
        height={20}
        alt="ícone de lixeira vermelha"
      />
    </button>
  );
}
