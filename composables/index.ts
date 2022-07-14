import { useState } from "#app";
import type { Ref } from "vue";

export const useFoo = () => {
  return useState("foo", () => "bar");
};

export const wantToDoStep1 = () => {

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

export const wantToDoStep2 = () => {
  const admire = useState("step2", () => [
    { person: "", reason: "" },
    { person: "", reason: "" },
    { person: "", reason: "" },
  ]);

  const updateAdmire = (admire: Ref<any>) => (value: any) => {
    admire = value;
  };

  const updatePerson = (admire: Ref<any>) => (index: number, value: any) => {
    admire.value[index].person = value;
  };

  const updateReason = (admire: Ref<any>) => (index: number, value: any) => {
    admire.value[index].reason = value;
  };

  const removeItem = (admire: Ref<any>) => (index: number) => {
    console.log(admire, index);
    admire.value[index].splice(index, 1);
  };

  return {
    admire: admire,
    updateAdmire: updateAdmire(admire),
    updatePerson: updatePerson(admire),
    updateReason: updateReason(admire),
    removeItem,
  };
};