// Datos para tienda de ecommerce electrónica
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1299990,
        description: 'El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7".',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop',
        category: 'smartphones',
        stock: 15,
        brand: 'Apple'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 1199990,
        description: 'Smartphone premium con S Pen integrado, cámara de 200MP y pantalla Dynamic AMOLED 2X.',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop',
        category: 'smartphones',
        stock: 8,
        brand: 'Samsung'
    },
    {
        id: 3,
        name: 'MacBook Air M3',
        price: 1399990,
        description: 'Laptop ultradelgada con chip M3, pantalla Liquid Retina de 13.6" y hasta 18 horas de batería.',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop',
        category: 'laptops',
        stock: 12,
        brand: 'Apple'
    },
    {
        id: 4,
        name: 'Dell XPS 13',
        price: 999990,
        description: 'Laptop premium con procesador Intel Core i7, 16GB RAM y SSD de 512GB.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
        category: 'laptops',
        stock: 6,
        brand: 'Dell'
    },
    {
        id: 5,
        name: 'Sony WH-1000XM5',
        price: 399990,
        description: 'Audífonos inalámbricos con cancelación de ruido líder en la industria y 30 horas de batería.',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
        category: 'audio',
        stock: 25,
        brand: 'Sony'
    },
    {
        id: 6,
        name: 'iPad Pro 12.9"',
        price: 1099990,
        description: 'Tablet profesional con chip M2, pantalla Liquid Retina XDR y compatibilidad con Apple Pencil.',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop',
        category: 'tablets',
        stock: 10,
        brand: 'Apple'
    },
    {
        id: 7,
        name: 'Nintendo Switch OLED',
        price: 399990,
        description: 'Consola híbrida con pantalla OLED de 7", 64GB de almacenamiento y Joy-Con incluidos.',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop',
        category: 'gaming',
        stock: 18,
        brand: 'Nintendo'
    },
    {
        id: 8,
        name: 'Samsung 4K Smart TV 55"',
        price: 799990,
        description: 'Smart TV 4K UHD con tecnología QLED, HDR10+ y sistema operativo Tizen.',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop',
        category: 'tv',
        stock: 5,
        brand: 'Samsung'
    },
    {
        id: 9,
        name: 'AirPods Pro (2ª Gen)',
        price: 279990,
        description: 'Audífonos inalámbricos con cancelación activa de ruido y audio espacial personalizado.',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop',
        category: 'audio',
        stock: 30,
        brand: 'Apple'
    },
    {
        id: 10,
        name: 'Canon EOS R6 Mark II',
        price: 2499990,
        description: 'Cámara mirrorless de fotograma completo con sensor de 24.2MP y grabación 4K.',
        image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
        category: 'cameras',
        stock: 4,
        brand: 'Canon'
    }
];

// Categorías disponibles
export const categories = [
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'laptops', name: 'Laptops', icon: '💻' },
    { id: 'audio', name: 'Audio', icon: '🎧' },
    { id: 'tablets', name: 'Tablets', icon: '📱' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'tv', name: 'Televisores', icon: '📺' },
    { id: 'cameras', name: 'Cámaras', icon: '📷' }
];

// Marcas disponibles
export const brands = [
    'Apple',
    'Samsung',
    'Dell',
    'Sony',
    'Nintendo',
    'Canon'
];