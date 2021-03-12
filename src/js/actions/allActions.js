export const addingBook = bookTitle => {
    return {
        type: "ADD_BOOK",
        payload: bookTitle,
    };
};

export const removingBook = book => {
    return {
        type: "REMOVE_BOOK",
        payload: book,
    };
};

export const openingInfoBook = book => {
    return {
        type: "OPEN_INFO_BOOK",
        payload: book,
    };
};

export const closingInfoBook = book => {
    return {
        type: "CLOSE_INFO_BOOK",
        payload: book,
    };
};

// The payload is optional.  If you don't have anything to pass in, then you don't have to use a payload.
export const openingMyList = () => {
    return {
        type: "OPEN_MY_LIST",
    };
};

export const closingMyList = () => {
    return {
        type: "CLOSE_MY_LIST",
    };
};

// It is up to you how you name your type properties.  Just remember to keep a convention.  If everything is uppercase, keep adding new type properties using the same naming convention.  This way you know that these new type properties are actions.