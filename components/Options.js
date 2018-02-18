import { h } from 'hyperapp';
import Option from './Option'

export default (state, actions) => (
    <div>
        <button onClick={actions.handleDeleteOptions} >Remove All</button>
        {state.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            state.options.map(option => {
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={actions.handleDeleteOption}
                />
            })
        }
    </div>
);