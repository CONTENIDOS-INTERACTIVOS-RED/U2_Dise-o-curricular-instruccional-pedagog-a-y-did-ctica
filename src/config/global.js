export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad:
      'Enfoques pedagógicos y didácticos en la innovación educativa',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teorías del aprendizaje aplicadas a entornos virtuales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfoques pedagógicos innovadores',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías activas en educación virtual',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias didácticas para la enseñanza mediada por TIC',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Roche, M. Y. (2011). Tecnología educativa: tendencia pedagógica de actualidad: educative technology: present-day pedagogical tendencies. Opuntia Brava, 3(4), 51-57.',
      link:
        'https://opuntiabrava.ult.edu.cu/index.php/opuntiabrava/article/view/469',
    },
    {
      referencia:
        'ProFuturo. (5 de abril de 2024). Modelos pedagógicos en la era digital. ProFuturo:',
      link:
        'https://profuturo.education/observatorio/enfoques/modelos-pedagogicos-en-la-era-digital/',
    },
    {
      referencia:
        'udax. (2023). Explorando los Enfoques Pedagógicos del siglo XXI: Transformaciones e Innovaciones Educativas. Pedagogía y Educación.',
      link:
        'https://udax.edu.mx/experiencia/pedagogia-y-educacion/explorando-los-enfoques-pedagogicos-del-siglo-xxi',
    },
    {
      referencia:
        'Éxito Educativo. (31 de mayo de 2023). Redefiniendo la educación: La importancia de los enfoques innovadores en tiempos de crisis. Información educativa y gestión:',
      link: 'https://exitoeducativo.net/importancia-enfoques-innovadores/',
    },
    {
      referencia:
        'Illera, J. L. (2001). Aprendizaje colaborativo en entornos virtuales. Anuario de psicología/The UB Journal of psychology, 63-76.',
      link:
        'https://www.raco.cat/index.php/AnuarioPsicologia/article/download/61669/88436',
    },
    {
      referencia:
        'Espinar Álava, E. M. (2020). El aprendizaje experiencial y su impacto en la educación actual. Revista cubana de educación superior, 39(3).',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S0257-43142020000300012&script=sci_arttext',
    },
    {
      referencia:
        'García-Valcárcel, A. &. (2017). Competencias del profesorado para el uso de las TIC en la enseñanza. Pixel-Bit. Revista de Medios y Educación (50), 109–124.',
      link: 'https://ri.conicet.gov.ar/handle/11336/67065',
    },
    {
      referencia:
        'Viñals Blanco, A. &. (2016). El rol del docente en la era digital. Revista Interuniversitaria de Formación del Profesorado, 03-114 , 2016.',
      link: 'https://www.redalyc.org/journal/274/27447325008/html/',
    },
    {
      referencia:
        'Cerezo-Santana, K. Y.-M.-M.-B. (2025). Impacto de la brecha digital en el proceso enseñanza-aprendizaje. MQRInvestigar, 9(1).',
      link: 'http://mqrinvestigar.com/2025/index.php/mqr/article/view/407',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje Basado en Proyectos (ABP)',
      significado:
        'Metodología activa en la que los estudiantes trabajan en un proyecto para investigar y responder a una pregunta o problema complejo.',
    },
    {
      termino: 'Aprendizaje Colaborativo',
      significado:
        'Metodología en la que los estudiantes trabajan juntos en grupos para lograr un objetivo de aprendizaje común.',
    },
    {
      termino: 'Aprendizaje Experiencial',
      significado:
        'Metodología que enfatiza el aprendizaje a través de la experiencia directa y la reflexión sobre esa experiencia.',
    },
    {
      termino: 'Aprendizaje Invertido (Flipped Learning)',
      significado:
        'Modelo pedagógico que traslada la instrucción directa fuera del aula y utiliza el tiempo de clase para actividades de aprendizaje activo y aplicación de conocimientos.',
    },
    {
      termino: 'Conectivismo',
      significado:
        'Teoría del aprendizaje que enfatiza la importancia de las conexiones en redes, la diversidad de opiniones y la capacidad de aprender y adaptarse en la era digital.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Rama de la pedagogía que se enfoca en las técnicas y métodos específicos de enseñanza para facilitar el aprendizaje en diferentes disciplinas y niveles educativos.',
    },
    {
      termino: 'Diseño Curricular Instructivo',
      significado:
        'Proceso sistemático para crear experiencias de aprendizaje efectivas y eficientes, que incluye el análisis de necesidades, la definición de objetivos, la selección de estrategias y recursos, y la evaluación de los resultados.',
    },
    {
      termino: 'Entorno Virtual de Aprendizaje (EVA)',
      significado:
        'Espacio en línea diseñado para facilitar la interacción entre estudiantes y profesores, así como el acceso a materiales y actividades de aprendizaje.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Uso de elementos y mecánicas de juego en contextos no lúdicos para aumentar la motivación, el compromiso y el aprendizaje.',
    },
    {
      termino: 'Innovación Educativa',
      significado:
        'Proceso deliberado y estratégico que busca optimizar el sistema educativo a través de la introducción de nuevas ideas, enfoques, métodos o tecnologías, con el objetivo de mejorar la calidad del aprendizaje y promover el desarrollo integral de los estudiantes.',
    },
    {
      termino: 'Metodología Activa',
      significado:
        'Enfoque pedagógico que involucra activamente a los estudiantes en el proceso de aprendizaje a través de tareas prácticas, la resolución de problemas y la colaboración.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'Ciencia de la educación que estudia los métodos de enseñanza y aprendizaje, así como los principios y teorías que los sustentan.',
    },
    {
      termino: 'Teoría del Aprendizaje',
      significado:
        'Conjunto de principios y modelos que explican cómo las personas adquieren, procesan y retienen el conocimiento y las habilidades.',
    },
  ],
}
