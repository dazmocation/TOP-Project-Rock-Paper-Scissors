function computerPlay() {
    
}

function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(Date.now()) * (max - min + 1) + min);
}