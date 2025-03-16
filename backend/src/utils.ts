/**
 * Returns a random integer between the min and max values (inclusive).
 */
const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default {
    getRandomInt,
};
