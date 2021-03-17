"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closestToZero = void 0;
function closestToZero(tab) {
    if (tab === undefined || tab.length < 1)
        return 0;
    var closest = tab[0];
    for (var i = 1; i < tab.length; i++) {
        if (Math.abs(closest) > Math.abs(tab[i]) || (Math.abs(closest) > Math.abs(tab[i]) && closest <= tab[i])) {
            closest = tab[i];
        }
    }
    return closest;
}
exports.closestToZero = closestToZero;
