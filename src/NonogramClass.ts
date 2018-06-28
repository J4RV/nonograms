import {arrayEquals} from './prototypes/arrayEquals'

class Nonogram {
  width: number
  height: number
  matrix: boolean[/*row*/][/*column*/]

  constructor (height:number, width:number, matrix: boolean[][]) {
    this.width = width
    this.height = height
    if (matrix) {this.matrix = matrix}
    else {
      this.matrix = []
      for(let r:number = 0; r < height; r++) {
        this.matrix[r] = []
        for(let c:number = 0; c < width; c++) {
            this.matrix[r][c] = false
        }
      }
    }
  }

  toggle (row:number, column:number) {
    const newMatrix = this.matrix.slice()
    newMatrix[row] = this.matrix[row].slice()
    newMatrix[row][column] = !newMatrix[row][column]
    return new Nonogram(this.height, this.width, newMatrix)
  }

  get (row:number, column:number) {
    return this.matrix[row][column]
  }

  invert () {
    const invertedMatrix = this.matrix.map(row => (row.map(value => !value)))
    return new Nonogram(this.height, this.width, invertedMatrix)
  }

  isCorrect (rowsHints:boolean[][], columnsHints:boolean[][]) {
    // Check rows
    for (let i = 0; i < rowsHints.length; i++) {
      console.log(arrayEquals)
      console.log(rowsHints[i])
      console.log(this.getMarkedRow(i))
      if (arrayEquals(rowsHints[i], this.getMarkedRow(i)) === false) {
        return false
      }
    }
    // Check columns
    for (let i = 0; i < columnsHints.length; i++) {
      if (arrayEquals(columnsHints[i], this.getMarkedColumn(i)) === false) {
        return false
      }
    }
    // All hints are correct
    return true
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
