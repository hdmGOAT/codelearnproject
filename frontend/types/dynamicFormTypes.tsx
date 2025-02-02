export interface Field {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "textarea"
    | "select"
    | "checkbox"
    | "radio"
    | "file" //
    | "date"
    | "datetime-local" //
    | "month" //
    | "week" //
    | "time" //
    | "range"
    | "color" //
    | "switch"
    | "hidden";
  placeholder?: string;
  options?: SelectOptions[] | RangeOptions;
  defaultValue?: string | boolean;
}

export interface SelectOptions {
  label: string;
  value: string;
}

export interface RangeOptions {
  min: number;
  max: number;
  step: number;
}

export interface Step {
  title: string;
  fields: Field[];
}
