// ── Navegação entre seções ──
function showSection(name) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const section = document.getElementById('section-' + name);
    if (section) section.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${name}'`)) {
            link.classList.add('active');
        }
    });
}

// ── Produtos ──
let products = [
    { id: 1, name: 'Camiseta Branca P', price: 49.90, stock: 32, category: 'Roupas', emoji: '👕' },
    { id: 2, name: 'Tênis Runner Pro', price: 289.00, stock: 8, category: 'Calçados', emoji: '👟' },
    { id: 3, name: 'Mochila Executiva', price: 179.90, stock: 0, category: 'Acessórios', emoji: '🎒' },
    { id: 4, name: 'Caneca Xmerchant', price: 39.90, stock: 55, category: 'Brindes', emoji: '☕' },
    { id: 5, name: 'Caderno Pautado A5', price: 24.90, stock: 3, category: 'Papelaria', emoji: '📓' },
    { id: 6, name: 'Fone Bluetooth', price: 149.00, stock: 14, category: 'Eletrônicos', emoji: '🎧' },
];

function stockBadge(stock) {
    if (stock === 0) return '<span class="stock-badge badge-out">Esgotado</span>';
    if (stock <= 5) return `<span class="stock-badge badge-low">Baixo (${stock})</span>`;
    return `<span class="stock-badge badge-ok">${stock} un.</span>`;
}

function renderProducts(list) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-thumb">${p.emoji}</div>
      <div class="product-info">
        <p class="product-name" title="${p.name}">${p.name}</p>
        <p class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</p>
        <div class="product-meta">
          <span class="product-stock">${p.category}</span>
          ${stockBadge(p.stock)}
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(query) {
    const q = query.toLowerCase();
    renderProducts(products.filter(p =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ));
}

// ── Modal ──
function openModal() {
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal(event, force) {
    if (force || (event && event.target.id === 'modal-overlay')) {
        document.getElementById('modal-overlay').classList.add('hidden');
    }
}

function addProduct() {
    const inputs = document.querySelectorAll('#modal-overlay input, #modal-overlay select');
    const name = inputs[0].value.trim();
    const price = parseFloat(inputs[1].value) || 0;
    const stock = parseInt(inputs[2].value) || 0;
    const cat = inputs[3].value;

    if (!name) { inputs[0].focus(); return; }

    const emojis = { Roupas: '👕', Eletrônicos: '🎧', Alimentos: '🍎', Acessórios: '🎒' };
    products.push({ id: Date.now(), name, price, stock, category: cat || 'Geral', emoji: emojis[cat] || '📦' });

    renderProducts(products);
    closeModal(null, true);
    inputs.forEach(i => { if (i.tagName === 'INPUT') i.value = ''; });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    // Lê o hash da URL para abrir a seção correta
    const hash = location.hash.replace('#', '');
    const valid = ['produtos', 'config', 'aparencia', 'entrega', 'pagamentos'];
    if (hash && valid.includes(hash)) {
        showSection(hash);
    }
});