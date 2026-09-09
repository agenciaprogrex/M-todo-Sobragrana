import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { checkoutEventParameters, initMetaPixel, trackMetaEvent } from "@/lib/meta-pixel";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Compra confirmada | SobraGrana" },
      {
        name: "description",
        content: "Sua compra do SobraGrana foi confirmada com sucesso.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  useEffect(() => {
    initMetaPixel();
    trackMetaEvent("PageView");

    const purchaseKey = "sobragrana_purchase_tracked";
    if (sessionStorage.getItem(purchaseKey)) return;

    trackMetaEvent("Purchase", checkoutEventParameters);
    sessionStorage.setItem(purchaseKey, "true");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/45 px-5 py-16 text-foreground">
      <section className="w-full max-w-xl rounded-xl border border-primary/25 bg-card p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-black text-primary-foreground" aria-hidden="true">
          ✓
        </div>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-wider text-primary">Pagamento confirmado</p>
        <h1 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">Sua compra foi concluída!</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Você receberá as informações de acesso ao SobraGrana no e-mail usado durante a compra.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-7 py-4 font-extrabold uppercase text-primary-foreground transition-transform hover:scale-[1.02] active:scale-100">
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
