import { Map as ImmutableMap, fromJS } from 'immutable';

import { POLLS_IMPORT } from 'flavours/glitch/actions/importer';

const importPolls = (state, polls) => state.withMutations(map => polls.forEach(poll => map.set(poll.id, fromJS(poll))));

const initialState = ImmutableMap();

export default function polls(state = initialState, action) {
  switch(action.type) {
  case POLLS_IMPORT:
    return importPolls(state, action.polls);
  default:
    return state;
  }
}
