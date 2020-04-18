export default class {
    static chunk(arr: any[], size: number): any[][] {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    /**
     * Sorts an array of objects by an objects attribute
     * @param data The array to sort
     * @param comparator The attribute to sort, or a function that returns a value
     * @param order The order we want
     * @param type The type of comparison , string or number
     */
    static sortArray = (
        data: Array<any>,
        comparator: string | Function,
        order: 'asc' | 'desc' = 'asc',
        type: 'string' | 'number' = 'string'
    ) => {
        return data.sort((a, b) => {
            if (typeof comparator === 'string') {
                const valA =
                    type === 'string'
                        ? a[comparator]
                        : parseFloat(a[comparator]);
                const valB =
                    type === 'string'
                        ? b[comparator]
                        : parseFloat(b[comparator]);
                if (valA > valB) {
                    return order === 'asc' ? 1 : -1;
                }
                if (valA < valB) {
                    return order === 'asc' ? -1 : 1;
                }
            } else if (typeof comparator === 'function') {
                const valA =
                    type === 'string'
                        ? comparator(a)
                        : parseFloat(comparator(a));
                const valB =
                    type === 'string'
                        ? comparator(b)
                        : parseFloat(comparator(b));
                if (valA > valB) {
                    return order === 'asc' ? 1 : -1;
                }
                if (valA < valB) {
                    return order === 'asc' ? -1 : 1;
                }
            }

            return 0;
        });
    };
}
