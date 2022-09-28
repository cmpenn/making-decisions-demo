/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack=25
let jamieLannisterAttack=35

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

