import { Command } from "./command";

export interface CommandHandle {
    handle(command: Command): void;
}