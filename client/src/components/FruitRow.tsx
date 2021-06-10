

export default function FruitRow(props :any) {
    const { index, id, name, weight, price, parentCallback, deleteFunction } = props

    const handleGetEdit = () => {
        const toBeUpdated = {
            id: id,
            name: name,
            weight: weight,
            price: price 
        }
        parentCallback(toBeUpdated)
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{weight} kg</td>
            <td>Rp {price}</td>
            <td>Rp {weight * price}</td>
            <td className='row d-flex justify-content-around'>
                <button className='col-5 btn btn-primary' onClick={handleGetEdit}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button className='col-5 btn btn-danger' onClick={() => deleteFunction(id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </td>
        </tr>
    )
}
