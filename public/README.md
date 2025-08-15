# Pasta Public

Esta pasta é onde você deve colocar arquivos estáticos como imagens, ícones, favicons, etc.

## Estrutura Recomendada:

```
public/
├── images/          # Imagens gerais do site
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── services/
│       ├── manutencao.jpg
│       ├── diagnostico.jpg
│       └── eletrico.jpg
├── icons/           # Ícones
│   ├── whatsapp.svg
│   ├── phone.svg
│   └── tools.svg
└── favicon.ico      # Favicon do site
```

## Como usar as imagens:

### 1. Com o componente Image do Next.js (Recomendado):
```jsx
import Image from 'next/image'

// Imagem da pasta public
<Image 
  src="/images/logo.png" 
  alt="Logo da oficina"
  width={200}
  height={100}
/>
```

### 2. Com tag img normal:
```jsx
<img src="/images/logo.png" alt="Logo da oficina" />
```

### 3. Como background no CSS:
```css
.hero-section {
  background-image: url('/images/hero-bg.jpg');
}
```

## Vantagens da pasta public:
- Arquivos são servidos diretamente pelo servidor
- URLs começam com `/` (ex: `/images/logo.png`)
- Otimização automática pelo Next.js
- Cache eficiente 