import { h } from 'hyperapp';

export default (state, actions) => (
    <div>
        <button
            onClick={actions.handlePick}
            disabled={!state.hasOptions}
        >What should I do?</button>
    </div>
);