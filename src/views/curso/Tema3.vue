<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Metodologías activas en educación virtual'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-12.col-xl-7
          .bg-morado-oscuro.p-4
            span.text-white Las metodologías activas transforman el rol del estudiante, de receptor pasivo a receptor activo, protagonista de su propio aprendizaje. En el contexto de la educación virtual, estas metodologías adquieren una relevancia particular, debido a que permiten superar algunas de las limitaciones inherentes a la distancia y fomentar un aprendizaje más profundo y significativo. Entre las metodologías activas más efectivas en entornos virtuales, se encuentran: el Aprendizaje Basado en Proyectos, el Aprendizaje colaborativo y el Aprendizaje experiencial.
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Aprendizaje Basado en Proyectos (ABP)")
              p El Aprendizaje Basado en Proyectos, es una metodología activa en la que los estudiantes trabajan de manera individual o en grupos, durante un período de tiempo extendido para investigar y responder a una pregunta, problema o desafío complejo, culminando en la creación de un producto o presentación final (Udax, 2023). En entornos virtuales, el ABP se implementa mediante el uso de plataformas colaborativas para la planificación y ejecución de proyectos, herramientas de comunicación en línea para la interacción del equipo, y recursos digitales para la investigación y la creación de los productos finales. Esta metodología ofrece múltiples beneficios, incluyendo el aumento de la motivación intrínseca de los estudiantes, el desarrollo de habilidades de pensamiento crítico, la resolución de problemas complejos y el trabajo en equipo, y la conexión del aprendizaje con contextos reales y auténticos.
            .div(titulo="Aprendizaje colaborativo")
              p El aprendizaje colaborativo es una metodología en la que los estudiantes trabajan juntos en grupos para lograr un objetivo de aprendizaje común, compartiendo ideas, recursos y responsabilidades (Illera, 2001) . En entornos virtuales, esta metodología se facilita mediante el uso de foros de discusión, salas de chat, documentos compartidos y plataformas de videoconferencia para la interacción y la colaboración. La asignación de roles específicos dentro de los grupos y el diseño de tareas que requieren la contribución de todos los miembros son estrategias clave para asegurar la efectividad del aprendizaje colaborativo en línea. Los beneficios de esta metodología incluyen el fomento del desarrollo de habilidades sociales y de comunicación, la promoción del pensamiento crítico y la resolución de problemas a través de la discusión y el debate, y la oportunidad para que los estudiantes aprendan de las diversas perspectivas de sus compañeros.
            .div(titulo="Aprendizaje experiencial")
              p El aprendizaje experiencial se centra en aprender, a partir de la experiencia directa y la reflexión sobre dicha experiencia. Según Pinto et al. (2017), citado por (Espinar Álava, 2020), este enfoque combina diversos métodos para potenciar las capacidades del estudiante mediante la profundización en sus vivencias. De acuerdo con estos autores:<br><br>El aprendizaje experiencial es la asociación de métodos que intentan acrecentar el potencial de los educandos a través de la profundización en su experiencia. Este aprendizaje operativo se manifiesta por mediación de cuatro elementos: experiencia real, que utiliza como sustento para el reconocimiento; introspección sobre la experiencia real y el reconocimiento para originar un supuesto de la nueva información; conformación de concepciones imprecisas y nociones básicas con razonamientos concretos asentados sobre conjeturas anteriores y el ensayo de los nuevos esquemas aplicados a nuevas experiencias que permitan solucionar problemas de la vida real.<br><br>En entornos virtuales, este tipo de aprendizaje puede llevarse a cabo mediante simulaciones interactivas que permiten experimentar con conceptos abstractos, laboratorios virtuales donde se practican habilidades en un entorno seguro, estudios de caso interactivos basados en problemas reales, así como experiencias inmersivas a través de realidad virtual o aumentada.<br><br>El aprendizaje experiencial facilita la aplicación del conocimiento en contextos prácticos, fomenta la reflexión profunda y permite extraer aprendizajes significativos de cada experiencia. Por ello, promueve una comprensión más duradera y relevante.
      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Estas metodologías activas comparten un principio común: "aprender haciendo". Se enfocan en involucrar al estudiante en actividades significativas que simulan situaciones reales. Por ejemplo:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Primero
                p.px-1.text-small.mb-0.text-center El Aprendizaje Basado en Proyectos propone resolver problemas complejos.
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Segundo
                p.px-1.text-small.mb-0.text-center El Aprendizaje colaborativo requiere trabajo en equipo para alcanzar objetivos comunes. 
            .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Tercero
                p.px-1.text-small.mb-0.text-center El Aprendizaje experiencial pone énfasis en la vivencia directa y la reflexión posterior.

      .row.bg-azul.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-12.col-xl-8.d-flex
          .my-auto
            span Cuando se aplican correctamente en ambientes virtuales, estas metodologías pueden mejorar la comprensión y la retención del conocimiento en comparación con enfoques más pasivos. No obstante, su implementación exige un diseño instruccional cuidadoso, con tareas bien estructuradas, instrucciones claras y un uso adecuado de las herramientas tecnológicas que promuevan la interacción y la colaboración.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto descriptivo de la imagen') 

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Asignar un proyecto o formar grupos en línea sin estructura ni guía puede resultar ineficaz. Por ello, es necesario que el docente planifique actividades con roles definidos, propicie interacciones significativas y aproveche las funcionalidades de las plataformas digitales.
          .d-flex.bg-morado.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Además de favorecer el aprendizaje académico, estas metodologías contribuyen al desarrollo de habilidades clave del siglo XXI, como la colaboración, la comunicación, el pensamiento crítico y la resolución de problemas. Estas competencias son altamente valoradas en el entorno profesional actual. 

      .row.mb-4
        .col-12.col-xl-8
          .bg-verde.p-4.mb-4
            span Participar en proyectos, trabajar con otros y reflexionar sobre la propia experiencia en entornos virtuales brinda a los estudiantes oportunidades para fortalecer estas habilidades en un ambiente seguro y de apoyo, preparándolos tanto para sus estudios futuros como para su vida laboral.
          span A continuación, observe en la siguiente tabla, cómo se relacionan diferentes metodologías activas con el rol del estudiante, el del docente, las herramientas utilizadas y los criterios de evaluación en cada caso: 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      
      p.mb-4 <b>Tabla 3.</b> Metodologías activas en educación virtual
      
      .tabla-a.mb-5
        table
          thead
            tr
              th.bg-morado-2.text-white.text-center Metodología activa
              th.bg-morado-2.text-white.text-center Roles del estudiante
              th.bg-morado-2.text-white.text-center Roles del docente
              th.bg-morado-2.text-white.text-center Herramientas tecnológicas utilizadas
              th.bg-morado-2.text-white.text-center Criterios de evaluación
          tbody
            tr
              td.text-bold.bg-morado-2-claro Aprendizaje Basado en Proyectos (ABP).
              td.bg-morado-2-claro.text-center Investigador, colaborador, creador, presentador, autoevaluador.
              td.bg-morado-2-claro.text-center Facilitador, guía, mentor, evaluador del proceso y del producto.
              td.bg-morado-2-claro.text-center Plataformas de gestión de proyectos (Trello, Asana), herramientas de colaboración en documentos (Google Docs, Microsoft Word Online), herramientas de presentación (PowerPoint, Prezi), herramientas de videoconferencia (Zoom, Meet), repositorios de recursos (bibliotecas digitales, bases de datos).
              td.bg-morado-2-claro.text-center Rúbricas que evalúan el proceso de investigación, la calidad del producto final, la colaboración, la presentación y la reflexión del estudiante.
            tr
              td.text-bold.bg-morado-2-claro Aprendizaje colaborativo.
              td.bg-morado-2-claro.text-center Participante activo, comunicador, responsable de su contribución, respetuoso de las ideas de los demás, constructor conjunto de conocimiento.
              td.bg-morado-2-claro.text-center Diseñador de la tarea colaborativa, facilitador de la interacción grupal, monitor del proceso, evaluador de la participación individual y del resultado grupal.
              td.bg-morado-2-claro.text-center Foros de discusión, salas de chat, documentos compartidos en tiempo real (Google Docs, Etherpad), plataformas de videoconferencia con funciones de trabajo en grupo, wikis colaborativas.
              td.bg-morado-2-claro.text-center Evaluación de la participación individual en el grupo, evaluación del producto final del grupo, autoevaluación y coevaluación entre los miembros del grupo.
            tr
              td.text-bold.bg-morado-2-claro Aprendizaje experiencial.
              td.bg-morado-2-claro.text-center Explorador, experimentador, observador, reflector, analizador, aplicador.
              td.bg-morado-2-claro.text-center Diseñador de la experiencia (simulación, caso, etc.), facilitador de la reflexión, guía en la conceptualización, evaluador de la comprensión y la aplicación.
              td.bg-morado-2-claro.text-center Software de simulación, laboratorios virtuales, plataformas de realidad virtual/aumentada, herramientas de creación de estudios de casos interactivos, diarios de reflexión en línea, portafolios digitales.
              td.bg-morado-2-claro.text-center Evaluación de informes de laboratorio o simulación, análisis de estudios de caso, diarios de reflexión, presentaciones basadas en la experiencia, demostración de habilidades prácticas.
    
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://polodelconocimiento.com/ojs/index.php/es/article/view/9021") Angamarca, M. M. H., Sagñay, S. E. A., Sánchez, M. C. T., & Vera, P. E. P. (2025). El Aprendizaje Basado en Proyectos (ABP) como Enfoque Pedagógico Innovador: Una Revisión Bibliográfica. Polo del Conocimiento, 10(2), 2035-2055.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/aWRC2vHLKss?si=r0lD8s5MeD3bwc69") [Vídeo] MiradorUniversitarioUNAM (2021). Evaluación para el aprendizaje en educación en línea | Temporada 3.
              
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
      

      p
      
      
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
