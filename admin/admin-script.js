let companyData = {};
const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    setupNavigation();
    setupEventListeners();
    renderHoursConfig();
});

// Carregar dados
async function loadData() {
    try {
        const response = await fetch('../data/company-data.json');
        companyData = await response.json();
        populateForm();
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
        companyData = getDefaultData();
        populateForm();
    }
}

// Dados padrão
function getDefaultData() {
    return {
        name: "",
        logo: "",
        phone: "",
        email: "",
        address: "",
        hours: "",
        description: "",
        heroTitle: "",
        heroSubtitle: "",
        coordinates: "",
        socialMedia: [],
        gallery: [],
        offers: [],
        catalog: []
    };
}

// Preencher formulário com dados
function populateForm() {
    // Informações básicas
    document.getElementById('company-name-input').value = companyData.name || '';
    document.getElementById('company-logo-input').value = companyData.logo || '';
    
    // Hero
    document.getElementById('hero-title-input').value = companyData.heroTitle || '';
    document.getElementById('hero-subtitle-input').value = companyData.heroSubtitle || '';
    
    // Sobre
    document.getElementById('description-input').value = companyData.description || '';
    document.getElementById('phone-input').value = companyData.phone || '';
    document.getElementById('email-input').value = companyData.email || '';
    document.getElementById('hours-input').value = companyData.hours || '';
    
    // Localização
    document.getElementById('address-input').value = companyData.address || '';
    document.getElementById('coordinates-input').value = companyData.coordinates || '';
    
    // Listas dinâmicas
    renderGalleryList();
    renderOffersList();
    renderCatalogList();
    renderSocialList();
}

// Navegação entre seções
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.admin-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            
            // Remover active de todos
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Adicionar active ao selecionado
            button.classList.add('active');
            document.getElementById(`section-${sectionId}`).classList.add('active');
        });
    });
}

// Event Listeners
function setupEventListeners() {
    // Botão de salvar
    document.getElementById('save-changes').addEventListener('click', saveChanges);
    
    // Botão de preview
    document.getElementById('preview-site').addEventListener('click', () => {
        window.open('../index.html', '_blank');
    });
    
    // Botões de adicionar items
    document.getElementById('add-gallery-item').addEventListener('click', () => addGalleryItem());
    document.getElementById('add-offer-item').addEventListener('click', () => addOfferItem());
    document.getElementById('add-catalog-item').addEventListener('click', () => addCatalogItem());
    document.getElementById('add-social-item').addEventListener('click', () => addSocialItem());
}

// Salvar alterações
function saveChanges() {
    // Coletar dados do formulário
    companyData.name = document.getElementById('company-name-input').value;
    companyData.logo = document.getElementById('company-logo-input').value;
    companyData.heroTitle = document.getElementById('hero-title-input').value;
    companyData.heroSubtitle = document.getElementById('hero-subtitle-input').value;
    companyData.description = document.getElementById('description-input').value;
    companyData.phone = document.getElementById('phone-input').value;
    companyData.email = document.getElementById('email-input').value;
    companyData.hours = document.getElementById('hours-input').value;
    companyData.address = document.getElementById('address-input').value;
    companyData.coordinates = document.getElementById('coordinates-input').value;
    
    // Coletar dados das listas
    collectGalleryData();
    collectOffersData();
    collectCatalogData();
    collectSocialData();
    
    // Converter para JSON
    const jsonData = JSON.stringify(companyData, null, 2);
    
    // Criar arquivo para download
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'company-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Mostrar notificação
    showNotification('Dados salvos! Baixe o arquivo e substitua o arquivo company-data.json na pasta "data"');
}

