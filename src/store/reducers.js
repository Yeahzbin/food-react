import { combineReducers} from "redux"
import { LOADDATA } from "./actions-type"
const defaultState = {
    list: [{
        "name": "\u5c0f\u7092\u725b\u8089",
        "id": "785855",
        "img": "http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA",
        "all_click": "961.2\u4e07",
        "favorites": "6.0\u4e07",
        "uri": "dishInfo.app?code=78602371",
        "is_fine": 1,
        "has_make_img": 1,
        "is_exclusive": "2",
        "burdens": "\u9752\u849c\u3001\u5c0f\u7c73\u6912\u3001\u725b\u91cc\u810a\u3001\u9e21\u86cb\u6e05\u3001\u9999\u83dc\u6897\u3001\u8471\u3001\u59dc"
    }]
}
const foodList = (state = defaultState, action) => {
    switch (action.type) {
        case LOADDATA:
            return {
                list: action.data
            }
        default:
            return { ...state }
    }
}
export default combineReducers({
    foodList
})