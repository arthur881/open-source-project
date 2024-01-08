/*
Calculates the average of a serie of numbers

@param {Number[]} data an array of numbers
@returns {Number} the average of the numbers in the array
*/
export default function calcMoy(data) {
    if (!Array.isArray(data) ||!data.every(Number.isFinite)) {
        return NaN;
    }
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
}
