export function closestToZero(tab: Array<number> | undefined) {
    if(tab === undefined || tab.length < 1) return 0;
    let closest: number = tab[0];
    for(var i: number = 1; i < tab.length; i++) {
        if(Math.abs(closest) > Math.abs(tab[i]) || (Math.abs(closest) > Math.abs(tab[i]) && closest <= tab[i])){
            closest = tab[i];
        }
    }
    return closest;
}