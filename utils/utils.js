function RNG(num) {
    return Math.floor(Math.random() * num);
};

module.exports = {
    generateLink(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const nums = "1234567890";

        const aChars = [chars, nums];
        let str = "";
        for(let i = 0; i < length; i++) {
            let charArr = aChars[RNG(aChars.length)];
            let char = charArr.split("")[RNG(charArr.split("").length)];
            str += (RNG(length) % 2 === 0 ? char.toLocaleLowerCase() : char);
        }
        return str;
    }
};