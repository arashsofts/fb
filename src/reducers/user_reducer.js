import { CREATE_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_POST:
      console.log(action.payload);
    default:
      return state;
  }
}
