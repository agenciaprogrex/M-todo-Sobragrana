import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import heroMockup from "@/assets/mockup-hero.png";
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

const heroBenefits = [
  "Registre uma despesa em poucos segundos",
  "Saiba quanto já gastou no mês",
  "Veja quanto ainda pode gastar",
  "Acompanhe o percentual do seu limite utilizado",
  "Receba alertas quando atingir 70%, 85% e 100%",
  "Faça tudo pelo ChatGPT, sem precisar criar uma planilha",
];

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
  {
    number: "09",
    title: "Videoaulas bônus",
    text: "Veja aplicações práticas para facilitar ainda mais a execução do método.",
  },
];

const practicalChanges = [
  ["Você recebe um Prompt Mestre.", "Não precisa descobrir o que perguntar ao ChatGPT."],
  ["Você aprende a definir um limite mensal.", "Consegue acompanhar quanto ainda pode gastar."],
  ["Você registra cada despesa.", "Para de depender da memória no final do mês."],
  ["Você acompanha o percentual utilizado.", "Percebe quando está chegando perto do limite."],
  ["Você recebe checklists.", "Tem um processo simples para seguir."],
  ["Você aprende um método diário.", "A organização deixa de ser apenas uma intenção e começa a virar rotina."],
];

const audience = [
  "Não sabe exatamente para onde seu dinheiro está indo.",
  "Se surpreende com o saldo positivo no final do mês.",
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

function CtaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a href={CHECKOUT_URL} onClick={trackInitiateCheckout} className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-center text-base font-extrabold uppercase text-primary-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto ${className}`}>
      <span>{children}</span>
      <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function CheckList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-3" : "space-y-4"}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
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

function Index() {
  useEffect(() => {
    initMetaPixel();
    trackMetaEvent("PageView");
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-5 sm:justify-start">
          <Logo />
        </div>
      </header>

      <section className="bg-secondary/45">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:py-20">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-black uppercase leading-[1.08] text-foreground sm:text-5xl lg:text-[3.35rem]">
              Imagine chegar ao fim do mês, abrir sua conta e ver que ainda <span className="text-primary">sobrou dinheiro.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-foreground lg:mx-0">
              Descubra como começar a controlar seu dinheiro usando o ChatGPT, mesmo que você ganhe pouco, já tenha tentado se organizar antes e nunca tenha conseguido manter o hábito. Faça tudo pelo ChatGPT, sem precisar criar uma planilha e veja seu dinheiro sobrando.
            </p>
            <div className="mx-auto mt-7 max-w-2xl space-y-4 text-left text-base leading-relaxed text-muted-foreground lg:mx-0">
              <p>Com o <strong className="text-foreground">SOBRAGRANA</strong>, você aprende um método simples para registrar suas despesas pelo ChatGPT, acompanhar seu limite mensal e finalmente entender para onde seu dinheiro está indo.</p>
            </div>
            <div className="mx-auto mt-7 max-w-xl text-left lg:mx-0">
              <CheckList items={heroBenefits} compact />
            </div>
            <div className="mt-8">
              <CtaButton>Quero organizar meu dinheiro</CtaButton>
              <p className="mt-3 text-sm font-medium text-muted-foreground">Acesso imediato • Método passo a passo • Prompt pronto</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={heroMockup} alt="Guia SobraGrana e celular mostrando o ChatGPT registrando uma despesa" width={1024} height={1024} fetchPriority="high" className="w-full max-w-[560px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
        <SectionTitle>Todo mês parece a mesma história?</SectionTitle>
        <div className="mx-auto mt-9 max-w-2xl space-y-3 text-lg leading-relaxed text-muted-foreground">
          <p>Seu dinheiro entra.</p><p>Você paga algumas contas.</p><p>Passa no mercado.</p><p>Compra alguma coisa na padaria.</p><p>Pede uma comida.</p><p>Abastece.</p>
          <div className="py-3 font-bold text-foreground"><p>Faz uma compra de R$ 20 aqui...</p><p>R$ 40 ali...</p><p>R$ 80 acolá...</p></div>
          <p>E quando chega perto do final do mês, olha para o saldo e pensa:</p>
        </div>
        <blockquote className="mx-auto mt-8 max-w-3xl border-y border-primary/30 py-7 text-3xl font-black text-primary sm:text-4xl">“ONDE FOI PARAR MEU DINHEIRO?”</blockquote>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>O problema é que dificilmente existe uma única compra responsável por isso.</p>
          <p>São dezenas de pequenas decisões que vão acontecendo durante o mês.</p>
          <p>E quando você não registra, <strong className="text-foreground">você simplesmente perde a visão do todo.</strong></p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div><Eyebrow>Para quem é</Eyebrow><SectionTitle className="mt-4">Este método foi criado para você que:</SectionTitle></div>
          <CheckList items={audience} />
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
          <div className="mt-10 text-center"><CtaButton className="sm:w-auto">Quero organizar meu dinheiro</CtaButton></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle>“Mas eu preciso ganhar mais para conseguir me organizar...”</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Essa é uma das crenças que mais atrapalham quem quer começar.</p>
            <div className="mt-6 space-y-3 border-l-4 border-border pl-5 text-lg font-semibold text-foreground">
              <p>“Quando meu salário aumentar, eu me organizo.”</p><p>“Quando ganhar mais, começo a guardar.”</p><p>“Agora não adianta porque ganho pouco.”</p>
            </div>
          </div>
          <div className="self-center">
            <p className="text-2xl font-black uppercase leading-tight text-primary sm:text-3xl">Ganhar mais sem ter controle não garante organização.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Se você não sabe administrar R$ 3.000, simplesmente aumentar sua renda não cria automaticamente um novo comportamento.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Por isso, antes de pensar apenas em ganhar mais, você precisa conseguir responder:</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center font-bold text-foreground">
              {["Quanto entra?", "Quanto sai?", "Onde você está gastando?", "Quanto ainda pode gastar?"].map((question) => <div key={question} className="rounded-lg bg-secondary p-4">{question}</div>)}
            </div>
            <p className="mt-6 text-xl font-black text-foreground">É aqui que começa o controle.</p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-primary">Talvez você já tenha tentado</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">“Eu já tentei controlar meus gastos e não consegui.”</h2>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold text-background/80">
              {["Baixado aplicativo", "Criado planilha", "Anotado no bloco de notas", "Salvado vídeo de finanças"].map((attempt) => <div key={attempt} className="rounded-lg border border-background/15 p-4">{attempt}</div>)}
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-background/75">
            <p>Você prometeu: “Este mês eu vou controlar tudo.”</p>
            <p>Começou animado. Registrou alguns dias... E abandonou.</p>
            <p>Não necessariamente porque você é desorganizado. Talvez o método simplesmente tenha criado fricção demais para sua rotina.</p>
            <p className="text-xl font-bold text-background">Porque quanto mais complicado for registrar uma compra, menor a chance de você fazer isso todos os dias.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-5xl">Não é sobre virar especialista em finanças.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85">É sobre finalmente conseguir olhar para o mês e saber:</p>
          <div className="mt-8 space-y-3 text-2xl font-black sm:text-3xl">
            <p>“EU SEI QUANTO GASTEI.”</p><p>“EU SEI QUANTO AINDA POSSO GASTAR.”</p><p>“EU SEI PARA ONDE MEU DINHEIRO ESTÁ INDO.”</p><p>“SOBROU DINHEIRO NA CONTA.”</p>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">Isso muda a maneira como você toma decisões. Porque agora, antes daquela compra por impulso, você pode saber exatamente como está seu limite.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="text-center">
            <SectionTitle className="mx-auto max-w-3xl">Tudo que você precisa para sair da intenção e começar a controlar</SectionTitle>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {productContents.map((item) => (
              <article key={item.number} className="flex gap-5 rounded-lg border border-border bg-card p-6">
                <span className="text-2xl font-black text-primary">{item.number}</span>
                <div><h3 className="text-lg font-black uppercase text-foreground">{item.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-2xl font-black text-primary">E MUITO MAIS.</p>
          <div className="mt-8 text-center"><CtaButton className="sm:w-auto">Quero ter acesso ao SobraGrana</CtaButton></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="text-center"><SectionTitle>O que isso muda na prática?</SectionTitle></div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {practicalChanges.map(([feature, benefit]) => (
            <div key={feature} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
              <p className="font-bold text-foreground">{feature}</p><ArrowIcon className="hidden h-6 w-6 text-primary sm:block" /><p className="leading-relaxed text-muted-foreground">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight sm:text-4xl">“Mas eu não tenho tempo para ficar controlando finanças todos os dias.”</h2>
          <p className="mt-6 text-xl font-bold text-primary">Você não precisa passar horas fazendo contas. A proposta é exatamente o contrário.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Terminou uma compra? Registre.", "Saiu da padaria? Registre.", "Pagou o almoço? Registre.", "Abasteceu? Registre."].map((action) => <div key={action} className="rounded-lg border border-background/15 p-5 font-bold">{action}</div>)}
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-background/75">Em vez de deixar dezenas de gastos acumularem para tentar lembrar de tudo depois, você cria o hábito de registrar quando acontece.</p>
          <p className="mt-6 max-w-4xl text-2xl font-black uppercase leading-tight">Poucos minutos de atenção hoje podem evitar muita confusão no final do mês.</p>
        </div>
      </section>

      <section className="bg-secondary/55">
        <div className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="text-center"><SectionTitle>Quanto custa não ter controle?</SectionTitle></div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">Não estamos falando necessariamente de uma compra enorme. Pode ser:</p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {["R$ 15 que você não percebeu", "R$ 30 de uma compra por impulso", "R$ 50 em algo que poderia esperar", "R$ 80 que você nem lembrava"].map((cost) => <div key={cost} className="rounded-lg bg-card p-5 text-center font-bold shadow-sm">{cost}</div>)}
          </div>
          <div className="mx-auto mt-9 max-w-3xl space-y-5 text-center text-lg leading-relaxed text-muted-foreground">
            <p>Agora multiplique pequenas decisões como essas ao longo de um mês. E depois por 12 meses.</p>
            <p className="text-2xl font-black uppercase text-foreground">O problema não é somente gastar. É gastar sem perceber o impacto acumulado das suas decisões.</p>
            <p>Por isso, investir em um método que ajude você a enxergar seus próprios números pode ser o começo de uma mudança muito maior.</p>
          </div>
        </div>
      </section>

      <section id="oferta" className="scroll-mt-4 bg-background">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="text-center"><SectionTitle>Comece agora com o SobraGrana</SectionTitle></div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-6 text-xl font-bold text-foreground">Ao entrar hoje, você recebe:</p>
              <CheckList items={offerItems} compact />
            </div>
            <div className="rounded-lg border-2 border-primary bg-card p-7 text-center shadow-xl sm:p-9 lg:sticky lg:top-6">
              <p className="text-sm font-extrabold uppercase text-primary">Oferta especial</p>
              <p className="mt-5 text-base text-muted-foreground">Tudo isso teria o valor de:</p>
              <p className="mt-1 text-2xl font-bold text-muted-foreground line-through">R$ 97,00</p>
              <p className="mt-6 text-sm font-black uppercase text-foreground">Mas hoje você pode começar por:</p>
              <div className="mt-3 text-6xl font-black text-foreground">R$ 47<span className="text-2xl">,00</span></div>
              <p className="mt-2 font-semibold text-muted-foreground">à vista ou 12x de R$ 5,22 no cartão</p>
              <CtaButton className="mt-7 w-full">Quero ter acesso ao SobraGrana</CtaButton>
              <p className="mt-4 text-sm text-muted-foreground">Acesso imediato após a confirmação do pagamento.</p>
              <div className="mt-6 border-t border-border pt-5 text-sm font-semibold text-foreground">Compra segura • Garantia de 7 dias • Acesso imediato</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
          <Eyebrow>Pense nisso</Eyebrow>
          <div className="mt-6 space-y-3 text-lg text-muted-foreground"><p>Uma compra por impulso pode facilmente custar R$ 47.</p><p>Um jantar pode custar R$ 47.</p><p>Alguns pequenos gastos acumulados durante uma semana podem ultrapassar R$ 47.</p></div>
          <p className="mx-auto mt-7 max-w-3xl text-xl font-bold leading-relaxed text-foreground">Aqui você está investindo esse valor em um método criado para ajudar você a enxergar melhor suas próprias decisões financeiras.</p>
          <p className="mt-7 text-3xl font-black text-primary">DE R$ 97 POR R$ 47.</p>
          <p className="mt-1 font-bold text-foreground">Ou 12x de R$ 5,22.</p>
          <CtaButton className="mt-7">Quero organizar meu dinheiro</CtaButton>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center sm:p-12">
          <Eyebrow>Garantia de 7 dias</Eyebrow>
          <SectionTitle className="mt-4">Você não precisa decidir no escuro.</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Tenha acesso ao SOBRAGRANA, conheça o conteúdo e veja como o método funciona. Você tem 7 dias para solicitar o reembolso conforme as condições da plataforma de pagamento.</p>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <div className="text-center"><Eyebrow>Perguntas frequentes</Eyebrow><SectionTitle className="mt-4">Ainda tem alguma dúvida?</SectionTitle></div>
          <div className="mt-10 space-y-3">{faq.map((item) => <FaqItem key={item.q} item={item} />)}</div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl">Comece hoje a enxergar para onde seu dinheiro está indo.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">Tenha o método, o Prompt Mestre e o passo a passo para transformar o ChatGPT em uma ferramenta de apoio ao seu controle financeiro.</p>
          <a href={CHECKOUT_URL} onClick={trackInitiateCheckout} className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-8 py-4 text-base font-extrabold uppercase text-background shadow-lg transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto">Quero ter acesso ao SobraGrana <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
          <p className="mt-4 text-sm text-primary-foreground/80">R$ 47 à vista • 12x de R$ 5,22 • Garantia de 7 dias</p>
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
