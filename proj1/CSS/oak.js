import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
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
                    ${table()}
                </body>
            </html>`;
    })

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
    console.log('path:', ctx.request.url.pathname)
    await send(ctx, ctx.request.url.pathname, {
      root: Deno.cwd(),
      index: "index.html",
    });
});

console.log('start at : http://127.0.0.1:8000')
    await app.listen({ port: 8000 });