// Galeria
function renderGalleryList() {
    const container = document.getElementById('gallery-list');
    container.innerHTML = '';
    
    if (companyData.gallery.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-images"></i><p>Nenhuma imagem na galeria</p></div>';
        return;
    }
    
    companyData.gallery.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div class="list-item-header">
                <h4>Imagem ${index + 1}</h4>
                <button class="btn btn-danger" onclick="removeGalleryItem(${index})">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
            <div class="form-group">
                <label>URL da Imagem</label>
                <input type="text" class="gallery-image" data-index="${index}" value="${item.image || ''}" placeholder="https://exemplo.com/imagem.jpg">
            </div>
            <div class="form-group">
                <label>Legenda (opcional)</label>
                <input type="text" class="gallery-caption" data-index="${index}" value="${item.caption || ''}" placeholder="Descrição da imagem">
            </div>
        `;
        container.appendChild(div);
    });
}

function addGalleryItem() {
    companyData.gallery.push({ image: '', caption: '' });
    renderGalleryList();
}

function removeGalleryItem(index) {
    companyData.gallery.splice(index, 1);
    renderGalleryList();
}

function collectGalleryData() {
    companyData.gallery = [];
    document.querySelectorAll('.gallery-image').forEach((input, index) => {
        const caption = document.querySelector(`.gallery-caption[data-index="${index}"]`).value;
        companyData.gallery.push({
            image: input.value,
            caption: caption
        });
    });
}

// Ofertas
function renderOffersList() {
    const container = document.getElementById('offers-list');
    container.innerHTML = '';
    
    if (companyData.offers.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-tags"></i><p>Nenhuma oferta cadastrada</p></div>';
        return;
    }
    
    companyData.offers.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div class="list-item-header">
                <h4>Oferta ${index + 1}</h4>
                <button class="btn btn-danger" onclick="removeOfferItem(${index})">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
            <div class="form-group">
                <label>Título</label>
                <input type="text" class="offer-title" data-index="${index}" value="${item.title || ''}" placeholder="Nome da oferta">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea class="offer-description" data-index="${index}" rows="3" placeholder="Descrição da oferta">${item.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Preço Antigo (opcional)</label>
                <input type="text" class="offer-old-price" data-index="${index}" value="${item.oldPrice || ''}" placeholder="99,90">
            </div>
            <div class="form-group">
                <label>Preço Novo</label>
                <input type="text" class="offer-new-price" data-index="${index}" value="${item.newPrice || ''}" placeholder="79,90">
            </div>
            <div class="form-group">
                <label>URL da Imagem</label>
                <input type="text" class="offer-image" data-index="${index}" value="${item.image || ''}" placeholder="https://exemplo.com/oferta.jpg">
            </div>
        `;
        container.appendChild(div);
    });
}

function addOfferItem() {
    companyData.offers.push({ title: '', description: '', oldPrice: '', newPrice: '', image: '' });
    renderOffersList();
}

function removeOfferItem(index) {
    companyData.offers.splice(index, 1);
    renderOffersList();
}

function collectOffersData() {
    companyData.offers = [];
    document.querySelectorAll('.offer-title').forEach((input, index) => {
        companyData.offers.push({
            title: input.value,
            description: document.querySelector(`.offer-description[data-index="${index}"]`).value,
            oldPrice: document.querySelector(`.offer-old-price[data-index="${index}"]`).value,
            newPrice: document.querySelector(`.offer-new-price[data-index="${index}"]`).value,
            image: document.querySelector(`.offer-image[data-index="${index}"]`).value
        });
    });
}

