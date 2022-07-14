import { useState } from "#app";
import type { Ref } from "vue";

export const useFoo = () => {
  return useState("foo", () => "bar");
};

export const wantToDoStep1 = () => {
    // const want = useState("step1", () => []);

    const want = useState("step1", () => [
      { text: "やってみたいこと" },
      { text: "やってみたいこと" },
    ]);

    const updateWant = (want: Ref<any>) => (value: any) => {
        console.log(want);
        want = value;
    };

    const removeItem = (want: Ref<any>) => (index: number) => {
        console.log(want, index);
        want.value[index].splice(index, 1);
    };
    
    return {
      want: want,
      updateWant: updateWant(want),
      removeItem
    };
}