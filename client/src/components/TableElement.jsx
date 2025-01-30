import React from 'react'
function TableElement({element}) {

  return (
    <tr>
        <td>{element.date}</td>
        <td>{element.title}</td>
        <td>{element.amount}</td>
        <td>{element.expensetype}</td>
        <td>{element.description}</td>
        <td>{element.category}</td>
        <td>edit/delete</td>
       
    </tr>
  )
}

export default TableElement