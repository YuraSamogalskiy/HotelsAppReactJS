const { readFileSync } = require('fs')
const fs = require('fs')

const data = readFileSync('./pages.json')
let jsons = JSON.parse(data)
console.log(jsons)
const image = readFileSync('./image.json')
let jsonIMG = JSON.parse(image)

let emptyArr = []
for (key in jsons) {
  let arr = []
  let keyJSON = jsons[key]
  keyJSON.name = keyJSON.name.split('').reverse()

  arr.push(keyJSON.name.shift())
  arr.push(keyJSON.name.shift())

  let status = arr.reverse().join('')

  keyJSON.name = keyJSON.name
    .reverse()
    .join('')
    .split(/(?=[А-Я,A-Z])/)
    .join(' ')

  keyJSON.city = keyJSON.city.slice(6)
  keyJSON.status = status

  for (keys in jsonIMG) {
    let keysJSON = jsonIMG[key]
    keyJSON.img = keysJSON.img
  }
  // console.log(keyJSON)
  emptyArr.push(keyJSON)
  console.log(keyJSON)
}

jsonFileHotels = JSON.stringify(emptyArr)

fs.writeFile('hotels.json', jsonFileHotels, function (err, result) {
  if (err) console.log('error', err)
  console.log(result)
})
