function sherlockAndAnagrams(s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const sub = s.substring(i, j + 1)
      const key = sub.split('').sort().join('')
      if (map[key]) {
        map[key]++
      } else {
        map[key] = 1
      }
    }
  }
  console.log(map)
  let result = 0
  for (const key in map) {
    console.log('map key', map[key])
    if (map[key] > 1) {
      result += (map[key] * (map[key] - 1)) / 2
    }
  }
  return result
}

