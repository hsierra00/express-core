export class IdValue {

    private id: number | string | undefined;

    /**
     *
     */
    constructor(id?: number | string) {
        this.id = id;
    }

    /**
     * Get the value of IdValue
     */
    public get value(): number | string | undefined {
        return this.id;
    }
}