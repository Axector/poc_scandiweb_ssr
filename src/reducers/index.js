export const FETCH_RANDOM_NUMBER = 'FETCH_RANDOM_NUMBER'

export const numberReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_RANDOM_NUMBER:
            return {...state, randomNumber: action.payload}
        default:
            return state
    }
};
