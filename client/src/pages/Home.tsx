import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FruitRow from '../components/FruitRow'
import { actionCreate, actionEdit, actionDelete } from '../store/actions/buah'

export default function Home() {
    const dispatch = useDispatch()
    const allState :any = useSelector(state => state)
    const allFruits = allState.fruits
    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)
    const [price, setPrice] = useState(0)

    const parentFunction = (data: any) => {
        setId(data.id)
        setName(data.name)
        setWeight(data.weight)
        setPrice(data.price)
    }

    // const getIdFromChild = (id: number) => {

    // }

    const resetState = () => {
        setId(null)
        setName('')
        setWeight(0)
        setPrice(0)
    }

    const handleEdit = () => {
        const data = {
            id: id,
            name: name,
            weight: weight,
            price: price
        }
        if (name && weight >= 2000 && price) {
            dispatch(actionEdit(data))
            resetState()
        }
    }

    const handleCreate = () => {
        const data = {
            name: name,
            weight: weight,
            price: price
        }
        if (name && weight >= 2000 && price) {
            dispatch(actionCreate(data))
            resetState()
        }
    }

    const handleDelete = (id :number) => {
        console.log(id);
        
        dispatch(actionDelete(id))
        
    }

    const onchangeName = (value:string) => setName(value)
    const onchangeWeight = (value:number) => setWeight(value)
    const onchangePrice = (value:number) => setPrice(value)

    return (
        <div className="container py-5">
            <h1 className="py-3">Simple CRUD Buah</h1>
            <table className='table'>
                <thead className="thead-light">
                    <tr>
                        <th>No</th>
                        <th>Buah</th>
                        <th>Berat</th>
                        <th>Harga @Kg</th>
                        <th>Harga Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allFruits ?
                        allFruits.map((fruit:any, index:number) => {
                            return <FruitRow 
                                key={fruit.id}
                                parentCallback={parentFunction} 
                                deleteFunction={handleDelete}
                                index={index+1} 
                                id={fruit.id} 
                                name={fruit.name} 
                                weight={fruit.weight} 
                                price={fruit.price} 
                                />
                        })
                        :
                        null
                    }
                </tbody>
            </table>
            <div className="border border-1 p-3 mt-5 w-75 mx-auto">
                <h3 className="text-center mb-5">Form Input</h3>
                <form className=''>
                    <div className="form-group">
                        <div className="row justify-content-between">
                            <div className="col">
                                <label>Nama</label>
                            </div>
                            <div className="col">
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(event) => onchangeName(event.target.value)} 
                                    className="form-control" 
                                    id="name" 
                                    aria-describedby="nameHelp"/>
                                <small id="nameHelp" className="form-text text-muted">Nama buah</small>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col">
                                <label>Berat</label>
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    value={weight} min={2} 
                                    onChange={(event) => onchangeWeight(Number(event.target.value))} 
                                    className="form-control" 
                                    id="weight" 
                                    aria-describedby="weightHelp"/>
                                <small id="weightHelp" className="form-text text-muted">Berat dalam satuan Kg (minimal 2 Kg)</small>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col">
                                <label>Harga</label>
                            </div>
                            <div className="col">
                                <input 
                                    type="number" 
                                    value={price} 
                                    onChange={(event) => onchangePrice(Number(event.target.value))} 
                                    className="form-control" 
                                    id="price" 
                                    aria-describedby="pricelHelp"/>
                                <small id="pricelHelp" className="form-text text-muted">Satuan harga per Kg buah</small>
                            </div>
                        </div>
                        </div>
                </form>
                <div className="d-flex justify-content-around">
                    <button type="submit" onClick={handleCreate} className="btn btn-success w-25">Create</button>
                    <button type="submit" onClick={handleEdit} className="btn btn-primary w-25">Update</button>
                </div>
            </div>
        </div>
    )
}
