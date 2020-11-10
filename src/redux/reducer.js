
const weather = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            console.log(action.payload)
            state.unshift(action.payload)
            return state



        default:
            return state


    }
};
export default weather;