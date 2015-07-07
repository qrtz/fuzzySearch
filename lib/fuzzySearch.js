function fuzzySearch(value, array, caseSensitive) {
  'use strict';
  var pattern = caseSensitive === true ? value : value.toLowerCase(),
    patternLength = pattern.length;
  return array.reduce(function(results, current) {
    if (patternLength > current.length) {
      return results
    }

    var lastIndex = -1,
      start = -1,
      str = caseSensitive === true ? current : current.toLowerCase();

    for (var i = 0; i < patternLength; i++) {
      lastIndex = str.indexOf(pattern.charAt(i), lastIndex + 1);

      if (0 > lastIndex) {
        break;
      }

      if (0 > start) {
        start = lastIndex
      }
    }

    if (-1 < lastIndex) {
      results.push({
        input: current,
        length: lastIndex + 1 - start,
        start: start
      })
    }
    return results
  }, []).sort(function(a, b) {
    var diff = a.length - b.length;
    if (0 === diff) {
      diff = a.start - b.start;
      if (0 === diff) {
        return a.input.localeCompare(b.input);
      }
    }
    return diff;
  }).map(function(item) {
    return item.input
  });
}