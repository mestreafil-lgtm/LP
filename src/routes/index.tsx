import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const PRIMARY_CTA_SELECTOR = "[data-primary-cta]";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Soluções Caseiras — Faça o dinheiro do mercado render mais",
      },
      {
        name: "description",
        content:
          "99 refeições econômicas com custo por porção, rendimento, substituições e congelamento. Acesso imediato e 2 bônus por R$39,90.",
      },
      {
        property: "og:title",
        content: "Soluções Caseiras — 99 refeições econômicas",
      },
      {
        property: "og:description",
        content:
          "Faça o dinheiro do mercado render mais com refeições completas e ingredientes simples.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/images/capa.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/images/capa.png" },
    ],
  }),
  component: Index,
});

const CHECKOUT = "https://pay.kiwify.com.br/xbFhPDB";

const images = {
  capa: "/images/capa.png",
  kit: "/images/kit.png",
  bonus1: "/images/bonus1.png",
  bonus2: "/images/bonus2.png",
} as const;

const heroChecks = [
  "99 receitas completas",
  "Custo por porção",
  "2 bônus incluídos",
  "Acesso imediato",
];

const pratos = [
  {
    preco: "R$11,55",
    nome: "Hambúrguer de soja com batata rústica",
    detalhe: "50 min · 4 porções · R$10,75 em promoção",
    foto: "/uploads/fotos_receitas/hamburguer-de-soja-com-batata-rustica.png",
  },
  {
    preco: "R$11,60",
    nome: "Prato feito de ovo",
    detalhe: "40 min · 4 porções · R$10,40 em promoção",
    foto: "/uploads/fotos_receitas/prato-feito-de-ovo.png",
  },
  {
    preco: "R$13,60",
    nome: "Lasanha econômica",
    detalhe: "1h10 · 5 porções · R$12,70 em promoção",
    foto: "/uploads/fotos_receitas/lasanha-economica.png",
  },
  {
    preco: "R$14,55",
    nome: "Almôndegas ao molho",
    detalhe: "55 min · 4 porções · R$12,75 em promoção",
    foto: "/uploads/fotos_receitas/almondegas-ao-molho.png",
  },
];

const dores = [
  "comprar ingredientes sem planejamento",
  "deixar comida estragar na geladeira",
  "repetir sempre os mesmos pratos",
  "gastar mais do que precisava",
  "recorrer a uma opção mais cara por falta de tempo",
];

const mecanismo = [
  {
    titulo: "Rendimento",
    texto:
      "Cenoura, abobrinha, batata, pão, arroz e feijão entram no preparo para aumentar o rendimento e absorver o sabor.",
  },
  {
    titulo: "Aproveitamento",
    texto:
      "Arroz e feijão que sobraram viram bolinhos, croquetes, arroz de forno, tutu, caldo e tropeiro.",
  },
  {
    titulo: "Compra inteligente",
    texto:
      "Substituições de corte e ingrediente para aproveitar o que estiver mais barato na semana.",
  },
];

const dentro = [
  {
    titulo: "Quanto custa",
    texto: "Estimativa de custo por porção e referência de preço em promoção.",
  },
  {
    titulo: "Quanto tempo leva",
    texto: "Você sabe antes de começar se a receita cabe na sua rotina.",
  },
  {
    titulo: "Quanto rende",
    texto: "Planeje quantas refeições vão sair de cada preparo.",
  },
  {
    titulo: "O que pode substituir",
    texto: "Alternativas para aproveitar o ingrediente mais barato.",
  },
  {
    titulo: "Como gastar menos",
    texto: "Dicas práticas para fazer cada ingrediente render mais.",
  },
  {
    titulo: "Como congelar",
    texto: "O que pode ir ao freezer, por quanto tempo e como armazenar.",
  },
];

