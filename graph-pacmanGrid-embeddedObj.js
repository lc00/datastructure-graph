let data = {
  '0,0': {
    content: 'sm-pellet',
    neighbors: [
      {'': {}},
      {'': {}},
      {'1,0': {
        content: 'sm-pellet',
        neighbors: [
          {'0,0': graph},
          {'': {}},
          {'': {}},
          {'1,1': {
            content: 'sm-pellet',
            neighbors: [
              {'0,1': graph['0,0'].neighbors['0,1']},
              {'1,0': graph['0,0'].neighbors['1,0']},
              {'': {}},
              {'': {}}
            ]
          }}
        ]
      }},
      {'0,1': {
        content: 'sm-pellet',
        neighbors: [
          {'': {}},
          {'0,0': graph['0,0']},
          {'1,1': graph['0,0'].neighbors['1,1']},
          {'': {}}
        ]
      }}      
    ]
  }
}

// let content = 'sm-pellet'

class Graph {
  constructor(spec) {
    let { node, content, neighbors } = spec

    this[node] = {
      content: content,
      neighbors: []
    }

    neighbors.forEach((neighbor) => {
      if(neighbor === '') this[node].neighbors.push({'': {}})
      else {
        this[node].neighbors.push(
          {
            content: content,
            neighbors: [
              
            ]
          }
        )
      }
    })


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
let spec = {
  node: ['0,0'],
  content: 'sm-pellet',
  neighbors: ['', '', '1,0', '0,1']
}
let graph = new Graph(spec)