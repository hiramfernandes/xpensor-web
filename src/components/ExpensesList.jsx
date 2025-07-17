const ExpensesList = () => {
    return (
        <>
            <div>Month: 07</div>
            <div>Year: 2025</div>
            <table className='table table-striped'>
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

export default ExpensesList;