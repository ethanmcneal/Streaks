const comments = (state = { data: [], pagination: {} }, action) => {
    switch(action.type) {
      case 'ADD_COMMENT':
        return { data: [...state.data, action.comment], pagination: state.pagination }
      case 'SET_COMMENTS':
        return { data: [...state.data, ...action.comments], pagination: action.pagination }
      case 'EDIT_COMMENT':
        const data = state.data.map(comment => {
          if(comment.id === action.comment.id)
            return action.comment
          else
            return comment
        })
        return { data, pagination: state.pagination }
      case 'DELETE_COMMENT':
        return { data: state.data.filter( comment => comment.id !== action.id), pagination: state.pagination }
      default:
        return state;
    }
  }
  export default comments;