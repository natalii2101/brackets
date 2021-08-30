module.exports = function check(str, bracketsConfig) {
    let arrayNew = [];
    if (str.length % 2 === 1) { return false; }
    for (let i = 0; i <= str.length - 1; i++) {
        let isFound = false,
            item = 0;
        while (item < bracketsConfig.length) {
            if (str[i] === bracketsConfig[item][0]) {
                isFound = true;
                if (bracketsConfig[item][0] === bracketsConfig[item][1] &&
                    arrayNew[arrayNew.length - 1] === bracketsConfig[item][0]) {
                        arrayNew.pop();
                        break;
                }
                arrayNew.push(bracketsConfig[item][1]);
                break;
            }
            item++;
        }
        if (isFound === false) {
            if (arrayNew.length === 0 || str[i] != arrayNew[arrayNew.length - 1]) { return false; }
            arrayNew.pop();
        }
    }
    return arrayNew.length === 0 ? true : false;
}
