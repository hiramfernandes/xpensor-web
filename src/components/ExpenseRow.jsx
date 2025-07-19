import dateFormatter from "../helpers/date-formatter";

const ExpenseRow = ({expense}) => {
    return (
        <tr>
            <td>{expense.expenseName}</td>
            <td>{dateFormatter(expense.dueDate)}</td>
            <td>{expense.value}</td>
            <td>{expense.generalInfo}</td>
            <td>{expense.paid ? 'Yes' : ''}</td>
            <td>{dateFormatter(expense.paymentDate)}</td>
        </tr>
    )
}

export default ExpenseRow;