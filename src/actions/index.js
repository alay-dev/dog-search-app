import dogsApi from '../apis/dogApi' ;

export const fetchDogs = () => {
    return async (dispatch) =>{
        const res = await dogsApi.get('/', {
            params: {
                page: 0,
                limit: 20,
            }
        }) ;
        dispatch({ type: 'FETCH_DOGS', payload: res.data}) ;
    }
}

export const getDogInfo = (dog) =>{
    return {
        type: 'DOG_SELECTED',
        payload: dog
    }
}

export const searchDogs = (searchTerm) => {
    return async (dispatch) => {
        const res = await dogsApi.get('/search', {
            params :{
                q: searchTerm,
                page: 0,
                limit: 20,
            }
        }) ;

        dispatch({ type: 'SEARCH_DOG', payload: res.data}) ;
    }
}