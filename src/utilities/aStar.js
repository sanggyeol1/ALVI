export const aStar = (grid, startNode, finishNode) => {
    const openSet = [];
    const closedSet = [];
    openSet.push(startNode);
    
    while (openSet.length > 0) {
      openSet.sort((a, b) => a.f - b.f);
      const currentNode = openSet.shift();
      closedSet.push(currentNode);
  
      if (currentNode === finishNode) {
        return closedSet;
      }
  
      const neighbors = getNeighbors(currentNode, grid);
      for (const neighbor of neighbors) {
        if (closedSet.includes(neighbor) || neighbor.isWall) continue;
  
        const tentativeG = currentNode.g + 1;
        let newPath = false;
        if (!openSet.includes(neighbor)) {
          neighbor.h = heuristic(neighbor, finishNode);
          openSet.push(neighbor);
          newPath = true;
        } else if (tentativeG < neighbor.g) {
          newPath = true;
        }
  
        if (newPath) {
          neighbor.g = tentativeG;
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previousNode = currentNode;
        }
      }
    }
    
    return closedSet;
  };
  
  const getNeighbors = (node, grid) => {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors;
  };
  
  const heuristic = (node, finishNode) => {
    const dx = Math.abs(node.col - finishNode.col);
    const dy = Math.abs(node.row - finishNode.row);
    return dx + dy;
  };
  
  export const getNodesInShortestPathOrder = (finishNode) => {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  };
  