import { atom, selector } from "recoil";

export const mynetwork = atom({
    key:"mynetwork",
    default:90
})

export const job = atom({
    key:"job",
    default:20
})
export const messagings = atom({
    key:"messagings",
    default:1
})
export const notifcation = atom({
    key:"notifcation",
    default:3
})
export const defsec = selector({
    key:"defsec",
    get : ({get})=>{
        const net = get(mynetwork);
        if(net>=100){
            return 99;
        }
        return net;
    }

})