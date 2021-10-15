export function manageFriends(state = {friends: []}, action) {
  switch (action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      const indexNum = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: [...state.friends.slice(0, indexNum), ...state.friends.slice(indexNum + 1)]}
    default:
      return state 
  }
}