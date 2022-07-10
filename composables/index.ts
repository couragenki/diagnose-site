import { useState } from "#app";
import type { Ref } from "vue";

export const useFoo = () => {
  return useState("foo", () => "bar");
};

export const wantToDoStep1 = () => {
    const want = useState("step1", () => []);

    // const want = useState("step1", () => [
    //   { text: "やりたいこと" },
    //   { text: "やりたいこと" },
    // ]);

    const updateWant = (want: Ref<any>) => (value: any) => {
      want.value = value;
    };

    return {
      want: readonly(want),
      updateWant: updateWant(want),
    };
}