import {option} from "./option";

export interface choice {
  choiceOf: string,
  type: 'single' | 'multiple',
  options: option[],
}
