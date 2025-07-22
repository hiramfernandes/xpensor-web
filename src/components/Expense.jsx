import viteLogo from '../assets/vite.svg'

const Expense = ({ expense }) => {
    return (
        <div className="row">
            <div className="col-6">
                {expense.expenseName + " - " + expense.id}
                <div className="row">
                    <img className='img-fluid'
                        src={viteLogo}
                        alt="House pic"
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="col-12">{expense.value}</h5>
                </div>
                <div className="row">
                    <h3 className="col-12">{expense.paid}</h3>
                </div>
                <div className="row">
                    <h2 className="themeFontColor col-12">
                        {expense.dueDate}
                    </h2>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">{expense.paymentDate}</div>
                </div>
            </div>
        </div>
    );
}

export default Expense;