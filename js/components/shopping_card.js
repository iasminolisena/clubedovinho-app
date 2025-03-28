import {updateQuantity} from "./ultil.js"

let valor = 0;


export function add(){
    valor++;
    updateQuantity(valor);
}

export function remove(){
    valor--;
    updateQuantity(valor);
}

// module.export = {add, remove}