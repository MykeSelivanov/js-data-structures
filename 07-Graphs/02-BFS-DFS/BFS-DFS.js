class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vtx => vtx !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vtx => vtx !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;

        while(this.adjacencyList[vertex].length) {
            let connectedVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, connectedVertex);
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

// Breadth First Search
function breadthFirstSearch(startVertex, graph) {
    const queue = [startVertex];
    const result = [];
    const visited = {};
    visited[startVertex] = true;

    while(queue.length) {
        // shift from queue and push to the result
        let current = queue.shift();
        result.push(current);

        graph.adjacencyList[current].forEach(vertex => {
            if(!visited[vertex]){
                visited[vertex] = true;
                queue.push(vertex);
            }
        });
    }
    return result;
}

// Depth First Search
function depthFirstSearch(startVertex, graph) {
    const result = [];
    const visited = {};

    function helperDepth(vertex) {
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        graph.adjacencyList[vertex].forEach(vertex => {
            if(!visited[vertex]) {
                return helperDepth(vertex);
            }
        })
    }
    helperDepth(startVertex);
    return result;
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');

console.log(breadthFirstSearch('A', graph));
console.log(depthFirstSearch('E', graph));