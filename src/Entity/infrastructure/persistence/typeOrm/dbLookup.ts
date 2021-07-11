import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IdValue } from "../../../../ObjectValue";
import { Identity, Lookup } from "../../..";

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