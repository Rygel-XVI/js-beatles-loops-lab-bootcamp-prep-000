function theBeatlesPlay(arrayMusician, arrayInstrument) {
<<<<<<< HEAD
  var arrayBeatles = []
  for(var i = 0; i < arrayMusician.length; i++){
    var stringBeatles = `${arrayMusician[i]} plays ${arrayInstrument[i]}`
    arrayBeatles.push(stringBeatles)
  }
  return arrayBeatles
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while(i < facts.length){
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
=======
  var array = {}
  for(var i = 1; i < arrayMusician.length; i++){
    var stringBeatles = '${arrayMusician[i]} plays ${arrayInstrument[i]}'
    console.log(stringBeatles)
    array.push(stringBeatles)
  }
>>>>>>> e48fa6106c0062192ed32cf28739352a927b807e
  return array
}
