// from https://github.com/react-materialize/react-materialize/blob/master/src/idgen.js

let id = 0

export function resetID () {
  id = 0
}

export default function idgen () {
  let oldId = id
  id += 1
  return oldId
}
