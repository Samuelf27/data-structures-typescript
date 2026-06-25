/**
 * Pilha (Stack) — LIFO (Last In, First Out).
 * Todas as operações em O(1).
 */
export class Stack<T> {
  private items: T[] = [];

  /** Empilha. O(1) */
  push(value: T): this {
    this.items.push(value);
    return this;
  }

  /** Desempilha e retorna o topo. O(1) */
  pop(): T | undefined {
    return this.items.pop();
  }

  /** Espia o topo sem remover. O(1) */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): T[] {
    return [...this.items];
  }
}
