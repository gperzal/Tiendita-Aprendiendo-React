// Funciones auxiliares para el carrito

export function calcularSubtotal(items) {
    return items.reduce((acc, item) => acc + item.price * (item.cantidad ?? 1), 0);
}

export function calcularShipping(items) {
    return items.length > 0 ? 5000 : 0;
    // return items.map(item => item.cantidad > 0 ? 5000 : 0);
}

export function calcularTotal(items) {
    return calcularSubtotal(items) + calcularShipping(items);
}
