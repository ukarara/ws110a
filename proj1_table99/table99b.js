function table99(){
    let table = []
    for (let i=1; i<=9; i++){
        let row = [i]
        for (let j=1; j<=9; j++){
            row.push(i*j)
        }
    table.push(row.join('\t'))
    }
    return '  \t1\t2\t3\t4\t5\t6\t7\t8\t9\n'+table.join('\n')
}

console.log(table99())