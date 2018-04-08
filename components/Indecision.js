import { h, app } from 'hyperapp';
import Header from './Header';

export const state = {
	count: 0,
	title: 'Indecision App',
	subtitle: 'My app test with Hyperapp+Parcel',
};

export const actions = {
	down: value => state => ({ count: state.count - value }),
	up: value => state => ({ count: state.count + value }),
};

export const view = (state, actions) => (
	<div>
		<Header {...state} />
		<main>
			<h1>{state.count}</h1>
			<button onclick={() => actions.down(1)} disabled={state.count <= 0}>
				ー
			</button>
			<button onclick={() => actions.up(1)}>＋</button>
		</main>
	</div>
);
