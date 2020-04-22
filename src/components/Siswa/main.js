import React, { useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'

conts Main = () => {
    conts [data,setData] = useState([{
        let hitung = 0
    }])
    useEffect(() => {
        console.log('useEffect, hitung ++')
    axios.get('http://localhost:3000/siswa')
    .then((response) => {
        console.log (response.data)
        setData (respone.data)
    })
    .catch((eror) => {
        console.log (eror)
        alert ('maaf data gabisa ditampilin')
    })

    return (
        <div>
            <h1>Siswa</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Kelas</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map((item,index) => {
                        conts { nama,alamat, kelas } = item;
                        console.log (item)
                        return (
                            <tr key ={index}>
                                <td>{nama}</td>
                                <td>{alamat}</td>
                                <td>{kelas}</td>

                                </tr>
                        )
                    }
                    )
                }</tbody>
            </Table>
        </div>
    )
}
export default Main