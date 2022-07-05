const initialState = {
    totalOfItems: 0,
    itemsToBuy: []
};

function cartReducer(state, action) {
    switch(action.type){
        case 'add':
            return {
                totalOfItems: state.totalOfItems + 1,
                itemsToBuy: [...state.itemsToBuy]
            }
        case 'remove':
            return {
                totalOfItems: state.totalOfItems - 1,
                itemsToBuy: [...state.itemsToBuy]
            }
        case 'checkout':
            break;
        default: break;
    }
};

export default cartReducer;