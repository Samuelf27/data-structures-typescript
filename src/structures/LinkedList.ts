/**
 * Lista ligada simples (Singly Linked List).
 *
 * | Operação        | Complexidade |
 * |-----------------|--------------|
 * | push / unshift  | O(1)         |
 * | pop             | O(n)         |
 * | shift           | O(1)         |
 * | get / indexOf   | O(n)         |
 */
class ListNode<T> {
  next: ListNode<T> | null = null;
  constructor(public value: T) {}
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  /** Adiciona no fim. O(1) */
  push(value: T): this {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this._size++;
    return this;
  }

  /** Adiciona no início. O(1) */
  unshift(value: T): this {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    if (!this.tail) this.tail = node;
    this._size++;
    return this;
  }

  /** Remove e retorna o primeiro. O(1) */
  shift(): T | undefined {
    if (!this.head) return undefined;
    const node = this.head;
    this.head = node.next;
    if (!this.head) this.tail = null;
    this._size--;
    return node.value;
  }

  /** Valor na posição index. O(n) */
  get(index: number): T | undefined {
    if (index < 0 || index >= this._size) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) current = current!.next;
    return current!.value;
  }

  /** Primeiro índice do valor, ou -1. O(n) */
  indexOf(value: T): number {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === value) return i;
      current = current.next;
      i++;
    }
    return -1;
  }

  toArray(): T[] {
    const out: T[] = [];
    let current = this.head;
    while (current) {
      out.push(current.value);
      current = current.next;
    }
    return out;
  }

  *[Symbol.iterator](): Iterator<T> {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
