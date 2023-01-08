let result = document.querySelector('.res')

function count() {
    let initialValue = Number(document.querySelector('#initialValue').value)
    let endValue = Number(document.querySelector('#endValue').value)

    result.innerHTML += `<h2>Contando de ${initialValue} até ${endValue}</h2>`
    
    let cont 

    if (initialValue < endValue) {
        cont = initialValue 

        while (cont <= endValue) {
            result.innerHTML += `${cont} &#x1F449`

            cont ++
        }
    } else if (initialValue > endValue) {
        cont = initialValue 

        while (cont >= endValue) {
            result.innerHTML += `${cont} &#x1F449`

            cont --
            }
    } else {
        result.innerHTML += `Não é possível contar, pois os números são iguais!`
    }

    result.innerHTML += `&#x1F3C1`

}
