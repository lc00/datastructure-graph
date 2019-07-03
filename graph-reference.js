 let graph = {
    'copy': {
    content: 'sm-pellet',
    neighbors: [
      {'': {}},
      {'1,0': {
        content: 'sm-pellet',
        neighbors: [
          {'': {}},
          {'2,0': {
            content: 'sm-pellet',
            neighbors: []
          }},
          {'1,1': {}},
          {'0,0':{}}
        ]
      }},
      {'0,1': {}},
      {'': {}}
    ]
  },


  '1,0': {
    content: 'sm-pellet',
    neighbors: ['', '2,0', '1,1', '0,0']
  },
  '2,0': {
    content: 'ghost',
    neighbors: ['', '3,0', '2,1', '1,0']
  },
  '3,0': {
    content: 'big-pellet',
    neighbors: ['', '', '3,1', '2,0']
  },
  '0,1': {
    content: 'sm-pellet',
    neighbors: ['0,0', '1,1', '0,2', '']
  },
  '1,1': {
    content: 'wall',
    neighbors: ['1,0', '2,1', '1,2', '0,1']
  },
  '2,1':{
    content: 'sm-pellet',
    neighbors: ['2,0', '3,1', '2,2', '1,1']
  },
  '3,1':{
    content: 'wall',
    neighbors: ['3,0', '', '3,2', '2,1']
  },
  '0,2': {
    content: 'sm-pellet',
    neighbors: ['0,1', '1,2', '0,3', '']
  },
  '1,2': {
    content: 'wall',
    neighbors: ['1,1', '2,2', '1,3', '0,2']
  },
  '2,2': {
    content: 'sm-pellet',
    neighbors: ['2,1', '3,2', '2,3', '1,2']
  },
  '3,2': {
    content: 'wall',
    neighbors: ['3,1', '', '3,3', '2,2']
  },
  '0,3': {
    content: 'big-pellet',
    neighbors: ['0,2', '1,3', '', '']
  },
  '1,3': {
    content: 'pac-man',
    neighbors: ['1,2', '2,3', '', '0,3']
  },
  '2,3': {
    content: 'sm-pellet',
    neighbors: ['2,2', '3,3', '', '1,3']
  },
  '3,3': {
    content: 'big-pellet',
    neighbors: ['3,2', '', '', '2,3']
  }
}