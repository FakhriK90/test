let heart= document.getElementsByClassName('fa-heart');
for (let i=0; i < heart.length; i++) {
    heart[i].addEventListener('click' , function() {
        if (heart[i].style.color != 'red') {
            heart[i].style.color = 'red'
        }
        else {heart[i].style.color = 'black'}
    })
}

let pluss= document.getElementsByClassName('next');
console.log(pluss[0].previousElementSibling.value)
for (const plus of pluss) {
    plus.addEventListener('click',function() {
        plus.previousElementSibling.value++
        tot()
    } )
}

let moinss= document.getElementsByClassName('prev');
console.log(moinss[0].nextElementSibling.value)
for (const moins of moinss) {
    moins.addEventListener('click',function() {
        if(moins.nextElementSibling.value>0)
       { moins.nextElementSibling.value--
        tot()}
       else{
           alert ('ooops')
       }
    } )
}

let remove = document.getElementsByClassName('fa-trash-alt');

for (let i = 0; i < remove.length; i++) {
    let button = remove[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        tot()
    })
    
}


let sums= document.getElementsByClassName('total');
console.log(sums)
let qutes=document.getElementsByClassName('note');
let prices=document.getElementsByClassName('n3');
console.log(parseInt(prices[0].innerHTML)*qutes[0].value)


function tot() {
    let sum=0;
     for (let i = 0; i < qutes.length; i++) {
        sum+=parseInt(prices[i].innerHTML)*qutes[i].value
     }   
        return sums[0].innerHTML=sum
    }
    