const paginas = [
  {
    src: "/uploads/01-frango-estrogonofe-p7.png",
    alt: "Página 7 do eBook com a receita de estrogonofe de frango",
    legenda: "Estrogonofe de frango · pág. 7",
  },
  {
    src: "/uploads/02-carne-moida-almondegas-p52.png",
    alt: "Página 52 do eBook com a receita de almôndegas ao molho",
    legenda: "Almôndegas ao molho · pág. 52",
  },
  {
    src: "/uploads/03-ovo-prato-feito-p33.png",
    alt: "Página 33 do eBook com a receita de prato feito de ovo",
    legenda: "Prato feito de ovo · pág. 33",
  },
  {
    src: "/uploads/04-massa-lasanha-economica-p66.png",
    alt: "Página 66 do eBook com a receita de lasanha econômica",
    legenda: "Lasanha econômica · pág. 66",
  },
  {
    src: "/uploads/05-soja-hamburguer-p113.png",
    alt: "Página 113 do eBook com hambúrguer de soja e batata rústica",
    legenda: "Hambúrguer de soja · pág. 113",
  },
  {
    src: "/uploads/06-close-custo-dica-congelamento.png",
    alt: "Detalhe do eBook mostrando custo, dica de economia e congelamento",
    legenda: "Custo, economia e congelamento",
  },
];

const categorias = [
  "Frango",
  "Ovos",
  "Carne moída",
  "Massas",
  "Arroz e feijão",
  "Batata e mandioca",
  "Sardinha e atum",
  "Linguiça e salsicha",
  "Soja",
];

const proximaCompra = [
  "quais proteínas econômicas priorizar",
  "como aproveitar um ingrediente em mais de uma refeição",
  "quais acompanhamentos aumentam o rendimento",
  "quais preparações podem ser congeladas",
  "o que fazer com arroz, feijão e outros alimentos que sobraram",
  "como montar refeições completas sem ingredientes caros",
];

const paraQuem = [
  "sente que o mercado pesa cada vez mais no orçamento",
  "vive sem ideia do que preparar",
  "acaba repetindo sempre os mesmos pratos",
  "quer montar marmitas para a semana",
  "quer aproveitar melhor aquilo que compra",
  "não quer depender de ingredientes caros",
  "quer receitas simples, mesmo sem cozinhar muito",
];

const depoimentoFoto = (arquivo: string) => `/images/depoimentos/${arquivo}.png`;

