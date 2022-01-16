allEvens = [2, 4]

const evens = allEvens.every(n => n % 2 == 0)

console.log(evens)	

// wihout declaration

const allEvens = n =>{
    if(n.every(n => n % 2 == 0 == true)){
        return true
    } else {
        return false
    }
}


console.log(allEvens([2, 4]))