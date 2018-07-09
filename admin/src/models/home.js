export default {
    namespace: 'home',
    state: {
        activeIndex: 0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location=> {
                dispatch({
                    type: 'updateActiveIndex',
                    payload: location.pathname
                });
            });
        },
    },
    reducers: {
        updateActiveIndex(state, action){
            let pathname = action.payload;
            let activeIndex = 0;
            if (/orders/.test(pathname)) {
                activeIndex = 1;
            } else if (/storage/.test(pathname)) {
                activeIndex = 2;
            } else if (/resource/.test(pathname)) {
                activeIndex = 3;
            } else if (/settlement/.test(pathname)) {
                activeIndex = 4;
            } else if (/manage/.test(pathname)) {
                activeIndex = 5;
            } else if (/customerBills/.test(pathname)) {
                activeIndex = 6;
            } else if (/supplierBills/.test(pathname)) {
                activeIndex = 7;
            } else if (/customer/.test(pathname)) {
                activeIndex = 8;
            } else if (/product/.test(pathname)) {
                activeIndex = 9;
            } else if (/supplier/.test(pathname)) {
                activeIndex = 10;
            } 
            else {
                activeIndex = 0;
            }
            return {...state, activeIndex: activeIndex};
        }
    },

}