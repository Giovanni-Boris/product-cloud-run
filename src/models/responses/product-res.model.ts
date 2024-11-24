export class ProductResModel {
  id!: number; // Identificador único del producto

  codigo!: string; // Código único para evitar duplicados

  nombre!: string; // Nombre del producto

  descripcion?: string; // Descripción del producto (opcional)

  cantidad!: number; // Cantidad en inventario

  precioUnitario!: number; // Precio unitario del producto

  categoria!: string; // Categoría a la que pertenece el producto
}
