# 🔧 CORREÇÕES NECESSÁRIAS - LEIA ANTES DE USAR!

## ❌ ERROS NO SEU JSON

Você configurou alguns campos incorretamente. Veja as correções:

---

## 1. 🗺️ GOOGLE MAPS EMBED

### ❌ ERRADO (o que você fez):
```json
"mapsEmbed": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18...\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
```

### ✅ CORRETO:
```json
"mapsEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5339796366675!2d-35.223649824978736!3d-5.6355790943455615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a78ae5fd28ab%3A0x75cc90a9bb2067c9!2sNety%20Variedades%20%26%20Conveni%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1763169608267!5m2!1spt-BR!2sbr"
```

**IMPORTANTE:** Cole APENAS a URL que está dentro do `src="..."`, não o iframe completo!

### Como pegar corretamente:
```
1. Google Maps → Compartilhar → Incorporar mapa
2. Você vai ver algo assim:
   <iframe src="https://www.google.com/maps/embed?pb=!1m18..." width="600"></iframe>
3. Copie APENAS a parte: https://www.google.com/maps/embed?pb=!1m18...
4. NÃO copie <iframe src=" nem "></iframe>
```

---

## 2. 📱 WHATSAPP

### ❌ ERRADO:
```json
"whatsapp": "84994777280"
```

### ✅ CORRETO:
```json
"whatsapp": "5584994777280"
```

**Formato:** 55 (Brasil) + 84 (DDD) + 994777280 (número)

---

## 3. ✅ ARQUIVO JSON CORRIGIDO

Substitua seu `data/company-data.json` por este:

```json
{
  "name": "Nety Variedades & Conveniência",
  "logo": "https://i.imgur.com/heVmxEt.png",
  "phone": "(84) 99477-7280",
  "whatsapp": "5584994777280",
  "email": "netyvariedadeseconveniencia@gmail.com",
  "address": "Rua da Matinha Número 16A, Tv. Pitangui - Pitangui, Extremoz - RN, 59575-000",
  "cnpj": "55.325.785/0001-64",
  "mapsLink": "https://maps.app.goo.gl/be86h5gMuWKSSyrV6",
  "mapsEmbed": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5339796366675!2d-35.223649824978736!3d-5.6355790943455615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a78ae5fd28ab%3A0x75cc90a9bb2067c9!2sNety%20Variedades%20%26%20Conveni%C3%AAncia!5e0!3m2!1spt-BR!2sbr!4v1763169608267!5m2!1spt-BR!2sbr",
  "description": "Somos uma empresa comprometida com a qualidade e excelência no atendimento. Oferecemos produtos e serviços de primeira linha para nossos clientes. Nossa missão é superar expectativas e construir relacionamentos duradouros.",
  "heroTitle": "Bem-vindo à Nety Variedades & Conveniência",
  "heroSubtitle": "Tudo o que você precisa em um só lugar no litoral",
  "businessHours": [
    {
      "day": "Segunda-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    },
    {
      "day": "Terça-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    },
    {
      "day": "Quarta-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    },
    {
      "day": "Quinta-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    },
    {
      "day": "Sexta-feira",
      "open": "08:00",
      "close": "18:00",
      "closed": false
    },
    {
      "day": "Sábado",
      "open": "08:00",
      "close": "12:00",
      "closed": false
    },
    {
      "day": "Domingo",
      "open": "",
      "close": "",
      "closed": true
    }
  ],
  "paymentMethods": [
    "PIX",
    "Dinheiro",
    "Cartão de Crédito",
    "Cartão de Débito"
  ],
  "whatsappCatalogLink": "",
  "enableWhatsappButtons": true,
  "socialMedia": [
    {
      "platform": "Facebook",
      "url": "https://facebook.com/netyvariedades"
    },
    {
      "platform": "Instagram",
      "url": "https://instagram.com/netyvariedades"
    },
    {
      "platform": "WhatsApp",
      "url": "https://wa.me/5584994777280"
    }
  ],
  "gallery": [
    {
      "image": "https://via.placeholder.com/400x300/2563eb/ffffff?text=Fachada",
      "caption": "Nossa loja"
    },
    {
      "image": "https://via.placeholder.com/400x300/1e40af/ffffff?text=Interior",
      "caption": "Ambiente interno"
    }
  ],
  "offers": [
    {
      "title": "Cerveja Devassa Puro Malte 350ml (Pack c/ 12)",
      "description": "Devassa é a cerveja puro malte tropical. Uma cerveja equilibrada, refrescante e fácil de beber, com espuma cremosa e sabor único.",
      "oldPrice": "99,90",
      "newPrice": "79,90",
      "image": "https://via.placeholder.com/400x250/10b981/ffffff?text=Devassa"
    }
  ],
  "catalog": [
    {
      "name": "Cerveja Devassa",
      "description": "Cerveja puro malte 350ml",
      "price": "49,90",
      "image": "https://via.placeholder.com/300x200/6366f1/ffffff?text=Cerveja"
    },
    {
      "name": "Gelo em Cubos",
      "description": "Gelo de qualidade",
      "price": "5,00",
      "image": "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Gelo"
    }
  ]
}
```

---

## 🔧 CORREÇÕES JÁ FEITAS NO CÓDIGO:

### ✅ Ícone PIX corrigido
- Agora não sai mais do layout
- Tamanho ajustado

### ✅ Imagens maiores
- Produtos: 220px → 280px
- Melhor visualização

---

## 🚀 COMO APLICAR AS CORREÇÕES:

### Opção 1: Editar diretamente
```bash
cd site-empresa-v3
nano data/company-data.json
# Cole o JSON corrigido acima
# Ctrl+O para salvar
# Ctrl+X para sair
```

### Opção 2: Usar o painel admin
1. Abra: localhost:8000/admin/admin.html
2. Vá em "WhatsApp":
   - Corrija o número: `5584994777280`
3. Vá em "Localização":
   - mapsEmbed: Cole APENAS a URL (sem iframe)
4. Salve e baixe o JSON
5. Substitua o arquivo

---

## ✅ DEPOIS DAS CORREÇÕES:

1. Recarregue o site (Ctrl+F5)
2. Teste:
   - ✅ Mapa deve aparecer
   - ✅ Botão "Ver no Google Maps" deve funcionar
   - ✅ Botão WhatsApp nos produtos deve funcionar
   - ✅ Ícone PIX deve estar ok

---

## 💡 DICA IMPORTANTE:

**Para Google Maps:**
- NUNCA cole o código `<iframe>...</iframe>`
- Cole APENAS a URL que está dentro do `src="..."`
- A URL sempre começa com: `https://www.google.com/maps/embed?pb=`

---

**Aplique estas correções e tudo vai funcionar perfeitamente! 🚀**
