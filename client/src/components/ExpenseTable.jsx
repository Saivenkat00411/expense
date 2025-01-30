import React, { useEffect, useState } from 'react'
import Label from './Label'
import axios from 'axios'
import TableElement from './TableElement'
function ExpenseTable() {

    const [expenses, setExpenses] = useState([])
    const [userId, setUserId] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/expense");
                // console.log(res.data.userId);
                setExpenses(res.data.expenses);
                setUserId(res.data.userId)
            } catch (error) {
                throw Error(error);
            }
        }
        fetchData();
    }, [])

    
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <td><Label labelName={"Date"} /></td>
                        <td><Label labelName={"Name"} /></td>
                        <td> <Label labelName={"Amount"} /> </td>
                        <td><Label labelName={"type"} /></td>
                        <td> <Label labelName={"description"} /></td>
                        <td><Label labelName={"category"} /></td>
                        <td><Label labelName={"actions"} /></td>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        expenses.map((item) => {
                            return (
                                <TableElement key={item._id} element={item} />
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ExpenseTable