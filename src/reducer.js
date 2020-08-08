export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//remove after developping......
	//token:
		//'BQBaLFu9bCyqe0seZPEVy_aWRIVH3U3z6tatU9ZPoeCAFEc31_V08ijABScqcN-4Hkx_nQyWf7_ON_Y_gtC1BzkNiu5ljHmk0DtkxzN-CxjXU9FzksE-eKybI73do6TRWIV7CtUqSm1j3_3ZRok8KooKUdd9e39kHRGl2lIgl8lCTc9n'
};
const reducer = (state, action) => {
	//console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discoverWeekly: action.discoverWeekly
			};
		default:
			return state;
	}
};

export default reducer;
