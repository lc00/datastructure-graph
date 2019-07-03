const graph= {
  you: {
    content: false,
    edges: [
      {alice: {
        content: false,
        edges: [
          {'anuj': 
            {
              content: false,
              edges: ['alice']
            }
          }
        ]
      }},
      {'bob': {
        content: false,
        edges: ['dulop']
      }},
      {'claire': {
        content: false,
        edges: ['chris', 'coocoo', 'haha']
      }}
    ]
  },
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

let you = {
  content: false,
  edges: []
}

let graph = new Graph(you)