# 🚀 GUIA RÁPIDO - COMECE AQUI!

## ⚡ Para começar AGORA (3 minutos):

### 1️⃣ Teste o Site Localmente

**No Linux/Mac:**
```bash
cd site-empresa
./iniciar-servidor.sh
```

**No Windows:**
```bash
cd site-empresa
python -m http.server 8000
```

### 2️⃣ Abra no Navegador

- **Site:** http://localhost:8000
- **Painel Admin:** http://localhost:8000/admin/admin.html

### 3️⃣ Personalize Pelo Painel Admin

1. Abra o painel admin
2. Clique em "Informações Básicas"
3. Preencha:
   - Nome da Empresa
   - Telefone
   - Email
   - Endereço
4. Navegue pelas outras seções (use o menu lateral)
5. Adicione imagens, ofertas, produtos
6. Clique em **"Salvar Alterações"**
7. Baixe o arquivo `company-data.json`
8. Substitua o arquivo em `data/company-data.json`
9. Recarregue o site!

---

## 📸 Onde conseguir imagens GRÁTIS?

- **Unsplash:** https://unsplash.com
- **Pexels:** https://pexels.com
- **Pixabay:** https://pixabay.com

Baixe as imagens e hospede em:
- **Imgur:** https://imgur.com (grátis, fácil)
- **Google Drive** (configure para público)

---

## 🌍 Colocar o site no ar (GRÁTIS):

### Opção 1: Netlify (MAIS FÁCIL)

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `site-empresa` completa
3. Pronto! Site no ar em segundos
4. Você recebe um link tipo: `https://seu-site.netlify.app`

### Opção 2: GitHub Pages

1. Crie conta no GitHub
2. Crie novo repositório
3. Faça upload dos arquivos
4. Settings → Pages → Deploy

---

## 🎨 Dicas de Personalização Rápida:

### Mudar Cores Principais:
Edite `styles.css` (linhas 1-8):
```css
--primary-color: #2563eb;     /* ← Mude esta cor */
--secondary-color: #1e40af;   /* ← E esta */
```

Use este site para escolher cores: https://coolors.co

### Logo da Empresa:
1. Crie/tenha seu logo (PNG com fundo transparente é ideal)
2. Hospede no Imgur
3. Cole a URL no painel admin

---

## ⚠️ PROBLEMAS COMUNS:

### ❌ "Não consigo ver as mudanças"
→ Limpe o cache: Ctrl+F5 (Ctrl+Shift+R no Mac)

### ❌ "Imagens não aparecem"
→ Verifique se a URL funciona em uma nova aba
→ Use URLs com HTTPS

### ❌ "Admin não carrega dados"
→ Verifique se o arquivo está em: `data/company-data.json`
→ Use um servidor local, não abra os arquivos diretamente

---

## 📞 Exemplo Real de Preenchimento:

```json
{
  "name": "Loja do João",
  "phone": "(84) 99876-5432",
  "email": "contato@lojadojoao.com.br",
  "address": "Rua das Flores, 123 - Centro, Senhor do Bonfim - BA",
  "hours": "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
  "description": "A Loja do João está há 10 anos servindo Senhor do Bonfim com produtos de qualidade e preços justos. Venha nos visitar!"
}
```

---

## ✅ CHECKLIST para publicar:

- [ ] Personalizou todas as informações no painel admin
- [ ] Adicionou pelo menos 3 fotos na galeria
- [ ] Configurou redes sociais
- [ ] Testou em diferentes tamanhos de tela
- [ ] Verificou que todos os links funcionam
- [ ] Fez upload para Netlify ou GitHub Pages
- [ ] Testou o site publicado

---

## 🎯 Próximos Passos:

1. ✅ **Agora:** Configure o básico e publique
2. ✅ **Esta semana:** Adicione mais fotos e produtos
3. ✅ **Próximo mês:** Considere comprar um domínio próprio (.com.br)

---

**💡 DICA DE OURO:** Comece simples! Não precisa ter tudo perfeito no primeiro dia. Publique o básico e vá melhorando aos poucos.

**Dúvidas?** Leia o README.md completo que tem TODAS as informações detalhadas!
