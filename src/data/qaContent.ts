// Q&A content reutilizable para servicios y ciudades
export interface QAItem {
  question: string;
  answer: string;
  category: string;
}

export const qaContent: QAItem[] = [
  {
    question: "¿Cuánto cuesta instalar placas solares en Puerto Rico?",
    answer: "El costo de un sistema solar en Puerto Rico varía según el tamaño de su propiedad y consumo eléctrico. Un sistema residencial típico oscila entre $12,000 y $30,000 antes de incentivos federales. Con el crédito federal del 30% (ITC), el costo neto puede reducirse significativamente. Además, muchos clientes califican para financiamiento sin pago inicial, permitiéndole comenzar a ahorrar desde el primer mes. El retorno de inversión típico en la isla es de 5-8 años, considerando los altos costos de LUMA Energy y la abundante radiación solar.",
    category: "costo"
  },
  {
    question: "¿Cuánto tiempo toma la instalación completa?",
    answer: "El proceso completo desde la consulta inicial hasta la activación del sistema toma aproximadamente 8-12 semanas en Puerto Rico. Esto incluye el levantamiento del sitio (1-2 días), diseño y aprobación del sistema (1-2 semanas), tramitación de permisos municipales y de LUMA (3-6 semanas), la instalación física (2-4 días dependiendo del tamaño), e inspección final y activación de net metering (1-2 semanas). En Kilowatt PR coordinamos todo el proceso para minimizar demoras y mantenerlo informado en cada etapa.",
    category: "proceso"
  },
  {
    question: "¿Qué garantías ofrecen en sus instalaciones?",
    answer: "Nuestras instalaciones incluyen garantías completas para su tranquilidad. Los módulos solares traen garantía del fabricante de 25-30 años en producción (mínimo 80% capacidad) y 10-12 años en defectos. Los inversores y baterías tienen garantía de 10 años (5 años en algunos modelos). La mano de obra de Kilowatt PR está garantizada por 3-5 años, cubriendo cualquier problema relacionado con la instalación. También ofrecemos soporte técnico continuo y planes de mantenimiento preventivo para maximizar la vida útil de su sistema. Todas nuestras garantías son por escrito y están respaldadas por nuestra reputación en la isla.",
    category: "garantias"
  },
  {
    question: "¿Necesito permisos especiales en Puerto Rico?",
    answer: "Sí, la instalación de un sistema solar en Puerto Rico requiere varios permisos. Necesitará un permiso de construcción del municipio donde está su propiedad (varía según cada alcaldía), un permiso eléctrico si el sistema modifica el panel principal, y la aprobación de LUMA Energy para interconexión y net metering. Como perito electricista certificado en Puerto Rico, Kilowatt PR maneja todo el proceso de permisos por usted: preparamos la documentación técnica, sometemos las solicitudes, coordinamos inspecciones y aseguramos el cumplimiento del Código Eléctrico Nacional y regulaciones locales. Este servicio está incluido en nuestras cotizaciones.",
    category: "permisos"
  },
  {
    question: "¿Cómo funciona el net metering con LUMA Energy?",
    answer: "El net metering es el programa que le permite enviar el exceso de energía solar a la red de LUMA y recibir créditos en su factura. Cuando sus placas producen más electricidad de la que consume, el excedente va a la red y su medidor gira hacia atrás. Los créditos acumulados se aplican automáticamente cuando consume más de lo que produce (noches, días nublados). En Puerto Rico, los créditos no caducan y se transfieren mes a mes. Kilowatt PR se encarga de todo el proceso de aplicación ante LUMA: desde el acuerdo de interconexión hasta la instalación del medidor bidireccional. El proceso toma 4-8 semanas una vez instalado el sistema.",
    category: "net-metering"
  },
  {
    question: "¿Las placas solares funcionan durante apagones?",
    answer: "Las placas solares por sí solas NO funcionan durante apagones por razones de seguridad (anti-islanding). Sin embargo, si integra un sistema de baterías de respaldo (como LFP o híbrido), usted tendrá electricidad durante los cortes. El sistema de batería almacena energía solar durante el día y la libera cuando la necesita, ya sea en la noche o durante apagones. Con un sistema híbrido correctamente dimensionado, puede mantener funcionando equipos esenciales (nevera, luces, ventiladores, internet, bomba de agua) por horas o días. Kilowatt PR diseña sistemas de respaldo personalizados según sus prioridades y presupuesto para garantizar resiliencia durante los frecuentes apagones en la isla.",
    category: "respaldo"
  },
  {
    question: "¿Qué mantenimiento requieren las placas solares?",
    answer: "Las placas solares requieren muy poco mantenimiento, pero la limpieza periódica es importante en Puerto Rico debido al polvo del Sahara, salitre costero y residuos orgánicos. Recomendamos limpiezas profesionales cada 3-6 meses para mantener la eficiencia óptima (la suciedad puede reducir producción hasta 20%). También sugerimos inspecciones anuales del inversor, conexiones eléctricas, estructura de montaje y sellado del techo. Los sistemas con baterías requieren verificación adicional de niveles y calibración. Kilowatt PR ofrece contratos de mantenimiento preventivo que incluyen limpieza, inspección, monitoreo remoto y reporte de producción. El mantenimiento adecuado garantiza máximo retorno de inversión durante los 25+ años de vida del sistema.",
    category: "mantenimiento"
  },
  {
    question: "¿Puedo financiar el sistema solar sin pago inicial?",
    answer: "Sí, existen varias opciones de financiamiento solar en Puerto Rico con $0 de pago inicial. Los préstamos solares funcionan similar a un auto: pagos mensuales fijos por 10-20 años con tasas competitivas (5-9% APR dependiendo crédito). En muchos casos, el pago mensual del préstamo es menor que el ahorro en su factura de LUMA, generando flujo de caja positivo desde el día uno. También puede considerar líneas HELOC si tiene equidad en su hogar. Kilowatt PR trabaja con múltiples instituciones financieras que ofrecen préstamos pre-aprobados para sistemas solares. Le ayudamos a comparar opciones y elegir el plan que maximice su ahorro a largo plazo. No tiene que pagar todo de contado para empezar a beneficiarse del sol.",
    category: "financiamiento"
  },
  {
    question: "¿Las baterías LFP son mejores que las de litio tradicionales?",
    answer: "Las baterías LFP (Litio-Ferro-Fosfato) son superiores a las baterías de litio tradicionales en varios aspectos críticos para Puerto Rico. Ofrecen mayor seguridad con química térmica estable (no se incendian ni explotan fácilmente), vida útil más larga (6,000-8,000 ciclos vs 3,000-5,000), mejor rendimiento en altas temperaturas (importante en clima tropical), y carga/descarga más rápida. Aunque son ligeramente más caras inicialmente, el costo por ciclo es menor a largo plazo. Las LFP son ideales para respaldo de apagones frecuentes y uso diario intensivo. Marcas como EG4, Sol-Ark y SimpliPhi usan química LFP. Kilowatt PR recomienda baterías LFP para la mayoría de instalaciones en la isla por su durabilidad y confiabilidad bajo condiciones boricuas.",
    category: "baterias"
  },
  {
    question: "¿Puedo integrar mi generador existente con el sistema solar?",
    answer: "Sí, es posible integrar su generador de gasolina o diésel con un sistema solar híbrido. Esta configuración crea un sistema de respaldo triple: primero usa energía solar durante el día, luego baterías en la noche o apagones, y finalmente el generador si las baterías se agotan en apagones prolongados. El sistema híbrido cambia automáticamente entre fuentes según disponibilidad y prioridad. Esto reduce dramáticamente el uso de combustible (y costos/ruido), extiende la vida del generador, y garantiza energía continua incluso en eventos climáticos extremos. Kilowatt PR tiene experiencia diseñando sistemas híbridos solar-batería-generador que maximizan eficiencia y resiliencia. Es la solución ideal para áreas rurales o propiedades con alta demanda de respaldo.",
    category: "hibrido"
  },
  {
    question: "¿Microinversores o inversor de string? ¿Cuál es mejor?",
    answer: "Ambos sistemas tienen ventajas según su situación. Los microinversores (Enphase IQ8) son ideales si su techo tiene sombreado parcial, múltiples orientaciones, o si quiere expandir el sistema gradualmente. Cada panel opera independientemente, maximizando producción individual y facilitando monitoreo granular. Son más caros pero ofrecen mayor flexibilidad y redundancia (si uno falla, los demás siguen trabajando). Los inversores de string (string inverter) son más económicos para techos sin sombra y orientación uniforme, ofrecen mayor eficiencia en condiciones ideales, y son más sencillos de mantener. En Kilowatt PR evaluamos su techo, presupuesto y prioridades para recomendar la tecnología óptima. Para instalaciones con baterías, típicamente usamos inversores híbridos avanzados como Sol-Ark o EG4.",
    category: "tecnologia"
  },
  {
    question: "¿Qué pasa si necesito ampliar mi sistema solar en el futuro?",
    answer: "Ampliar un sistema solar existente es totalmente posible y común en Puerto Rico, especialmente si su consumo aumenta (compra vehículo eléctrico, amplía la casa, agrega pool). Si instaló microinversores (Enphase), la expansión es muy sencilla: agregamos paneles y microinversores adicionales al sistema existente. Con inversores de string, debemos verificar que el inversor tenga capacidad para paneles adicionales; si no, se instala un segundo inversor o se actualiza a uno mayor. Es importante que el diseño inicial considere expansión futura si anticipa aumento en consumo. Kilowatt PR siempre diseña sistemas \"expansion-ready\" cuando es apropiado. Las ampliaciones generalmente no requieren nuevos permisos mayores si la capacidad total permanece dentro de límites residenciales. Consulte con nuestro equipo sobre opciones de escalabilidad.",
    category: "ampliacion"
  },
  {
    question: "¿Cuánto ahorro mensual puedo esperar realmente?",
    answer: "El ahorro mensual depende de su consumo actual, tarifas de LUMA, y tamaño del sistema solar. Un hogar promedio en Puerto Rico con factura de $200-300/mes puede reducirla 80-95% con un sistema correctamente dimensionado, ahorrando $160-285 mensuales. Casas con alto consumo ($400-600/mes) pueden ahorrar $350-550 mensualmente. El ahorro es inmediato una vez activado net metering. Factores que afectan el ahorro incluyen: orientación del techo, sombreado, mantenimiento de las placas, y patrones de consumo. Sistemas con baterías ofrecen ahorro adicional al evitar cargos por demanda pico. En Kilowatt PR creamos proyecciones de ahorro personalizadas basadas en sus facturas reales de LUMA y datos de radiación solar de su municipio. La mayoría de clientes recupera la inversión en 5-7 años y ahorra $40,000-80,000 durante la vida del sistema.",
    category: "roi"
  },
  {
    question: "¿Qué pasa con el sombreado parcial en mi techo?",
    answer: "El sombreado parcial reduce la producción solar, pero hay soluciones efectivas. Con inversores de string tradicionales, la sombra en un solo panel afecta todo el string (producción puede caer 40-60%). Con microinversores o optimizadores de potencia, cada panel funciona independientemente, minimizando el impacto del sombreado (pérdida típica 10-20%). En Kilowatt PR realizamos análisis de sombreado detallado con herramientas como drones y software de simulación solar durante el levantamiento inicial. Podemos recomendar: reubicación de paneles a áreas sin sombra, poda selectiva de árboles (si aplicable), uso de microinversores Enphase para maximizar producción, o montaje en suelo si el techo no es viable. Cada proyecto es único y optimizamos el diseño según las condiciones reales de su propiedad para garantizar ROI máximo.",
    category: "sombra"
  },
  {
    question: "¿Puedo instalar placas en techo de zinc o concreto?",
    answer: "Sí, instalamos sistemas solares en todo tipo de techos comunes en Puerto Rico: zinc (galvanizado), concreto (losacrete), tejas de arcilla, tejas de asfalto, y más. Cada material requiere técnicas de montaje específicas. Para techos de zinc usamos sistemas de riel con tornillos autorroscantes y sellado especializado para prevenir filtraciones. En concreto usamos anclajes químicos o expansivos dependiendo del grosor. Lo más importante es la evaluación estructural: el techo debe soportar peso adicional (2-4 lbs por pie cuadrado) y estar en buenas condiciones (sin óxido severo, filtraciones activas o daño estructural). Si hay problemas, recomendamos reparaciones antes de instalar. Kilowatt PR incluye sellado profesional del techo y garantía contra filtraciones relacionadas con penetraciones de montaje. Nuestros instaladores están certificados y tienen experiencia con todo tipo de estructuras boricuas.",
    category: "estructura"
  },
  {
    question: "¿Necesito actualizar mi panel eléctrico antes de instalar solar?",
    answer: "No siempre, pero es común en casas antiguas de Puerto Rico. Si su panel eléctrico principal es de menos de 100 amperios, está saturado de breakers, o tiene más de 30 años (modelos Federal Pacific o Zinsco), recomendamos actualización antes de instalar solar. Un panel moderno de 200 amperios es ideal para solar con baterías y carga de vehículos eléctricos. La actualización también mejora seguridad general de la casa y facilita inspecciones municipales. Como perito electricista, Kilowatt PR evalúa su panel durante el levantamiento inicial y le informa si necesita upgrade. Podemos coordinar la actualización como parte del proyecto solar completo, evitando múltiples visitas de inspectores. El costo de actualización de panel oscila $1,500-3,500 dependiendo de complejidad y distancia al medidor. Es una inversión que se recupera con el tiempo al permitir sistema solar más robusto y eficiente.",
    category: "electrico"
  },
  {
    question: "¿Los huracanes pueden dañar las placas solares?",
    answer: "Las placas solares modernas están diseñadas para resistir condiciones extremas, incluyendo huracanes categoría 4-5. Los módulos certificados pasan pruebas de resistencia a vientos de 140+ mph y impacto de granizo. El riesgo principal no son las placas en sí, sino objetos voladores (ramas, escombros de vecinos) y fallo estructural del techo. En Kilowatt PR usamos sistemas de montaje ingeniería-rated específicos para zonas de huracán, con anclajes reforzados y cálculos de carga de viento según código de Puerto Rico. Recomendamos seguro de propiedad que cubra el sistema solar (la mayoría de pólizas lo incluyen como mejora permanente). Históricamente, sistemas bien instalados han resistido huracanes Irma y María con mínimo daño. Mantenimiento preventivo (verificación de tornillos, condición de estructura) reduce riesgos. Aunque ningún sistema es 100% inmune a eventos catastróficos, la probabilidad de daño significativo es baja con instalación profesional.",
    category: "huracan"
  },
  {
    question: "¿Puedo cargar un vehículo eléctrico con mi sistema solar?",
    answer: "Absolutamente, y es una excelente manera de maximizar su inversión solar. Un vehículo eléctrico consume aproximadamente 300-500 kWh mensuales (dependiendo de millaje), equivalente a 3-5 kW adicionales en el sistema solar. Si planea comprar EV, debemos dimensionar el sistema para incluir esa carga extra desde el principio (o planificar expansión futura). Instalamos cargadores Nivel 2 (240V) que cargan el vehículo completamente en 4-8 horas, idealmente programados para aprovechar generación solar diurna. Con un sistema solar de 8-10 kW y baterías, puede cargar su EV prácticamente gratis usando el sol puertorriqueño. Esto elimina costos de gasolina ($200-400/mes) además del ahorro en electricidad residencial. Kilowatt PR coordina la instalación del cargador EV con el sistema solar para máxima eficiencia. Es la combinación perfecta para independencia energética total en Puerto Rico.",
    category: "ev-charging"
  },
  {
    question: "¿Qué es mejor: montaje en techo o en suelo (ground mount)?",
    answer: "La decisión depende de varios factores específicos de su propiedad. El montaje en techo es más común en Puerto Rico por limitaciones de terreno y seguridad, es generalmente más económico ($2,000-4,000 menos que suelo), y protege el sistema de vandalismo y animales. Sin embargo, requiere techo estructuralmente sólido y sin sombra excesiva. El montaje en suelo es ideal si tiene terreno disponible, el techo está comprometido (edad, material, orientación), o quiere evitar penetraciones. Permite orientación óptima, facilita mantenimiento y limpieza, y simplifica futuras expansiones. El costo es mayor por requerir estructuras Uni-Rack o similares y trabajo de zanja para cableado. Kilowatt PR evalúa ambas opciones durante levantamiento y recomienda la más costo-efectiva para su situación. Hemos instalado exitosamente sistemas en techo y suelo por toda la isla, incluyendo diseños híbridos (algunos paneles en techo, otros en suelo).",
    category: "montaje"
  },
  {
    question: "¿Puedo tener sistema solar completamente off-grid en Puerto Rico?",
    answer: "Sí, es posible pero requiere inversión significativamente mayor que un sistema conectado a red (grid-tied). Un sistema off-grid necesita banco de baterías sobredimensionado para cubrir 3-5 días de autonomía (en caso de días nublados consecutivos), array solar 30-50% mayor para recargar baterías y cubrir consumo diario, generador de respaldo para emergencias, y componentes adicionales (controladores de carga, sistema de gestión). El costo puede ser 2-3 veces mayor que sistema grid-tied equivalente. Es ideal para áreas remotas sin acceso a red eléctrica, o para clientes que buscan independencia energética total por razones filosóficas o de resiliencia extrema. En Kilowatt PR diseñamos sistemas off-grid personalizados calculando cargas críticas y patrones de consumo real. También ofrecemos sistemas \"grid-optional\" que pueden operar off-grid pero se conectan a LUMA para redundancia, lo mejor de ambos mundos.",
    category: "off-grid"
  }
];

// Funciones helper para filtrar Q&A
export const getQAByCategory = (category: string, limit?: number): QAItem[] => {
  const filtered = qaContent.filter(qa => qa.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getRandomQA = (count: number, excludeCategories: string[] = []): QAItem[] => {
  const available = qaContent.filter(qa => !excludeCategories.includes(qa.category));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};