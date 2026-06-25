type Compare<T> = (a: T, b: T) => number;
const asc = <T>(a: T, b: T): number => (a < b ? -1 : a > b ? 1 : 0);

/**
 * Busca binária — O(log n). Exige um array **ordenado**.
 * Retorna o índice do alvo ou -1.
 */
export function binarySearch<T>(sorted: T[], target: T, compare: Compare<T> = asc): number {
  let lo = 0;
  let hi = sorted.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const cmp = compare(sorted[mid], target);
    if (cmp === 0) return mid;
    if (cmp < 0) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

/**
 * Busca linear — O(n). Funciona em qualquer array.
 */
export function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
