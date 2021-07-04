import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    const changeYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYear={changeYearHandler} />
                <ExpensesChart expenses={filterExpenses} />
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;