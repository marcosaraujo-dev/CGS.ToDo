import { Mode } from "./enums";
export const switchMode = (mode: Mode) => {
    switch (mode as Mode) {
        case Mode.TODO:
            mode = Mode.REMINDER;
            break;
        case Mode.REMINDER:
            mode = Mode.TODO;
            break;
    }
}