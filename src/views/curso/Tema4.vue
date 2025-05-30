<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Tendencias actuales en educación digital y su impacto en el diseño curricular'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-12.col-xl-7
          .bg-morado-oscuro.p-4(data-aos='fade-up')
            span.text-white El campo de la educación digital se encuentra en constante evolución, impulsado por los avances tecnológicos y las nuevas comprensiones sobre cómo aprenden las personas. Varias tendencias actuales están teniendo un impacto significativo en la planificación y el diseño curricular para entornos virtuales. Entre estas tendencias destacan el aprendizaje personalizado, el microaprendizaje, la gamificación y el uso de la inteligencia artificial.
        .col-5.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
        .col-12.col-xl-10
          .bg-verde-claro.p-4(data-aos='fade-up')
            span El <b>aprendizaje personalizado</b> se centra en adaptar las experiencias de aprendizaje a las necesidades, preferencias y estilos de aprendizaje individuales de cada estudiante. En los entornos virtuales, esta tendencia se facilita mediante el uso de plataformas adaptativas que pueden ajustar el contenido y el ritmo de la instrucción en función del progreso del estudiante. 
      .row.mb-4
        .col-12.col-xl-10
          .bg-verde.p-4(data-aos='fade-up')
            span En esta tendencia, requiere de la flexibilización curricular y de la “desescolarización” de los procesos didácticos, lo que supone ruptura con las tareas predefinidas, productos predeterminados, actividades y las estrategias y recursos decididos de antemano (Núñez, 2016). Esto conlleva a los diseñadores educativos a replantearse la forma en que se vienen diseñando los procesos educativos y empezar a buscar otras estrategias.
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
          
      p.mb-4 El <b>microaprendizaje</b> puede ser una estrategia para facilitar el aprendizaje personalizado en entornos virtuales, permitiendo a los alumnos elegir el contenido más relevante para sus necesidades. La provisión de apoyo y guía que disminuye gradualmente a medida que los estudiantes adquieren experiencia también se alinea con los principios del aprendizaje personalizado.

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Primer tema
                p Es un enfoque orientado a la actividad y capaz de proporcionar aprendizaje en partes pequeñas (Skalka et al., 2021), lo que permite una rotación regular de microcontenidos y microactividades; estos autores especifican que el microcontenido suele presentarse como texto breve, a veces enriquecido con imágenes, tablas, diagramas o códigos fuente, mientras que las microactividades requieren interacciones del usuario (Viviana Betancur-Chicué, 2023).
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Segundo tema
                p El <b>microaprendizaje</b> implica la entrega de contenido educativo en pequeñas unidades o "píldoras" enfocadas. Esta tendencia reconoce que los estudiantes a menudo tienen tiempo limitado y prefieren consumir información de manera rápida y eficiente. En el diseño curricular virtual, el microaprendizaje se puede implementar a través de videos cortos, infografías, cuestionarios interactivos y otros formatos concisos que permiten a los estudiantes aprender a su propio ritmo y en momentos diversos.

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.bg-morado-claro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-54.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 La <b>gamificación</b> consiste en la incorporación de elementos de diseño de juegos en contextos no lúdicos, como la educación, con el objetivo principal de maximizar el disfrute y el compromiso de los estudiantes, capturando su interés e inspirándolos a continuar aprendiendo. Al introducir elementos que hacen que el aprendizaje sea más interactivo y gratificante, la gamificación busca fomentar la motivación intrínseca, lo que lleva a una participación más activa y a una mayor probabilidad de que los estudiantes alcancen los objetivos de aprendizaje.
          span La gamificación no se trata simplemente de hacer que el aprendizaje sea divertido, sino de utilizar los principios que hacen que los juegos sean atractivos para mejorar la experiencia educativa y los resultados del aprendizaje. 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Elementos claves del diseño de juegos aplicables a la educación virtual
            p.mb-5(data-aos="fade-up") La incorporación de elementos de diseño de juegos en entornos educativos virtuales ha demostrado ser una estrategia eficaz para potenciar la motivación y el compromiso de los estudiantes. En el PDF Elementos claves del diseño de juegos aplicables a la educación virtual, se analizan recursos como los sistemas de puntos, insignias, desafíos, narrativas y tablas de clasificación, que permiten transformar el proceso de aprendizaje en una experiencia más dinámica y significativa. Este enfoque gamificado fomenta la participación activa, el logro de metas y la conexión emocional con los contenidos.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_juegos_aplicables.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Elementos claves del diseño de juegos aplicables a la educación virtual

      .row.mb-4
        .col-12.col-xl-9
          h2 Desafíos y consideraciones importantes al implementar la gamificación 
          p.mb-4 Si bien la gamificación ofrece numerosos beneficios potenciales para el diseño curricular virtual, su implementación exitosa no está exenta de desafíos y requiere una cuidadosa consideración de varios factores.
          .bg-amarillo.p-4(data-aos='fade-up')
            span Uno de los desafíos principales es asegurar que los elementos del juego estén alineados de manera efectiva con los objetivos de aprendizaje del curso. El objetivo de la gamificación debe ser mejorar el aprendizaje, no simplemente entretener a los estudiantes. Si los elementos del juego no están intrínsecamente ligados al contenido educativo, pueden terminar distrayendo a los estudiantes del material principal y comprometiendo los resultados del aprendizaje.
        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          h2 El uso de la Inteligencia Artificial (IA)
          .bg-verde.p-4(data-aos='fade-up')
            span La Inteligencia Artificial (IA) se ha definido en el contexto educativo como el uso de algoritmos inteligentes para apoyar y mejorar los procesos de enseñanza y aprendizaje. Esta tecnología emergente está encontrando aplicaciones en diversas áreas de la educación digital, ofreciendo el potencial de transformar la manera en que se diseñan, se entregan y se experimentan los cursos virtuales. La IA tiene la capacidad de personalizar el aprendizaje a una escala sin precedentes, automatizar tareas que consumen tiempo para los educadores y ofrecer nuevas formas de interacción y retroalimentación para los estudiantes. A medida que la tecnología de la IA continúa avanzando, su integración en el diseño curricular virtual se vuelve cada vez más relevante.

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Contribución de la IA a la generación automatizada de contenido educativo
            p.mb-5(data-aos="fade-up") La Inteligencia Artificial ha comenzado a desempeñar un papel transformador en el ámbito educativo, especialmente en el diseño curricular virtual. En el PDF Contribución de la IA a la generación automatizada de contenido educativo, se examinan las herramientas y estrategias basadas en IA que permiten crear materiales personalizados, ofrecer retroalimentación inmediata y adaptar la experiencia de aprendizaje a las necesidades de cada estudiante. Este recurso también aborda sus ventajas, limitaciones y retos éticos, brindando una visión crítica sobre su aplicación en entornos digitales.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_generacion_automatizada.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Contribución de la IA a la generación automatizada de contenido educativo
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')

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
                a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=6566734") Burgos, J. B. (2018). Diseño pedagógico de la educación digital para la formación del profesorado. RELATEC: revista latinoamericana de tecnología educativa, 17(1), 41-60.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/Q9qwguSodFQ?si=GXpCp8TT5AOHW8M-") [Vídeo] Rodas, M. (2020, 21 de octubre) Tendencias Educativas y Digitales para el 2021.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
      
  
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
      tema: 'Unidad 1',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes opciones describe mejor el concepto de currículo en el ámbito educativo formal?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conjunto de experiencias de aprendizaje informales que un estudiante adquiere fuera de la escuela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El listado de asignaturas que un estudiante debe aprobar para obtener un título.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El plan de estudios que estructura los contenidos, objetivos, metodologías y evaluaciones de un programa educativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La interacción entre estudiantes y profesores en un entorno de aprendizaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué se entiende por diseño instruccional en el contexto de la educación virtual?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La creación de materiales didácticos impresos para cursos en línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El proceso sistemático para planificar, diseñar, desarrollar e implementar el aprendizaje virtual para alcanzar objetivos definidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La simple digitalización de contenidos de cursos presenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La gestión técnica de las plataformas de aprendizaje en línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Un modelo de diseño curricular que se centra en el desarrollo de habilidades y capacidades específicas que los estudiantes deben demostrar en situaciones reales se conoce como:',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Modelo tecnológico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Modelo comunicativo-interactivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo basado en resultados de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo basado en competencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes componentes del currículo requiere una adaptación significativa al pasar de la educación presencial a la virtual para asegurar la participación activa de los estudiantes?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los objetivos de aprendizaje.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Los contenidos del curso.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La metodología de enseñanza.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El sistema de evaluación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes tendencias actuales en educación digital se centra en adaptar las experiencias de aprendizaje a las necesidades individuales de cada estudiante?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Microaprendizaje.', esCorrecta: false },
            { id: 'b', texto: 'Gamificación.', esCorrecta: false },
            { id: 'c', texto: 'Aprendizaje personalizado.', esCorrecta: true },
            {
              id: 'd',
              texto:
                'Uso de inteligencia artificial para la gestión administrativa.',
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
