
Array.prototype.equals = function (other, callback = (x, y) => (x === y)) {
  // Check the other object is of the same type
  if (other == null) return false
  if (Object.getPrototypeOf(this) !== Object.getPrototypeOf(other)) {
    return false
  }
  if (this.length === undefined || this.length !== other.length) {
    return false
  }
  return Array.prototype.every.call(this, (x, i) => callback(x, other[i]))
}
