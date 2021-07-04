import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const addNewExpenseHandler = () => {
        setDisplayExpenseForm(true);
    };

    const cancelHandler = () => {
        setDisplayExpenseForm(false);
    };

    if (displayExpenseForm)  {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
            </div>
        );
    }
    return (
        <div className="new-expense">
            <button onClick={addNewExpenseHandler}>Add New Expense</button>
        </div>
    );
}

export default NewExpense;