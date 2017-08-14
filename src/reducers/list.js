// set the list of reducers
import * as actions from "../actions/actions";

export default function listReducer(state = [],action ){
    switch (action.type){
        case actions.ADD_ITEM:
            if(typeof action.payload !== "undefined") {
                return state.concat([action.payload]);
            }
            break;
    }
    return state
}