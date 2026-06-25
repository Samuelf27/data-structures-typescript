/**
 * Árvore Binária de Busca (Binary Search Tree).
 *
 * | Operação | Médio    | Pior caso |
 * |----------|----------|-----------|
 * | insert   | O(log n) | O(n)      |
 * | has      | O(log n) | O(n)      |
 *
 * Aceita um comparador opcional (padrão: ordem numérica/string nativa).
 */
class TreeNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  constructor(public value: T) {}
}

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;
  private _size = 0;

  constructor(private compare: (a: T, b: T) => number = defaultCompare) {}

  get size(): number {
    return this._size;
  }

  /** Insere mantendo a propriedade de busca. Ignora duplicados. */
  insert(value: T): this {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      this._size++;
      return this;
    }
    let current = this.root;
    while (true) {
      const cmp = this.compare(value, current.value);
      if (cmp === 0) return this; // duplicado
      if (cmp < 0) {
        if (!current.left) { current.left = node; break; }
        current = current.left;
      } else {
        if (!current.right) { current.right = node; break; }
        current = current.right;
      }
    }
    this._size++;
    return this;
  }

  has(value: T): boolean {
    let current = this.root;
    while (current) {
      const cmp = this.compare(value, current.value);
      if (cmp === 0) return true;
      current = cmp < 0 ? current.left : current.right;
    }
    return false;
  }

  /** Percurso em-ordem (in-order) → valores ordenados. */
  inOrder(): T[] {
    const out: T[] = [];
    const visit = (node: TreeNode<T> | null) => {
      if (!node) return;
      visit(node.left);
      out.push(node.value);
      visit(node.right);
    };
    visit(this.root);
    return out;
  }
}

function defaultCompare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
