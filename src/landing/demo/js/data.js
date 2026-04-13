export const chatData = {
  es: [
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
  ],
  en: [
    {
      messages: [{ side: "incoming", text: "Hi, how much is a cleaning?", time: "5:09 PM" }],
      patientAction: "The patient asks for the price of a cleaning.",
      aiAction: "Balambit detects business intent and prepares an immediate response.",
      businessImpact: "Your clinic avoids losing a lead due to delay in the first response.",
      signals: [
        { title: "Detection", copy: "New lead identified" },
        { title: "Channel", copy: "Incoming WhatsApp" },
        { title: "Priority", copy: "High intent" },
      ],
      value: {
        title: "24/7 commercial attention",
        copy: "Every incoming message can be handled in seconds without depending on someone being available.",
      },
    },
    {
      messages: [
        { side: "incoming", text: "Hi, how much is a cleaning?", time: "5:09 PM" },
        {
          side: "outgoing",
          text: "Hello 😊 A cleaning costs $80 USD. Would you like to schedule your appointment now?",
          time: "5:09 PM",
          checks: true,
        },
      ],
      patientAction: "The patient receives a clear response on the same channel.",
      aiAction: "Balambit responds with the exact price and pushes for direct scheduling.",
      businessImpact: "The conversation moves to conversion instead of just an inquiry.",
      signals: [
        { title: "Response", copy: "2 seconds" },
        { title: "Message", copy: "Price + CTA" },
        { title: "Status", copy: "Active Lead" },
      ],
      value: {
        title: "Greater speed, more conversion",
        copy: "Answering the question and proposing the next step in one message reduces sales leakage.",
      },
    },
    {
      messages: [
        { side: "incoming", text: "Hi, how much is a cleaning?", time: "5:09 PM" },
        {
          side: "outgoing",
          text: "Hello 😊 A cleaning costs $80 USD. Would you like to schedule your appointment now?",
          time: "5:09 PM",
          checks: true,
        },
        { side: "incoming", text: "I want to schedule", time: "5:10 PM" },
      ],
      patientAction: "The patient clearly expresses they want an appointment.",
      aiAction: "Balambit reclassifies the lead as an opportunity ready for closing.",
      businessImpact: "Your clinic immediately identifies a real conversion, not just general interest.",
      signals: [
        { title: "Intent", copy: "Booking confirmed" },
        { title: "Lead", copy: "Qualified" },
        { title: "Friction", copy: "Reduced to zero" },
      ],
      value: {
        title: "Less commercial friction",
        copy: "Balambit understands the exact moment when the lead is ready to move forward.",
      },
    },
    {
      messages: [
        { side: "incoming", text: "Hi, how much is a cleaning?", time: "5:09 PM" },
        {
          side: "outgoing",
          text: "Hello 😊 A cleaning costs $80 USD. Would you like to schedule your appointment now?",
          time: "5:09 PM",
          checks: true,
        },
        { side: "incoming", text: "I want to schedule", time: "5:10 PM" },
        {
          side: "outgoing",
          text: "Perfect 😊 I have availability tomorrow at 5:00 PM or Thursday at 11:00 AM. Which one works better for you?",
          time: "5:10 PM",
          checks: true,
        },
      ],
      patientAction: "The patient receives concrete options to choose from.",
      aiAction: "Balambit checks availability and proposes slots ready for closing.",
      businessImpact: "Your clinic speeds up scheduling without unnecessary exchanges.",
      signals: [
        { title: "Availability", copy: "2 options ready" },
        { title: "Time", copy: "Continuous flow" },
        { title: "Objective", copy: "Book appointment" },
      ],
      value: {
        title: "More appointments, less back and forth",
        copy: "Offering concrete options at the right time increases the closure probability.",
      },
    },
    {
      messages: [
        { side: "incoming", text: "Hi, how much is a cleaning?", time: "5:09 PM" },
        {
          side: "outgoing",
          text: "Hello 😊 A cleaning costs $80 USD. Would you like to schedule your appointment now?",
          time: "5:09 PM",
          checks: true,
        },
        { side: "incoming", text: "I want to schedule", time: "5:10 PM" },
        {
          side: "outgoing",
          text: "Perfect 😊 I have availability tomorrow at 5:00 PM or Thursday at 11:00 AM. Which one works better for you?",
          time: "5:10 PM",
          checks: true,
        },
        { side: "incoming", text: "Tomorrow at 5", time: "5:10 PM" },
        {
          side: "outgoing",
          text: "Done ✅ Your appointment is scheduled for tomorrow at 5:00 PM. We look forward to seeing you at the clinic. If you need to reschedule, you can message us right here.",
          time: "5:11 PM",
          checks: true,
        },
      ],
      patientAction: "The patient chooses a time and receives immediate confirmation.",
      aiAction: "Balambit closes the reservation and confirms the appointment without human intervention.",
      businessImpact: "Your clinic gets a confirmed appointment and reduces operational load.",
      signals: [
        { title: "Result", copy: "Appointment confirmed" },
        { title: "Operation", copy: "No manual follow-up" },
        { title: "Business", copy: "Lead converted" },
      ],
      value: {
        title: "Potential revenue captured",
        copy: "An incoming conversation was transformed into a real billing opportunity for your clinic.",
      },
    },
  ],
};
