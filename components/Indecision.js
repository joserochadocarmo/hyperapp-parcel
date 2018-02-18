import { h, app } from 'hyperapp'
import Header from "./Header"

const actions = {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value })
}

const view = (state, actions) => (
    <div>
        <Header {...state} />
        <main>
            <input
                placeholder="What should I do?"
                value={state.text}
                oninput={e => setText(e.target.value)}
            />
            <button onclick={actions.add}>＋</button>
            <h1>{state.count}</h1>
            <button onclick={() => actions.down(1)} disabled={state.count <= 0}>ー</button>
            <button onclick={() => actions.up(1)}>＋</button>
        </main>
    </div>
)

export {actions, view};