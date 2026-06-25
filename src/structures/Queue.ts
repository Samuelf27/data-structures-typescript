/**
 * Fila (Queue) — FIFO (First In, First Out).
 * Implementada com mapa indexado para enqueue/dequeue em O(1) amortizado.
 */
export class Queue<T> {
  private items = new Map<number, T>();
  private head = 0;
  private tail = 0;

  /** Enfileira. O(1) */
  enqueue(value: T): this {
    this.items.set(this.tail, value);
    this.tail++;
    return this;
  }

  /** Desenfileira e retorna o primeiro. O(1) */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const value = this.items.get(this.head);
    this.items.delete(this.head);
    this.head++;
    return value;
  }

  /** Espia o primeiro sem remover. O(1) */
  peek(): T | undefined {
    return this.items.get(this.head);
  }

  get size(): number {
    return this.tail - this.head;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  toArray(): T[] {
    const out: T[] = [];
    for (let i = this.head; i < this.tail; i++) out.push(this.items.get(i)!);
    return out;
  }
}
