import "./style.css";

type Snack = {
  id: number;
  title: string;
  completed: boolean;
};

const snacks: Snack[] = [
  {
    id: 1,
    title: "Configura il progetto TypeScript",
    completed: true
  },
  {
    id: 2,
    title: "Scrivi il primo esercizio tipizzato",
    completed: false
  }
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app non trovato");
}

app.innerHTML = `
  <section class="page">
    <p class="eyebrow">Vite + TypeScript</p>
    <h1>JS Snack TypeScript</h1>
    <ul>
      ${snacks
        .map(
          (snack) => `
            <li>
              <span>${snack.title}</span>
              <strong>${snack.completed ? "Pronto" : "Da fare"}</strong>
            </li>
          `
        )
        .join("")}
    </ul>
  </section>
`;
