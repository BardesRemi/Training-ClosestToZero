function closestToZero(tab: Array<number> | undefined) {
    if(tab === undefined || tab.length < 1) return 0;
    let closest: number = tab[0];
    for(var i: number = 1; i < tab.length; i++) {
        if(Math.abs(closest) > Math.abs(tab[i]) || (Math.abs(closest) > Math.abs(tab[i]) && closest <= tab[i])){
            closest = tab[i];
        }
    }
    return closest;
}

console.log(closestToZero([8, 5, 10])); // => 5
console.log(closestToZero([5, 4, -9, 6, -10, -1, 8])); // => -1
console.log(closestToZero([8, 2, 3, -2])); // => 2
console.log(closestToZero([2, 0])); // => 0
console.log(closestToZero([])); // => 0
console.log(closestToZero(undefined)); // => 0