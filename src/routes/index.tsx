import { createFileRoute } from "@tanstack/react-router";
import { createElement, useEffect, useState, type ReactNode } from "react";
import heroMockup from "@/assets/mockup-hero.png";
import chatgptControleFinanceiro from "@/assets/chatgpt-controle-financeiro.png";
import { checkoutEventParameters, initMetaPixel, trackMetaEvent } from "@/lib/meta-pixel";

const CHECKOUT_URL = "https://pay.kiwify.com.br/cVSnHjf";
const WHATSAPP_URL = "https://wa.me/5565974002235?text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20do%20M%C3%A9todo%20Sobragrana.%20Quero%20comprar!";

function trackInitiateCheckout() {
  trackMetaEvent("InitiateCheckout", checkoutEventParameters);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SobraGrana | Organize seu dinheiro pelo ChatGPT" },
      {
        name: "description",
        content:
          "Aprenda um método simples para registrar gastos, acompanhar seu limite e organizar seu dinheiro usando o ChatGPT.",
      },
      {
        property: "og:title",
        content: "SobraGrana | Organize seu dinheiro pelo ChatGPT",
      },
      {
        property: "og:description",
        content:
          "Registre despesas em segundos e entenda para onde seu dinheiro está indo com um método simples e prático.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const productContents = [
  {
    number: "01",
    title: "Mentalidade sobre o dinheiro",
    text: "Entenda como pequenas crenças e comportamentos podem influenciar suas decisões financeiras e comece a desenvolver uma relação mais consciente com seu dinheiro.",
  },
  {
    number: "02",
    title: "Diagnóstico financeiro",
    text: "Descubra quanto entra, quanto sai e para onde seu dinheiro está indo. Você começa a enxergar sua situação antes de tentar mudá-la.",
  },
  {
    number: "03",
    title: "Método prático de controle",
    text: "Aprenda quatro ações simples: Registrar, Categorizar, Acompanhar e Ajustar. Você passa a ter um processo para seguir, em vez de depender apenas da motivação.",
  },
  {
    number: "04",
    title: "ChatGPT como seu assistente financeiro",
    text: "Aprenda como usar o ChatGPT para registrar seus gastos e acompanhar seu controle durante o mês.",
  },
  {
    number: "05",
    title: "Passo a passo com prints",
    text: "Visualize exatamente como começar. Ideal para quem pensa: ‘Tá, mas onde eu clico e o que eu escrevo?’",
  },
  {
    number: "06",
    title: "Prompt Mestre pronto",
    text: "Nada de tentar descobrir o comando certo. Você recebe o prompt para copiar, colar e configurar seu controle.",
  },
  {
    number: "07",
    title: "Checklist diário",
    text: "Tenha uma referência rápida para conferir se está seguindo o método.",
  },
  {
    number: "08",
    title: "Checklist mensal",
    text: "No final do mês, revise seus registros, analise seus gastos e identifique o que precisa ajustar.",
  },
];

const audience = [
  "Não sabe exatamente para onde seu dinheiro está indo.",
  "Fica triste em não ter dinheiro no final do mês.",
  "Começa a controlar os gastos e depois abandona.",
  "Não gosta de planilhas complicadas.",
  "Faz várias pequenas compras e perde a noção do total.",
  "Quer começar a se organizar com o dinheiro que ganha hoje.",
  "Quer transformar o controle financeiro em hábito.",
  "Já usa ou gostaria de usar o ChatGPT para facilitar sua rotina.",
];

const offerItems = [
  "Guia completo SOBRAGRANA",
  "Método prático de controle financeiro",
  "Prompt Mestre pronto",
  "Passo a passo ilustrado",
  "Exemplos práticos",
  "Checklist diário",
  "Checklist mensal",
  "Videoaulas bônus",
  "Método para usar o ChatGPT no seu controle financeiro",
];

const faq = [
  {
    q: "Preciso entender de finanças?",
    a: "Não. O SOBRAGRANA foi estruturado justamente para tornar o início mais simples e prático.",
  },
  {
    q: "Preciso saber mexer em planilhas?",
    a: "Não. O método utiliza o ChatGPT como ferramenta principal de apoio ao controle.",
  },
  {
    q: "Nunca usei o ChatGPT dessa maneira. Vou conseguir?",
    a: "Você recebe o passo a passo com exemplos e um Prompt Mestre pronto para copiar e colar.",
  },
  {
    q: "Eu ganho pouco. Esse método serve para mim?",
    a: "O método não depende de uma renda específica. O objetivo é ajudar você a ter clareza sobre aquilo que já entra e sai.",
  },
  {
    q: "Preciso registrar até gastos pequenos?",
    a: "Sim. Justamente porque pequenos gastos acumulados podem representar uma parcela relevante das despesas do mês.",
  },
  {
    q: "Quanto tempo preciso dedicar?",
    a: "A proposta é tornar o registro parte da rotina, fazendo-o principalmente no momento em que cada gasto acontece.",
  },
  {
    q: "O ChatGPT vai cuidar sozinho das minhas finanças?",
    a: "Não. Ele funciona como ferramenta de apoio. As informações precisam ser fornecidas corretamente por você e as decisões financeiras continuam sendo suas.",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5" aria-label="SobraGrana">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-black text-primary-foreground">S</span>
      <span className="text-xl font-extrabold text-foreground">Sobra<span className="text-primary">Grana</span></span>
    </div>
  );
}

function CtaButton({ children, className = "", href = CHECKOUT_URL }: { children: ReactNode; className?: string; href?: string }) {
  const opensCheckout = href === CHECKOUT_URL;
  const isPageAnchor = href.startsWith("#");

  return (
    <a href={href} onClick={opensCheckout ? trackInitiateCheckout : undefined} className={`cta-shake group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-center text-base font-extrabold uppercase text-primary-foreground shadow-lg transition-transform active:scale-100 sm:w-auto ${className}`}>
      <span>{children}</span>
      {!isPageAnchor && <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
    </a>
  );
}

function DailyOfferTimer({ compact = false }: { compact?: boolean }) {
  const [remaining, setRemaining] = useState("--:--:--");
  const [dateLabel, setDateLabel] = useState("");
  const [showFloatingTimer, setShowFloatingTimer] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const deadline = new Date(now);
      deadline.setHours(23, 59, 59, 999);
      const milliseconds = Math.max(0, deadline.getTime() - now.getTime());
      const hours = Math.floor(milliseconds / 3_600_000);
      const minutes = Math.floor((milliseconds % 3_600_000) / 60_000);
      const seconds = Math.floor((milliseconds % 60_000) / 1_000);

      setRemaining([hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":"));
      setDateLabel(
        new Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(now),
      );
    };

    updateTimer();
    const interval = window.setInterval(updateTimer, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (compact) return;
    const updateVisibility = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setShowFloatingTimer(scrollProgress >= 0.5);
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [compact]);

  if (compact) {
    return (
      <div className="rounded-xl border border-primary bg-primary px-4 py-5 text-center shadow-lg">
        <p className="text-sm font-black uppercase tracking-wide text-primary-foreground">Condição promocional de hoje termina em</p>
        <p className="mt-1 font-mono text-4xl font-black tabular-nums text-primary-foreground" aria-label={`Tempo restante: ${remaining}`}>{remaining}</p>
        <p className="mt-1 text-sm font-semibold text-primary-foreground/80">Válida até 23h59 de {dateLabel || "hoje"}</p>
      </div>
    );
  }

  const [hours, minutes, seconds] = remaining.split(":");

  if (!showFloatingTimer) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-[#080808] text-white shadow-lg">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-4 text-center sm:py-5">
        <p className="text-lg font-black uppercase tracking-wide sm:text-xl">🔥 Último dia de acesso</p>
        <p className="mt-1 text-sm font-semibold text-white/70 sm:text-base">Assista ao vídeo antes que a oferta termine.</p>
        <p className="mt-3 text-xs font-black uppercase tracking-widest text-white/90">Oferta encerra em:</p>
        <div className="mt-2 flex items-start justify-center gap-2" aria-label={`Tempo restante: ${remaining}`}>
          {[[hours, "Horas"], [minutes, "Minutos"], [seconds, "Segundos"]].map(([value, label], index) => (
            <div key={label} className="flex items-start gap-2">
              {index > 0 && <span className="pt-2 text-2xl font-black text-white/70">:</span>}
              <div>
                <div className="min-w-14 rounded-md bg-red-600 px-3 py-1.5 font-mono text-2xl font-black tabular-nums shadow-[0_0_22px_rgba(220,38,38,0.28)] sm:min-w-16 sm:text-3xl">{value}</div>
                <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-white/55">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={`mx-auto w-full max-w-2xl ${compact ? "space-y-3" : "space-y-4"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start justify-start gap-3 text-left">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span className="leading-relaxed text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-extrabold uppercase text-primary">{children}</p>;
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl ${className}`}>{children}</h2>;
}

function FaqItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6" aria-expanded={open}>
        <span className="font-bold text-foreground sm:text-lg">{item.q}</span>
        <ChevronIcon open={open} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function WistiaVsl() {
  useEffect(() => {
    const loadScript = (src: string, id: string, type?: string) => {
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      if (type) script.type = type;
      document.head.appendChild(script);
    };

    loadScript("https://fast.wistia.com/player.js", "wistia-player-script");
    loadScript("https://fast.wistia.com/embed/p3q4aebt7f.js", "wistia-video-p3q4aebt7f", "module");
  }, []);

  return (
    <div className="mx-auto mt-7 w-full max-w-[420px] overflow-hidden rounded-xl border border-primary/30 bg-black shadow-2xl">
      {createElement("wistia-player", { "media-id": "p3q4aebt7f", aspect: "0.5625" })}
    </div>
  );
}

function Index() {
  useEffect(() => {
    initMetaPixel();
    trackMetaEvent("PageView");
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <DailyOfferTimer />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-5 text-center sm:py-7">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 shadow-sm"><Logo /></div>
            <h1 className="text-3xl font-black leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
              Faça seu <span className="text-[1.12em] font-black text-primary">dinheiro</span> <span className="text-[1.12em] font-black uppercase text-primary">sobrar</span> no final do <span className="text-[1.12em] font-black text-primary">mês.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              Descubra o método simples que usa o ChatGPT para você registrar seus gastos <span className="font-black text-primary">em poucos minutos</span>, saber quanto ainda pode gastar e <span className="font-black text-primary">ver o dinheiro sobrando.</span>
            </p>
            <WistiaVsl />
          </div>
        </div>
      </section>

      <section id="bloco-2" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-5xl px-5 py-10 text-center sm:py-14">
          <SectionTitle>Tudo isso para você em poucos segundos</SectionTitle>
          <img
            src={chatgptControleFinanceiro}
            alt="Exemplo do ChatGPT registrando um gasto e atualizando o controle financeiro"
            width={1024}
            height={1536}
            loading="lazy"
            className="mx-auto mt-10 h-auto w-full max-w-[680px] rounded-2xl border border-border shadow-2xl"
          />
        </div>
      </section>

      <section id="para-quem" className="scroll-mt-20 mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="text-center"><SectionTitle>Este método foi criado para você que:</SectionTitle></div>
          <div className="mt-8"><CheckList items={audience} /></div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <SectionTitle>O que parece pequeno hoje pode ficar grande em 30 dias.</SectionTitle>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Imagine alguns gastos aparentemente inofensivos:</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["R$ 8 na padaria", "R$ 25 em um lanche", "R$ 15 em uma compra rápida", "R$ 40 em algo não planejado"].map((expense) => <div key={expense} className="rounded-lg border border-border bg-card p-4 font-bold text-foreground">{expense}</div>)}
              </div>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Individualmente, parecem pouco.</p>
              <p>O problema aparece quando você soma todos eles no final do mês.</p>
              <p>E se você não registra, provavelmente nem sabe quanto essas pequenas compras estão representando no seu orçamento.</p>
              <p className="border-l-4 border-primary pl-5 text-xl font-bold text-foreground">O primeiro passo para mudar não é simplesmente parar de gastar. É enxergar para onde o dinheiro está indo.</p>
            </div>
          </div>
          <div className="mt-10 text-center"><CtaButton href="#oferta-basico" className="sm:w-auto">Quero ter acesso ao método</CtaButton></div>
        </div>
      </section>

      <section className="bg-primary/5 text-foreground">
        <div className="mx-auto max-w-3xl space-y-8 px-5 py-10 sm:py-14">
          <div>
            <p className="text-sm font-extrabold uppercase text-primary">Talvez você já tenha tentado</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">“Eu já tentei controlar meus gastos e não consegui.”</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold text-foreground/80">
              {["Baixado aplicativo", "Criado planilha", "Anotado no bloco de notas", "Salvado vídeo de finanças"].map((attempt) => <div key={attempt} className="rounded-lg border border-primary/20 bg-background p-4">{attempt}</div>)}
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Você prometeu: “Este mês eu vou controlar tudo.”</p>
            <p>Começou animado. Registrou alguns dias... E abandonou.</p>
            <p>Não necessariamente porque você é desorganizado. Talvez o método simplesmente tenha criado fricção demais para sua rotina.</p>
            <p className="text-xl font-bold text-foreground">Porque quanto mais complicado for registrar uma compra, menor a chance de você fazer isso todos os dias.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-8">
          <img src={heroMockup} alt="SobraGrana, guia prático de controle financeiro pelo ChatGPT" width={1024} height={1024} loading="lazy" className="mx-auto w-full max-w-[520px]" />
          <div>
            <SectionTitle className="mt-4">Foi para isso que criamos o SobraGrana.</SectionTitle>
            <p className="mt-6 text-xl font-bold leading-relaxed text-foreground">O guia prático para colocar sua vida financeira no controle e fazer seu dinheiro render melhor.</p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>O SOBRAGRANA apresenta um método para quem quer começar a organizar a própria vida financeira de maneira simples e prática.</p>
              <p>Sem transformar seu dia em uma aula de contabilidade.</p>
              <p>Sem depender de uma planilha complicada.</p>
              <p>E sem precisar descobrir sozinho como começar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
          <div className="text-center">
            <SectionTitle className="mx-auto max-w-3xl">Tudo que você precisa para sair da intenção e começar a controlar</SectionTitle>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {productContents.map((item) => (
              <article key={item.number} className="flex gap-5 rounded-lg border-2 border-primary bg-card p-6 shadow-sm">
                <span className="text-2xl font-black text-primary">{item.number}</span>
                <div><h3 className="text-lg font-black uppercase text-foreground">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-2xl font-black text-primary">E MUITO MAIS.</p>
          <div className="mt-8 text-center"><CtaButton href="#oferta-basico" className="sm:w-auto">Quero ter acesso ao método</CtaButton></div>
        </div>
      </section>

      <section className="bg-primary/5 text-foreground">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
          <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight sm:text-4xl">“Mas eu não tenho tempo para ficar controlando finanças todos os dias.”</h2>
          <p className="mt-6 text-xl font-bold text-primary">Você não precisa passar horas fazendo contas. A proposta é exatamente o contrário.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Terminou uma compra? Registre.", "Saiu da padaria? Registre.", "Pagou o almoço? Registre.", "Abasteceu? Registre."].map((action) => <div key={action} className="rounded-lg border border-primary/20 bg-background p-5 font-bold">{action}</div>)}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">Em vez de deixar dezenas de gastos acumularem para tentar lembrar de tudo depois, você cria o hábito de registrar quando acontece.</p>
          <p className="mt-6 max-w-4xl text-2xl font-black uppercase leading-tight">Poucos minutos de atenção hoje podem evitar muita confusão no final do mês.</p>
        </div>
      </section>

      <section id="oferta" className="scroll-mt-4 bg-background">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
          <div className="text-center"><SectionTitle>Comece agora com o SobraGrana</SectionTitle></div>
          <div className="mx-auto mt-8 max-w-2xl"><DailyOfferTimer compact /></div>
          <div className="mx-auto mt-10 max-w-2xl space-y-7">
            <div id="oferta-basico" className="scroll-mt-24 rounded-xl border border-primary/30 bg-card p-7 text-center shadow-lg sm:p-9">
              <p className="text-sm font-extrabold uppercase text-primary">Preço especial</p>
              <h3 className="mt-2 text-2xl font-black text-foreground">SobraGrana Básico</h3>
              <div className="mt-5"><CheckList compact items={["Método prático", "Prompt Mestre", "Passo a passo de como registrar gastos"]} /></div>
              <div className="mt-5 text-6xl font-black text-foreground">R$ 37<span className="text-2xl">,00</span></div>
              <CtaButton className="mt-6 w-full">Quero ter acesso ao método</CtaButton>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Acesso imediato • Garantia de 7 dias</p>
            </div>
            <div className="relative rounded-xl border-2 border-primary bg-card p-7 text-center shadow-2xl sm:p-9">
              <div className="absolute inset-x-6 -top-4 animate-pulse rounded-full bg-primary px-4 py-2 text-sm font-black uppercase tracking-wide text-primary-foreground shadow-lg">🔥 Mais vendido</div>
              <h3 className="mt-3 text-2xl font-black text-foreground">SobraGrana Completo</h3>
              <p className="mt-2 text-muted-foreground">Todos os conteúdos, checklists, exemplos e videoaulas bônus.</p>
              <div className="mt-3 text-6xl font-black text-foreground">R$ 47<span className="text-2xl">,00</span></div>
              <p className="mt-2 font-semibold text-muted-foreground">à vista ou 12x de R$ 5,22 no cartão</p>
              <div className="mt-7 text-left"><CheckList items={offerItems} compact /></div>
              <CtaButton className="mt-7 w-full">Quero a versão mais completa</CtaButton>
              <div className="mt-6 border-t border-border pt-5 text-sm font-semibold text-foreground">Compra segura • Garantia de 7 dias • Acesso imediato</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
          <Eyebrow>Garantia de 7 dias</Eyebrow>
          <SectionTitle className="mt-4">Você não precisa decidir no escuro.</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Tenha acesso ao SOBRAGRANA, conheça o conteúdo e veja como o método funciona. Você tem 7 dias para solicitar o reembolso conforme as condições da plataforma de pagamento.</p>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
          <div className="text-center"><Eyebrow>Perguntas frequentes</Eyebrow><SectionTitle className="mt-4">Ainda tem alguma dúvida?</SectionTitle></div>
          <div className="mt-10 space-y-3">{faq.map((item) => <FaqItem key={item.q} item={item} />)}</div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row">
          <Logo />
          <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-right">© {new Date().getFullYear()} SobraGrana. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110 active:scale-100"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.745 5.735l-.999 3.648 3.744-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </main>
  );
}
