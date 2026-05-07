import type { ComputedRef } from "vue";
export interface RadioGroupContext {
  modelValue: ComputedRef<string>;
  name: string;
  updateValue: (value: string) => void;
}