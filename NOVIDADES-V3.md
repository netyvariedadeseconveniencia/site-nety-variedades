# 🚀 NOVIDADES DA VERSÃO 3.0

## 📋 O QUE MUDOU?

### ✨ Melhorias Principais:

#### 1. **Google Maps Melhorado** 🗺️
- **Antes:** Mostrava apenas coordenadas genéricas
- **Agora:** 
  - Link direto para abrir no Google Maps
  - Embed do mapa mostrando o local exato
  - Botão "Ver no Google Maps" destacado

**Como configurar:**
```
1. Vá no Google Maps
2. Busque sua empresa/endereço
3. Clique em "Compartilhar"
4. Copie dois links:
   - Link normal: para o campo "Link do Google Maps"
   - Link embed: Clique em "Incorporar mapa" e copie a URL

No painel admin:
- mapsLink: https://maps.app.goo.gl/ABC123
- mapsEmbed: https://www.google.com/maps/embed?pb=!1m18...
```

#### 2. **Horário de Funcionamento Profissional** 🕐
- **Antes:** Campo de texto simples
- **Agora:**
  - Seletor para cada dia da semana
  - Horário de abertura e fechamento
  - Opção "Fechado" para dias que não abre
  - Exibição linda no site (lista formatada)

**Estrutura no JSON:**
```json
"businessHours": [
  {
    "day": "Segunda-feira",
    "open": "08:00",
    "close": "18:00",
    "closed": false
  },
  {
    "day": "Domingo",
    "open": "",
    "close": "",
    "closed": true
  }
]
```

#### 3. **Nova Ordem das Seções** 📍
```
✅ NOVA ORDEM:
1. Início (Hero)
2. Logo Destacada (nova seção!)
3. Ofertas
4. Catálogo
5. Galeria
6. Sobre Nós
7. Onde Estamos
8. Siga-nos
9. Footer (com CNPJ)
```

#### 4. **Integração WhatsApp** 📱
- **Botão "Pedir no WhatsApp"** em cada produto
- Mensagem automática pré-formatada
- Link para catálogo do WhatsApp Business (opcional)
- Pode ativar/desativar os botões

**Como funciona:**
```json
{
  "whatsapp": "5584999999999",
  "enableWhatsappButtons": true,
  "whatsappCatalogLink": "https://wa.me/c/..."
}
```

Quando o cliente clica em "Pedir no WhatsApp":
```
Abre: https://wa.me/5584999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre:%20*Produto%201*%20(R$%2049,90)
```

#### 5. **Formas de Pagamento** 💳
- Campo novo no painel admin
- Ícones visuais automáticos
- Suporte para: PIX, Dinheiro, Cartão, Boleto, Transferência

**No JSON:**
```json
"paymentMethods": [
  "PIX",
  "Dinheiro",
  "Cartão de Crédito",
  "Cartão de Débito"
]
```

#### 6. **CNPJ no Footer** 📄
- Campo específico para CNPJ
- Exibido no rodapé do site

#### 7. **Logo Destacada** 🎨
- Nova seção logo após o Hero
- Logo aparece grande e centralizada
- Dá destaque à identidade visual

#### 8. **Preços no Catálogo** 💰
- Agora o catálogo pode ter preços
- Campo opcional

---

## 🔄 COMO MIGRAR DA V2 PARA V3

### Opção 1: Começar do Zero (Recomendado)
1. Baixe a v3
2. Abra o painel admin
3. Preencha tudo de novo (vai rápido!)
4. Configure os novos campos

### Opção 2: Migração Manual do JSON

Se você já personalizou muito a v2, adicione estes campos no seu `company-data.json`:

```json
{
  // ... seus campos existentes ...
  
  // NOVOS CAMPOS V3:
  "cnpj": "00.000.000/0000-00",
  "whatsapp": "5584999999999",
  "mapsLink": "https://maps.app.goo.gl/...",
  "mapsEmbed": "https://www.google.com/maps/embed?pb=...",
  "whatsappCatalogLink": "",
  "enableWhatsappButtons": true,
  
  "businessHours": [
    {
      "day": "Segunda-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    }
    // ... repita para todos os dias
  ],
  
  "paymentMethods": [
    "PIX",
    "Dinheiro",
    "Cartão de Crédito"
  ],
  
  // ATUALIZE CATÁLOGO (adicione preço):
  "catalog": [
    {
      "name": "Produto 1",
      "description": "Descrição",
      "price": "49,90",  // ← NOVO!
      "image": "..."
    }
  ]
}
```

---

## 📱 CONFIGURANDO WHATSAPP

### Passo 1: Número do WhatsApp

No campo `whatsapp`, use o formato:
```
55 84 999999999
││ ││ └─ Número
││ └─ DDD
└─ Código do país (Brasil = 55)

Resultado: 5584999999999 (tudo junto, sem espaços)
```

### Passo 2: Ativar Botões

Marque a opção "Ativar botões Pedir no WhatsApp"

### Passo 3: Catálogo WhatsApp (Opcional)

