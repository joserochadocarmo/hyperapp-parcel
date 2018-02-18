import { h } from 'hyperapp';

export default (state, actions) => (
    <div>
        {state.optionText}
        <button onClick={actions.handleDeleteOption(state.optionText)} >remove</button>
    </div>
);