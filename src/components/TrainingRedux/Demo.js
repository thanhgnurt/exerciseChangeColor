import { createStore } from "redux";
import {status, sort} from './Actions/Index'
import myReducer from './Reduces/Index'

const store = createStore(myReducer)
console.log("default: ",store.getState());
// thuc hien cong viec thay doi status
// var action= { type:'TOGGLE_STATUS' }
store.dispatch(status());
console.log("toggle_status: ",store.getState());
// thuc hien cong viec sap xep ten tu z den a
// var sorAction = {
//     type: 'SORT',
//     sort : {
//         by : 'name',
//         value : -1
//     }
// }
store.dispatch(sort({
    by : "name",
    value : -1
}));
console.log('SORT :' ,store.getState());

