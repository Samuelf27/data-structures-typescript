import { describe, it, expect } from 'vitest';
import { LinkedList } from '../src/structures/LinkedList';
import { Stack } from '../src/structures/Stack';
import { Queue } from '../src/structures/Queue';
import { BinarySearchTree } from '../src/structures/BinarySearchTree';
import { MinHeap } from '../src/structures/MinHeap';
import { Graph } from '../src/structures/Graph';

describe('LinkedList', () => {
  it('push, shift e ordem', () => {
    const list = new LinkedList<number>();
    list.push(1).push(2).push(3).unshift(0);
    expect(list.toArray()).toEqual([0, 1, 2, 3]);
    expect(list.size).toBe(4);
    expect(list.shift()).toBe(0);
    expect(list.get(0)).toBe(1);
    expect(list.indexOf(3)).toBe(2);
    expect([...list]).toEqual([1, 2, 3]);
  });
});

describe('Stack (LIFO)', () => {
  it('push/pop/peek', () => {
    const s = new Stack<string>();
    s.push('a').push('b');
    expect(s.peek()).toBe('b');
    expect(s.pop()).toBe('b');
    expect(s.pop()).toBe('a');
    expect(s.isEmpty()).toBe(true);
  });
});

describe('Queue (FIFO)', () => {
  it('enqueue/dequeue', () => {
    const q = new Queue<number>();
    q.enqueue(1).enqueue(2).enqueue(3);
    expect(q.peek()).toBe(1);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.size).toBe(1);
  });
});

describe('BinarySearchTree', () => {
  it('insere e percorre in-order ordenado', () => {
    const t = new BinarySearchTree<number>();
    [5, 3, 8, 1, 4, 7, 9, 3].forEach((n) => t.insert(n));
    expect(t.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 9]); // duplicado ignorado
    expect(t.has(7)).toBe(true);
    expect(t.has(6)).toBe(false);
    expect(t.size).toBe(7);
  });
});

describe('MinHeap', () => {
  it('sempre retorna o menor', () => {
    const h = new MinHeap<number>();
    [5, 1, 8, 3, 9, 2].forEach((n) => h.push(n));
    const out: number[] = [];
    while (!h.isEmpty()) out.push(h.pop()!);
    expect(out).toEqual([1, 2, 3, 5, 8, 9]);
  });
});

describe('Graph', () => {
  it('BFS e DFS', () => {
    const g = new Graph<string>();
    g.addEdge('A', 'B').addEdge('A', 'C').addEdge('B', 'D').addEdge('C', 'D');
    expect(g.bfs('A')).toEqual(['A', 'B', 'C', 'D']);
    expect(g.dfs('A')).toEqual(['A', 'B', 'D', 'C']);
    expect(g.neighbors('A').sort()).toEqual(['B', 'C']);
  });
});