// Catálogo
function renderCatalogList() {
    const container = document.getElementById('catalog-list');
    container.innerHTML = '';
    
    if (companyData.catalog.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-box"></i><p>Nenhum produto no catálogo</p></div>';
        return;
    }
    
    companyData.catalog.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div class="list-item-header">
                <h4>Produto ${index + 1}</h4>
                <button class="btn btn-danger" onclick="removeCatalogItem(${index})">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
            <div class="form-group">
                <label>Nome do Produto</label>
                <input type="text" class="catalog-name" data-index="${index}" value="${item.name || ''}" placeholder="Nome do produto">
            </div>
            <div class="form-group">
                <label>Descrição</label>
                <textarea class="catalog-description" data-index="${index}" rows="3" placeholder="Descrição do produto">${item.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>URL da Imagem</label>
                <input type="text" class="catalog-image" data-index="${index}" value="${item.image || ''}" placeholder="https://exemplo.com/produto.jpg">
            </div>
        `;
        container.appendChild(div);
    });
}

function addCatalogItem() {
    companyData.catalog.push({ name: '', description: '', image: '' });
    renderCatalogList();
}

function removeCatalogItem(index) {
    companyData.catalog.splice(index, 1);
    renderCatalogList();
}

function collectCatalogData() {
    companyData.catalog = [];
    document.querySelectorAll('.catalog-name').forEach((input, index) => {
        companyData.catalog.push({
            name: input.value,
            description: document.querySelector(`.catalog-description[data-index="${index}"]`).value,
            image: document.querySelector(`.catalog-image[data-index="${index}"]`).value
        });
    });
}

// Redes Sociais
function renderSocialList() {
    const container = document.getElementById('social-list');
    container.innerHTML = '';
    
    if (companyData.socialMedia.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-share-alt"></i><p>Nenhuma rede social cadastrada</p></div>';
        return;
    }
    
    companyData.socialMedia.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <div class="list-item-header">
                <h4>Rede Social ${index + 1}</h4>
                <button class="btn btn-danger" onclick="removeSocialItem(${index})">
                    <i class="fas fa-trash"></i> Remover
                </button>
            </div>
            <div class="form-group">
                <label>Plataforma</label>
                <select class="social-platform" data-index="${index}">
                    <option value="Facebook" ${item.platform === 'Facebook' ? 'selected' : ''}>Facebook</option>
                    <option value="Instagram" ${item.platform === 'Instagram' ? 'selected' : ''}>Instagram</option>
                    <option value="WhatsApp" ${item.platform === 'WhatsApp' ? 'selected' : ''}>WhatsApp</option>
                    <option value="Twitter" ${item.platform === 'Twitter' ? 'selected' : ''}>Twitter</option>
                    <option value="TikTok" ${item.platform === 'TikTok' ? 'selected' : ''}>TikTok</option>
                    <option value="Kwai" ${item.platform === 'Kwai' ? 'selected' : ''}>Kwai</option>
                    <option value="LinkedIn" ${item.platform === 'LinkedIn' ? 'selected' : ''}>LinkedIn</option>
                    <option value="YouTube" ${item.platform === 'YouTube' ? 'selected' : ''}>YouTube</option>
                </select>
            </div>
            <div class="form-group">
                <label>URL</label>
                <input type="text" class="social-url" data-index="${index}" value="${item.url || ''}" placeholder="https://facebook.com/suaempresa">
            </div>
        `;
        container.appendChild(div);
    });
}

function addSocialItem() {
    companyData.socialMedia.push({ platform: 'Facebook', url: '' });
    renderSocialList();
}

function removeSocialItem(index) {
    companyData.socialMedia.splice(index, 1);
    renderSocialList();
}

function collectSocialData() {
    companyData.socialMedia = [];
    document.querySelectorAll('.social-platform').forEach((select, index) => {
        companyData.socialMedia.push({
            platform: select.value,
            url: document.querySelector(`.social-url[data-index="${index}"]`).value
        });
    });
}

// Notificação
function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    
    text.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Funções globais para os botões de remover
window.removeGalleryItem = rem
// Renderizar configuração de horários
function renderHoursConfig() {
    const container = document.getElementById('hours-list');
    container.innerHTML = '';
    
    if (!companyData.businessHours || companyData.businessHours.length === 0) {
        companyData.businessHours = daysOfWeek.map(day => ({
            day: day,
            open: '08:00',
            close: '18:00',
            closed: false
        }));
    }
    
    companyData.businessHours.forEach((item, index) => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'hours-day';
        dayDiv.innerHTML = `
            <div class="hours-day-header">
                <h4>${item.day}</h4>
                <label>
                    <input type="checkbox" class="hours-closed" data-index="${index}" ${item.closed ? 'checked' : ''}>
                    Fechado
                </label>
            </div>
            <div class="hours-inputs">
                <div class="form-group">
                    <label>Abertura</label>
                    <input type="time" class="hours-open" data-index="${index}" value="${item.open || '08:00'}" ${item.closed ? 'disabled' : ''}>
                </div>
                <div class="form-group">
                    <label>Fechamento</label>
                    <input type="time" class="hours-close" data-index="${index}" value="${item.close || '18:00'}" ${item.closed ? 'disabled' : ''}>
                </div>
            </div>
        `;
        container.appendChild(dayDiv);
    });
    
    // Event listeners para checkboxes "Fechado"
    document.querySelectorAll('.hours-closed').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = this.getAttribute('data-index');
            const openInput = document.querySelector(`.hours-open[data-index="${index}"]`);
            const closeInput = document.querySelector(`.hours-close[data-index="${index}"]`);
            
            if (this.checked) {
                openInput.disabled = true;
                closeInput.disabled = true;
            } else {
                openInput.disabled = false;
                closeInput.disabled = false;
            }
        });
    });
}