const depoimentos = [
  {
    nome: "Juliano Vasconcelos",
    foto: depoimentoFoto("juliano-vasconcelos"),
    texto:
      "Conteúdo incrível e muito bem organizado. Me ajudou a planejar melhor as refeições da semana, economizar no mercado e manter uma alimentação de qualidade mesmo com a rotina corrida. Recomendo demais!",
  },
  {
    nome: "Camila Monteiro",
    foto: depoimentoFoto("camila-monteiro"),
    texto:
      "Simplesmente incrível! As receitas são deliciosas, acessíveis e cabem na rotina. Parei de pedir delivery e agora preparo minhas refeições em casa com muito mais qualidade. Já indiquei para várias amigas!",
  },
  {
    nome: "Henrique Rabelo",
    foto: depoimentoFoto("henrique-rabelo"),
    texto:
      "Com esse e-book consegui colocar a alimentação em dia sem gastar uma fortuna. As receitas são simples, práticas e realmente funcionam. Já reduzi muito os pedidos de delivery e sobrou mais dinheiro no fim do mês.",
  },
  {
    nome: "Maria das Dores",
    foto: depoimentoFoto("maria-das-dores"),
    texto:
      "Eu e meu marido amamos o e-book! As receitas são simples, baratas e muito saborosas. Voltamos a cozinhar em casa e já sentimos a diferença no bolso. Está sendo uma grande ajuda no nosso dia a dia.",
  },
  {
    nome: "Gustavo Almeida",
    foto: depoimentoFoto("gustavo-almeida"),
    texto:
      "O e-book me mostrou que é possível comer bem gastando pouco. As receitas são práticas, variadas e fáceis de fazer. Consegui melhorar minha alimentação e ainda sobra mais dinheiro no fim do mês.",
  },
  {
    nome: "Maricleide da Silva",
    foto: depoimentoFoto("maricleide-da-silva"),
    texto:
      "Adorei o e-book! As receitas são práticas, bem explicadas e com ingredientes que a gente encontra fácil. Já fiz várias aqui em casa e minha família elogia sempre. Me ajudou muito a variar o cardápio sem gastar muito.",
  },
  {
    nome: "Rafael Cardoso",
    foto: depoimentoFoto("rafael-cardoso"),
    texto:
      "Top demais! O e-book é completo e muito bem explicado. As receitas são fáceis, economizei bastante e consegui incluir opções saudáveis no meu dia a dia. Meu doguinho também está aproveitando algumas receitas.",
  },
  {
    nome: "Fernanda Oliveira",
    foto: depoimentoFoto("fernanda-oliveira"),
    texto:
      "O e-book me ajudou muito a manter uma alimentação equilibrada mesmo com a rotina corrida. As receitas são práticas, gostosas e cabem no meu dia a dia. Já sinto mais energia nos treinos e consegui melhorar meus resultados.",
  },
  {
    nome: "Gabriel Nascimento",
    foto: depoimentoFoto("gabriel-nascimento"),
    texto:
      "O e-book me surpreendeu! As receitas são simples, mas muito saborosas. Consegui reduzir meus gastos no mercado e ainda melhorei minha alimentação. Hoje me sinto com mais energia e disposto no dia a dia.",
  },
  {
    nome: "Juliana Lira",
    foto: depoimentoFoto("juliana-lira"),
    texto:
      "Esse e-book facilitou muito minha rotina. As receitas são deliciosas, simples e cabem no orçamento. Consigo alimentar minha família com comida de verdade e sem complicação. Super recomendo!",
  },
  {
    nome: "Diego Martins",
    foto: depoimentoFoto("diego-martins"),
    texto:
      "Conteúdo sensacional! As receitas são fáceis, bem explicadas e com ingredientes que realmente encontramos. Consegui economizar no mercado e agora me alimento muito melhor, mesmo com a rotina de trabalho intensa. Super recomendo!",
  },
  {
    nome: "Camila Freitas",
    foto: depoimentoFoto("camila-freitas"),
    texto:
      "Adorei o conteúdo! As receitas são práticas, acessíveis e cabem perfeitamente na minha rotina. Além de economizar, consigo comer melhor e variar o cardápio. Meu gato até agradece, porque agora sobra mais para ele também!",
  },
  {
    nome: "Renan Brandes",
    foto: depoimentoFoto("renan-brandes"),
    texto:
      "Me ajudou demais na rotina corrida. Consigo preparar refeições gostosas em pouco tempo e gastando bem menos. O conteúdo é direto ao ponto e fácil de seguir. Vale muito a pena!",
  },
  {
    nome: "Iara dos Santos",
    foto: depoimentoFoto("iara-dos-santos"),
    texto:
      "Achei maravilhoso! As receitas são fáceis de seguir, econômicas e muito saborosas. Mesmo morando fora, consigo adaptar os ingredientes e manter uma alimentação saudável. Já indiquei para minhas amigas. Vale muito a pena!",
  },
  {
    nome: "Thiago Nunes",
    foto: depoimentoFoto("thiago-nunes"),
    texto:
      "Conteúdo sensacional! As receitas são práticas, saborosas e com ingredientes que encontro facilmente. Me ajudou a criar hábitos melhores e a gastar bem menos. Recomendo para qualquer pessoa!",
  },
  {
    nome: "Bruna Carvalho",
    foto: depoimentoFoto("bruna-carvalho"),
    texto:
      "Simplesmente amei! As receitas são deliciosas, práticas e cabem perfeitamente na rotina. Consegui variar muito o cardápio e hoje como bem sem gastar muito. O e-book realmente faz a diferença!",
  },
  {
    nome: "Rafael Tanaka",
    foto: depoimentoFoto("rafael-tanaka"),
    texto:
      "Material excelente! Aprendi várias receitas que eu não conhecia e que são fáceis de fazer. Já economizei bastante e a qualidade das refeições melhorou muito. Vale cada página!",
  },
  {
    nome: "Beatriz Santos",
    foto: depoimentoFoto("beatriz-santos"),
    texto:
      "Adorei o e-book! As receitas são deliciosas, fáceis de fazer e com ingredientes acessíveis. Me ajudou a manter uma alimentação mais saudável e ainda economizei bastante no mercado.",
  },
  {
    nome: "Felipe Martins",
    foto: depoimentoFoto("felipe-martins"),
    texto:
      "Esse e-book foi uma grande bênção na minha vida. Traz receitas simples, acessíveis e que ajudam a cuidar da saúde e do bolso. Consegui organizar minha alimentação e hoje me sinto muito melhor. Gratidão por esse conteúdo!",
  },
  {
    nome: "Ana Carolina",
    foto: depoimentoFoto("ana-carolina"),
    texto:
      "Eu amei esse e-book! Antes eu gastava muito com delivery e hoje economizo bastante. As receitas são fáceis, baratas e muito gostosas!",
  },
  {
    nome: "Eduardo Lima",
    foto: depoimentoFoto("eduardo-lima"),
    texto:
      "Esse e-book me ajudou a ter uma alimentação mais saudável sem gastar muito. As receitas são fáceis, bem detalhadas e usam ingredientes que encontro na minha cidade. Já percebi diferença no meu dia a dia, mais disposição e menos gastos. Super indico!",
  },
  {
    nome: "Letícia Ramos",
    foto: depoimentoFoto("leticia-ramos"),
    texto:
      "Mais do que receitas, o e-book me trouxe um novo olhar sobre o cuidado com o corpo. As receitas são simples, acessíveis e muito saborosas. Me ajudou a criar hábitos melhores e hoje me sinto mais saudável e disposta.",
  },
  {
    nome: "Lucas Guimarães",
    foto: depoimentoFoto("lucas-guimaraes"),
    texto:
      "Top demais! Além de economizar, aprendi a cozinhar coisas que realmente gosto. As receitas são variadas e cabem no bolso. Minha alimentação melhorou muito e hoje consigo manter a rotina sem complicação.",
  },
  {
    nome: "Carla Mendes",
    foto: depoimentoFoto("carla-mendes"),
    texto:
      "Conteúdo completo e muito bem explicado! As receitas são variadas, econômicas e realmente funcionam. Consegui montar meu cardápio da semana, reduzi muito o delivery e agora me organizo melhor. Recomendo de verdade!",
  },
  {
    nome: "João Paulo",
    foto: depoimentoFoto("joao-paulo"),
    texto:
      "O e-book me ajudou a organizar minha rotina e a comer melhor sem gastar muito. Já senti a diferença no meu bolso no fim do mês!",
  },
  {
    nome: "Patrícia Müller",
    foto: depoimentoFoto("patricia-muller"),
    texto:
      "Adorei o e-book! Mesmo morando fora, consigo adaptar as receitas com ingredientes que encontro aqui na Suíça. São receitas simples, variadas e muito bem explicadas. Me ajudou a manter uma alimentação saudável e economizar. Já indiquei para várias amigas!",
  },
  {
    nome: "Bruno Tavares",
    foto: depoimentoFoto("bruno-tavares"),
    texto:
      "Muito prático e direto ao ponto. As receitas são ótimas, fáceis de fazer e realmente funcionam. Consegui economizar bastante no mês e ainda variar o cardápio. Vale cada centavo!",
  },
  {
    nome: "Mariana Schmidt",
    foto: depoimentoFoto("mariana-schmidt"),
    texto:
      "Receitas práticas, ingredientes acessíveis e um conteúdo muito bem explicado. Consegui variar o cardápio da semana e parei de depender de comida pronta!",
  },
  {
    nome: "Lucas Ribeiro",
    foto: depoimentoFoto("lucas-ribeiro"),
    texto:
      "Simplesmente sensacional! Além de economizar, eu aprendi a cozinhar de forma mais prática e saudável. Hoje consigo me alimentar bem mesmo com a rotina corrida.",
  },
  {
    nome: "Kely Felippo",
    foto: depoimentoFoto("kely-felippo"),
    texto:
      "Esse e-book foi uma ótima surpresa! Me ajudou a organizar melhor minha alimentação, economizar e ter mais tempo no dia a dia. As receitas são práticas, saborosas e cabem na minha rotina. Super recomendo!",
  },
  {
    nome: "Fernanda Lima",
    foto: depoimentoFoto("fernanda-lima"),
    texto:
      "Esse e-book mudou minha relação com a comida e com o dinheiro. As receitas são deliciosas e cabem no orçamento. Super recomendo!",
  },
];

