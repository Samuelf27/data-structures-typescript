import { describe, it, expect } from 'vitest';
import { bubbleSort, mergeSort, quickSort } from '../src/algorithms/sorting';
import { binarySearch, linearSearch } from '../src/algorithms/searching';

const input = [5, 2, 9, 1, 5, 6, 3, 8, 7, 0, 4];
const sorted = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

describe('Ordenação', () => {
  it.each([
    ['bubbleSort', bubbleSort],
    ['mergeSort', mergeSort],
    ['quickSort', quickSort],
  ])('%s ordena corretamente e não muta a entrada', (_name, fn) => {
    const copy = [...input];
    expect(fn(input)).toEqual(sorted);
    expect(input).toEqual(copy); // imutável
  });

  it('aceita comparador customizado (decrescente)', () => {
    expect(quickSort([1, 3, 2], (a, b) => b - a)).toEqual([3, 2, 1]);
  });

  it('lida com arrays vazios e unitários', () => {
    expect(mergeSort([])).toEqual([]);
    expect(quickSort([42])).toEqual([42]);
  });
});

describe('Busca', () => {
  it('binarySearch encontra e retorna -1 quando ausente', () => {
    expect(binarySearch(sorted, 7)).toBe(8);
    expect(binarySearch(sorted, 100)).toBe(-1);
  });

  it('linearSearch encontra em array não ordenado', () => {
    expect(linearSearch(input, 9)).toBe(2);
    expect(linearSearch(input, 100)).toBe(-1);
  });
});
