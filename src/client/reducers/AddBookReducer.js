const intialState = {
    //books list which is rendered intially
    books: [],
    actualList: [],

    //index of what is selected from table
    selectedIndex: -1,

    //Selected record details
    selectedRecord: {
        index: -1,
        name: "",
        description: "",
        category: "",
        author: "",
        price: ""
    },
    //toggle modal
    showModal: false,

    //btnAction edit or add is pressed
    btnAction: '',

    //enable/disable save
    isSaveDisabled: true
}

const addBookReducer = (state = intialState, action) => {
    if (action.type === 'ADD_BOOK') {
        return {
            ...state, books: state.actualList.concat(action.value), actualList: state.actualList.concat(action.value)
        }
    }
    else if (action.type === 'SEARCH_BOOK') {

        if (action.value) {
            let filteredArray = state.actualList.filter((item) => {
                return (item.name.toLowerCase().includes(action.value.toLowerCase()) ||
                    item.description.toLowerCase().includes(action.value.toLowerCase()) ||
                    item.category.toLowerCase().includes(action.value.toLowerCase()) ||
                    item.author.toLowerCase().includes(action.value.toLowerCase()) ||
                    item.price.toLowerCase().includes(action.value.toLowerCase())
                )
            });
            return {
                ...state, books: [...filteredArray]
            }
        }
        else {
            return {
                ...state, books: [...state.actualList]
            }
        }
    }
    else if (action.type === 'SELECT_ITEM') {
        return {
            ...state, selectedIndex: action.value
        }
    }

    else if (action.type === 'ENABLE_SAVE_BTN_BTN') {
        return {
            ...state, isSaveDisabled: !action.value
        }
    }
    else if (action.type === 'SET_BOOK_LIST') {
        return {
            ...state, books: action.value, actualList: action.value
        }
    }

    else if (action.type === 'UPDATE_BOOK') {
        const copyOfArray = [...state.actualList];
        copyOfArray[state.selectedIndex] = action.value;

        return {
            ...state, books: [...copyOfArray], actualList: copyOfArray
        }
    }

    else if (action.type === 'CHANGE_RECORD') {
        let copyOfSelectedRecord = { ...state.selectedRecord };
        copyOfSelectedRecord[action.name] = action.value

        return {
            ...state, selectedRecord: { ...copyOfSelectedRecord }
        }
    }

    else if (action.type === 'TOGGLE_MODAL') {
        if (action.btnAction === 'add') {
            const obj = {
                name: "",
                description: "",
                category: "",
                author: "",
                price: ""

            }
            state = { ...state, selectedRecord: { ...obj }, isSaveDisabled: true };
        }
        else if (action.btnAction === 'edit') {
            const obj = { ...state.books[state.selectedIndex] };
            state = { ...state, selectedRecord: { ...obj }, isSaveDisabled: false };
        }

        return {
            ...state, showModal: action.showModal, btnAction: action.btnAction

        }
    }
    else if (action.type === 'CLEAR_RECORD') {
        const obj = {
            name: "",
            description: "",
            category: "",
            author: "",
            price: ""

        }
        state = { ...state, selectedRecord: { ...obj }, isSaveDisabled: true };
    }


    return state;
}
export default addBookReducer;