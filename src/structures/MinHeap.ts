/**
 * Min-Heap (fila de prioridade mínima) baseada em array.
 *
 * | Operação | Complexidade |
 * |----------|--------------|
 * | push     | O(log n)     |
 * | pop      | O(log n)     |
 * | peek     | O(1)         |
 */
export class MinHeap<T> {
  private heap: T[] = [];

  constructor(private compare: (a: T, b: T) => number = defaultCompare) {}

  get size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  /** Menor elemento sem remover. O(1) */
  peek(): T | undefined {
    return this.heap[0];
  }

  /** Insere e sobe (bubble up). O(log n) */
  push(value: T): this {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.compare(this.heap[i], this.heap[parent]) >= 0) break;
      this.swap(i, parent);
      i = parent;
    }
    return this;
  }

  /** Remove e retorna o menor, reorganizando (sink down). O(log n) */
  pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return top;
  }

  private sinkDown(i: number): void {
    const n = this.heap.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;
      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
      if (smallest === i) break;
      this.swap(i, smallest);
      i = smallest;
    }
  }

  private swap(a: number, b: number): void {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
