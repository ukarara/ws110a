export function table99(){
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

console.log(`
<html>
<head>
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
	color: #fff;
}

th {
	text-align:left;
	background-color:#55608f;
	color:white;
	padding: 10px;
}

thead {
	th {
		background-color: #55608f;
	}
}

</style>
</head>
<body>
${table99()}
</body>
</html>

`)