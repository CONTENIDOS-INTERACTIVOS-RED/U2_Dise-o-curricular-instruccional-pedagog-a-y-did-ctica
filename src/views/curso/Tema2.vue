<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Enfoques pedagógicos innovadores'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      p.mb-4 En el ámbito de la innovación educativa, diversos enfoques pedagógicos han ganado prominencia por su potencial para transformar la manera en que se concibe y se lleva a cabo el proceso de enseñanza-aprendizaje. Entre estos enfoques destacan:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-18.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='16.7%' y='21.8%' numero='+')
          .h5.mb-2 Gamificación
          p Aplicación de elementos y mecánicas de juego, como puntos, insignias, narrativas, en contextos no lúdicos, como la educación, con el objetivo de aumentar la motivación y el aprendizaje.
        .tarjeta.bg-white.p-4(x='77.5%' y='21.4%' numero='+')
          .h5.mb-2 Conectivismo
          p El aprendizaje es un proceso de formación de conexiones en redes, donde la diversidad de opiniones juega un papel crucial.
        .tarjeta.bg-white.p-4(x='18.5%' y='63.3%' numero='+')
          .h5.mb-2 Aprendizaje invertido
          p Trasladar la instrucción directa, generalmente impartida en el aula, fuera de ella, a través de recursos digitales.

      p.mb-4 Ampliemos la información sobre cada uno de estos enfoques pedagógicos:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Conectivismo")
              p El conectivismo se fundamenta en la idea de que el aprendizaje es un proceso de formación de conexiones en redes, donde la diversidad de opiniones juega un papel crucial (Udax, 2023) . Este enfoque reconoce que el aprendizaje puede residir en artefactos no humanos, y que la capacidad de saber dónde encontrar información relevante, resulta más crítica que la mera posesión de conocimientos actuales. <br><br>En la práctica, el conectivismo se aplica en la innovación educativa al fomentar la creación de redes de aprendizaje personalizadas, al utilizar herramientas en línea, para conectar a los estudiantes con expertos y recursos diversos, y al promover el aprendizaje colaborativo y la construcción colectiva de conocimiento.
            .div(titulo="Aprendizaje invertido")
              p El aprendizaje invertido se basa en el principio de trasladar la instrucción directa, generalmente impartida en el aula, fuera de ella, normalmente a través de recursos digitales como videos o lecturas. De esta manera, el tiempo de clase se utiliza para actividades de aprendizaje activo, discusión, resolución de problemas y aplicación de los conocimientos adquiridos previamente. <br><br>Este enfoque pedagógico innovador, permite personalizar el aprendizaje, puesto que los estudiantes pueden acceder a los materiales de instrucción a su propio ritmo y revisar el contenido cuantas veces sea necesario (Udax, 2023) . Además, maximiza las interacciones significativas en el aula, porque el docente puede dedicar tiempo para atender las necesidades individuales de los estudiantes, facilitar la colaboración y guiar la aplicación práctica de los conceptos. <br><br>El aprendizaje invertido también fomenta la autonomía y la responsabilidad del estudiante en su propio proceso de aprendizaje.
            .div(titulo="Gamificación")
              p La gamificación consiste en la aplicación de elementos y mecánicas de juego, como puntos, insignias, niveles, desafíos y narrativas, en contextos no lúdicos, como la educación, con el objetivo de aumentar la motivación, el compromiso y el aprendizaje. Al convertir el aprendizaje en una experiencia más interactiva y atractiva, la gamificación fomenta la participación activa de los estudiantes y los motiva a perseverar en la consecución de los objetivos de aprendizaje (Éxito Educativo, 2023).<br><br>La retroalimentación inmediata que, con frecuencia, se proporciona en los entornos gamificados, ayuda a los estudiantes a comprender su progreso e identificar áreas donde necesitan mejorar.

      .row.mb-4
        .col-12.col-xl-9
          p.mb-4 La implementación exitosa de estos enfoques pedagógicos innovadores, por lo general depende del uso efectivo de la tecnología. El conectivismo, por ejemplo, se nutre de herramientas en línea, para la creación de redes y el intercambio de información. El aprendizaje invertido se apoya en recursos digitales para la instrucción fuera del aula, y la gamificación frecuentemente utiliza plataformas digitales para ofrecer experiencias interactivas y realizar un seguimiento del progreso.
          .bg-amarillo.p-4
            span Esta interconexión entre la innovación pedagógica y la integración tecnológica subraya la necesidad de que los educadores desarrollen competencias tanto en el ámbito pedagógico como en el tecnológico, para implementar estos enfoques de manera efectiva. 

        .col-3.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.px-4.mb-0.text-white Observa en la siguiente tabla los elementos claves como el proceso de aprendizaje, los roles de estudiantes y profesor, las ventajas y los desafíos, en relación con cada enfoque pedagógico, visto anteriormente.
      
      p.mb-4 <b>Tabla 2.</b> Enfoques pedagógicos innovadores, su relación con los elementos claves, ventajas y desafíos

      .tabla-a.mb-5
        table
          thead
            tr
              th.bg-morado-2.text-white.text-center Elemento clave
              th.bg-morado-2.text-white.text-center Conectivismo
              th.bg-morado-2.text-white.text-center Aprendizaje invertido
              th.bg-morado-2.text-white.text-center Gamificación
          tbody
            tr
              td.text-bold.bg-morado-2-claro Proceso de aprendizaje. 
              td.bg-morado-2-claro.text-center Formación de conexiones en redes, aprendizaje distribuido, flujo de información.
              td.bg-morado-2-claro.text-center Instrucción directa fuera del aula, aplicación y profundización del conocimiento en el aula.
              td.bg-morado-2-claro.text-center Uso de elementos y mecánicas de juego en contextos no lúdicos, para fomentar la participación y el aprendizaje.
            tr
              td.text-bold.bg-morado-2-claro Rol del estudiante.
              td.bg-morado-2-claro.text-center Aprendiz autónomo, creador y mantenedor de su propia red de aprendizaje, evaluador crítico de la información.
              td.bg-morado-2-claro.text-center Aprendiz activo y responsable, gestiona su aprendizaje fuera del aula y participa activamente en las actividades de clase.
              td.bg-morado-2-claro.text-center Participante activo y motivado, se involucra en desafíos y busca alcanzar recompensas.
            tr
              td.text-bold.bg-morado-2-claro Rol del instructor.
              td.bg-morado-2-claro.text-center Conector de nodos de información, facilitador de la creación de redes, guía en la navegación y evaluación de la información.
              td.bg-morado-2-claro.text-center Diseñador de recursos para el aprendizaje fuera del aula, facilitador de actividades en clase, guía y mentor.
              td.bg-morado-2-claro.text-center Diseñador de experiencias de aprendizaje atractivas y desafiantes, proveedor de retroalimentación y recompensas.
            tr
              td.text-bold.bg-morado-2-claro Ventajas.
              td.bg-morado-2-claro.text-center Fomenta el aprendizaje continuo y la adaptación al cambio, desarrolla habilidades de alfabetización digital, promueve el aprendizaje colaborativo a gran escala.
              td.bg-morado-2-claro.text-center Permite personalizar el aprendizaje, maximiza el tiempo de clase para la interacción y la aplicación, fomenta la autonomía y la responsabilidad del estudiante.
              td.bg-morado-2-claro.text-center Aumenta la motivación y el compromiso, proporciona retroalimentación inmediata, facilita la comprensión de conceptos complejos, a través de la interacción lúdica.
            tr
              td.text-bold.bg-morado-2-claro Desafíos.
              td.bg-morado-2-claro.text-center Requiere habilidades de autogestión y evaluación crítica de la información por parte del estudiante, puede generar sobrecarga informativa, demanda una infraestructura tecnológica adecuada.
              td.bg-morado-2-claro.text-center Requiere que los estudiantes se involucren activamente con los materiales fuera del aula, puede aumentar la brecha digital si no se proporcionan recursos adecuados, exige una planificación cuidadosa de las actividades en clase.
              td.bg-morado-2-claro.text-center Requiere un diseño cuidadoso para asegurar que los elementos de juego se alineen con los objetivos de aprendizaje, puede generar una competencia excesiva o desmotivación si no se implementa correctamente, demanda creatividad por parte del diseñador.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://dialnet.unirioja.es/servlet/articulo?codigo=7539680") Baque, P. G. C., & García, C. E. M. (2020). Estrategias pedagógicas innovadoras en entornos virtuales de aprendizaje. Dominio de las Ciencias, 6(3), 56-77.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/live/iVtAA4oQbp4?si=rfEWy4-fdvx9jL8U") [Vídeo] INTEF (2020). Diseño de experiencias de aprendizaje para la educación a distancia.
              
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
     
  
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
