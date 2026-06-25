type Compare<T> = (a: T, b: T) => number;
const asc = <T>(a: T, b: T): number => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Bubble Sort — O(n²). Didático; estável. Não usar em produção.
 */
export function bubbleSort<T>(arr: T[], compare: Compare<T> = asc): T[] {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (compare(a[j], a[j + 1]) > 0) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return a;
}

/**
 * Merge Sort — O(n log n). Estável; usa O(n) de memória.
 */
export function mergeSort<T>(arr: T[], compare: Compare<T> = asc): T[] {
  if (arr.length <= 1) return [...arr];
  const mid = arr.length >> 1;
  const left = mergeSort(arr.slice(0, mid), compare);
  const right = mergeSort(arr.slice(mid), compare);

  const merged: T[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    merged.push(compare(left[i], right[j]) <= 0 ? left[i++] : right[j++]);
  }
  while (i < left.length) merged.push(left[i++]);
  while (j < right.length) merged.push(right[j++]);
  return merged;
}

/**
 * Quick Sort — O(n log n) médio, O(n²) pior caso. In-place no array copiado.
 */
export function quickSort<T>(arr: T[], compare: Compare<T> = asc): T[] {
  const a = [...arr];
  const sort = (lo: number, hi: number): void => {
    if (lo >= hi) return;
    const pivot = a[hi];
    let i = lo;
    for (let j = lo; j < hi; j++) {
      if (compare(a[j], pivot) < 0) {
        [a[i], a[j]] = [a[j], a[i]];
        i++;
      }
    }
    [a[i], a[hi]] = [a[hi], a[i]];
    sort(lo, i - 1);
    sort(i + 1, hi);
  };
  sort(0, a.length - 1);
  return a;
}
