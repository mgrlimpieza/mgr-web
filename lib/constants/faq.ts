export type FaqItem = {
  question: string;
  answer: string;
};

// TODO: confirmar/ajustar el contenido definitivo de cada respuesta con el cliente.
export const faqItems: FaqItem[] = [
  {
    question: "¿Trabajan fines de semana y feriados?",
    answer:
      "Sí, adaptamos los horarios del servicio a las necesidades de cada cliente, incluyendo fines de semana y feriados cuando el proyecto lo requiere.",
  },
  {
    question: "¿El personal está asegurado?",
    answer:
      "Sí, todo nuestro personal cuenta con la cobertura correspondiente, garantizando tranquilidad y respaldo durante la prestación del servicio.",
  },
  {
    question: "¿Proveen los productos e insumos de limpieza?",
    answer:
      "Sí, incluimos productos, insumos y maquinaria profesional dentro de nuestros servicios, salvo que se acuerde lo contrario con el cliente.",
  },
  {
    question: "¿Hay un mínimo de contrato o pueden ser servicios puntuales?",
    answer:
      "Ofrecemos tanto contratos de servicio continuo como trabajos puntuales, según lo que necesite su empresa o evento.",
  },
  {
    question: "¿En cuánto tiempo responden una solicitud de cotización?",
    answer:
      "Nos contactamos a la brevedad tras recibir la solicitud, generalmente dentro de las 24 horas hábiles.",
  },
  {
    question: "¿En qué zonas trabajan?",
    answer: "Brindamos cobertura en Montevideo y Área Metropolitana.",
  },
];
