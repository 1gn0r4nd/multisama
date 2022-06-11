const initialState = {
    player: 'Donniebigbags'
}

export function carnageReducer(state = initialState, action) {
    switch(action.type){
      case "carnage/CHANGE_PLAYER":
        // return {
        //   ...state,
        //   player: action.value
        // }
        return {
          player: action.player
        }
      default:
        return state;
      }
  }