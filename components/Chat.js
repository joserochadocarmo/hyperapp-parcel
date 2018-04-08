import { h } from 'hyperapp';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
// ---------------------------------------------
// Chatkit Code
// ---------------------------------------------

const tokenProvider = new TokenProvider({
	url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/1515c993-a7b5-47da-b73b-d1a5f709ca2f/token',
});

const chatManager = new ChatManager({
	instanceLocator: 'v1:us1:1515c993-a7b5-47da-b73b-d1a5f709ca2f',
	userId: 'admin',
	tokenProvider,
});

chatManager.connect().then(user => {
	let chat = document.querySelector('x-chat');
	chat.actions.setUser(user);
	user
		.subscribeToRoom({
			roomId: user.rooms[0].id,
			hooks: { onNewMessage: chat.actions.addMessage },
			messageLimit: 10,
		})
		.then(chat.actions.setRoom);
});

// ---------------------------------------------
// Application Code
// ---------------------------------------------

export const state = {
	user: {
		avatarURL: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
	},
	room: {},
	messages: [],
};

export const actions = {
	setUser: user => ({ user }),
	setRoom: room => ({ room }),
	addMessage: payload => ({ messages }) => ({
		messages: [payload, ...messages],
	}),
};

// ---------------------------------------------
// View Code
// ---------------------------------------------

const UserHeader = ({ user }) => (
	<header>
		<img src={user.avatarURL} />
		<p>{user.name}</p>
	</header>
);

const MessageList = ({ user, messages }) => (
	<div>
		{messages.map(message => (
			<message- class={message.sender.id === user.id && 'own'}>
				<img src={message.sender.avatarURL} />
				<p>{message.text}</p>
			</message->
		))}
	</div>
);

const MessageInput = ({ user, room }) => (
	<form
		onsubmit={e => {
			e.preventDefault();
			user
				.sendMessage({
					text: e.target.elements[0].value,
					roomId: room.id,
				})
				.then(() => {
					e.target.elements[0].value = '';
				});
		}}
	>
		<input placeholder="Type a message.." />
		<button>
			<svg>
				<use href="#send" />
			</svg>
		</button>
	</form>
);

export const view = (state, actions) => (
	<main>
		<UserHeader user={state.user} />
		<MessageList user={state.user} messages={state.messages} />
		<MessageInput user={state.user} room={state.room} />
	</main>
);
