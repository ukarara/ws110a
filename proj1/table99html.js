function table99(){
    let table = ["<table><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>"]
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
table {
  width: 500px;
  border-collapse:collapse;
  border:1px solid white;
  background-color:25c481;
  padding: 10px;
}
th {
  text-align:center;
  background-color:#25b7c4;
  color:white;
  padding: 10px;
}
td {
  border:1px solid white;
  padding: 10px;
}
</style>
</head>
<body>
${table99()}
</body>
</html>
`)