// Coletar dados de horários
function collectHoursData() {
    companyData.businessHours = [];
    document.querySelectorAll('.hours-open').forEach((input, index) => {
        const closedCheckbox = document.querySelector(`.hours-closed[data-index="${index}"]`);
        const closeInput = document.querySelector(`.hours-close[data-index="${index}"]`);
        
        companyData.businessHours.push({
            day: daysOfWeek[index],
            open: input.value,
            close: closeInput.value,
            closed: closedCheckbox.checked
        });
    });
}

// Coletar formas de pagamento
function collectPaymentData() {
    companyData.paymentMethods = [];
    document.querySelectorAll('#payment-checkboxes input:checked').forEach(checkbox => {
        companyData.paymentMethods.push(checkbox.value);
    });
}

// Popular formulário com dados
function populateForm() {
    // Básico
    document.getElementById('company-name-input').value = companyData.name || '';
    document.getElementById('company-logo-input').value = companyData.logo || '';
    document.getElementById('company-cnpj-input').value = companyData.cnpj || '';
    
    // Hero
    document.getElementById('hero-title-input').value = companyData.heroTitle || '';
    document.getElementById('hero-subtitle-input').value = companyData.heroSubtitle || '';
    
    // Sobre
    document.getElementById('description-input').value = companyData.description || '';
    document.getElementById('phone-input').value = companyData.phone || '';
    document.getElementById('email-input').value = companyData.email || '';
    
    // WhatsApp
    document.getElementById('whatsapp-input').value = companyData.whatsapp || '';
    document.getElementById('enable-whatsapp-buttons').checked = companyData.enableWhatsappButtons !== false;
    document.getElementById('whatsapp-catalog-input').value = companyData.whatsappCatalogLink || '';
    
    // Localização
    document.getElementById('address-input').value = companyData.address || '';
    document.getElementById('maps-link-input').value = companyData.mapsLink || '';
    document.getElementById('maps-embed-input').value = companyData.mapsEmbed || '';
    
    // Formas de pagamento
    if (companyData.paymentMethods) {
        document.querySelectorAll('#payment-checkboxes input').forEach(checkbox => {
            checkbox.checked = companyData.paymentMethods.includes(checkbox.value);
        });
    }
    
    // Renderizar listas
    renderHoursConfig();
    renderGalleryList();
    renderOffersList();
    renderCatalogList();
    renderSocialList();
}

// Salvar alterações
function saveChanges() {
    // Coletar dados básicos
    companyData.name = document.getElementById('company-name-input').value;
    companyData.logo = document.getElementById('company-logo-input').value;
    companyData.cnpj = document.getElementById('company-cnpj-input').value;
    companyData.heroTitle = document.getElementById('hero-title-input').value;
    companyData.heroSubtitle = document.getElementById('hero-subtitle-input').value;
    companyData.description = document.getElementById('description-input').value;
    companyData.phone = document.getElementById('phone-input').value;
    companyData.email = document.getElementById('email-input').value;
    companyData.whatsapp = document.getElementById('whatsapp-input').value;
    companyData.enableWhatsappButtons = document.getElementById('enable-whatsapp-buttons').checked;
    companyData.whatsappCatalogLink = document.getElementById('whatsapp-catalog-input').value;
    companyData.address = document.getElementById('address-input').value;
    companyData.mapsLink = document.getElementById('maps-link-input').value;
    companyData.mapsEmbed = document.getElementById('maps-embed-input').value;
    
    // Coletar listas
    collectHoursData();
    collectPaymentData();
    collectGalleryData();
    collectOffersData();
    collectCatalogData();
    collectSocialData();
    
    // Criar arquivo para download
    const jsonData = JSON.stringify(companyData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'company-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Dados salvos! Baixe o arquivo e substitua em data/company-data.json');
}
