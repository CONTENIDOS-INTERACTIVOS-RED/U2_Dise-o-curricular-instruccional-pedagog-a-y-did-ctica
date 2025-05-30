<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Componentes del currículo y su adaptación a la educación virtual'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-4 Un currículo tradicionalmente se compone de elementos esenciales que guían el proceso de enseñanza y aprendizaje. Estos componentes fundamentales incluyen los objetivos de aprendizaje, los contenidos, la metodología de enseñanza, la evaluación del aprendizaje y los recursos didácticos. Sin embargo, la transición a la educación virtual exige una adaptación cuidadosa de cada uno de estos componentes para asegurar su efectividad en el entorno en línea.

      .row.position-relative.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Objetivos
                p Los objetivos de aprendizaje, que definen lo que los estudiantes deben lograr, deben ser especialmente claros y precisos en la educación virtual. Dado que la interacción directa puede ser limitada, los objetivos bien definidos ayudan tanto a los instructores como a los estudiantes a comprender las expectativas del curso y a enfocar sus esfuerzos. En el contexto virtual, se recomienda priorizar experiencias que faciliten una comprensión global de los temas, permitiendo a los estudiantes construir sobre esta base a través de la exploración y el estudio independiente. La claridad en los objetivos es aún más crítica en entornos virtuales donde la observación directa de los procesos de aprendizaje puede ser desafiante.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Contenidos
                p Los contenidos, que constituyen el qué del aprendizaje, deben ser organizados y presentados de manera lógica y secuencial en un entorno virtual. La naturaleza del e-learning requiere orientar los contenidos según su tipo (conceptual, procedimental, actitudinal) para asegurar una experiencia de aprendizaje holística. La organización consecutiva y clara del contenido en línea es crucial para facilitar un aprendizaje efectivo en ausencia de una guía presencial constante.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Metodología
                p La metodología, o el cómo de la enseñanza, debe ser inherentemente activa y participativa en la educación virtual para fomentar un aprendizaje profundo. Priorizar experiencias que faciliten una comprensión global de los temas y que posibiliten trabajos más específicos es fundamental. La selección de estrategias y técnicas didácticas apropiadas para el entorno en línea es esencial para mantener el compromiso de los estudiantes y facilitar la adquisición de conocimientos.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Evaluación
                p La evaluación en la educación virtual requiere una variedad de métodos para medir de manera efectiva los diferentes tipos de resultados de aprendizaje y proporcionar retroalimentación significativa a los estudiantes. Al igual que con los contenidos, la evaluación debe considerar las dimensiones conceptuales, procedimentales y actitudinales del aprendizaje en línea. La incorporación de diversas formas de evaluación, más allá de los exámenes tradicionales, como proyectos en línea, participación en foros de discusión y portafolios electrónicos, puede ofrecer una visión más completa del progreso del estudiante.
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Recursos didácticos
                p Los recursos didácticos, que apoyan la metodología, adquieren una importancia aún mayor en la educación virtual. La selección y la integración de recursos digitales apropiados son cruciales para un aprendizaje en línea efectivo. Los recursos virtuales pueden facilitar la percepción y la formación de imágenes mentales, permitir la manipulación y la experimentación a través de simulaciones, e incluir una amplia gama de medios electrónicos, de comunicación, textuales y audiovisuales.

      .d-flex.bg-azul-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-5(data-aos='fade-up')
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-48.svg', alt='Texto descriptivo de la imagen')
        .my-auto.p-4.p-xl-0
          p.pe-xl-3.mb-0 En resumen, la adaptación de los componentes del currículo a la educación virtual implica una reflexión profunda sobre cómo cada elemento puede ser optimizado para el entorno en línea, aprovechando las posibilidades que ofrece la tecnología para crear experiencias de aprendizaje más flexibles, interactivas y personalizadas.

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://doi.org/10.22458/caes.v11i2.3322") Calderón-Meléndez, A. . (2020). Elementos clave de la virtualidad en la educación superior. Revista Electrónica Calidad En La Educación Superior, 11(2), 80–104.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/E5A9gffePS4?si=ik4XkZOUbippujni") [Vídeo] CanalTodoele (2012, 4 de julio) La competencia digital docente.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
      
  
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
