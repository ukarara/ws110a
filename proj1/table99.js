export function table99(){
    let table = []
    for (let i=1; i<=9; i++){
        let row = [i]
        for (let j=1; j<=9; j++){
            row.push(i*j)
        }
    table.push(row.join('|'))
    }
    return table.join('\n')
}

console.log(table99())