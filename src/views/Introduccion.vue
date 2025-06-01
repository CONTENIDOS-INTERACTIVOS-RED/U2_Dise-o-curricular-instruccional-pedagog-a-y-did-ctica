<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.bg-azul.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-2.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 En la innovación educativa, los enfoques pedagógicos y didácticos innovadores, adquieren un papel central. Más allá de enseñar contenidos, buscan involucrar activamente a los estudiantes, promoviendo su participación en experiencias de aprendizaje significativas. La innovación pedagógica se entiende como una estrategia consciente para transformar la educación, enfocada en el desarrollo integral del estudiante desde las primeras etapas de su formación.
        span El uso de tecnologías emergentes se convierte en un aliado clave para esta transformación. Las herramientas digitales no solo facilitan el acceso al conocimiento, sino que permiten personalizar la enseñanza y crear entornos de aprendizaje dinámicos, colaborativos y accesibles, desde cualquier lugar. Esto exige a los educadores repensar sus metodologías para diseñar experiencias que respondan a las características de los entornos virtuales y a los perfiles diversos de los estudiantes.

    .row.bg-verde.p-4.py-xl-0.mb-4(data-aos='fade-up')
      .col-12.col-xl-9.d-flex
        .my-auto
          p.mb-0 Esta unidad propone un recorrido por las principales teorías del aprendizaje y por enfoques pedagógicos y didácticos contemporáneos, analizando su relevancia en escenarios educativos mediados por la tecnología.<br><br> Se busca, así, brindar herramientas conceptuales y prácticas que permitan integrar la innovación educativa de forma efectiva, con el fin de enriquecer los procesos de enseñanza-aprendizaje y preparar a los estudiantes para los desafíos del presente y del futuro.
          
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto descriptivo de la imagen') 

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        p.mb-4 Contenidos de la unidad:

        .row
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-small.px-4.text-center.pb-2 Teorías del aprendizaje aplicadas a entornos virtuales.    
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-small.px-4.text-center.pb-2 Enfoques pedagógicos innovadores: conectivismo, aprendizaje invertido, gamificación.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-small.px-4.text-center.pb-2 Metodologías activas en educación virtual: aprendizaje basado en proyectos, colaborativo y experiencial.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-small.px-4.text-center.pb-2 Estrategias didácticas para la enseñanza mediada por TIC.
    .d-flex.bg-morado-oscuro.bg-full-width.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-8.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.px-4.mb-0.text-white Se espera que usted participe activamente en las actividades propuestas, que incluyen lecturas y discusiones, entre otros, orientadas a promover un aprendizaje significativo. Aunque no se requieren conocimientos previos avanzados, contar con una comprensión básica sobre los enfoques pedagógicos y didácticos será de gran utilidad para asimilar con mayor profundidad los conceptos que se desarrollarán a lo largo de la unidad.

    p 

</template>
