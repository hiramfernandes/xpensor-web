import ExpenseRow from "./ExpenseRow"

const ExpenseList = ({expenses}) => {
    console.log(expenses)
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Expenses for 07/2025
                </h5>
            </div>
            <table className='table table-hover'>
                <thead>
                    <th>Expense</th>
                    <th>Due Date</th>
                    <th>Value</th>
                    <th>Info</th>
                    <th>Paid</th>
                    <th>Paid Date</th>
                </thead>
                <tbody> 
                    {expenses.map(expense => 
                        <ExpenseRow key={expense.id} expense={expense} /> 
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ExpenseList;