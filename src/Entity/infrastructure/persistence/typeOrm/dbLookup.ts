import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IdValue } from "./../../../../object-value";
import { Identity, Lookup } from "./../../../domain";

export abstract class DbLookup implements Lookup, Identity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    /**
     *
     */
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    idValue(): IdValue {
        return new IdValue(this.id);
    }
}