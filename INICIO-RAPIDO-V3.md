# 🚀 COMECE AQUI - VERSÃO 3.0

## ⚡ Instalação Rápida (5 minutos)

### 1️⃣ Baixe e Extraia
```
Baixe: site-empresa-v3.0.zip
Extraia para uma pasta
```

### 2️⃣ Teste Localmente
```bash
cd site-empresa-v3
python -m http.server 8000
```

Ou:
```bash
./iniciar-servidor.sh
```

### 3️⃣ Abra no Navegador
- **Site:** http://localhost:8000
- **Admin:** http://localhost:8000/admin/admin.html

---

## ✨ NOVIDADES DESTA VERSÃO

### 🎯 O Que Mudou?

1. **Google Maps Profissional**
   - Mapa embutido na página
   - Botão direto para abrir no Maps
   - Configuração fácil

2. **Horário de Funcionamento Visual**
   - Selecione hora de abertura/fechamento
   - Cada dia separado
   - Exibição bonita no site

3. **Integração WhatsApp**
   - Botão em cada produto
   - Mensagem automática
   - Link para catálogo WhatsApp Business

4. **Formas de Pagamento**
   - PIX, Cartão, Dinheiro, etc
   - Ícones automáticos

5. **CNPJ no Footer**

6. **Logo Destacada**
   - Seção especial para logo

7. **Nova Ordem**
   - Ofertas antes do catálogo
   - Fluxo otimizado

---

## 📝 CONFIGURAÇÃO PASSO A PASSO

### Passo 1: Informações Básicas (2 min)

No painel admin:
1. Nome da empresa
2. Logo (URL do Imgur)
3. CNPJ
4. Telefone
5. Email
6. Descrição

### Passo 2: WhatsApp (1 min)

```
Número: 5584999999999
        ││└─ Seu número
        │└─ DDD
        └─ 55 (Brasil)

✅ Marque: "Ativar botões WhatsApp"
```

### Passo 3: Horário (2 min)

Para cada dia:
- Abertura: 08:00
- Fechamento: 18:00
- Ou marque "Fechado"

### Passo 4: Google Maps (3 min)

**Link Normal:**
1. Google Maps → Busque sua empresa
2. "Compartilhar" → Copie o link
3. Cole em "Link do Google Maps"

**Link Embed:**
1. "Compartilhar" → "Incorporar mapa"
2. Copie TODO o código
3. Cole em "Link Embed"

### Passo 5: Produtos (5 min)

Adicione:
- Mínimo 2 ofertas
- Mínimo 4 produtos no catálogo
- Com preços!

### Passo 6: Formas de Pagamento (1 min)

Selecione as que você aceita:
- PIX
- Dinheiro
- Cartão de Crédito
- Cartão de Débito

### Passo 7: Salvar (30 seg)

1. Clique "Salvar Alterações"
2. Baixe o `company-data.json`
3. Substitua em `data/company-data.json`
4. Recarregue o site (Ctrl+F5)

---

## 🎯 EXEMPLO DE CONFIGURAÇÃO COMPLETA

```json
{
  "name": "Loja do João",
  "logo": "https://i.imgur.com/ABC123.png",
  "cnpj": "12.345.678/0001-90",
  "phone": "(84) 99876-5432",
  "whatsapp": "5584998765432",
  "email": "contato@lojadojoao.com.br",
  "address": "Rua das Flores, 123 - Centro, Senhor do Bonfim - BA",
  
  "mapsLink": "https://maps.app.goo.gl/ABC123",
  "mapsEmbed": "https://www.google.com/maps/embed?pb=!1m18...",
  
  "enableWhatsappButtons": true,
  
  "businessHours": [
    {
      "day": "Segunda-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    }
  ],
  
  "paymentMethods": [
    "PIX",
    "Dinheiro",
    "Cartão de Crédito"
  ]
}
```

---

## 🐛 PROBLEMAS COMUNS

### Logo não aparece
- ✅ Use Imgur para hospedar
- ✅ Copie o link DIRETO da imagem
- ✅ Deve terminar em .png ou .jpg

### Botão WhatsApp não funciona
- ✅ Número no formato: 5584999999999
- ✅ Ative a opção no admin
- ✅ Salve e atualize o JSON

### Mapa não carrega
- ✅ Use o link EMBED (não o normal)
- ✅ Começa com: https://www.google.com/maps/embed
- ✅ Copie TODO o código

### Horário não aparece
- ✅ Preencha TODOS os 7 dias
- ✅ Formato: HH:MM (08:00, não 8h)
- ✅ Para fechado: marque a opção

---

## 📚 DOCUMENTAÇÃO COMPLETA

- **NOVIDADES-V3.md** - Todas as mudanças detalhadas
- **README.md** - Documentação técnica
- **GUIA-DE-VENDAS.md** - Como vender este sistema

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Logo funcionando
- [ ] WhatsApp configurado
- [ ] Mapa carregando
- [ ] Horário preenchido
- [ ] Formas de pagamento
- [ ] Mínimo 3 fotos
- [ ] Mínimo 2 ofertas
- [ ] Mínimo 4 produtos
- [ ] Testado no celular
- [ ] Todos os links funcionam

---

## 🌐 PUBLICAR ONLINE

### Netlify (Grátis - Recomendado)
1. https://app.netlify.com/drop
2. Arraste a pasta `site-empresa-v3`
3. Pronto!

### Seu Domínio
Após publicar:
1. Compre domínio em registro.br
2. Configure no Netlify
3. SSL automático ativado

---

## 🎉 ESTÁ PRONTO!

Agora você tem um site **profissional** com:
- ✅ Integração WhatsApp
- ✅ Google Maps correto
- ✅ Horário visual
- ✅ Formas de pagamento
- ✅ CNPJ
- ✅ Tudo responsivo

**Tempo total:** 20 minutos
**Resultado:** Site de R$ 1.500+

---

**Dúvidas?** Leia NOVIDADES-V3.md

**Quer vender?** Leia GUIA-DE-VENDAS.md

**Boa sorte! 🚀**
