class Nonogram {
  width:number
  height: number
  matrix: boolean[][] // [row][column]

  constructor (width:number, height:number, matrix: boolean[][]) {
    this.width = width
    this.height = height
    if (matrix) {this.matrix = matrix}
    else {
      this.matrix = []
      for(let r:number = 0; r < width; r++) {
        this.matrix[r] = []
        for(let c:number = 0; c < height; c++) {
            this.matrix[r][c] = false
        }
      }
    }
  }

  toggle (row:number, column:number) {
    const newMatrix = this.matrix.slice()
    newMatrix[row] = this.matrix[row].slice()
    newMatrix[row][column] = !newMatrix[row][column]
    return new Nonogram(this.width, this.height, newMatrix)
  }

  get (row:number, column:number) {
    return this.matrix[row][column]
  }

  getMarkedRow (index:number) {
    return this._calculateFromArray(this._getRow(index))
  }

  getMarkedColumn (index:number) {
    return this._calculateFromArray(this._getColumn(index))
  }

  _getRow (index:number) {
    return this.matrix[index]
  }

  _getColumn (index:number) {
    return this.matrix.map(row => row[index])
  }

  _calculateFromArray (squares:boolean[]) { 
    let res:number[] = []
    let acum:number = 0
    squares.forEach(square => {
      if (square) {
        acum++
      }
      else {
        if (acum > 0) {
          res.push(acum)
          acum = 0
        }
      }
    })
    if (acum > 0) {
      res.push(acum)
      acum = 0
    }
    return res
  }
  
}

export default Nonogram
