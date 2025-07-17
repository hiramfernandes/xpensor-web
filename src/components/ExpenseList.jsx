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
                    {expenses.map(expense => (
                        <tr key={expense.id}>
                            <td>{expense.expenseName}</td>
                            <td>{expense.dueDate}</td>
                            <td>{expense.value}</td>
                            <td>{expense.generalInfo}</td>
                            <td>{expense.paid}</td>
                            <td>{expense.paymentDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ExpenseList;