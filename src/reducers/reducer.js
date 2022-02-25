const initialState = {
    propertyPrice: '',
    downPayment: '',
    interest: '',
    termLoan: '',
    rent: '',
    rentIncrement: '',
    emi: '',
    totalEmi: '',
    totalRent: ''
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROPERTY_PRICE":
            return { ...state, propertyPrice: action.payload };
        case "DOWN_PAYMENT":
            return { ...state, downPayment: action.payload };
        case "INTEREST":
            return { ...state, interest: action.payload };
        case "TERM_LOAN":
            return { ...state, termLoan: action.payload };
        case "RENT":
            return { ...state, rent: action.payload };
        case "RENT_INCREMENT":
            return { ...state, rentIncrement: action.payload };
        case "MONTHLY_EMI":
            return { ...state, emi: action.payload };
        case "TOTAL_EMI":
            return { ...state, totalEmi: action.payload };
        case "TOTAL_RENT_AMOUNT":
            return { ...state, totalRent: action.payload };
        default:
            return state;
    }

}
export default reducer;