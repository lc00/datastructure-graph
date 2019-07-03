const graph= {
  you: ['alice', 'bob', 'claire'],
  alice: ['anuj'],
  bob: ['dulop'],
  claire: ['chris', 'coocoo', 'haha'],
  dulop: ['sasha', 'booboo'],
  anuj: ['peewee', 'caboo'],
  chris: [],
  coocoo: ['bobby'],
  haha: ['yeeha'],
  sasha: [],
  booboo: [],
  peewee: [],
  caboo: [],
  bobby: [],
  yeeha: []
}

const graph2 = {
  you: true,
  alice: false,
  bob: false,
  claire: false,
  dulop: false,
  anuj: false,
  chris: false,
  coocoo: false,
  haha: false,
  sasha: false,
  booboo: false,
  peewee: false,
  caboo: false,
  bobby: false,
  yeeha: true
}

let searched = []

let searchQueue = []

function isSeller(graph2, person) {
  return graph2[person] === true
}

function isSearched(person) {
  return searched.indexOf(person) >= 0
}

function findSeller(graph, graph2) {
  let ppl = graph['you'] 

  ppl.forEach((p) => 
    searchQueue.push(p)
  ) 

  // while searchQueue is not empty
  while(searchQueue.length > 0) {

  // shift one
    let person = searchQueue.shift()

  // is the person in search Queue
    let result = isSearched(person)

    if(!result) {      
      searched.push(person)

      let answer = isSeller(graph2, person)

      //  no, is the person a seller
        if(answer)  {
          return person
        }
        else {
          let testing = graph[person]
          testing.forEach((p) => 
            searchQueue.push(p)
          ) 
        }
    }

  }
}

console.log(`The mango seller is ${findSeller(graph, graph2)}`)