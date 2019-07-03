// class Graph = {
//   constructor(node) {
//     this[node] = 
//   }
// }



let grid = {
  '0,0': 'sm-pellet',
  '1,0': 'sm-pellet',
  '2,0': 'ghost',
  '0,1': 'sm-pellet',
  '1,1': 'wall',
  '2,1': 'sm-pellet',
  '0,2': 'sm-pellet',
  '1,2': 'pac-man',
  '2,2': 'sm-pellet' 
}

let pathArr = []

function isNeighbor(arrayItem, key) {
  console.log('arrayItem', arrayItem)
  let [x,y] = arrayItem.split(',')

  // let [keyX, keyY] = key.split(',')

  let leftItem = Number(x) - 1 + ',' + Number(y)
  let rightItem = Number(x) + 1 + ',' + Number(y)
  let topItem = Number(x) + ',' + (Number(y) - 1)
  let bottomItem = Number(x) + ',' + (Number(y) + 1)

  console.log('leftItem', leftItem)
  console.log('rightItem', rightItem)
  console.log('topItem', topItem)
  console.log('bottomItem', bottomItem)

  switch (key) {
    case leftItem:
    case rightItem:
    case topItem:
    case bottomItem:
      return true
    default:
      return false
  }


}

let startCellKey = '2,0'

function bfs(grid, startCellKey) {
  let visited = []
  let queue = []

  // add nodes to queue
  queue.push(startCellKey)

  // shift one
  while(queue.length > 0) {
    let key = queue.shift()
    console.log('')
    console.log('key...', key)

      // is it visited
    if(visited.indexOf(key) >= 0)  continue
    else {
    // if no, explore
    // check if cell exist

    
// console.log('meow ')

    // does it have pac-man
    // if yes, return
      if (grid[key] === 'pac-man') {
                // go through each array in pathArr to find if the array's last item is a neighbor for
        // this key
        for (let i=0; i<pathArr.length; i++) {
          let arr = pathArr[i]
          let item
          arr.length <= 1 ? item = arr[0] : item = arr[arr.length-1]

console.log(' pac-man pathArr', pathArr)
console.log('pac-man arr', arr)
console.log('pac-man arr[arr.length-1]', arr[arr.length-1])
console.log('pac-man item!!', item)


        // if yes, add into this array
          if(isNeighbor(item, key))  {
            arr.push(key)
            console.log('!!! pathArr !!!', pathArr)

            return arr
          }

        // else, check the previous item if it's a neighbor
          else {
            //  if yes, create a copy of this array and add key into this array
            if(arr[-2] && isNeighbor(arr[-2], key)) {
              let newArr = JSON.parse(JSON.stringify(arr))
              newArr.push(key)
              pathArr.push(newArr)

              console.log('!!! pathArr !!!', pathArr)

              return newArr
            } 
            else continue
          }
        }
      }
      
    // else, add its neighbors that don't have a wall
      else {

        // go through each array in pathArr to find if the array's last item is a neighbor for
        // this key

        if(pathArr.length === 0)  {
          let arr = []
          arr.push(key)
          pathArr.push(arr)
        }
        else {
          for (let i=0; i<pathArr.length; i++) {
            let arr = pathArr[i]
            let item
            arr.length <= 1 ? item = arr[0] : item = arr[arr.length-1]

  console.log('pathArr', pathArr)
  console.log('arr', arr)
  console.log('arr[arr.length-1]', arr[arr.length-1])
  console.log('item!!', item)
          // if yes, add into this array
            if(isNeighbor(item, key))  {
              arr.push(key)
              break
            }
  
          // else, check the previous item if it's a neighbor
            else {
              //  if yes, create a copy of this array and add key into this array
              let item
              arr.length <= 2 ? item = arr[0] : item = arr[arr.length-2]

              if(isNeighbor(item, key)) {
                let newArr = JSON.parse(JSON.stringify(arr))
                newArr.pop()
                newArr.push(key)
                pathArr.push(newArr)
                break
              } 
              else continue
            }
          }
  
        }

        visited.push(key)

        let coordArr = key.split(',')
        let [ x , y ] = coordArr

        let leftX = x--
        let rightX = x++
        let topY = y--
        let bottomY = y++

        let left = Number(x) - 1 + ',' + Number(y)
        let right = Number(x) + 1 + ',' + Number(y)
        let top = Number(x) + ',' + (Number(y) - 1)
        let bottom = Number(x) + ',' + (Number(y) + 1)

        let neighborArr = []
        neighborArr.push(left)
        neighborArr.push(top)
        neighborArr.push(right)
        neighborArr.push(bottom)  

        neighborArr.forEach(key => {
          if (key in grid && grid[key] !== 'wall') {
            queue.push(key)
  
          }
        })
        
      
        console.log('queue...', queue)    
        console.log('!!! pathArr !!!', pathArr)

      }
        
    }
  }
}

console.log(bfs(grid, startCellKey))