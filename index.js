import * as Indecision from './components/Indecision';
import * as Todo from './components/Todo';
import * as Chat from './components/Chat';
import define from 'hyperapp-customelements';
import './style.scss';

var chat = define({
	name: 'x-chat',
	...Chat,
});

define({ name: 'x-todo', ...Todo });

define({
	name: 'x-indecision',
	...Indecision,
	observedAttributes: [{ max: Number }],
});
