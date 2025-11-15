// Carregar dados da empresa
let companyData = {};

// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', async () => {
    await loadCompanyData();
    setupThemeToggle();
    setupMobileMenu();
    updateCurrentYear();
});

// Carregar dados da empresa do arquivo JSON
async function loadCompanyData() {
    try {
        const response = await fetch('data/company-data.json');
        companyData = await response.json();
        updatePageContent();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        useDefaultData();
    }
}

// Usar dados padrão
function useDefaultData() {
    companyData = {
        name: "Minha Empresa",
        logo: "",
        phone: "(00) 00000-0000",
        whatsapp: "",
        email: "contato@empresa.com",
        address: "Rua Exemplo, 123 - Cidade, Estado",
        cnpj: "",
        mapsLink: "",
        mapsEmbed: "",
        description: "Descrição da sua empresa aqui.",
        heroTitle: "Bem-vindo à Nossa Empresa",
        heroSubtitle: "Qualidade e excelência em nossos serviços",
        businessHours: [],
        paymentMethods: [],
        socialMedia: [],
        gallery: [],
        offers: [],
        catalog: [],
        whatsappCatalogLink: "",
        enableWhatsappButtons: true
    };
    updatePageContent();
}

// Atualizar conteúdo da página
function updatePageContent() {
    // Informações básicas
    document.getElementById('site-title').textContent = companyData.name;
    document.getElementById('company-name').textContent = companyData.name;
    document.getElementById('footer-company-name').textContent = companyData.name;
    
    // Logo
    const headerLogo = document.getElementById('header-logo');
    const showcaseLogo = document.getElementById('showcase-logo');
    
    if (companyData.logo) {
        headerLogo.src = companyData.logo;
        headerLogo.classList.add('visible');
        showcaseLogo.src = companyData.logo;
        showcaseLogo.classList.add('visible');
    }
    
    // Hero
    document.getElementById('hero-title').textContent = companyData.heroTitle;
    document.getElementById('hero-subtitle').textContent = companyData.heroSubtitle;
    
    // Sobre
    document.getElementById('about-description').textContent = companyData.description;
    document.getElementById('company-phone').textContent = companyData.phone;
    document.getElementById('company-email').textContent = companyData.email;
    
    // Endereço e Maps
    document.getElementById('company-address').textContent = companyData.address;
    
    if (companyData.mapsLink) {
        const mapsLinkEl = document.getElementById('maps-link');
        mapsLinkEl.href = companyData.mapsLink;
        // Garantir que o link funciona
        mapsLinkEl.addEventListener('click', function(e) {
            // Não prevenir o comportamento padrão - deixar o link funcionar normalmente
            window.open(this.href, '_blank');
            e.preventDefault(); // Prevenir apenas depois de abrir
        });
    }
    
    if (companyData.mapsEmbed) {
        loadMap();
    }
    
    // CNPJ
    if (companyData.cnpj) {
        document.getElementById('company-cnpj').textContent = `CNPJ: ${companyData.cnpj}`;
    }
    
    // Horário de funcionamento
    loadBusinessHours();
    
    // Formas de pagamento
    loadPaymentMethods();
    
    // Galeria
    loadGallery();
    
    // Ofertas
    loadOffers();
    
    // Catálogo
    loadCatalog();
    
    // Redes sociais
    loadSocialMedia();
}

// Carregar horário de funcionamento
function loadBusinessHours() {
    const hoursContainer = document.getElementById('business-hours');
    hoursContainer.innerHTML = '';
    
    if (!companyData.businessHours || companyData.businessHours.length === 0) {
        hoursContainer.innerHTML = '<p style="color: var(--text-color);">Horário não informado.</p>';
        return;
    }
    
    companyData.businessHours.forEach(item => {
        const hourItem = document.createElement('div');
        hourItem.className = 'hours-item';
        
        const isClosed = item.closed || !item.open || !item.close;
        
        hourItem.innerHTML = `
            <span class="hours-day">${item.day}</span>
            <span class="hours-time ${isClosed ? 'closed' : ''}">
                ${isClosed ? 'Fechado' : `${item.open} - ${item.close}`}
            </span>
        `;
        
        hoursContainer.appendChild(hourItem);
    });
}

// Carregar formas de pagamento
function loadPaymentMethods() {
    const paymentContainer = document.getElementById('payment-methods');
    paymentContainer.innerHTML = '';
    
    if (!companyData.paymentMethods || companyData.paymentMethods.length === 0) {
        paymentContainer.innerHTML = '<p style="color: var(--text-color);">Formas de pagamento não informadas.</p>';
        return;
    }
    
    const paymentIcons = {
        'PIX': 'fa-pix',
        'Dinheiro': 'fa-money-bill-wave',
        'Cartão de Crédito': 'fa-credit-card',
        'Cartão de Débito': 'fa-credit-card',
        'Transferência': 'fa-exchange-alt',
        'Boleto': 'fa-barcode'
    };
    
    companyData.paymentMethods.forEach(method => {
        const paymentItem = document.createElement('div');
        paymentItem.className = 'payment-item';
        const icon = paymentIcons[method] || 'fa-check-circle';
        
        // PIX usa fa-brands, os outros usam fas
        const iconClass = method === 'PIX' ? 'fa-brands' : 'fas';
        
        paymentItem.innerHTML = `
            <i class="${iconClass} ${icon}"></i>
            <span>${method}</span>
        `;
        paymentContainer.appendChild(paymentItem);
    });
}

