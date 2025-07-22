import { useEffect, useState } from 'react';
import ExpenseRow from "./ExpenseRow"

const ExpenseList = ({selectExpense}) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const retrieveExpenses = async() => {
            const response = await fetch('http://localhost:5213/api/Payments/get-monthly-report?month=7&year=2025');
            const expenses = await response.json();
            
            setExpenses(expenses);
        };
        retrieveExpenses();
    }, [])
    const addExpense = () => {
        setExpenses([
            ...expenses,
            {
                "id": "e4c299f0-4dad-4ec9-92f1-07c0675418cd",
                "expenseName": "Financiamento",
                "dueDate": "2025-07-01T03:00:00Z",
                "generalInfo": "a caminho",
                "value": 3000,
                "paid": false,
                "paymentDate": null
            }
        ])
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Expenses for 07/2025
                </h5>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Due Date</th>
                        <th>Value</th>
                        <th>Info</th>
                        <th>Paid</th>
                        <th>Paid Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <ExpenseRow 
                            key={expense.id} 
                            expense={expense} 
                            selectExpense={selectExpense} />
                    ))}
                </tbody>
            </table>
            <button onClick={addExpense} className='btn btn-primary'>
                Add Expense
            </button>
        </>
    );
}

export default ExpenseList;