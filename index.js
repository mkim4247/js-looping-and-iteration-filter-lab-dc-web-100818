// Code your solution in this file
function findMatching(collection, names) {
  return collection.filter(name => name.toLowerCase() === names.toLowerCase()
  )
}

function fuzzyMatch(collection, namesBeginWith) {
  return collection.filter(function(name) {
    for (const i of name) {
      if (name.charAt(i) === namesBeginWith.charAt(i))
      return true;
    }
  })
}

function matchName(collection, names) {
  return collection.filter(function deepIterator(name) {
    if (typeof name === 'object') {
      for (const key in name) {
        deepIterator(name[key]);
        if (name[key] === names) {
          return true;
        }
      }
    }
  })
}