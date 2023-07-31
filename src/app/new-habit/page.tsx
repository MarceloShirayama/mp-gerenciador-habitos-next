import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewHabitPage() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    await kv.hset("habits", { [habit as string]: {} });

    revalidatePath("/");
    redirect("/");
  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-white text-4xl font-light text-center font-display">
        novo hábito
      </h1>

      <form action={newHabit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="habit"
          id="habit"
          className="p-2 font-sans text-white rounded-md bg-neutral-800"
        />

        <button
          type="submit"
          className={`
      bg-[#45edad] font-display text-neutral-900 font-normal text-2xl p-2
      rounded-md mt-8
      `}
        >
          cadastrar
        </button>

        <button
          className={`
      bg-neutral-800 text-[#f8585b] font-display font-normal text-2xl p-2
      rounded-md mt-8
      `}
        >
          cancelar
        </button>
      </form>
    </main>
  );
}
