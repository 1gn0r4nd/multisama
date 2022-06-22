import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player: 'Donniebigbags'
}

// export function carnageReducer(state = initialState, action) {
//     switch(action.type){
//       case "carnage/CHANGE_PLAYER":
//         // return {
//         //   ...state,
//         //   player: action.value
//         // }
//         return {
//           player: action.player
//         }
//       default:
//         return state;
//       }
//   }

export const carnageSlice = createSlice({
  name: 'carnage',
  initialState,
  reducers: {
    change_player: (state, action) => {
      state.player = action.player;
    }
  }
})

export const { change_player } = carnageSlice.actions;

export default carnageSlice.reducer;