import { PrimaryGeneratedColumn } from "typeorm";
import { Identity } from "../../../Domain";
import { IdValue } from "../../../../ObjectValue";

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