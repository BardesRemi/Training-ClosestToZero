import { closestToZero } from "../main/ClosestToZero";

describe ('Test ClosestToZero.ts', () => {

    test('closestToZero', () => {
        const posOnly: Array<number> = [8, 5, 10];
        expect(closestToZero(posOnly)).toBe(5);

        const negIsClosest: Array<number> = [5, 4, -9, 6, -10, -1, 8];
        expect(closestToZero(negIsClosest)).toBe(-1);

        const sameRangeWithPosAndNeg: Array<number> = [8, 2, 3, -2];
        expect(closestToZero(sameRangeWithPosAndNeg)).toBe(2);

        const zeroIsTheWay: Array<number> = [2, 0];
        expect(closestToZero(zeroIsTheWay)).toBe(0);

        const emptyList: Array<number> = [];
        expect(closestToZero(emptyList)).toBe(0);

        const undefList: Array<number> = undefined;
        expect(closestToZero(undefList)).toBe(0);
    });
    
});