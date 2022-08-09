export const cartInitState = {
    totalOfItems: 0,
    products: []
};

export function cartReducer(state, payload) {
    switch (payload.type) {
        case 'add': {
            let addObj = state.products.filter(
                (prd) => prd.name === payload.product.name
            )[0];
            if (addObj) {
                addObj = {
                    ...addObj,
                    numberOfItems: addObj.numberOfItems + payload.quantity
                };
                const newArray = state.products.filter(
                    (prd) => prd.name !== payload.product.name
                );
                const tmpArray = [...newArray, addObj];
                return {
                    totalOfItems: tmpArray.reduce(
                        (acc, obj) => acc + obj.numberOfItems,
                        0
                    ),
                    products: tmpArray.sort((a, b) =>
                        a.name > b.name ? 1 : -1
                    )
                };
            }
            const tmpArray = [
                ...state.products,
                { ...payload.product, numberOfItems: payload.quantity }
            ];
            return {
                totalOfItems: tmpArray.reduce(
                    (acc, obj) => acc + obj.numberOfItems,
                    0
                ),
                products: tmpArray.sort((a, b) => (a.name > b.name ? 1 : -1))
            };
        }
        case 'substract': {
            let removeObj = state.products.filter(
                (prd) => prd.name === payload.product.name
            )[0];
            if (removeObj) {
                removeObj = {
                    ...removeObj,
                    numberOfItems: removeObj.numberOfItems - payload.quantity
                };
                const newArray = state.products.filter(
                    (prd) => prd.name !== payload.product.name
                );
                const tmpArray = [...newArray, removeObj];
                return {
                    totalOfItems: tmpArray.reduce(
                        (acc, obj) => acc + obj.numberOfItems,
                        0
                    ),
                    products: tmpArray.sort((a, b) =>
                        a.name > b.name ? 1 : -1
                    )
                };
            }
            const tmpArray = [
                ...state.products,
                { ...payload.product, numberOfItems: payload.quantity }
            ];
            return {
                totalOfItems: tmpArray.reduce(
                    (acc, obj) => acc + obj.numberOfItems,
                    0
                ),
                products: tmpArray.sort((a, b) => (a.name > b.name ? 1 : -1))
            };
        }
        case 'remove': {
            const newProductsArray = state.products.filter(
                (itm) => itm.name !== payload.product.name
            );
            return {
                totalOfItems: newProductsArray.reduce(
                    (acc, obj) => acc + obj.numberOfItems,
                    0
                ),
                products: newProductsArray.sort((a, b) =>
                    a.name > b.name ? 1 : -1
                )
            };
        }
        default:
            return cartInitState;
    }
}
