import { Application } from "https://deno.land/x/oak/mod.ts";

function table99() {
    let table = ["<table><thead><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>"]
    for (let i=1; i<=9; i++){
        let row = `<tr><th>${i}</th>`
        for (let j=1; j<=9; j++){
            row += `<td>${i*j}</td>`
        }
        row +='</tr>'
        table.push(row)
    }
    return table.join('\n') + "</table>"
}

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