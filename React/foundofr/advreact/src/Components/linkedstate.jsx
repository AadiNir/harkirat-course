import axios from "axios";
import { atom, selector } from "recoil";

export const getnotification = atom({
    key:"notification",
    default: selector({
        key: "newkey",
        get:async()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
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