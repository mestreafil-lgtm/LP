# Soluções Caseiras — Landing Page

Landing page de oferta do e-book **Soluções Caseiras**: 99 pratos completos para comer bem gastando pouco.

Repositório: [Jurandy1/Landingpage](https://github.com/Jurandy1/Landingpage)

## Stack

- [TanStack Start](https://tanstack.com/start) + React 19
- TypeScript
- Tailwind CSS 4
- Vite 8

## Como rodar

Requisitos: [Node.js](https://nodejs.org/) 20+ (ou [Bun](https://bun.sh/)).

```sh
git clone https://github.com/Jurandy1/Landingpage.git
cd Landingpage
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (em geral `http://localhost:5173`).

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Estrutura

```
public/images/   # Capa, kit e bônus (assets estáticos)
src/routes/      # Páginas (TanStack Router)
src/styles.css   # Design system / Tailwind
```

Checkout da oferta: link Cakto configurado em `src/routes/index.tsx`.

## Deploy

Após `npm run build`, faça o deploy da pasta de saída no provedor de preferência (Vercel, Netlify, Cloudflare Pages, etc.), conforme a documentação do TanStack Start / Nitro.
