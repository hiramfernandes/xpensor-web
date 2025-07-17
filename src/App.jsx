import ExpenseList from './components/ExpenseList';
import Banner from './components/Banner';

import "./App.css"

function App() {
  const expenditures =
    [
      {
        "id": "e4c299f0-4dad-4ec9-92f1-07c0675418cc",
        "expenseName": "Aluguel",
        "dueDate": "2025-07-01T03:00:00Z",
        "generalInfo": "",
        "value": 3000,
        "paid": true,
        "paymentDate": "2025-07-01T11:54:53.315Z"
      },
      {
        "id": "efb339ca-7341-4338-bb40-123892230409",
        "expenseName": "Pensão Natália",
        "dueDate": "2025-07-01T03:00:00Z",
        "generalInfo": "",
        "value": 1800,
        "paid": true,
        "paymentDate": "2025-07-02T18:38:11.757Z"
      },
      {
        "id": "11205641-f430-48e7-8f57-1ad7a7740bf8",
        "expenseName": "CEEE",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 150,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "1386e875-0050-4237-90ca-6cfee87564b0",
        "expenseName": "Cartão de Crédito Nubank",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 7000,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "e68d9b33-32e1-42f4-8e06-5db8abcd791c",
        "expenseName": "Cartão de Crédito XP",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 3000,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "1381da00-6afb-44d0-b35d-7e6a6b2cb0dd",
        "expenseName": "Net",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 150,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "522e63d0-7a5c-4cb8-a1aa-019fe2b1abd6",
        "expenseName": "Turno Inverso Theo",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 500,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "0d16765a-4d21-4cb4-ab59-27038fdd93e9",
        "expenseName": "Sogipa",
        "dueDate": "2025-07-10T03:00:00Z",
        "generalInfo": "",
        "value": 900,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "68b8e02c-2a82-4bcb-94c3-b28b96814627",
        "expenseName": "Gás Portugal",
        "dueDate": "2025-07-10T03:00:00Z",
        "generalInfo": "",
        "value": 100,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "d4f6fa23-6085-4879-b9e9-ca2185e6b5f3",
        "expenseName": "Colégio Thep",
        "dueDate": "2025-07-15T03:00:00Z",
        "generalInfo": "",
        "value": 2025,
        "paid": false,
        "paymentDate": null
      },
      {
        "id": "0be204e0-7f90-444c-ba58-17f7d117f154",
        "expenseName": "Ação Divórcio Arlene",
        "dueDate": "2025-07-05T03:00:00Z",
        "generalInfo": "",
        "value": 366,
        "paid": false,
        "paymentDate": null
      }
    ];

  return (
    <>
      <div className="card">
        <Banner headerText="Xpensor Managing Payments" />
        <ExpenseList expenditures={expenditures} />
      </div>
    </>
  )
}

export default App