Se você tem WhatsApp Business com catálogo:
1. Abra o WhatsApp Business
2. Vá em Ferramentas Comerciais → Catálogo
3. Toque em ⋮ (três pontinhos)
4. "Compartilhar link do catálogo"
5. Cole no campo "Link do Catálogo WhatsApp"

---

## 🗺️ CONFIGURANDO GOOGLE MAPS CORRETAMENTE

### Método Completo:

#### 1. Cadastrar Empresa no Google (Se ainda não tem)
```
1. Acesse: https://business.google.com
2. Cadastre sua empresa
3. Verifique (por telefone/correio)
```

#### 2. Pegar os Links

**Link Normal (para botão):**
```
1. Google Maps → Busque sua empresa
2. Clique em "Compartilhar"
3. Copie o link curto (maps.app.goo.gl/...)
4. Cole em "Link do Google Maps"
```

**Link Embed (para mapa na página):**
```
1. Google Maps → Busque sua empresa
2. Clique em "Compartilhar"
3. Clique em "Incorporar um mapa"
4. Copie TODO o link que começa com:
   https://www.google.com/maps/embed?pb=...
5. Cole em "Link Embed do Mapa"
```

#### 3. Exemplo Real:

```json
{
  "mapsLink": "https://maps.app.goo.gl/ABC123XYZ",
  "mapsEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15793.123!2d-40.189!3d-10.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjQiUyA0MMKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
}
```

---

## 💡 DICAS E BOAS PRÁTICAS

### WhatsApp:
- ✅ Use número com WhatsApp Business (mais profissional)
- ✅ Configure respostas automáticas
- ✅ Mantenha catálogo atualizado

### Google Maps:
- ✅ Complete todo o perfil da empresa no Google
- ✅ Adicione fotos
- ✅ Responda avaliações
- ✅ Mantenha horário atualizado

### Horário de Funcionamento:
- ✅ Seja preciso
- ✅ Marque feriados como "Fechado" quando aplicável
- ✅ Atualize em datas especiais (Natal, etc)

### Formas de Pagamento:
- ✅ Liste TODAS que você aceita
- ✅ Se aceita PIX, destaque! (é o preferido)
- ✅ Mencione se aceita parcelamento

---

## 🐛 PROBLEMAS COMUNS

### "Botão WhatsApp não funciona"
- Verifique o número (55 + DDD + número)
- Certifique que ativou os botões
- Teste: https://wa.me/5584999999999

### "Mapa não aparece"
- Use o link embed correto (começa com https://www.google.com/maps/embed)
- Verifique se copiou TODA a URL
- Teste o link numa nova aba

### "Horário não aparece bonito"
- Certifique que preencheu TODOS os dias
- Use formato HH:MM (ex: 08:00, não 8h)
- Para dias fechados: marque "closed": true

---

## 📊 COMPARAÇÃO V2 vs V3

| Recurso | V2 | V3 |
|---------|----|----|
| Google Maps | ⚠️ Básico | ✅ Completo |
| Horário | ⚠️ Texto | ✅ Seletor Visual |
| WhatsApp | ❌ Não tinha | ✅ Integração Total |
| Formas Pagamento | ❌ Não tinha | ✅ Com ícones |
| CNPJ | ❌ Não tinha | ✅ No footer |
| Logo Destacada | ❌ Não tinha | ✅ Seção própria |
| Preços Catálogo | ❌ Não tinha | ✅ Opcional |
| Ordem Seções | ⚠️ Padrão | ✅ Otimizada |

---

## ✅ CHECKLIST PÓS-INSTALAÇÃO

### Básico:
- [ ] Nome da empresa
- [ ] Logo (Imgur)
- [ ] CNPJ
- [ ] Telefone
- [ ] Email
- [ ] Endereço completo
- [ ] Descrição

### Novo na V3:
- [ ] WhatsApp (número)
- [ ] Ativar botões WhatsApp
- [ ] Horário (todos os 7 dias)
- [ ] Formas de pagamento (mínimo 2)
- [ ] Link Google Maps
- [ ] Embed Google Maps
- [ ] CNPJ

### Conteúdo:
- [ ] Mínimo 3 fotos galeria
- [ ] Mínimo 2 ofertas
- [ ] Mínimo 4 produtos catálogo
- [ ] Links redes sociais

### Teste:
- [ ] Botão WhatsApp funciona
- [ ] Mapa carrega
- [ ] Horário aparece bonito
- [ ] Logo aparece (header + seção)
- [ ] Responsivo no celular

---

## 🎉 PRONTO!

A v3 está muito mais completa e profissional!

**Principais ganhos:**
- 📱 Integração WhatsApp = Mais vendas
- 🗺️ Google Maps correto = Mais visitas
- ⏰ Horário profissional = Mais confiança
- 💳 Formas pagamento = Menos dúvidas

---

**Versão:** 3.0.0  
**Data:** Novembro 2025  
**Compatibilidade:** Substitui completamente a v2
