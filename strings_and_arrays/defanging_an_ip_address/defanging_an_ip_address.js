/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let arr = address.split('.')

    return arr.join('[.]')
}

console.log(defangIPaddr('1.1.1.1'))
