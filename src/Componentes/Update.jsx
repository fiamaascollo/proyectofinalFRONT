import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Update = () =>{

    const navigate = useNavigate();

    const DATOS = import.meta.env.VITE_DATOS;

    console.log(DATOS);

    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [horario, setHorario] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setNombre(localStorage.getItem('Nombre'));
        setApellido(localStorage.getItem('Apellido'));
        setEmail(localStorage.getItem('Email'));
        setTelefono(localStorage.getItem('Telefono'));
        setHorario(localStorage.getItem('Horario'));
    }, [])

    const updateApiData = async () => {

        await axios.put(`${DATOS}/clientes/${id}`, {
            nombre,
            apellido,
            email,
            telefono,
            horario,
        }).then(() => {
            Swal.fire({
                title: '¡Edición exitosa!',
                text: 'Los datos del cliente han sido actualizados correctamente.',
                icon: 'success',
                confirmButtonText: 'Cerrar' 
            });
            navigate('/clientes');
        }).catch(error => {
            console.error('Error en la actualización:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al actualizar los datos del cliente.',
                icon: 'error',
                confirmButtonText: 'Cerrar' 
            });
        });
        
    }

    return (
        <div className="container mt-5">
            <div className="text-center m-5">
                <h1>Formulario de actualización de datos</h1>
            </div>
            <Form className='create-form'>
                <Form.Field>
                    <label>Nombre: </label>
                    <input 
                        placeholder='Nombre'
                        type= 'text'
                        name='nombre'
                        value= {nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Apellido: </label>
                    <input 
                        placeholder='Apellido'
                        type='text'
                        name='apellido'
                        value= {apellido}
                        onChange={(e)=>setApellido(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Email: </label>
                    <input 
                        placeholder='Email'
                        type='email'
                        name='email'
                        value= {email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Teléfono: </label>
                    <input 
                        placeholder='Número de teléfono'
                        type='number'
                        name='telefono'
                        value= {telefono}
                        onChange={(e)=>setTelefono(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Preferencia horaria:</label>
                    <select
                        value={horario}
                        onChange={(e) => setHorario(e.target.value)}
                        name="horario"
                    >
                        <option value="">Seleccioná una opción</option>
                        <option value="Mañana">Mañana (8:00 a 12:00 hs)</option>
                        <option value="Tarde">Tarde (12:00 a 18:00 hs)</option>
                        <option value="Noche">Noche (18:00 a 22:00 hs)</option>
                    </select>
                </Form.Field>

                <Button type='submit' onClick={updateApiData}>Actualizar Datos</Button>
            </Form>
        </div>
    )}


export default Update;