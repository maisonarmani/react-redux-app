import * as actions from "./actions";

export function addListItem(payload){
    return {
        type:actions.ADD_ITEM,
        payload:payload
    }
}