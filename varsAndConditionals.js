/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack=25
let jamieLannisterAttack=55

if (johnSnowAttack > jamieLannisterAttack){
    console.log('John Snow has better attack than Jamie Lannister')
} else if (jamieLannisterAttack > johnSnowAttack) {
    console.log('Jamie Lannisgter has better attack than John Snow')
} else {
    console.log('Jamie Lannister has the same attack than John Snow')
}

let johnSnowHealth = 100
let johnSnowDefence = 0

if (johnSnowHealth <= jamieLannisterAttack){
    console.log("John Snow has been slain")
} else {
    johnSnowHealth = johnSnowHealth - jamieLannisterAttack
    console.log(`John Snow's Health is down to ${johnSnowHealth}`)
}

johnSnowDefence += 25

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefence){
    console.log('John Snow has been slain')
}else{
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefence)
    console.log(`John Snow's Health is down to ${johnSnowHealth}`)
}

if (johnSnowHealth + 50 >= 100){
    johnSnowHealth = 100
}else{
    johnSnowHealth += 50
}

console.log('John Snow\'s health has gone up to '+ johnSnowHealth)


let coinLandsHeads = true

if (coinLandsHeads){
    console.log("The fight continues")
}else{
    console.log("John is allowed to run")
}

for (let i = 0; i < 5; i++){
    johnSnowHealth -= jamieLannisterAttack - johnSnowDefence
    console.log("John Snow's healh is now " + johnSnowHealth)
}

// writh logic in the for loop that detects if Johns health gets to 0 or less, in which case, you will print John is dead
// and you will stop further loop iterations ( see the "break" JS keyword for leaving a loop early)

