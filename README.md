<h1 align="center">🧮 data-structures-typescript</h1>

<p align="center">
Estruturas de dados e algoritmos clássicos implementados em <b>TypeScript</b> — tipagem genérica, testes e complexidade (Big-O) documentada.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://github.com/Samuelf27/data-structures-typescript/actions/workflows/ci.yml/badge.svg"/>
  <img src="https://img.shields.io/badge/tests-13%20passing-34d399?style=flat"/>
  <img src="https://img.shields.io/badge/dependencies-0-blue?style=flat"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat"/>
</p>

---

## 📌 Sobre

Implementações **do zero**, genéricas e tipadas, das estruturas de dados e algoritmos que mais aparecem em estudos de Ciência da Computação e entrevistas técnicas. Cada estrutura documenta sua complexidade e é coberta por testes.

## 🧱 Estruturas de dados

| Estrutura | Operações principais | Complexidade |
|---|---|---|
| **LinkedList** | push / shift / get / indexOf | O(1) – O(n) |
| **Stack** (LIFO) | push / pop / peek | O(1) |
| **Queue** (FIFO) | enqueue / dequeue / peek | O(1) |
| **BinarySearchTree** | insert / has / inOrder | O(log n) médio |
| **MinHeap** | push / pop / peek | O(log n) |
| **Graph** | addEdge / bfs / dfs | O(V + E) |

## ⚙️ Algoritmos

| Algoritmo | Tipo | Complexidade |
|---|---|---|
| **bubbleSort** | Ordenação | O(n²) |
| **mergeSort** | Ordenação | O(n log n) |
| **quickSort** | Ordenação | O(n log n) médio |
| **binarySearch** | Busca | O(log n) |
| **linearSearch** | Busca | O(n) |

## 🚀 Uso

```ts
import { MinHeap, quickSort, Graph } from '@samuelf27/data-structures';

quickSort([5, 2, 9, 1]); // [1, 2, 5, 9]

const heap = new MinHeap<number>();
heap.push(5).push(1).push(3);
heap.pop(); // 1

const g = new Graph<string>();
g.addEdge('A', 'B').addEdge('B', 'C');
g.bfs('A'); // ['A', 'B', 'C']
```

Todas as estruturas são **genéricas** e aceitam um **comparador** customizado quando faz sentido.

## 🛠️ Desenvolvimento

```bash
npm install
npm test          # 13 testes (Vitest)
npm run typecheck
npm run build     # dist/ (ESM + CJS + .d.ts)
```

## 📄 Licença

[MIT](LICENSE) © Samuel Ferreira

---

<p align="center">
  <a href="https://github.com/Samuelf27">GitHub</a> · <a href="https://www.linkedin.com/in/samuel-ferreira27/">LinkedIn</a>
</p>
