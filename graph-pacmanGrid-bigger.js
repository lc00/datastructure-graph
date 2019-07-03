const graph= {
  '0,0': {
    content: 'sm-pellet',
    neighbors: [
      {'': {}},
      {'':{}},
      {'1,0': {
        content: 'sm-pellet',
        neighbors: [
          {graph},
          {'': {}},
          {'2,0': {
            content: 'sm-pellet',
            neighbors: [
              {'1,0': graph['0,0'].neighbors[2]},
              {'':{}},
              {
                '3,0': {
                  content: 'sm-pellet',
                  neighbors: []
                }
              },
              {'2,1': {
                content: 'sm-pellet',
                neighbors: []
              }}
            ]
          }},
          {'1,1': {}}
        ]
      }},
      {'0,1': {
        content: 'sm-pellet',
        neighbors: [
          {'': {}},
          {graph},
          {'1,1': {}},
          {'0,2': {}}
        ]
      }}
    ]
  }
}


function bfs(graph) {
  let searched = {}
  let queue = []
  let firstNodeKey = '0,0'
  let cell
  let paths = []

  //add the first node into the queue
  let node = graph[firstNodeKey]
  queue.push(node)

  // while loop
  while(!queue.length > 0) {
//  shift the first item off of the queue
    cell = queue.shift()
    let key = Object.keys(cell)[0]
//  check if the item is in the searched object
//    if yes, skip
    if(key in cell) continue
//    else
    else{
      // add to searched
      searched[key] = ''
//      check if this is the one we are looking for
//        if yes, return
//        else
//          add its neighbor      
      if(cell[key].content === 'pacman') return key
      else {
        cell[key].neighbors.forEach(neighbor => {
          queue.push(neighbor)
        })
      }
    }


  }


}






class Graph {
  constructor(node) {
    this.node = {}
  }

  addNode(node) {
    this.node
  }

  addEdge(node1, node2) {

  }

  removeEdge(node1, node2) {

  }

  removeNode(node) {

  }
}
let graph = new Graph(you)