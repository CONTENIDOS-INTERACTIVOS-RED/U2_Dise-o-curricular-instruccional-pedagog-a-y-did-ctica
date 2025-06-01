<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías del aprendizaje aplicadas a entornos virtuales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7
        .bg-amarillo.p-4
          span Las teorías del aprendizaje constituyen el fundamento conceptual esencial para el diseño de entornos virtuales de aprendizaje que sean efectivos y promuevan un aprendizaje significativo. Comprender los mecanismos mediante los cuales, los estudiantes aprenden en línea, resulta crucial para la selección de estrategias pedagógicas y didácticas que sean apropiadas para este contexto específico.
    
    p.mb-4 Entre las principales teorías del aprendizaje que revisten relevancia para los entornos virtuales, se encuentran:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Conductismo 
              p Esta teoría se centra en el estudio de la conducta observable y en cómo esta puede ser modificada a través del refuerzo y el castigo (Roche, 2011). En entornos virtuales, los principios conductistas pueden aplicarse en el diseño de actividades que ofrecen retroalimentación inmediata a las respuestas de los estudiantes, como cuestionarios automatizados y sistemas de recompensas por la finalización de tareas. Sin embargo, su enfoque limitado en los procesos mentales internos, puede ser una limitación en entornos de aprendizaje más complejos.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Cognitivismo
              p El cognitivismo pone énfasis en los procesos mentales internos que intervienen en el aprendizaje, tales como la memoria, la atención, la percepción y la resolución de problemas. En el diseño de entornos virtuales, esta teoría sugiere la importancia de organizar la información de manera lógica y estructurada, utilizar recursos multimedia que faciliten la codificación y recuperación de la información, y actividades que proporcionen que promuevan el procesamiento profundo del conocimiento.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Constructivismo
              p Esta teoría postula que los estudiantes construyen activamente su propio conocimiento, a través de la experiencia y la reflexión. (ProFuturo, 2024). En entornos virtuales, el constructivismo se traduce en el diseño de actividades que fomentan la interacción, la colaboración y la participación en tareas auténticas y significativas. Las plataformas que permiten la creación de contenidos por parte de los estudiantes, los foros de discusión y los proyectos colaborativos, son ejemplos de aplicaciones constructivistas en línea.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Conectivismo
              p Surgiendo en la era digital, el conectivismo sostiene que el aprendizaje ocurre a través de la formación de conexiones en redes, tanto humanas como no humanas. (Udax, 2023). En entornos virtuales, esta teoría destaca la importancia de la capacidad para establecer conexiones significativas entre diversas fuentes de información, la habilidad para navegar y evaluar la información en línea, y la participación en comunidades de aprendizaje virtuales.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 La evolución en el énfasis de las teorías del aprendizaje, desde el conductismo hacia el cognitivismo y posteriormente al constructivismo y el conectivismo, refleja una comprensión cada vez más profunda del proceso de aprendizaje, especialmente en un contexto donde la tecnología facilita experiencias de aprendizaje más interactivas y colaborativas. Mientras que las primeras iniciativas de aprendizaje en línea, pudieron haber adoptado enfoques conductistas con cuestionarios y retroalimentación automatizada, la maduración de la tecnología permitió un mayor enfoque en los procesos cognitivos, a través de contenido multimedia e interactivo. 
        .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 El auge de Internet y las herramientas de colaboración, resaltaron la importancia de que los estudiantes construyan conocimiento de manera conjunta y formen conexiones significativas. Esta progresión sugiere que un diseño efectivo de aprendizaje virtual debería, idealmente, incorporar elementos de múltiples teorías, con un fuerte énfasis en los principios constructivistas y conectivistas, para maximizar la participación y el aprendizaje significativo.

    .row.mb-4
      .col-12.col-xl-10
        span El conectivismo, en particular, emerge como una teoría de gran relevancia en el contexto del aprendizaje virtual, dada su atención a las redes, el flujo de información y la capacidad de aprender y adaptarse en un mundo digital. Internet brinda una oportunidad sin precedentes, para que los estudiantes se conecten con información, recursos y otros estudiantes.
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
    
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-oscuro.p-4(data-aos="fade-up")
        p.mb-0 El conectivismo aborda directamente esta realidad al enfatizar las habilidades necesarias para navegar por este vasto panorama informativo, evaluar fuentes y formar conexiones significativas. Esto resulta fundamental para que los educadores lo comprendan al diseñar cursos en línea, dado que sugiere la necesidad de incorporar actividades que promuevan la creación de redes, la colaboración y el desarrollo de habilidades de alfabetización digital.

    p.mb-4 En la siguiente tabla, estudie las diferentes teorías, sus principios, rol del estudiante, rol del profesor y algunos ejemplos de aplicación.  
    p.mb-4 <b>Tabla 1.</b> Teorías del aprendizaje aplicadas a entornos virtuales

    .tabla-a.mb-5
      table
        thead
          tr
            th.bg-morado-2.text-white.text-center Teoría del aprendizaje
            th.bg-morado-2.text-white.text-center Principios fundamentales
            th.bg-morado-2.text-white.text-center Rol del estudiante en entornos virtuales
            th.bg-morado-2.text-white.text-center Rol del instructor en entornos virtuales
            th.bg-morado-2.text-white.text-center Ejemplos de aplicación en entornos virtuales
        tbody
          tr
            td.text-bold.bg-morado-2-claro Conductismo.
            td.bg-morado-2-claro.text-center Conducta observable, refuerzo.
            td.bg-morado-2-claro.text-center Receptor pasivo de información, responde a estímulos.
            td.bg-morado-2-claro.text-center Diseñador de estímulos y refuerzos, evaluador de respuestas.
            td.bg-morado-2-claro.text-center Cuestionarios de opción múltiple con retroalimentación inmediata, sistemas de puntos y recompensas.
          tr
            td.text-bold.bg-morado-2-claro Cognitivismo.
            td.bg-morado-2-claro.text-center Procesos mentales internos.
            td.bg-morado-2-claro.text-center Procesador activo de información, busca comprender y organizar.
            td.bg-morado-2-claro.text-center Organizador de la información, facilitador de estrategias cognitivas.
            td.bg-morado-2-claro.text-center Mapas conceptuales interactivos, actividades de resolución de problemas, simulaciones que requieren procesamiento de información.
          tr
            td.text-bold.bg-morado-2-claro Constructivismo.
            td.bg-morado-2-claro.text-center Construcción activa del conocimiento, a través de la experiencia.
            td.bg-morado-2-claro.text-center Constructor activo del conocimiento, participante en actividades colaborativas.
            td.bg-morado-2-claro.text-center Facilitador del aprendizaje, guía en la exploración y la reflexión.
            td.bg-morado-2-claro.text-center Foros de discusión, proyectos colaborativos en línea, creación de contenido por parte del estudiante.
          tr
            td.text-bold.bg-morado-2-claro Conectivismo.
            td.bg-morado-2-claro.text-center Aprendizaje a través de conexiones en redes.
            td.bg-morado-2-claro.text-center Conector de información, participante en redes de aprendizaje, evaluador de fuentes.
            td.bg-morado-2-claro.text-center Curador de recursos, conector de estudiantes con expertos y comunidades.
            td.bg-morado-2-claro.text-center Uso de redes sociales académicas, creación de blogs o wikis colaborativas, participación en cursos en línea abiertos (MOOCs).


    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.scielo.sa.cr/scielo.php?pid=S1409-42582018000300371&script=sci_arttext") Maldonado-Torres, S., Araujo, V., & Rondon, O. (2018). Enseñar como un "acto de amor" con métodos de enseñanza-aprendizaje no tradicionales en los entornos virtuales. Revista Electrónica Educare, 22(3), 371-382.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/rko4Mg8PhIc?si=Nf5aWAOG2jbM3Plz") [Vídeo] Beltran, E. (2021). Evolución de las teorías de aprendizaje y el diseño instruccional.
            
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
