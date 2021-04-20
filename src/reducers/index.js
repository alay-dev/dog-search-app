import { combineReducers } from 'redux' ;

const dogsReducers =  (state = [], action) =>{
    switch (action.type) {
        case 'FETCH_DOGS' :
            return action.payload;
        case 'SEARCH_DOG' :
            return action.payload ;
        default :
            return state ;
    }
}

const selectedDogReducer = (selectedDog = null, action ) => {
    if (action.type === 'DOG_SELECTED') {
        return action.payload ;
    }

    return selectedDog ;
}

export default combineReducers({
    dogs : dogsReducers,
    selectedDog: selectedDogReducer
});

