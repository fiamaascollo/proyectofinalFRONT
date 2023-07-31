import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';  
import Swal from 'sweetalert2'; 
import Chatbot from './Chatbot';

const Contacto = () =>{

    const URL = import.meta.env.VITE_URL;

    console.log(URL);

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            horario: ''
        }
    });
    
    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos)
            e.target.reset();
            Swal.fire({
                title: '¡Muchas gracias!',
                text: 'Tus datos han sido enviados exitosamente.',
                icon: 'success',
                confirmButtonText: 'Cerrar'
            }) 
            console.log(URL);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
        <Chatbot />
        <div className="container mt-5">
            <div className="text-center m-5">
                <h1>
                    Para tu comodidad, ¡nosotros te contactamos a vos!
                </h1>
                <h3>
                    Dejanos tus datos y preferencia horaria, un asesor se pondrá en contacto con vos a la brevedad.
                </h3>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Nombre: </label>
                    <input 
                        placeholder='Nombre'
                        type= 'text'
                        name='nombre'
                        {...register('nombre', 
                            {
                                required: true,
                                maxLength: 40
                            })
                        }
                    />
                </Form.Field>
                {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 40 caracteres.</p>}

                <Form.Field>
                    <label>Apellido: </label>
                    <input 
                        placeholder='Apellido'
                        type='text'
                        name='apellido'
                        {...register('apellido', 
                            {
                                required: true,
                                maxLength: 40
                            })
                        }
                    />
                </Form.Field>
                {errors.apellido && <p className="errores">El apellido es obligatorio y tiene un máximo de 40 caracteres.</p>}

                <Form.Field>
                    <label>Email: </label>
                    <input 
                        placeholder='Email'
                        type='email'
                        name='email'
                        {...register('email', 
                        {
                            required: true,
                            // eslint-disable-next-line no-useless-escape
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })
                        }
                    />
                </Form.Field>
                {errors.email && <p className="errores">El email es obligatorio.</p>}

                <Form.Field>
                    <label>Telefono: </label>
                    <input 
                        placeholder='Número de teléfono'
                        type='number'
                        name='telefono'
                        {...register('telefono',
                        {
                            required: true,
                            maxLength: 15
                        })
                        }   
                    />
                </Form.Field>
                {errors.password && <p className="errores">No podes utilizar letras en esta casilla.</p>}

                <Form.Field>
                    <label>Preferencia horaria:</label>
                    <select
                        {...register('horario', {
                        required: true,
                        })}
                    >
                        <option value="">Seleccioná una opción</option>
                        <option value="Mañana">Mañana (8:00 a 12:00 hs)</option>
                        <option value="Tarde">Tarde (12:00 a 18:00 hs)</option>
                        <option value="Noche">Noche (18:00 a 22:00 hs)</option>
                    </select>
                </Form.Field>
                {errors.horario && (<p className="errores">Es necesario que indiques tu preferencia horaria para poder comunicarnos contigo.</p>
)}


                <div className='centrar'>
                        <Button.Group>
                            <Button type='button' onClick={() => reset()} primary>Limpiar Formulario</Button>
                            <Button.Or />
                            <Button type='submit' positive>Enviar Datos</Button>
                        </Button.Group>
                </div>
            </Form>
        </div>
        </>
    )}


export default Contacto;