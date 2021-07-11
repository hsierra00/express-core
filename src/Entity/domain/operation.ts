import { OperationResult } from "..";

/**
 * 
 */
export interface Operation {
    result: OperationResult;
    info?: string;
    code?: number;
    originalCode?: string;
}