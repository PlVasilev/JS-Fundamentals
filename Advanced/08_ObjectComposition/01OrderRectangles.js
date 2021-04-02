function orderRectangles(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
               return this.width * this.height
            },
            compareTo: function (otherRect) {
                let areaDiff = otherRect.area() - this.area();
                if (areaDiff === 0){
                    return otherRect.width - this.width;
                }
                return areaDiff;
                // return areaDiff || otherRect.width - this.width
            }
        }
    }

    return matrix.sort((a,b) => a.compareTo(b))
}
orderRectangles([[10,5], [3,20], [5,12]]);