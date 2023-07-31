import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Chatbot from './Chatbot';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            usuario: '',
            contraseña: '',
            email: '',
        }
    });

    const navigate = useNavigate(); 

    const [error, setError] = useState('');

    const onSubmit = (data) => {
        const { usuario, contraseña } = data;

        if (usuario === 'volkswagen2023' && contraseña === 'autos123') {
            navigate('/clientes'); 
        } else {
            setError('Usuario o contraseña incorrectos');
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: 'Usuario o contraseña incorrectos.',
            });
        }
    };

    return (
        <>
        <Chatbot />
        <div className="container mt-5">
            <div className="text-center m-5">
                <h1>
                    Exclusivo para personal de <b>Volkswagen.</b>
                </h1>
                <h2>
                    Para ingresar a la base de datos de nuestros clientes, debes ingresar el usuario y contraseña.
                </h2>
                <h3>
                    Si desconoces esta información, hacé click en el asistente virtual. Él te indicará dónde podes encontrar dichos datos.
                </h3>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Usuario: </label>
                    <input
                        placeholder='Usuario'
                        type='text'
                        name='usuario'
                        {...register('usuario', {
                            required: true
                        })}
                    />
                </Form.Field>

                {errors.usuario && <p className="errores">El usuario es incorrecto.</p>}

                <Form.Field>
                    <label>Contraseña: </label>
                    <input
                        placeholder='Contraseña'
                        type='password'
                        name='contraseña'
                        {...register('contraseña', {
                            required: true
                        })}
                    />
                </Form.Field>

                {errors.contraseña && <p className="errores">La contraseña es incorrecta.</p>}

                <div className='centrar'>
                    <Button type='submit' className="positive">Ingresar</Button>
                </div>
            </Form> 
        </div>
        </>
    );
};

export default Login;