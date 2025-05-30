<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos fundamentales: currículo y diseño instruccional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 El concepto de <b>"currículo"</b> ha evolucionado significativamente, reflejando diversas perspectivas filosóficas, psicológicas y pedagógicas. En un sentido amplio, se entiende como el conjunto de saberes, habilidades y experiencias que una persona construye a lo largo de su vida, tanto en contextos educativos formales como en escenarios laborales y sociales. Sin embargo, en el ámbito de la educación formal, el currículo adquiere un significado más específico: se concibe como el plan estructurado que organiza los contenidos, objetivos, metodologías y criterios de evaluación implementados por una institución en el proceso de enseñanza-aprendizaje.
        .d-flex.bg-azul.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-9.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 En Colombia, el Ministerio de Educación Nacional lo define como “el conjunto de criterios, planes de estudio, programas, metodologías y procesos que contribuyen a la formación integral y a la construcción de la identidad cultural nacional, regional y local, incluyendo también los recursos humanos, académicos y físicos para poner en práctica las políticas y llevar a cabo la acción educativa” (Ministerio de Educación Nacional, s.f.). Esta definición resalta la complejidad y amplitud del currículo, que va más allá de los contenidos programáticos, para abarcar todos los elementos que configuran la experiencia educativa en su totalidad. 

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Diversos autores han ofrecido sus propias definiciones, enriqueciendo la comprensión del término. En este sentido, la UNESCO (2016, pág. 8), lo define como “una descripción de qué, por qué, cómo y cuándo, deberían aprender los estudiantes”, y destaca que su propósito es doble: por un lado, alcanzar resultados de aprendizaje significativos y valiosos para los estudiantes; y por otro, responder a diversas exigencias sociales, culturales y políticas formuladas por los gobiernos.
        .bg-amarillo.p-4(data-aos='fade-up')
          span El currículo también es definido como ese esfuerzo conjunto y planificado de toda escuela, destinado a conducir el aprendizaje de los alumnos hacia resultados de aprendizaje predeterminados. Por otra parte, Jonson (1967), citado por Stenhouse (1991), menciona que el currículo es una serie estructurada de objetivos de aprendizaje que se quieren lograr (González Bernal, 2006).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white Saylor y Alexander (1974), citado por (Márquez-Fúnes & Florez-Nisperuza, EP, 2021), ampliaron esta visión, considerando el currículo como un plan para proveer conjuntos de oportunidades de aprendizaje para lograr metas y objetivos específicos, relacionados con una población (Gimeno Sacristán, 2010).

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5

        .row
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-12.col-xl-9
            p.mb-4 Estas diversas definiciones revelan una evolución en la concepción del currículo, desde una perspectiva centrada en el contenido y la acción del profesor hacia una visión más holística que considera las experiencias del estudiante, los resultados del aprendizaje y el contexto sociocultural en el que se desarrolla la educación.
            .bg-verde.p-4(data-aos='fade-up')
              span En el ámbito específico de la educación virtual, el currículo adquiere nuevas dimensiones y requiere una adaptación cuidadosa de sus elementos esenciales. La Universidad Intercontinental de México define el currículo en la educación virtual como la organización de secuencias de aprendizaje con vistas a producir resultados deliberados y específicos de aprendizaje (Martínez-Sum, 2019). Esta definición enfatiza la intencionalidad y la especificidad de los resultados que se buscan alcanzar en un entorno en línea.

    .row.mb-4
      .col-12.col-xl-8
        .bg-azul.p-4(data-aos='fade-up')
          span El currículo virtual se configura como un conjunto de procesos que enmarcan la utilización de las nuevas tecnologías hacia el desarrollo de metodologías alternativas para el aprendizaje, permitiendo planificar de manera diferente, todas aquellas actividades encaminadas a satisfacer las necesidades de construcción de conocimiento. Algunos elementos fundamentales a considerar, para definir el diseño curricular de un entorno virtual, incluyen el modelo educativo, la pedagogía y la andragogía, adaptándose a las particularidades de los estudiantes en línea. La transición del currículo presencial al <i>e-currículum</i>, implica considerar bases socioculturales, psicopedagógicas y epistemológicas-profesionales, buscando un diseño flexible y dinámico en la sociedad del conocimiento. 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    p.mb-4 Los elementos claves del currículo virtual, son:

    .row.position-relative.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Modelo educativo
              p El currículo virtual integra tecnología para ofrecer metodologías de aprendizaje innovadoras, permitiendo una planificación educativa centrada en las necesidades de los estudiantes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Pedagogía
              p El modelo educativo en el currículo virtual, debe ser flexible y adaptarse a las características de los estudiantes, promoviendo un aprendizaje significativo y colaborativo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Andragogía
              p La pedagogía en el currículo virtual se enfoca en estrategias que fomentan  la participación activa y el desarrollo de habilidades críticas en los estudiantes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Adaptación estudiantes en línea
              p La andragogía es esencial en el currículo virtual, adaptando el aprendizaje a las necesidades y experiencias de los adultos, facilitando su proceso  educativo.
    .d-flex.bg-morado.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-18.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0 El currículo, en su esencia, se compone de una serie de elementos fundamentales que interactúan para guiar el proceso educativo. Para Arnaz (1981), citado por Navarro Reyes, 2010), “el currículo es un plan que norma y conduce explícitamente a un proceso concreto y determinante de enseñanza aprendizaje que se desarrolla en una institución educativa.
    
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Es un conjunto interrelacionado de conceptos, proposiciones, normas y acciones”. Para este plan, identificó cuatro elementos esenciales: los <b>objetivos curriculares</b>, el plan de estudio, las cartas descriptivas y el sistema de evaluación.
        .bg-amarillo.p-4(data-aos='fade-up')
          span Estos componentes proporcionan una estructura básica para la planificación e implementación de cualquier programa educativo. Otros autores amplían esta lista, incluyendo los contenidos, la metodología y los recursos didácticos como elementos curriculares claves. 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    p.mb-4 Los elementos esenciales en el currículo para educación virtual, son:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Objetivos")
            p Los objetivos definen las metas o propósitos que se pretenden alcanzar con el proceso educativo, expresando las competencias, los conocimientos, las habilidades, las actitudes y los valores que se espera que los estudiantes desarrollen. 
          .div(titulo="Contenidos")
            p Los contenidos son los saberes, las informaciones, los conceptos, los procedimientos y las actitudes que se seleccionan y se organizan para facilitar el logro de los objetivos educativos. 
          .div(titulo="Metodología")
            p La metodología comprende el conjunto de estrategias, técnicas y actividades que se utilizan para desarrollar los contenidos y alcanzar los objetivos. La evaluación se encarga de controlar y reformular el proceso educativo, identificando el progreso de los estudiantes y mejorando los procesos de enseñanza. 
          .div(titulo="Recursos didácticos")
            p Los recursos didácticos son los medios, los materiales y las herramientas que se emplean para apoyar y enriquecer la metodología. Desde una perspectiva del Diseño Universal para el Aprendizaje (DUA), los componentes curriculares principales se identifican como las metas, los métodos, los materiales y la evaluación, todos interrelacionados y orientados hacia el logro de los objetivos. Estos elementos, en su conjunto, responden a las preguntas fundamentales de la educación: ¿a quién educar?, ¿para qué educar?, ¿qué se aprende?, ¿cómo se aprende? y ¿para qué, qué y cómo evaluar?

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul.p-4(data-aos="fade-up")
        p.mb-0 El <b>"diseño instruccional"</b>, por su parte, se refiere al proceso sistemático de desarrollar experiencias educativas de manera consistente y confiable, creando experiencias de aprendizaje efectivas que conduzcan a la adquisición del conocimiento o habilidades deseadas. Reigeluth (1983), citado por (Belloch, s.f.), lo define como la disciplina interesada en prescribir métodos óptimos de instrucción para crear cambios deseados en los conocimientos y habilidades del estudiante.
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.bg-morado-claro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 El diseño instruccional es esencial para crear experiencias educativas más estructuradas, inclusivas y efectivas, respondiendo a las demandas de la educación moderna. Se ocupa de la planeación, la preparación y el diseño de los recursos y ambientes necesarios para que se lleve a cabo el aprendizaje. Su objetivo principal es facilitar el aprendizaje, brindando a los estudiantes las herramientas necesarias para adquirir nuevos conocimientos y habilidades de manera óptima.
        span Esta disciplina se ocupa de la planeación pedagógica y del diseño de los ambientes y recursos que propician el aprendizaje, brindando a los estudiantes herramientas que les permitan apropiarse de nuevos saberes de manera autónoma y significativa. Un diseño instruccional bien elaborado garantiza la alineación entre los objetivos del curso, las actividades de aprendizaje y los instrumentos de evaluación, contribuyendo al logro efectivo de los resultados de aprendizaje. En este sentido Gagné, Briggs y Wager (1974), citados por (Luna Rizo, Ayala Ramírez, & Rosas Chávez, 2021), mencionan que “el proceso instruccional es un <b>conjunto de eventos instruccionales</b> que diseñados de manera estratégica hacen más eficiente el proceso de aprendizaje”. Estos eventos se pueden ver en el siguiente esquema:

    p.mb-4 Los 9 eventos instruccionales de Gagné y Wager, son:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Ganar y controlar la atención")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Captar el interés del estudiante desde el inicio.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Utilizar estímulos visuales, preguntas provocadoras o actividades interactivas.
          .div(titulo="Informar al alumno de los resultados esperados")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Comunicar claramente los objetivos de aprendizaje.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Ayudar al estudiante a enfocar su atención y su esfuerzo.
          .div(titulo="Estimular el recuerdo de los prerrequisitos relevantes")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Activar conocimientos previos relacionados con el nuevo contenido.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Facilitar la conexión entre lo nuevo y lo ya aprendido.
          .div(titulo="Presentar los estímulos inherentes a la tarea de aprendizaje")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Introducir el contenido principal de manera clara y estructurada.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Usar ejemplos, explicaciones, modelos o representaciones visuales.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Ofrecer orientación para el aprendizaje")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Sugerir estrategias, pasos o métodos para abordar el contenido.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Brindar mapas conceptuales, guías o andamiajes.
          .div(titulo="Retroalimentar el aprendizaje")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Proporcionar información inmediata y específica sobre el desempeño.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Reforzar aciertos y corregir errores de manera constructiva.
          .div(titulo="Evaluar el rendimiento")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Comprobar si los estudiantes lograron los objetivos establecidos.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Utilizar evaluaciones formativas o sumativas.
          .div(titulo="Prever la transferibilidad")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Facilitar que el estudiante aplique lo aprendido en nuevos contextos.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Plantear tareas auténticas o problemas reales.
          .div(titulo="Asegurar la retención")
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Consolidar lo aprendido a largo plazo.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Reforzar mediante la repetición, la práctica espaciada y la revisión continua.

    .row.bg-morado-claro.bg-full-width.p-4.py-xl-0.mb-4
      
      .col-12.col-xl-8.d-flex
        p.my-auto.p-4.p-xl-0 En el contexto de la educación virtual, el diseño instruccional se concibe como un proceso sistemático y continuo que permite planificar, estructurar y desarrollar experiencias de aprendizaje, mediadas por tecnologías digitales. Este enfoque busca facilitar que los estudiantes alcancen los objetivos educativos mediante una organización pedagógica coherente, que incluye la selección adecuada de contenidos, actividades, recursos y estrategias de evaluación, considerando las particularidades del entorno virtual (García, 2023).
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Elementos fundamentales del diseño instruccional

    p.mb-4 Los elementos esenciales del diseño instruccional incluyen:

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-small.px-4.text-center.pb-2 La identificación de las necesidades de los estudiantes. 
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-small.px-4.text-center.pb-2 La definición clara de los objetivos de aprendizaje. 
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-62.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-small.px-4.text-center.pb-2 El diseño y desarrollo de contenidos relevantes. 
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-63.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-small.px-4.text-center.pb-2 La selección de estrategias didácticas apropiadas. 
          div.custom-image-card.rounded-8px
            img.mb-4(src='@/assets/curso/unidad/img-64.png', alt='Texto que describa la imagen')
            div.mb-4
              p.text-small.px-4.text-center.pb-2 La evaluación del desempeño académico. 

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3
        span Algunos enfoques también subrayan como componentes claves al estudiante, los objetivos, los métodos y la evaluación, consolidando así un enfoque integral y centrado en el aprendizaje. El diseño instruccional se sustenta en diversas teorías, entre ellas la teoría general de sistemas, la teoría de la comunicación, las teorías del aprendizaje (conductismo, cognitivismo y constructivismo) y los modelos conceptuales de instrucción como ADDIE o ASSURE (Molenda, 2003) o ASSURE (Lima, 2010).

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Un proceso de diseño instruccional efectivo, también exige el análisis de las características del contexto educativo, la definición precisa de competencias por desarrollar, la construcción de recursos significativos, así como la implementación de estrategias que favorezcan la participación activa del estudiante. Además, contempla la evaluación continua del aprendizaje y la retroalimentación como elementos clave para la mejora constante del proceso formativo. 
        span En suma, el diseño instruccional busca adaptar los contenidos y las metodologías a las necesidades, estilos de aprendizaje y contextos particulares de los estudiantes, promoviendo la autonomía, la motivación y la conexión interdisciplinaria. De esta manera, el estudiante no solo aprende, sino que transforma su manera de interactuar con el conocimiento.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Interrelación entre currículo y diseño instruccional

    p.mb-4 La interrelación entre currículo y diseño instruccional es esencial, sobre todo en entornos virtuales:

    .row.position-relative.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Primero
              p El diseño curricular representa el marco general, donde se definen los propósitos educativos, los planes de estudio, los contenidos y los métodos de evaluación.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen') 
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Segundo
              p El diseño instruccional, por su parte, traduce esa visión en estrategias pedagógicas concretas, organizando las actividades de aprendizaje, los recursos y las experiencias de interacción que permiten alcanzar los objetivos planteados.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen') 
    .d-flex.bg-verde.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-37.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0 Mientras el currículo establece el "qué", el "para qué" y el "con qué evaluar", el diseño instruccional responde al "cómo" llevarlo a cabo de manera efectiva. <b>Ambos enfoques no son independientes, sino complementarios.</b>

    .row.mb-5
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-morado-oscuro.p-4(data-aos='fade-up')
          span.text-white Una educación de calidad exige la integración armónica entre currículo e instrucción, de modo que la intención educativa se materialice en prácticas concretas y adaptadas a los contextos de aprendizaje. La colaboración entre diseñadores curriculares e instructores es fundamental para asegurar que los propósitos formativos se conviertan en experiencias de aprendizaje significativas, centradas en el estudiante y con impacto real en su desarrollo.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/comocitar.oa?id=54746291002") Reigeluth, CM, (2016). Teoría instruccional y tecnología para el nuevo paradigma de la educación. ROJO. Revista de Educación a Distancia, (50), 1-20.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/pdf/834/83411215.pdf") Chiappé. Laverde, A., (2008). Diseño instructivo: oficio, fase y proceso. Educación y Educadores, 11 (2), 229-239.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/RINvSdoxkls?si=IPQGdDweuWDYJPd9") [Vídeo] Cerebrote (2021, 2 de diciembre) Que es el diseño instruccional de cursos virtuales o digitales.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
