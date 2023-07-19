export const FETCH_RANDOM_NUMBER = 'FETCH_RANDOM_NUMBER'

const defaultState = {
    homeText: '',
    aboutText: '',
    randomNumber: 0
}

export const numberReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_NUMBER:
            return {...state, randomNumber: action.payload}
        default:
            return state
    }
};
