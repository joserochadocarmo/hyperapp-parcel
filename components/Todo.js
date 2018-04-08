/** @jsx h */

import { h, app } from 'hyperapp';

// Array of colors
const colors = ['blue', 'red', 'yellow', 'orange', 'brown'];

// states
export const state = {
	title: 'Another App',
	description: 'Open Source Flat App',
	color: 'yellow',
	btn_title: 'Download Now',
	btn_color: 'blue',
};

// Nested Actions
export const actions = {
	// change title target value
	chg_title: title => ({ title }),
	// btn title
	chg_btn_title: btn_title => ({ btn_title }),
	// change desc
	chg_desc: description => ({ description }),
	// change color
	chg_color: color => ({ color }),
	// change btn color
	chg_btn_color: btn_color => ({ btn_color }),
};

// component input oncreate={e => e.focus()}
const Input = ({ title, desc, fn }) => (
	<p>
		<label>{title}</label>
		<input type="text" placeholder={desc} oninput={e => fn(e.target.value)} />
	</p>
);
// component textarea
const Textarea = ({ title, desc, fn }) => (
	<p>
		<label>{title}</label>
		<input type="text" placeholder={desc} oninput={e => fn(e.target.value)} />
	</p>
);
// component select
const Select = ({ title, fn }) => (
	<p>
		<label>Color</label>
		<select onchange={e => fn(e.target.value)}>{colors.map(item => <option value={item}>{item}</option>)}</select>
	</p>
);

/**
 * lifecycles
 * - oncreate
 * - onupdate
 * - onremove
 * - ondestroy
 */

export const view = (state, actions) => (
	<div class="boxes">
		<div class="box-2">
			<Input title="Title" desc="the title of your App" fn={actions.chg_title} />
			<Textarea title="Description" desc="A little description" fn={actions.chg_desc} />
			<Select title="Color" fn={actions.chg_color} />
			<Input title="Button Title" desc="Write the name of button" fn={actions.chg_btn_title} />
			<Select title="Color of button" fn={actions.chg_btn_color} />
		</div>
		<div class="box-2">
			<div class="browser">
				<div class={'mask ' + state.color}>
					<div class="boxes">
						<div class="box-1 text-center">
							<h2>{state.title || 'App name'}</h2>
							<p>{state.description || 'Write something'}</p>
							<button class={state.btn_color}>{state.btn_title || 'Write name'}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
