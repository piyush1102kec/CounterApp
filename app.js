let saveEl = document.getElementById("save-el")


let countEl = document.getElementById("count-el")
let count = 0;
console.log(saveEl)
function increment(){
     count += 1
     countEl.textContent = count
     console.log(count)
}

function decrement() {
    if (count > 0) {
        count -= 1
        countEl.textContent = count
        console.log(count)
    } else {
        alert("Count cannot be negative!")
    }
}



function saves(){


    let countStr = count + " - "
    saveEl.textContent += countStr


    countEl.textContent = 0
    count = 0


    console.log(count)


}
saves()

