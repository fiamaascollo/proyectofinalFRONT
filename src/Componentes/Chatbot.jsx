import React, { useState } from 'react';
import '../css/Chatbot.css'; 

const Chatbot = () => {
  // Estado para controlar la ventana flotante
  const [showChatbot, setShowChatbot] = useState(false);
  // Estado para almacenar la pregunta seleccionada por el usuario
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Preguntas predefinidas y sus respuestas
  const questionsAndAnswers = [
    {
      question: '¿Cómo me contacto con Atención al Cliente?',
      answer: 'Podés llamarnos al 0800-888-8338 o completar el formulario de la página "Contacto" y serás contactado a la brevedad en el horario que nos indiques.'
    },
    {
      question: '¿Cuáles son los concesionarios oficiales de Volkswagen?',
      answer: 'En la página "Concesionarios" podrás encontrar tu punto de venta o servicio oficial VW más cercano o de preferencia.'
    },
    {
      question: '¿Puedo entregar mi auto usado como parte de pago?',
      answer: 'Las operaciones de compraventa de unidades son realizadas por los concesionarios Oficiales. La eventual operación se materializa en un acuerdo realizado entre el Concesionario y el Cliente en cuyos términos y condiciones VWAR no tiene injerencia ni intervención alguna. Solicitamos te pongas en contacto con el concesionario oficial.'
    },
    {
      question: '¿Cómo puedo agendar un servicio de mantenimiento para mi VW?',
      answer: 'Agendá un turno para tu próximo service desde tu Smartphone o VW Play.'
    },
    {
      question: '¿Cómo puedo acceder al apartado "Login"?',
      answer: 'Si sos asesor, podes obtener el usuario y contraseña desde la parte de "observaciones" del Drive que habilitó el profesor Pastor para los proyectos. Al acceder con el usuario y contraseña correspondientes, vas a poder visualizar la base de datos de los clientes a contactar, donde podrás actualizar o eliminar la información de los mismos.'
    },
  ];

  // Función para mostrar u ocultar la ventana flotante
  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
    // Reiniciar la pregunta seleccionada al cerrar la ventana flotante
    setSelectedQuestion(null);
  };

  // Función para mostrar la respuesta correspondiente a la pregunta seleccionada
  const showAnswer = (answer) => {
    setSelectedQuestion(answer === selectedQuestion ? null : answer);
  };

  return (
    <div>
      {/* Icono del chatbot para abrir la ventana flotante */}
      <button
        className="chatbotIcon" 
        onClick={toggleChatbot}
      >
        🤖
      </button>

      {/* Ventana flotante del chatbot */}
      {showChatbot && (
        <div className="chatbotContainer"> 
          {/* Botón para cerrar la ventana flotante */}
          <button
            className="closeButton" 
            onClick={toggleChatbot}
          >
            &lt; 
          </button>

          <h3 className="chatbotTitle">¡Hola! Soy Volksbot, el asistente virtual.</h3>
          <p className="chatbotSubtitle">Estas son un par de dudas con las que puedo ayudarte, haciendo click sobre las mismas obtendras la respuesta que necesitas.</p>

          {/* Preguntas predefinidas */}
          {questionsAndAnswers.map((qa, index) => (
            <div key={index} className="question" onClick={() => showAnswer(qa.answer)}>
              <strong>Usuario:</strong> {qa.question}
              {selectedQuestion === qa.answer && (
                <div className="answer">
                  <strong>Volksbot:</strong> {qa.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chatbot;


