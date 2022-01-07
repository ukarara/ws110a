import { Application } from "https://deno.land/x/oak/mod.ts";
import { table99 } from "../table99.js";

const router = new Router();
router
    .get("/", (context) => {
        context.response.body =`
            <html>
                <head>
                    <link rel="stylesheet" href="table.css">
                </head>
                <body>
                    <h1>九九乘法表</h1>
                    ${table99()}
                </body>
            </html>`;
    })

const app = new Application();

app.use((ctx) => {
  ctx.response.body = `
  <html>
  <style>
  body {
	height: 100%;
}

body {
	margin: 0;
	background: linear-gradient(45deg, #49a09d, #5f2c82);
	font-family: sans-serif;
	font-weight: 100;
}


table {
	width: 800px;
	border-collapse: collapse;
	overflow: hidden;
	box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

th,
td {
	padding: 15px;
	background-color: rgba(255,255,255,0.2);
	color: rgb(255, 255, 255);
}

th {
	text-align:left;
	background-color:rgb(85, 96, 143);
	color:white;
	padding: 10px;
}

thead {
	th {
    background-color: rgb(85, 96, 143);
	}
}
  </style>
  <body>
  <h1>九九乘法表</h1>
  ${table99()}
  </body>
  </html>
  `
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });