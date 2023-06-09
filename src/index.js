
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix === []) return []
    return matrix.reduce(((acc, el, index) => {
        if ( index % 2 === 0) {
            return acc = [...acc, ...el]
        } else {
            for (let i = el.length -1; i >= 0; i--) {
                acc = [...acc, el[i]]
            }
            return acc
        }
    }),[])
}
