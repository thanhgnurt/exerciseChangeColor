import * as types from './../Constant/ActionType'
export const status = () => {
    return{
        type : types.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return{

        type : types.SORT,
        sort : sort
    }

}