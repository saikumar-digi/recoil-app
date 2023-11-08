import {atom} from "recoil";

import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const todoListAtom = atom({
    // add two property - key pair val
    key:"todoListState",
    default:[{
        text:"drink coffee",
        id:1234,
        isCompleted:false
    },{
        text:"cold coffee",
        id:12346,
        isCompleted:false
    }],
    effects_UNSTABLE:[persistAtom]
})