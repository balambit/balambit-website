export const chatSteps = [
  {
    messages: [{ side: "incoming", text: "Hola, ¿cuánto cuesta una limpieza?", time: "5:09 PM" }],
    patientAction: "El paciente pregunta por el precio de una limpieza.",
    aiAction: "Balambit detecta una intención comercial y prepara una respuesta inmediata.",
    businessImpact: "Tu clínica evita perder un lead por tardanza en la primera respuesta.",
    signals: [
      { title: "Detección", copy: "Lead nuevo identificado" },
      { title: "Canal", copy: "WhatsApp entrante" },
      { title: "Prioridad", copy: "Alta intención" },
    ],
    value: {
      title: "Atención comercial 24/7",
      copy: "Cada mensaje entrante puede ser atendido en segundos sin depender de que alguien esté disponible.",
    },
  },
  {
    messages: [
      { side: "incoming", text: "Hola, ¿cuánto cuesta una limpieza?", time: "5:09 PM" },
      {
        side: "outgoing",
        text: "Hola 😊 La limpieza tiene un costo de $800 MXN. ¿Te gustaría agendar tu cita ahora?",
        time: "5:09 PM",
        checks: true,
      },
    ],
    patientAction: "El paciente recibe una respuesta clara en el mismo canal.",
    aiAction: "Balambit responde con precio exacto y empuja a agenda directa.",
    businessImpact: "La conversación avanza a conversión en vez de quedarse en consulta.",
    signals: [
      { title: "Respuesta", copy: "2 segundos" },
      { title: "Mensaje", copy: "Precio + CTA" },
      { title: "Estado", copy: "Lead activo" },
    ],
    value: {
      title: "Más velocidad, más conversión",
      copy: "Resolver la duda y proponer el siguiente paso en un solo mensaje reduce fuga comercial.",
    },
  },
  {
    messages: [
      { side: "incoming", text: "Hola, ¿cuánto cuesta una limpieza?", time: "5:09 PM" },
      {
        side: "outgoing",
        text: "Hola 😊 La limpieza tiene un costo de $800 MXN. ¿Te gustaría agendar tu cita ahora?",
        time: "5:09 PM",
        checks: true,
      },
      { side: "incoming", text: "Quiero agendar", time: "5:10 PM" },
    ],
    patientAction: "El paciente expresa claramente que quiere una cita.",
    aiAction: "Balambit reclasifica el lead como oportunidad lista para cierre.",
    businessImpact: "Tu clínica identifica de inmediato que está frente a una conversión real, no solo interés general.",
    signals: [
      { title: "Intención", copy: "Agenda confirmada" },
      { title: "Lead", copy: "Calificado" },
      { title: "Fricción", copy: "Reducida a cero" },
    ],
    value: {
      title: "Menos fricción comercial",
      copy: "Balambit entiende el momento exacto en el que el lead está listo para avanzar.",
    },
  },
  {
    messages: [
      { side: "incoming", text: "Hola, ¿cuánto cuesta una limpieza?", time: "5:09 PM" },
      {
        side: "outgoing",
        text: "Hola 😊 La limpieza tiene un costo de $800 MXN. ¿Te gustaría agendar tu cita ahora?",
        time: "5:09 PM",
        checks: true,
      },
      { side: "incoming", text: "Quiero agendar", time: "5:10 PM" },
      {
        side: "outgoing",
        text: "Perfecto 😊 Tengo disponibilidad mañana a las 5:00 PM o el jueves a las 11:00 AM. ¿Cuál te funciona mejor?",
        time: "5:10 PM",
        checks: true,
      },
    ],
    patientAction: "El paciente recibe opciones concretas para elegir.",
    aiAction: "Balambit consulta disponibilidad y propone horarios listos para cierre.",
    businessImpact: "Tu clínica acelera el agendamiento sin intercambios innecesarios.",
    signals: [
      { title: "Disponibilidad", copy: "2 opciones listas" },
      { title: "Tiempo", copy: "Flujo continuo" },
      { title: "Objetivo", copy: "Cerrar cita" },
    ],
    value: {
      title: "Más citas, menos ida y vuelta",
      copy: "Ofrecer opciones concretas en el momento correcto aumenta la probabilidad de cierre.",
    },
  },
  {
    messages: [
      { side: "incoming", text: "Hola, ¿cuánto cuesta una limpieza?", time: "5:09 PM" },
      {
        side: "outgoing",
        text: "Hola 😊 La limpieza tiene un costo de $800 MXN. ¿Te gustaría agendar tu cita ahora?",
        time: "5:09 PM",
        checks: true,
      },
      { side: "incoming", text: "Quiero agendar", time: "5:10 PM" },
      {
        side: "outgoing",
        text: "Perfecto 😊 Tengo disponibilidad mañana a las 5:00 PM o el jueves a las 11:00 AM. ¿Cuál te funciona mejor?",
        time: "5:10 PM",
        checks: true,
      },
      { side: "incoming", text: "Mañana a las 5", time: "5:10 PM" },
      {
        side: "outgoing",
        text: "Listo ✅ Tu cita quedó agendada para mañana a las 5:00 PM. Te esperamos en la clínica. Si necesitas reprogramar, puedes escribirnos aquí mismo.",
        time: "5:11 PM",
        checks: true,
      },
    ],
    patientAction: "El paciente elige horario y recibe confirmación inmediata.",
    aiAction: "Balambit cierra la reserva y confirma la cita sin intervención humana.",
    businessImpact: "Tu clínica gana una cita confirmada y reduce carga operativa.",
    signals: [
      { title: "Resultado", copy: "Cita confirmada" },
      { title: "Operación", copy: "Sin seguimiento manual" },
      { title: "Negocio", copy: "Lead convertido" },
    ],
    value: {
      title: "Ingreso potencial capturado",
      copy: "Una conversación entrante se transformó en una oportunidad real de facturación para tu clínica.",
    },
  },
];
