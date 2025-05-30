<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Modelos de diseño curricular para entornos virtuales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
        .col-12.col-xl-10.d-flex
          p.my-auto En el ámbito de la educación virtual, diversos modelos de diseño curricular proporcionan marcos conceptuales para la planificación y el desarrollo de programas y cursos en línea. <b>Un modelo curricular se define como una estructura conceptual y organizativa que sirve como guía para diseñar, desarrollar e implementar planes de estudio y programas educativos</b>, orientando las decisiones sobre qué contenido enseñar, cómo enseñarlo y cómo evaluar el aprendizaje. Estos modelos pueden variar según los enfoques pedagógicos, las filosofías educativas y los objetivos de aprendizaje que se persigan:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Modelo tecnológico")
              p En el ámbito de la educación virtual, uno de los modelos más utilizados es el modelo tecnológico, el cual se enfoca en la definición de objetivos educativos específicos, la identificación de contenidos que permitan alcanzarlos y la selección de recursos y medios adecuados para su implementación. Este modelo se caracteriza por su estructura lineal, su enfoque en la eficiencia del proceso educativo y la evaluación cuantificable de los resultados, lo que lo convierte en una herramienta útil para la planificación y el control del aprendizaje.
            .div(titulo="Modelo comunicativo-interactivo ")
              p El modelo comunicativo-interactivo se distingue por utilizar la investigación científica para organizar el proceso de aprendizaje, otorgando al estudiante un papel activo, reflexivo y responsable hacia su propio aprendizaje y su realidad. Este enfoque se alinea mejor con las filosofías pedagógicas constructivistas y conectivistas, que son particularmente relevantes en entornos virtuales donde la interacción y la colaboración juegan un papel crucial.
            .div(titulo="Modelo curricular basado en competencias")
              p El modelo curricular basado en competencias ha ganado una gran relevancia en la educación virtual, dado que se centra en el desarrollo de habilidades y capacidades específicas que los estudiantes deben adquirir para desempeñarse de manera efectiva en contextos reales. Este modelo exige colocar al estudiante en el centro del proceso de aprendizaje, otorgándole un papel activo en la construcción de sus propias competencias. Los objetivos del currículo se definen en términos de competencias y capacidades, abarcando el desarrollo de habilidades cognitivas, motrices e interpersonales. Las competencias se entienden como comportamientos y actitudes transversales a diferentes ámbitos de la actividad personal y laboral, integrando conocimientos ("saber"), habilidades ("saber hacer") y actitudes ("saber ser"). El diseño curricular basado en competencias se centra en el perfil profesional de egreso, recogiendo las necesidades y realidades del ámbito internacional y nacional en diversos campos. Un enfoque de diseño curricular basado en competencias considera tanto las competencias previas de los estudiantes como las competencias que se espera que adquieran al finalizar el programa.
            .div(titulo="Modelo basado en resultados de aprendizaje")
              p Este modelo se centra en definir claramente lo que los estudiantes deben saber y ser capaces de hacer al finalizar un curso o programa. Para Bobbit, el currículo se presenta como una descripción de objetivos a lograr a través de procedimientos específicos, y Taylor enfatiza que el currículo debe responder a los fines, a los logros de experiencias, a los modos de alcanzar esos fines y a las maneras de comprobarlo. Los resultados de aprendizaje deben enunciarse de manera clara y precisa, mostrando conductas observables.<br><br>En este modelo, los resultados de aprendizaje se convierten en el eje articulador, guiando la secuencia de las actividades, la selección de los recursos y las estrategias de evaluación. Se recomienda que la redacción de los logros de aprendizaje se oriente hacia el logro de procesos cognitivos complejos y sea específica en su formulación. Los logros o resultados de aprendizaje están orientados a un fin, centrados en el estudiante, enfatizando su éxito presente y futuro, y demandando objetivos claros, explícitos y significativos, incorporando retroalimentación continua para la evaluación y la revisión.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

      p.mb-4 En la siguiente tabla se presenta una comparación de las características principales, ventajas y desventajas de los modelos de diseño curricular basados en competencias y por resultados de aprendizaje, en el contexto de los entornos virtuales:

      p.mb-4 <b>Tabla 1.</b> Comparación de los modelos de diseño curricular, basado en competencias y resultados de aprendizaje

      .tabla-a
        table
          thead
            tr
              th(width="20%").bg-morado-2.text-white.text-center Característica
              th.bg-morado-2.text-white.text-center Modelo basado en competencias
              th.bg-morado-2.text-white.text-center Modelo por resultados de aprendizaje
          tbody
            tr
              td.text-bold Enfoque
              td.text-center Desarrollo de habilidades y capacidades.
              td.text-center Logro de conocimientos y habilidades específicas.
            tr
              td.text-bold Objetivos
              td.text-center Definidos como competencias integradas.
              td.text-center Definidos como resultados observables y medibles.
            tr
              td.text-bold Evaluación
              td.text-center Basada en el desempeño y la aplicación.
              td.text-center Puede incluir diversas metodologías.
            tr
              td.text-bold Énfasis
              td.text-center Aplicación práctica y relevancia real.
              td.text-center Claridad y medición de logros.
            tr
              td.text-bold Flexibilidad
              td.text-center Permite rutas de aprendizaje personalizadas.
              td.text-center Estructura clara para el diseño y la evaluación.
            tr
              td.text-bold Ventajas en entornos virtuales
              td.text-center Ideal para desarrollar habilidades digitales y evaluaciones auténticas.
              td.text-center Facilita la alineación con actividades y recursos en línea; uso de LMS.
            tr
              td.text-bold Desventajas en entornos virtuales
              td.text-center Definición y evaluación complejas en línea; requiere recursos para evaluaciones de desempeño.
              td.text-center Puede enfocarse más en la adquisición de conocimiento que en habilidades prácticas.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-amarillo.p-4.mb-4(data-aos='fade-up')
            span Un ejemplo de la aplicación del modelo basado en competencias en un entorno virtual, podría ser un curso de desarrollo de software, donde los estudiantes deben demostrar competencias específicas en programación, a través de proyectos prácticos y la creación de un portafolio en línea. En contraste, un curso de historia en línea diseñado bajo el modelo por resultados de aprendizaje podría establecer resultados claros como "analizar las causas de la Revolución Francesa" y evaluar este resultado a través de ensayos, foros de discusión y exámenes en línea. La elección del modelo dependerá de los objetivos específicos del curso y de la filosofía pedagógica de la institución.
          span Revisemos un resumen sobre estos tipos de modelos:

      ImagenInfografica.color-secundario.mb-5.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='33.9%' y='25%' numero='+')
          .h5.mb-2 Modelo basado en competencias
          p Se enfoca en habilidades aplicadas a contextos reales y articula necesidades del entorno profesional.<br><br>Útil para formar profesionales adaptables y competentes.
        .tarjeta.bg-white.p-4(x='66%' y='32%' numero='+')
          .h5.mb-2 Modelo basado en resultados
          p Define claramente los saberes y habilidades observables para asegurar el logro del aprendizaje.<br><br>Clave en sistemas de educación por logros.
        .tarjeta.bg-white.p-4(x='64%' y='73.2%' numero='+')
          .h5.mb-2 Modelo comunicativo-interactivo
          p Centrado en el estudiante activo, promueve la reflexión y colaboración en entornos dinámicos.<br><br>Perfecto para entornos virtuales dinámicos y participativos.
        .tarjeta.bg-white.p-4(x='36%' y='72.9%' numero='+')
          .h5.mb-2 Modelo tecnológico
          p Enfoque lineal y estructurado basado en objetivos conductuales, priorizando eficiencia y evaluación de resultados.<br><br>Ideal para procesos formativos con metas claras y medibles.

      
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.scielo.org.mx/scielo.php?pid=S1665-26732012000300007&script=sci_arttext") Martínez Alonso, G. F., Báez Villarreal, E., Garza Garza, J. Á., Treviño Cubero, A., & Estrada Salazar, F. (2012). Implementación de un modelo de diseño curricular basado en competencias, en carreras de ingeniería. Innovación educativa (México, DF), 12(60), 87-103.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/Ipn5S_eiR9s?si=hT8O5RqxTramH-EQ") [Vídeo] ULLaudiovisual - Universidad de La Laguna. (2022, 11 de noviembre) Modelos didácticos de las aulas virtuales: teoría y recomendaciones prácticas.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


      
     
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
