<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Estrategias didácticas para la enseñanza mediada por TIC'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      
      p.mb-4 Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

      .row.bg-fondo-slider.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          figure
            .video
              iframe(width='560' height='315' src='https://www.youtube.com' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)

      .d-flex.bg-azul.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0 En la siguiente tabla, se presenta la estrategia didáctica, la herramienta para esa estrategia y los beneficios para el aprendizaje.

      p.mb-4 <b>Tabla 4.</b> Estrategia didáctica mediada por TIC

      .tabla-a.mb-5
        table
          thead
            tr
              th.bg-morado-2.text-white.text-center Estrategia didáctica mediada por TIC
              th.bg-morado-2.text-white.text-center Herramientas digitales asociadas
              th.bg-morado-2.text-white.text-center Beneficios para el aprendizaje
          tbody
            tr
              td.text-bold.bg-morado-2-claro Uso de recursos multimedia interactivos.
              td.bg-morado-2-claro.text-center Videos interactivos (H5P, Genially), simulaciones (PhET Interactive Simulators), presentaciones interactivas (Mentimeter, Nearpod), infografías interactivas.
              td.bg-morado-2-claro.text-center Presentación atractiva de la información, facilita la comprensión de conceptos complejos, promueve la participación activa.
            tr
              td.text-bold.bg-morado-2-claro Fomentar la comunicación y la colaboración en línea.
              td.bg-morado-2-claro.text-center Foros de discusión (Moodle Forum, Canvas Discussions), chats (Slack, Microsoft Teams), videoconferencias (Zoom, Google Meet), documentos colaborativos (Google Docs, Microsoft 365).
              td.bg-morado-2-claro.text-center Promueve la interacción entre estudiantes y con el instructor, facilita el aprendizaje social y la construcción conjunta de conocimiento, desarrolla habilidades de comunicación.
            tr
              td.text-bold.bg-morado-2-claro Implementación de actividades de aprendizaje autodirigido.
              td.bg-morado-2-claro.text-center Plataformas de aprendizaje en línea (Moodle, Coursera), recursos educativos abiertos (OER Commons), herramientas de autoevaluación (Quizizz, Kahoot!).
              td.bg-morado-2-claro.text-center Permite a los estudiantes aprender a su propio ritmo, fomentar la autonomía y la responsabilidad en el aprendizaje, facilitar la revisión y el repaso de los contenidos.
            tr
              td.text-bold.bg-morado-2-claro Utilización de plataformas de aprendizaje en línea (LMS).
              td.bg-morado-2-claro.text-center Moodle, Canvas, Blackboard, Schoology.
              td.bg-morado-2-claro.text-center Gestión centralizada de contenidos, actividades, comunicaciones y evaluaciones, seguimiento del progreso de los estudiantes, facilita la organización del curso.
            tr
              td.text-bold.bg-morado-2-claro Integración de herramientas de evaluación en línea.
              td.bg-morado-2-claro.text-center Cuestionarios en línea (Google Forms, SurveyMonkey), rúbricas digitales (Rubric Maker), herramientas de retroalimentación (Turnitin Feedback Studio), portafolios electrónicos (Mahara, Digication).
              td.bg-morado-2-claro.text-center Evaluación eficiente y oportuna del aprendizaje, proporciona retroalimentación detallada y personalizada, facilita el seguimiento del progreso individual y grupal.
            tr
              td.text-bold.bg-morado-2-claro Aplicación de la gamificación y el aprendizaje basado en juegos.
              td.bg-morado-2-claro.text-center Plataformas de gamificación (Classcraft, Rezzly), juegos educativos (Minecraft: Education Edition, Kahoot!), herramientas de creación de juegos (Construct 3, Unity).
              td.bg-morado-2-claro.text-center Aumenta la motivación y el compromiso, hace el aprendizaje más divertido e interactivo, fomenta la participación activa y la perseverancia.
            tr
              td.text-bold.bg-morado-2-claro Uso de Realidad Virtual y Realidad Aumentada.
              td.bg-morado-2-claro.text-center Software de creación de RV/RA (Unity, Unreal Engine), aplicaciones de RV/RA educativas (Google Expeditions, Merge Explorer), visores de RV (Oculus Quest, HTC Vive).
              td.bg-morado-2-claro.text-center Crea experiencias de aprendizaje inmersivas e interactivas, facilita la comprensión de conceptos abstractos, permite la exploración de entornos y objetos virtuales.

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=6770963") Sánchez, R. N. C., Duarte, J. E., & Morales, F. H. F. (2018). Estrategia didáctica, mediada por TIC, para mejorar las competencias lectoescritoras en estudiantes de primero de primaria. Saber, ciencia y libertad, 13(2), 237-249.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/Si_vinfCg9g?si=QL5rYr406NZ8ZWHC") [Vídeo] ICESI (2020). Aprendizaje basado en proyectos con mediación de las TIC: una experiencia de innovación docente.
              
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Enfoques Pedagógicos Innovadores',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes teorías del aprendizaje se centra en la formación de conexiones en redes?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Conductismo', esCorrecta: false },
            { id: 'b', texto: 'Cognitivismo', esCorrecta: false },
            { id: 'c', texto: 'Constructivismo', esCorrecta: false },
            { id: 'd', texto: 'Conectivismo', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El modelo pedagógico que traslada la instrucción directa fuera del aula se conoce como:',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprendizaje Basado en Proyectos',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Aprendizaje Colaborativo', esCorrecta: false },
            { id: 'c', texto: 'Aprendizaje Invertido', esCorrecta: true },
            { id: 'd', texto: 'Gamificación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué metodología activa se caracteriza por el trabajo de los estudiantes en un proyecto durante un período de tiempo extendido?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aprendizaje Colaborativo', esCorrecta: false },
            { id: 'b', texto: 'Aprendizaje Experiencial', esCorrecta: false },
            {
              id: 'c',
              texto: 'Aprendizaje Basado en Proyectos',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Gamificación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'La aplicación de elementos y mecánicas de juego en contextos educativos se denomina:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aprendizaje Colaborativo', esCorrecta: false },
            { id: 'b', texto: 'Aprendizaje Experiencial', esCorrecta: false },
            {
              id: 'c',
              texto: 'Aprendizaje Basado en Proyectos',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gamificación', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes estrategias didácticas se enfoca en el uso de foros de discusión y salas de chat?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de Recursos Multimedia Interactivos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomentar la Comunicación y la Colaboración en Línea',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Implementación de Actividades de Aprendizaje Autodirigido',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilización de Plataformas de Aprendizaje en Línea (LMS)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
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
