// кажется это не нужно вообще
exports.checkProperty = (key, obj) => {
  if (!(key in obj)) {
    return false
  }
  return true
}

exports.map = (obj, func) => {
  const ret = []
  // let index = 0
  for (var key in obj) {
    if (key in obj) { // not use hasOwnProperty а то ругается линтер
      ret.push(func(obj[key], key))
      // index++
    }
  }
  return ret
}
