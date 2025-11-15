# 🌐 Site Institucional com Painel Administrativo

Site institucional completo e personalizável, ideal para pequenas empresas, lojas e estabelecimentos. Inclui painel administrativo integrado para gerenciar todo o conteúdo de forma simples.

## ✨ Características

- ✅ **100% Personalizável** - Edite todas as informações pelo painel admin
- ✅ **Tema Claro/Escuro** - Alternância automática de tema
- ✅ **Totalmente Responsivo** - Funciona perfeitamente em celulares, tablets e desktops
- ✅ **Sem Banco de Dados** - Todos os dados em arquivo JSON
- ✅ **Fácil de Gerenciar** - Interface gráfica intuitiva
- ✅ **Integração Google Maps** - Mostre sua localização
- ✅ **Redes Sociais** - Links para todas suas redes
- ✅ **Galeria de Imagens** - Mostre fotos do seu estabelecimento
- ✅ **Ofertas e Catálogo** - Divulgue produtos e promoções

## 📁 Estrutura de Arquivos

```
site-empresa/
├── index.html              # Página principal do site
├── styles.css              # Estilos do site
├── script.js               # JavaScript do site
├── admin/
│   ├── admin.html         # Painel administrativo
│   ├── admin-styles.css   # Estilos do painel
│   └── admin-script.js    # JavaScript do painel
└── data/
    └── company-data.json  # Dados da empresa (você edita aqui!)
```

## 🚀 Guia Passo a Passo

### PASSO 1: Estrutura dos Arquivos

Todos os arquivos já foram criados! A estrutura está assim:

```
/home/claude/site-empresa/
```

### PASSO 2: Como Testar Localmente

1. **Abra o site:**
   - Abra o arquivo `index.html` no seu navegador
   - Ou use um servidor local (recomendado)

2. **Usando um servidor local (Python):**
   ```bash
   cd site-empresa
   python -m http.server 8000
   ```
   Depois acesse: `http://localhost:8000`

3. **Acessar o painel admin:**
   - Acesse: `http://localhost:8000/admin/admin.html`
   - Ou abra o arquivo `admin/admin.html` diretamente

### PASSO 3: Como Personalizar para Sua Empresa

#### Método 1: Usando o Painel Admin (RECOMENDADO)

1. Abra `admin/admin.html` no navegador
2. Preencha todas as informações:
   - Nome da empresa
   - Logo (URL da imagem)
   - Telefone, email, endereço
   - Horário de funcionamento
   - Descrição da empresa
3. Adicione imagens na galeria
4. Cadastre suas ofertas
5. Adicione produtos ao catálogo
6. Configure redes sociais
7. Clique em **"Salvar Alterações"**
8. Um arquivo `company-data.json` será baixado
9. **IMPORTANTE:** Substitua o arquivo em `data/company-data.json` pelo arquivo baixado

#### Método 2: Editando o JSON Diretamente

1. Abra o arquivo `data/company-data.json`
2. Edite os dados diretamente:

```json
{
  "name": "Sua Empresa Aqui",
  "logo": "https://seusite.com/logo.png",
  "phone": "(84) 99999-9999",
  "email": "contato@suaempresa.com",
  "address": "Seu endereço completo",
  "hours": "Seg-Sex: 8h-18h",
  "description": "Descrição da sua empresa...",
  ...
}
```

3. Salve o arquivo
4. Recarregue a página no navegador

### PASSO 4: Como Adicionar Imagens

Você tem 3 opções para usar imagens:

#### Opção 1: Usar URLs de Imagens Online
- Hospede suas imagens no Google Drive, Imgur, ou outro serviço
- Copie o link direto da imagem
- Cole no painel admin

#### Opção 2: Criar uma pasta de imagens local
1. Crie uma pasta `images/` dentro de `site-empresa/`
2. Coloque suas imagens lá
3. Use caminhos relativos como: `images/logo.png`

#### Opção 3: Converter imagens para Base64 (não recomendado para muitas imagens)

### PASSO 5: Integração com Google Maps

1. Acesse: https://www.google.com/maps
2. Busque o endereço da sua empresa
3. Clique em "Compartilhar"
4. Clique em "Incorporar um mapa"
5. Copie o código que aparece após `pb=`
6. Cole no campo "Código do Google Maps" no painel admin

