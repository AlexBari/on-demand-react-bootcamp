export const cartInitState = {
    totalOfItems: 0,
    products: []
};

export function cartReducer(state, payload) {
    switch(payload.type){
        case 'add':
            let addObj = state.products.filter(prd => prd.name === payload.product.name)[0];
            if(addObj) {
                addObj = { ...addObj, numberOfItems: addObj.numberOfItems + payload.quantity}
                const newArray = state.products.filter(prd => prd.name !== payload.product.name)
                return {
                    totalOfItems: state.totalOfItems + payload.quantity,
                    products: [...newArray, addObj]
                }
            } else {
                return {
                    totalOfItems: state.totalOfItems + payload.quantity,
                    products: [...state.products, { ...payload.product, numberOfItems: payload.quantity}]
                }
            }
        case 'substract':
            let removeObj = state.products.filter(prd => prd.name === payload.product.name)[0];
            if(removeObj) {
                removeObj = { ...removeObj, numberOfItems: removeObj.numberOfItems - payload.quantity}
                const newArray = state.products.filter(prd => prd.name !== payload.product.name)
                return {
                    totalOfItems: state.totalOfItems - payload.quantity,
                    products: [...newArray, removeObj]
                }
            } else {
                return {
                    totalOfItems: state.totalOfItems - payload.quantity,
                    products: [...state.products, { ...payload.product, numberOfItems: payload.quantity}]
                }
            }
        case 'remove':
            const newProductsArray = state.products.filter(itm => itm.name !== payload.product.name)
            return {
                totalOfItems: state.totalOfItems -  payload.totalOfItems,
                products: newProductsArray
            }
        default: return cartInitState;
    }
};