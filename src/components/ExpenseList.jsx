const ExpenseList = () => {
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
                    <th>Info</th>
                    <th>Paid</th>
                    <th>Paid Date</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Expense</td>
                        <td>Due Date</td>
                        <td>Info</td>
                        <td>Paid</td>
                        <td>Paid Date</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ExpenseList;