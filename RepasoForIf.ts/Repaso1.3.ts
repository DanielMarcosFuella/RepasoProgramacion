function impares(n:number) {
    let nImpares:Number[]
    for (let i:number=0;i<=n;i++){
        if (i%2!=0){
            nImpares.push(i)
        }
    }
    console.log (nImpares)
}
impares(11)