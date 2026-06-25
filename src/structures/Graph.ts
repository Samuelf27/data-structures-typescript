/**
 * Grafo (lista de adjacência), com busca em largura (BFS) e profundidade (DFS).
 *
 * | Operação    | Complexidade |
 * |-------------|--------------|
 * | addVertex   | O(1)         |
 * | addEdge     | O(1)         |
 * | bfs / dfs   | O(V + E)     |
 */
export class Graph<T> {
  private adjacency = new Map<T, Set<T>>();

  constructor(private directed = false) {}

  addVertex(v: T): this {
    if (!this.adjacency.has(v)) this.adjacency.set(v, new Set());
    return this;
  }

  addEdge(a: T, b: T): this {
    this.addVertex(a);
    this.addVertex(b);
    this.adjacency.get(a)!.add(b);
    if (!this.directed) this.adjacency.get(b)!.add(a);
    return this;
  }

  neighbors(v: T): T[] {
    return [...(this.adjacency.get(v) ?? [])];
  }

  get vertices(): T[] {
    return [...this.adjacency.keys()];
  }

  /** Busca em largura a partir de `start`. O(V + E) */
  bfs(start: T): T[] {
    const visited = new Set<T>();
    const order: T[] = [];
    const queue: T[] = [start];
    visited.add(start);
    while (queue.length) {
      const current = queue.shift()!;
      order.push(current);
      for (const next of this.neighbors(current)) {
        if (!visited.has(next)) {
          visited.add(next);
          queue.push(next);
        }
      }
    }
    return order;
  }

  /** Busca em profundidade a partir de `start`. O(V + E) */
  dfs(start: T): T[] {
    const visited = new Set<T>();
    const order: T[] = [];
    const visit = (v: T) => {
      visited.add(v);
      order.push(v);
      for (const next of this.neighbors(v)) {
        if (!visited.has(next)) visit(next);
      }
    };
    if (this.adjacency.has(start)) visit(start);
    return order;
  }
}