const inclui = [
  "99 refeições completas de até R$15 por porção",
  "Custo estimado por porção e em promoção",
  "Tempo de preparo e rendimento de cada receita",
  "Substituições de corte e de ingrediente",
  "Dicas de economia receita por receita",
  "Orientação de congelamento e armazenamento",
  "Bônus 1: Lanches e Sobremesas",
  "Bônus 2: Guia da Economia",
];

const faq = [
  {
    q: "Preciso saber cozinhar?",
    a: "Não. As receitas são apresentadas de forma simples, sem ingredientes difíceis e sem técnicas profissionais.",
  },
  {
    q: "Os R$15 são por receita inteira ou por porção?",
    a: "Por porção. Cada refeição mostra o custo estimado da porção, não da panela inteira.",
  },
  {
    q: "Os preços são exatos?",
    a: "São estimativas baseadas em preços médios e podem variar conforme a região, o mercado e a época do ano.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, você recebe o acesso digital e pode abrir o material pelo celular, tablet ou computador.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia e pode solicitar o reembolso dentro desse prazo.",
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={`mt-0.5 h-5 w-5 shrink-0 text-success ${className}`}
      fill="currentColor"
    >
      <path d="M8.2 14.6 4 10.4l1.4-1.4 2.8 2.8 6.4-6.4L16 6.8z" />
    </svg>
  );
}

