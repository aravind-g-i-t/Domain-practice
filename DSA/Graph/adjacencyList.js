class Graph{
    constructor(){
        this.adjacencyList={}
    }


    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }

    addEdge(vertex2,vertex1){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            if(!this.adjacencyList[vertex1].includes(vertex2)){
                this.adjacencyList[vertex1].push(vertex2);
            }
            if(!this.adjacencyList[vertex2].includes(vertex1)){
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
        
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(vertex=>vertex!==vertex2)
        }

        if(this.adjacencyList[vertex2] && this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(vertex=>vertex!==vertex1)
        }
        
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let ver of this.adjacencyList[vertex]){
            this.adjacencyList[ver]=this.adjacencyList[ver].filter(ele=>ele!==vertex)
        }
        delete this.adjacencyList[vertex]
    }

    print(){
        console.log(this.adjacencyList);
        
    }
}


const graph=new Graph;

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("A", "B");
// graph.removeVertex('A')
graph.removeEdge('A','C')

graph.print();