export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Fundamentos del diseño curricular y la instrucción en entornos virtuales',
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
        titulo:
          'Conceptos fundamentales: currículo y diseño instruccional     ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos fundamentales del diseño instruccional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Interrelación entre currículo y diseño instruccional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de diseño curricular para entornos virtuales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Componentes del currículo y su adaptación a la educación virtual',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Tendencias actuales en educación digital y su impacto en el diseño curricular',
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
        'Belloch, C. (S.f.). Diseño Instruccional. Obtenido de https://www.uv.es/bellochc/pedagogia/EVA4.pdf',
      link: 'https://www.uv.es/bellochc/pedagogia/EVA4.pdf',
    },
    {
      referencia:
        'UNESCO. (2016). Qué hace el currículo de calidad. Obtenido de UNESDOC Biblioteca Digital: https://unesdoc.unesco.org/ark:/48223/pf0000243975_spa',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000243975_spa',
    },
    {
      referencia:
        'González Bernal, M. I. (2006). Currículo basado en competencias: una experiencia en educación universitaria. Educación y Educadores , 9 (2), 95-117., 95-117. Obtenido de https://www.redalyc.org/pdf/834/83490209.pdf',
      link: 'https://www.redalyc.org/pdf/834/83490209.pdf',
    },
    {
      referencia:
        'Márquez-Fúnes, K., & Florez-Nisperuza, EP. (2021). Perspectivas curriculares y didácticas de las salidas de campo en las licenciaturas en Ciencias Sociales del Caribe. Entramado, 17(1), 136-148. Obtenido de https://doi.org/10.18041/1900-3803/entramado.1.7160',
      link: 'https://doi.org/10.18041/1900-3803/entramado.1.7160',
    },
    {
      referencia:
        'Martínez-Sum, S. d. (2019). Diseño, desarrollo e innovación del currículum en la. Proceedings of the Digital World Learning Conference CIEV. Obtenido de http://biblioteca.galileo.edu/tesario/bitstream/123456789/958/1/10.pdf',
      link:
        'http://biblioteca.galileo.edu/tesario/bitstream/123456789/958/1/10.pdf',
    },
    {
      referencia:
        'Navarro Reyes, Y. P. (2010). Una mirada a la planificación estratégica curricular. Telos, 12(2), 202-2016. Obtenido de https://www.redalyc.org/pdf/993/99315569006.pdf',
      link: 'https://www.redalyc.org/pdf/993/99315569006.pdf',
    },
    {
      referencia:
        'Luna Rizo, M., Ayala Ramírez, S., & Rosas Chávez, P. (2021). El Diseño Instruccional Elemento clave para la Innovación en el Aprendizaje: Modelos y Enfoques. Guadalajara. Obtenido de https://mta.udg.mx/sites/default/files/adjuntos/el_diseno_instruccional_interactivo.pdf',
      link:
        'https://mta.udg.mx/sites/default/files/adjuntos/el_diseno_instruccional_interactivo.pdf',
    },
    {
      referencia:
        'García-Pinilla, J. I., Pineda Miranda, B. A., Rodríguez-Jiménez, O. R., & Nicholls-Rodríguez, D. (2023). Desarrollo de competencias tecnológicas en docentes utilizando un modelo de diseño instruccional. Educación y Educadores, 26(1), e2613. https://doi.org/10.5294/edu.2023.26.1.3',
      link: 'https://doi.org/10.5294/edu.2023.26.1.3',
    },
    {
      referencia:
        'Lima, M. G. (2010). El modelo de diseño instruccional ASSURE aplicado a la educación a distancia. Tlatemoani: revista académica de investigación. Obtenido de https://dialnet.unirioja.es/servlet/articulo?codigo=7302838',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7302838',
    },
    {
      referencia:
        'Molenda, M. (2003). En busca del esquivo modelo ADDIE. Indiana. Obtenido de https://www.researchgate.net/publication/251405713_In_search_of_the_elusive_ADDIE_model',
      link:
        'https://www.researchgate.net/publication/251405713_In_search_of_the_elusive_ADDIE_model',
    },
    {
      referencia:
        'Gimeno Sacristán, J. (2010). ¿Qué significa el currículum? Sinéctica(34). Obtenido de https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-109X2010000100009',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-109X2010000100009',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (S.f). Currículo. Obtenido de https://www.mineducacion.gov.co/1621/article-79413.html#:~:text=Curr%C3%ADculo%20es%20el%20conjunto%20de,las%20pol%C3%ADticas%20y%20llevar%20a',
      link: 'https://www.mineducacion.gov.co/1621/article-79413.html',
    },
    {
      referencia:
        'Núñez, M. E. (2016). Tendencias en la personalización de los entornos de aprendizaje. Universidades, 66(70), 69-88. Obtenido de http://udualerreu.org/index.php/universidades/article/download/427/417',
      link:
        'http://udualerreu.org/index.php/universidades/article/download/427/417',
    },
    {
      referencia:
        'Viviana Betancur-Chicué, V. (2023). Características del Diseño de Estrategias de microaprendizaje en escenarios educativos: revisión sistemática. RIED-Revista Iberoamericana de Educación a Distancia, 201-222. Obtenido de https://revistas.uned.es/index.php/ried/article/view/34056',
      link: 'https://revistas.uned.es/index.php/ried/article/view/34056',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'Comportamientos y actitudes transversales a diferentes ámbitos de la actividad personal y laboral, integrando conocimientos, habilidades y actitudes.',
    },
    {
      termino: 'Contenidos',
      significado:
        'Saberes, informaciones, conceptos, procedimientos y actitudes que se seleccionan y organizan para facilitar el logro de los objetivos educativos.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de criterios, planes de estudio, programas, metodologías y procesos que contribuyen a la formación integral. También se refiere a las experiencias, actividades, materiales y métodos de enseñanza utilizados para alcanzar los fines de la educación.',
    },
    {
      termino: 'Diseño Instruccional',
      significado:
        'Proceso sistemático para desarrollar experiencias educativas de manera consistente y confiable, creando aprendizajes efectivos. Se ocupa de la planeación, preparación y diseño de recursos y ambientes necesarios para el aprendizaje.',
    },
    {
      termino: 'Entornos Virtuales de Aprendizaje (EVA)',
      significado:
        'Espacio educativo alojado en la web, conformado por herramientas informáticas que posibilitan la interacción didáctica.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso para controlar y reformular el proceso educativo, identificando el progreso de los estudiantes y mejorando la enseñanza.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Incorporación de elementos de diseño de juegos en contextos no lúdicos para aumentar la motivación y el compromiso.',
    },
    {
      termino: 'Metodología',
      significado:
        'Conjunto de estrategias, técnicas y actividades que se utilizan para desarrollar los contenidos y alcanzar los objetivos.',
    },
    {
      termino: 'Objetivos de Aprendizaje',
      significado:
        'Metas o propósitos que se pretenden alcanzar con el proceso educativo, expresando las competencias, conocimientos, habilidades, actitudes y valores a desarrollar.',
    },
    {
      termino: 'Resultados de Aprendizaje',
      significado:
        'Declaraciones expresas de lo que se espera que un estudiante conozca y demuestre al completar un programa académico.',
    },
  ],
}
