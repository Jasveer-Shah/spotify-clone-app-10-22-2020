export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing....
    // token: 'BQC3d_SxYhWk2XLUYAsRFOSHdz2NhqJXfSJCX6hOed1yEoXYa9wfVeKZhFamc8FyhrPzGNfaqZZq4XWmi0SFBGvV_DRkfU2W_vcYqxGK8VHkCCgqpulGwCC9iF53BxhczB8lVjrjJPWoDbgnGdsa3QfPMiw5f2X7YLlQrIlw0_NMlUxj',
};

const reducer = (state, action) => {
    console.log(action);

    //Action --> type, [payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}
export default reducer;