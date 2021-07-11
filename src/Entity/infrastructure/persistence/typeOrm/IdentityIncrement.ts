import { PrimaryGeneratedColumn } from "typeorm";
import { Identity } from "./../../../domain";
import { IdValue } from "./../../../../object-value";

export abstract class IdentityIncrement implements Identity {

    @PrimaryGeneratedColumn()
    id: number;

    /**
     *
     */
    constructor(id: number) {
        this.id = id;
    }

    idValue(): IdValue {
        return new IdValue(this.id);
    }
}