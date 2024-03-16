import {atom, selector} from 'recoil'

export const countatom = atom ({
    key:"countAtom",
    default:0
})
export const evenselector = selector({
    key: "evenselector",
    get:({get})=>{
        const count = get(countatom);
        return count%2;
    }
})