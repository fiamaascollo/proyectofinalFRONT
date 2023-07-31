import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../css/Clientes.css"
import Swal from 'sweetalert2';

const Clientes = () =>{

    const DATOS = import.meta.env.VITE_DATOS

    console.log(DATOS);

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data.personas)
        })
    }, [])

    //Pasar los datos para el update mediante el localstorage
    const setData = (data) => {
        let { _id, nombre, apellido, email, telefono, horario } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Apellido', apellido);
        localStorage.setItem('Email', email);
        localStorage.setItem('Telefono', telefono);
        localStorage.setItem('Horario', horario)
    }

    const getData = () =>{
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data.personas)
        })
    }  

    const onDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar los datos del cliente?',
            text: 'Al confirmar, no podrás recuperar la información eliminada.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${DATOS}/${id}`) 
                Swal.fire('Los datos del cliente han sido eliminados.', '', 'success');
                getData() 
            }
        });
    };

    console.log(apiData);

    return (
        <div className="container tabla">
            <div className="text-center m-5">
                <h1>
                    Página de clientes <b>Volkswagen.</b>
                </h1>
            </div>

            {/* tabla para mostrar a los clientes */}

                <Table singleLine>
                    <Table.Header>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Teléfono</Table.HeaderCell>
                        <Table.HeaderCell>Preferencia horaria</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {apiData.map((data)=>{
                            return (
                                <Table.Row key={data._id}>
                                    <Table.Cell>{data.nombre}</Table.Cell>
                                    <Table.Cell>{data.apellido}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.telefono}</Table.Cell>
                                    <Table.Cell>{data.horario}</Table.Cell>
                                    <Link to='/update'>
                                        <Table.Cell>
                                            <Button onClick={() => {
                                                setData(data)
                                                console.log('Dato actualizado')
                                                }}> Actualizar </Button>
                                        </Table.Cell>
                                    </Link>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data._id)}> Eliminar </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                        }
                    </Table.Body>
                </Table>
        </div>
    )
}

export default Clientes;