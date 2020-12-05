import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, DELETE_ALL, ITEMS_LOADING } from './types';

/* Template code. Will be changed upon completion of backend
*/
export const getItems = () => dispatch => {
    console.log("Getting All")

    dispatch({
        type: DELETE_ALL
    })
    
    /*
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
           })
            )
    */
};

export const addItem = item => dispatch => {
    axios
        .post('/api/items', item)
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            }))
};

export const deleteItem = id => dispatch => {
    console.log(id)
    axios.delete(`/api/items/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
};

export const deleteAll = () => dispatch => {
    console.log("Deleting All")
    dispatch({
        type: DELETE_ALL
    })
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};