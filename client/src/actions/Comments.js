import axios from "axios"

export const getComments = (page = 1) => {
    return(dispatch) => {
        axios.get(`/api/streak/1?page=${page}`)
        .then( res => {
            const { data: comments, headers } = res;
            const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page']);

            dispatch({ type:'SET_COMMENTS', comments, pagination: { totalPages}, headers})
        })
        .catch( res => {
            alert('error')
        });
    }
}