// Carregar mapa
function loadMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = `<iframe src="${companyData.mapsEmbed}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

// Carregar galeria
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    if (!companyData.gallery || companyData.gallery.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-color);">Nenhuma imagem na galeria ainda.</p>';
        return;
    }
    
    companyData.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption || 'Imagem da galeria'}">
            ${item.caption ? `<div class="gallery-item-caption">${item.caption}</div>` : ''}
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Formatar número de WhatsApp
function formatWhatsAppNumber(number) {
    // Remove todos os caracteres não numéricos
    return number.replace(/\D/g, '');
}

// Criar mensagem WhatsApp
function createWhatsAppMessage(productName, price) {
    let message = `Olá! Gostaria de saber mais sobre: *${productName}*`;
    if (price) {
        message += ` (R$ ${price})`;
    }
    return encodeURIComponent(message);
}

// Carregar ofertas
function loadOffers() {
    const offersGrid = document.getElementById('offers-grid');
    offersGrid.innerHTML = '';
    
    if (!companyData.offers || companyData.offers.length === 0) {
        offersGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-color);">Nenhuma oferta disponível no momento.</p>';
        return;
    }
    
    companyData.offers.forEach(offer => {
        const offerCard = document.createElement('div');
        offerCard.className = 'offer-card';
        
        let actionsHTML = '';
        if (companyData.enableWhatsappButtons && companyData.whatsapp) {
            const whatsappNum = formatWhatsAppNumber(companyData.whatsapp);
            const message = createWhatsAppMessage(offer.title, offer.newPrice);
            actionsHTML = `
                <div class="product-actions">
                    <a href="https://wa.me/${whatsappNum}?text=${message}" target="_blank" class="btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> Pedir no WhatsApp
                    </a>
                </div>
            `;
        }
        
        offerCard.innerHTML = `
            ${offer.image ? `<img src="${offer.image}" alt="${offer.title}">` : ''}
            <div class="offer-content">
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
                <div class="offer-price">
                    ${offer.oldPrice ? `<span class="offer-old-price">R$ ${offer.oldPrice}</span>` : ''}
                    <span class="offer-new-price">R$ ${offer.newPrice}</span>
                </div>
                ${actionsHTML}
            </div>
        `;
        offersGrid.appendChild(offerCard);
    });
}

// Carregar catálogo
function loadCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    catalogGrid.innerHTML = '';
    
    if (!companyData.catalog || companyData.catalog.length === 0) {
        catalogGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-color);">Catálogo em breve.</p>';
        return;
    }
    
    companyData.catalog.forEach(item => {
        const catalogItem = document.createElement('div');
        catalogItem.className = 'catalog-item';
        
        let actionsHTML = '';
        if (companyData.enableWhatsappButtons && companyData.whatsapp) {
            const whatsappNum = formatWhatsAppNumber(companyData.whatsapp);
            const message = createWhatsAppMessage(item.name, item.price);
            
            actionsHTML = `<div class="product-actions">`;
            
            // Botão WhatsApp direto
            actionsHTML += `
                <a href="https://wa.me/${whatsappNum}?text=${message}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Pedir
                </a>
            `;
            
            // Botão catálogo (se configurado)
            if (companyData.whatsappCatalogLink) {
                actionsHTML += `
                    <a href="${companyData.whatsappCatalogLink}" target="_blank" class="btn-catalog">
                        <i class="fas fa-store"></i> Catálogo
                    </a>
                `;
            }
            
            actionsHTML += `</div>`;
        }
        
        catalogItem.innerHTML = `
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
            <div class="catalog-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${item.price ? `<div class="offer-price"><span class="offer-new-price">R$ ${item.price}</span></div>` : ''}
                ${actionsHTML}
            </div>
        `;
        catalogGrid.appendChild(catalogItem);
    });
}

// Carregar redes sociais
function loadSocialMedia() {
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';
    
    if (!companyData.socialMedia || companyData.socialMedia.length === 0) {
        socialLinks.innerHTML = '<p style="text-align: center; color: var(--text-color);">Redes sociais em breve.</p>';
        return;
    }
    
    const iconMap = {
        'Facebook': 'fa-facebook',
        'Instagram': 'fa-instagram',
        'WhatsApp': 'fa-whatsapp',
        'Twitter': 'fa-twitter',
        'TikTok': 'fa-tiktok',
        'Kwai': 'fa-video',
        'LinkedIn': 'fa-linkedin',
        'YouTube': 'fa-youtube'
    };
    
    companyData.socialMedia.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = `social-link ${social.platform.toLowerCase()}`;
        const iconClass = iconMap[social.platform] || 'fa-link';
        link.innerHTML = `<i class="fab ${iconClass}"></i>`;
        link.setAttribute('aria-label', social.platform);
        socialLinks.appendChild(link);
    });
}

// Toggle de tema claro/escuro
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Menu mobile
function setupMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Atualizar ano atual no footer
function updateCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Smooth scroll - EXCETO para links externos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