function Shield() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-14 w-14 text-success"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.5 4.5 5.6v6c0 4.5 3.1 8.6 7.5 9.9 4.4-1.3 7.5-5.4 7.5-9.9v-6z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" />
        </svg>
      ))}
    </div>
  );
}

function DepoimentoCard({
  depoimento,
  className = "",
}: {
  depoimento: (typeof depoimentos)[number];
  className?: string;
}) {
  return (
    <figure className={`content-card w-[min(420px,82vw)] shrink-0 ${className}`}>
      <header className="flex items-center gap-4">
        <img
          src={depoimento.foto}
          alt={`Foto de ${depoimento.nome}`}
          className="h-14 w-14 shrink-0 rounded-full border border-border object-cover"
          loading="lazy"
          width={56}
          height={56}
        />
        <div>
          <p className="font-display text-lg font-bold">{depoimento.nome}</p>
          <Stars />
        </div>
      </header>
      <blockquote className="mt-5 text-lg leading-relaxed text-pretty">
        “{depoimento.texto}”
      </blockquote>
    </figure>
  );
}

function Cta({
  label = "QUERO ECONOMIZAR NAS MINHAS REFEIÇÕES",
  compact = false,
  primary = false,
}: {
  label?: string;
  compact?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn ${compact ? "cta-btn-compact" : ""}`}
      {...(primary ? { "data-primary-cta": true } : {})}
    >
      {label}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
  description,
  centered = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <header className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${eyebrow ? "mt-3" : ""} section-title`}>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

function Index() {
  const [isMobile, setIsMobile] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [zoom, setZoom] = useState<(typeof paginas)[number] | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(PRIMARY_CTA_SELECTOR);
    if (!nodes.length) return;

    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setShowStickyCta(visible.size === 0);
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  const trilhaA = [
    ...depoimentos.filter((_, index) => index % 2 === 0),
    ...depoimentos.filter((_, index) => index % 2 === 0),
  ];
  const trilhaB = [
    ...depoimentos.filter((_, index) => index % 2 === 1),
    ...depoimentos.filter((_, index) => index % 2 === 1),
  ];

  return (
    <main
      className={`min-h-screen overflow-x-hidden bg-background ${showStickyCta ? "pb-24" : ""}`}
    >
      <section className="hero-section border-b border-border">
        <div className="page-container section-space">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <span className="eyebrow">E-book digital + 2 bônus</span>
              <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-[3.75rem]">
                Faça o dinheiro do mercado <span className="text-primary">render muito mais</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
                99 refeições completas com custo estimado de até <strong>R$15 por porção</strong>,
                feitas com ingredientes simples que você encontra no dia a dia.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Saiba quanto custa, quanto rende, quanto tempo leva, o que substituir e como
                congelar cada preparo.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {heroChecks.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-lg font-semibold">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Cta primary />
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Pagamento único de R$39,90 · Sem mensalidade · Acesso imediato · Garantia de 7
                  dias
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="hero-glow" aria-hidden="true" />
              <img
                src={images.capa}
                alt="Capa do e-book Soluções Caseiras"
                className="relative mx-auto w-full max-w-[390px] rounded-xl border border-border shadow-2xl"
                width={512}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Prova da promessa"
            description="Os valores abaixo são estimativas das próprias receitas e podem variar conforme a região e o mercado."
          >
            Veja algumas das refeições que você vai encontrar
          </SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pratos.map((prato) => (
              <article key={prato.nome} className="content-card overflow-hidden !p-0">
                <div className="h-[170px] overflow-hidden bg-surface-2">
                  <img
                    src={prato.foto}
                    alt={prato.nome}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-4xl font-extrabold text-success">{prato.preco}</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    por porção
                  </p>
                  <h3 className="mt-5 text-xl font-bold text-balance">{prato.nome}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{prato.detalhe}</p>
                </div>
              </article>
            ))}
          </div>
          <img
            src={images.kit}
            alt="Materiais do Soluções Caseiras com refeições prontas"
            className="mt-10 aspect-[12/5] w-full rounded-2xl border border-border object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle>
            Você vai ao mercado, gasta mais e parece que a comida dura cada vez menos?
          </SectionTitle>
          <p className="section-description">
            Você compra carne, arroz e legumes e, poucos dias depois, já está se perguntando:{" "}
            <em className="text-foreground">“o que eu vou fazer para comer hoje?”</em>
          </p>
          <p className="mt-7 text-xl font-semibold">Quando faltam ideias, é fácil:</p>
          <ul className="mt-5 grid gap-4">
            {dores.map((dor) => (
              <li key={dor} className="flex gap-4 text-lg leading-relaxed text-muted-foreground">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-sm bg-primary" />
                {dor}.
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xl leading-relaxed">
            O Soluções Caseiras mostra o que preparar, quanto custa e como fazer cada compra render
            mais.
          </p>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle eyebrow="O mecanismo">
            O segredo não é comer menos. É fazer os ingredientes{" "}
            <span className="text-success">renderem mais.</span>
          </SectionTitle>
          <p className="section-description">
            Combine ingredientes econômicos para aumentar o rendimento, reduzir o desperdício e
            manter o prato completo.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {mecanismo.map((item) => (
              <article key={item.titulo} className="content-card">
                <h3 className="text-xl font-bold text-primary">{item.titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Dentro de cada receita"
            description="Em cada uma das 99 refeições você encontra informações para decidir, preparar e conservar melhor."
          >
            Não é apenas uma lista de receitas
          </SectionTitle>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {dentro.map((item) => (
              <article key={item.titulo} className="feature-item">
                <h3 className="text-xl font-bold">{item.titulo}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle
            eyebrow="Por dentro"
            description="Todas as receitas mostram custo por porção, tempo, rendimento, substituições, dica de economia e orientação de congelamento."
          >
            Não é só uma capa bonita. Veja páginas reais do material
          </SectionTitle>

          {isMobile ? (
            <div className="mt-6">
              <p className="mb-3 font-display text-sm font-semibold text-accent">
                Deslize para ver as páginas · toque para ampliar
              </p>
              <div className="snap-rail snap-rail-bleed">
                {paginas.map((pagina) => (
                  <figure key={pagina.src} className="snap-item w-[78vw] shrink-0">
                    <button
                      type="button"
                      onClick={() => setZoom(pagina)}
                      className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-white shadow-xl"
                    >
                      <img
                        src={pagina.src}
                        alt={pagina.alt}
                        className="aspect-[2134/3334] w-full object-cover object-top"
                        loading="lazy"
                      />
                    </button>
                    <figcaption className="mt-3 font-display text-sm font-semibold text-muted-foreground">
                      {pagina.legenda}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {paginas.map((pagina) => (
                <figure key={pagina.src} className="group">
                  <button
                    type="button"
                    onClick={() => setZoom(pagina)}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-white shadow-xl"
                  >
                    <img
                      src={pagina.src}
                      alt={pagina.alt}
                      className="aspect-[2134/3334] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                  <figcaption className="mt-3 font-display text-sm font-semibold text-muted-foreground sm:text-base">
                    {pagina.legenda}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle>
            Uma opção diferente para praticamente qualquer ingrediente que você tiver em casa
          </SectionTitle>
          <div className="mt-8 flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <span key={categoria} className="category-pill">
                {categoria}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="page-container section-space">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle>Já na próxima compra você vai saber:</SectionTitle>
              <ul className="mt-8 grid gap-5">
                {proximaCompra.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed">
                    <Check />
                    {item}.
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>O Soluções Caseiras é para você que…</SectionTitle>
              <ul className="mt-8 grid gap-5">
                {paraQuem.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                  >
                    <Check />
                    {item}.
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xl leading-relaxed">
                Você não precisa ser bom de cozinha. As receitas foram pensadas para a rotina normal
                de uma casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt border-b border-border">
        <div className="page-container section-space">
          <SectionTitle eyebrow="Bônus incluídos">
            E você ainda leva dois materiais extras
          </SectionTitle>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                image: images.bonus1,
                tag: "Bônus 1",
                title: "Lanches & Sobremesas",
                text: "Ideias extras para variar os lanches e matar a vontade de algo diferente sem perder o controle do orçamento.",
              },
              {
                image: images.bonus2,
                tag: "Bônus 2",
                title: "Guia da Economia",
                text: "Organize as compras, aproveite melhor os ingredientes e reduza o que acaba indo para o lixo.",
              },
            ].map((bonus) => (
              <article
                key={bonus.title}
                className="content-card flex flex-col gap-6 sm:flex-row sm:items-start"
              >
                <img
                  src={bonus.image}
                  alt={`Capa do bônus ${bonus.title}`}
                  className="w-32 shrink-0 rounded-lg border border-border shadow-lg"
                  loading="lazy"
                />
                <div>
                  <p className="eyebrow !text-accent">{bonus.tag}</p>
                  <h3 className="mt-2 text-2xl font-bold">{bonus.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{bonus.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-lg">
            Os dois materiais estão incluídos hoje sem custo adicional.
          </p>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border py-16 md:py-24">
        <div className="page-container">
          <SectionTitle
            centered
            description={
              isMobile
                ? "Deslize para ver mais depoimentos."
                : "Passe o mouse para pausar e ler com calma."
            }
          >
            Quem já colocou as receitas em prática
          </SectionTitle>
        </div>

        {isMobile ? (
          <div className="snap-rail mt-8 px-5">
            {depoimentos.map((depoimento) => (
              <DepoimentoCard
                key={depoimento.nome}
                depoimento={depoimento}
                className="snap-item !w-[86vw]"
              />
            ))}
          </div>
        ) : (
          <div className="testimonial-mask mt-10">
            <div className="testimonial-track">
              {trilhaA.map((depoimento, index) => (
                <DepoimentoCard key={`a-${depoimento.nome}-${index}`} depoimento={depoimento} />
              ))}
            </div>
            <div className="testimonial-track testimonial-track-reverse mt-5">
              {trilhaB.map((depoimento, index) => (
                <DepoimentoCard key={`b-${depoimento.nome}-${index}`} depoimento={depoimento} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section id="oferta" className="section-alt border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <SectionTitle centered eyebrow="Oferta">
            Tenha acesso a todo o conteúdo
          </SectionTitle>
          <div className="offer-card mt-10">
            <div className="p-6 sm:p-10">
              <p className="font-display text-2xl font-extrabold">Você recebe:</p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {inclui.map((item) => (
                  <li key={item} className="flex gap-2 text-lg leading-relaxed">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border bg-surface-2/60 px-6 py-10 text-center sm:px-10">
              <p className="text-xl text-muted-foreground">Pagamento único de</p>
              <p className="mt-2 font-display leading-none font-extrabold text-success">
                <span className="align-top text-3xl sm:text-4xl">R$</span>
                <span className="text-7xl sm:text-8xl">39</span>
                <span className="align-top text-3xl sm:text-4xl">,90</span>
              </p>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed">
                São 99 refeições diferentes — menos de R$0,41 por receita — e os 2 bônus já estão
                incluídos.
              </p>
              <p className="mt-3 text-lg text-muted-foreground">
                Sem mensalidade · Acesso imediato
              </p>
              <div className="mt-8">
                <Cta primary />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container py-14 md:py-20">
          <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-success/40 bg-surface/60 px-6 py-12 text-center sm:px-12">
            <Shield />
            <h2 className="section-title">Você pode conhecer o Soluções Caseiras por 7 dias</h2>
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Acesse o material, confira receitas, custos e bônus. Se o conteúdo não for para você,
              solicite o reembolso dentro do prazo da garantia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="narrow-container section-space">
          <SectionTitle eyebrow="Dúvidas">Perguntas frequentes</SectionTitle>
          <div className="mt-10 divide-y-2 divide-border border-b-2 border-border">
            {faq.map((item) => (
              <details key={item.q} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-bold">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-lg leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="section-title">
            Faça o dinheiro do mercado render muito mais a partir da próxima compra
          </h2>
          <p className="mt-5 text-xl text-muted-foreground">
            99 refeições com custo por porção + 2 bônus, por R$39,90 em pagamento único.
          </p>
          <div className="mt-8">
            <Cta primary />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="page-container text-center text-base leading-relaxed text-muted-foreground">
          <p className="font-display font-bold tracking-wide text-foreground">Soluções Caseiras</p>
          <p className="mx-auto mt-2 max-w-3xl">
            Produto digital. Acesso imediato, pagamento único e garantia de 7 dias. Os custos por
            porção são estimativas e podem variar conforme a região e o mercado.
          </p>
        </div>
      </footer>

      <aside
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 ease-out ${
          showStickyCta ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
        aria-label="Oferta fixa"
        aria-hidden={!showStickyCta}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-display text-2xl leading-none font-extrabold text-success">
              R$39,90
            </p>
            <p className="hidden text-sm text-muted-foreground sm:block">pagamento único</p>
          </div>
          <Cta compact label="QUERO MEU ACESSO" />
        </div>
      </aside>

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Página ampliada"
          className="lightbox"
          onClick={() => setZoom(null)}
        >
          <img src={zoom.src} alt={zoom.alt} className="lightbox-image" />
          <button
            type="button"
            aria-label="Fechar"
            className="lightbox-close"
            onClick={() => setZoom(null)}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