Exemplo:
```
!1m18!1m12!1m3!1d12345.67890...
```

### PASSO 6: Colocando o Site no Ar

#### Opção 1: Netlify (GRATUITO - Recomendado)

1. Acesse: https://www.netlify.com
2. Crie uma conta gratuita
3. Arraste a pasta `site-empresa` para o Netlify
4. Pronto! Seu site está no ar
5. Você receberá um endereço como: `https://seu-site.netlify.app`

**Para atualizar:**
- Basta arrastar a pasta novamente

#### Opção 2: GitHub Pages (GRATUITO)

1. Crie uma conta no GitHub
2. Crie um novo repositório
3. Faça upload de todos os arquivos
4. Vá em Settings → Pages
5. Escolha a branch `main` e salve
6. Seu site estará em: `https://seu-usuario.github.io/nome-repositorio`

#### Opção 3: Hostinger, HostGator, etc. (PAGO)

1. Contrate uma hospedagem
2. Acesse o painel de controle (cPanel)
3. Abra o "Gerenciador de Arquivos"
4. Faça upload de todos os arquivos para a pasta `public_html`
5. Pronto!

### PASSO 7: Comprar um Domínio Próprio

1. **Registradores de Domínio no Brasil:**
   - Registro.br (domínios .br)
   - HostGator
   - Hostinger
   - GoDaddy

2. **Preços médios:**
   - .com.br: R$ 40/ano
   - .com: R$ 50/ano

3. **Conectar domínio:**
   - No Netlify/GitHub Pages: Configure DNS
   - Na hospedagem: Conecte automaticamente

## 🎨 Personalizações Avançadas

### Mudar as Cores do Site

Edite o arquivo `styles.css` e altere as variáveis CSS no início:

```css
:root {
    --primary-color: #2563eb;      /* Cor principal */
    --secondary-color: #1e40af;    /* Cor secundária */
    --text-color: #1f2937;         /* Cor do texto */
}
```

### Adicionar Mais Seções

1. Edite `index.html`
2. Adicione uma nova seção seguindo o padrão:

```html
<section id="nova-secao" class="section">
    <div class="container">
        <h2 class="section-title">Título da Seção</h2>
        <p>Conteúdo aqui...</p>
    </div>
</section>
```

## 📱 Testando em Diferentes Dispositivos

- **Desktop:** Redimensione a janela do navegador
- **Mobile:** Use as ferramentas de desenvolvedor (F12)
  - Chrome/Edge: Ctrl+Shift+M
  - Firefox: Ctrl+Shift+M

## 🔧 Resolução de Problemas

### As imagens não aparecem
- Verifique se a URL está correta
- Teste a URL em uma nova aba do navegador
- Use HTTPS, não HTTP

### O mapa não carrega
- Verifique se copiou o código correto do Google Maps
- O código deve começar com `!1m18...`

### Mudanças não aparecem
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se salvou o arquivo JSON
- Recarregue a página

### Site não funciona no celular
- Verifique se está usando um servidor (não pode abrir direto o arquivo)
- Use Python: `python -m http.server 8000`

## 📝 Dicas Importantes

1. **Sempre faça backup** do arquivo `company-data.json`
2. **Teste em diferentes navegadores** (Chrome, Firefox, Safari)
3. **Otimize suas imagens** antes de usar (use TinyPNG.com)
4. **Use imagens com boa resolução** mas não muito pesadas
5. **Mantenha o conteúdo atualizado**

## 🎯 Próximos Passos

Depois de dominar o básico, você pode:

1. ✅ Adicionar um formulário de contato
2. ✅ Integrar com WhatsApp Business
3. ✅ Adicionar Google Analytics
4. ✅ Criar um blog
5. ✅ Adicionar depoimentos de clientes

## 💡 Suporte

Se tiver dúvidas:
1. Revise este README
2. Verifique se todos os arquivos estão nas pastas corretas
3. Teste primeiro localmente antes de publicar

## 📄 Licença

Você pode usar este site para qualquer finalidade, modificá-lo como quiser e usar em projetos comerciais!

---

**Desenvolvido com ❤️ para pequenas empresas brasileiras**

Versão: 1.0.0 | Última atualização: 2025
