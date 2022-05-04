import React from 'react'

function Table({list,deleteHandler,editHandler}) {
  return (

    <div className='container mt-3'>
        <table className="table table-success">
            <thead>
                <tr>

                    <th>sl.no</th>
                    <th>name</th>
                    <th></th>
                    <th></th>
                </tr>
               
            </thead>

            <tbody>
                {
                    list.map((ele,index)=> {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{ele}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={()=>deleteHandler(index)}>delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-warning" onClick={()=> editHandler(index)}>edit</button>
                                </td>
                            </tr>

                        )
                    })
                }
            </tbody>



        </table>

    </div>
  )
}

export default Table