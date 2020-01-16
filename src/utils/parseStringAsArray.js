module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(array_item => array_item.trim())
}