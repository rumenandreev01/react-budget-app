import React , {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
    incomeTransactions:[
        {id:1, incomeText:"Car sold", incomeAmount: 500},
        {id:2, incomeText:"Car sold again", incomeAmount: 500},
        {id:3, incomeText:"Car sold again again", incomeAmount: 500},
    ],
    expenseTransactions:[
        {id:4, expenseText:"Car bought", expenseAmount: 500},
        {id:5, expenseText:"Car bought again", expenseAmount: 500},
        {id:6, expenseText:"Car bought again again", expenseAmount: 500},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
   const [state,dispatch] =  useReducer(AppReducer,initialState);

    const addIncome =  incomeTransaction => {
        dispatch({
            type:"ADD_INCOME",
            payload:incomeTransaction
        })
    }

   const addExpense =  expenseTransaction => {
    dispatch({
        type:"ADD_EXPENSE",
        payload:expenseTransaction
    })
}

    const deleteTransaction =  id => {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
    })
}    
   
   return (
       <GlobalContext.Provider value=
       {{   incomeTransactions:state.incomeTransactions,
            expenseTransactions:state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
        {children}
       </GlobalContext.Provider>
   )
}