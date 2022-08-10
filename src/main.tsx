import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { v4 as uuid } from "uuid";
import { createServer, Model } from "miragejs";
import {
  TraditionalExpress,
  TraditionalAmerican,
  Creamy,
  MilkAndCoffe,
  Latte,
  Capuccino,
  Mocaccino,
  Macchiato,
  ColdExpress,
  HotChocolate,
  Hawaiian,
  Irish,
  Cuban,
  Arabic,
} from "../src/assets/coffes";

createServer({
  models: {
    coffe: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/coffes", (schema, request) => {
      return schema.coffes.all();
    });

    this.patch("/coffes/:id", (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      const coffe: any = schema.coffes.find(id);

      return coffe.update(newAttrs);
    });
  },

  seeds(server) {
    const coffes = [
      {
        id: uuid(),
        image: TraditionalExpress.default,
        title: "Expresso Tradicional",
        subtitle: "O tradicional café feito com água quente e grãos moídos",
        tags: ["tradicional"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: TraditionalAmerican.default,
        title: "Expresso Americano",
        subtitle: "Expresso diluído, menos intenso que o tradicional",
        tags: ["tradicional"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Creamy.default,
        title: "Expresso Cremoso",
        subtitle: "Café expresso tradicional com espuma cremosa",
        tags: ["tradicional"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: MilkAndCoffe.default,
        title: "Café com Leite",
        subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
        tags: ["tradicional", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Latte.default,
        title: "Latte",
        subtitle:
          "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tags: ["tradicional", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Capuccino.default,
        title: "Capuccino",
        subtitle:
          "Bebida com canela feita de doses iguais de café, leite e espuma",
        tags: ["tradicional", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Mocaccino.default,
        title: "Mocaccino",
        subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
        tags: ["tradicional", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: ColdExpress.default,
        title: "Expresso Gelado",
        subtitle: "Bebida preparada com café expresso e cubos de gelo",
        tags: ["tradicional", "gelado"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Macchiato.default,
        title: "Macchiato",
        subtitle:
          "Café expresso misturado com um pouco de leite quente e espuma",
        tags: ["tradicional", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: HotChocolate.default,
        title: "Chocolate Quente",
        subtitle:
          "Bebida feita com chocolate dissolvido no leite quente e café",
        tags: ["especial", "com leite"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Cuban.default,
        title: "Cubano",
        subtitle:
          "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags: ["especial", "alcoólico", "gelado"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Hawaiian.default,
        title: "Havaiano",
        subtitle: "Bebida adocicada preparada com café e leite de coco",
        tags: ["especial"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Arabic.default,
        title: "Árabe",
        subtitle: "Bebida preparada com grãos de café árabe e especiarias",
        tags: ["especial"],
        unityPrice: 9.9,
        amount: 0,
      },
      {
        id: uuid(),
        image: Irish.default,
        title: "Irlandês",
        subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        tags: ["especial", "alcoólico"],
        unityPrice: 9.9,
        amount: 0,
      },
    ];

    for (let i = 0; i < coffes.length; i++) {
      server.create("coffe", {
        id: coffes[i].id,
        image: coffes[i].image,
        title: coffes[i].title,
        subtitle: coffes[i].subtitle,
        tags: coffes[i].tags,
        unityPrice: coffes[i].unityPrice,
        amount: 0,
      });
    }
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
