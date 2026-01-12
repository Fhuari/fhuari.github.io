<script setup>
import samfile from '../assets/image/samtravel.png'

const projects = [
  {
    title: 'Sacred Loom Peru',
    role: 'Freelance Web Developer',
    tech: ['WordPress', 'PHP', 'SEO'],
    description: 'Desarrollo de sitio web corporativo para marca de artesanía peruana, enfocado en diseño responsive, rendimiento y posicionamiento orgánico.',
    link: 'https://sacredloomperu.com'
  },
  {
    title: 'Machu Picchu Viajes Peru',
    role: 'Freelance Web Developer',
    tech: ['WordPress', 'PHP', 'Soporte', 'UX'],
    description: 'Desarrollo web para agencia de viajes, optimizado para SEO, experiencia de usuario y conversión de visitantes.',
    link: 'https://machupicchuviajesperu.com'
  },
{
    title: 'Andenes del Inca Hotel ',
    role: 'Freelance Web Developer',
    tech: ['WordPress', 'Bootstrap'],
    description: 'Creación de sitio web  para hotel, enfocado en usabilidad y presentación de servicios y habitaciones.',
    link: 'https://andenesdelinca.com'
},
  {
    title: 'Wari Expeditions',
    role: 'Freelance Full Stack Developer',
    tech: ['Laravel', 'Vue.js','Bootstrap', 'SEO'],
    description: 'Desarrollo de Pagina web a medida con Laravel y Vue.js para la gestión de tours, contenidos dinámicos y optimización SEO técnica.',
    link: 'https://wariexpeditions.com'
  }
]
</script>


<template>
  <div class="row">
    <!-- Imagen -->
    <div class="col-md-6 mb-4">
      <div class="card px-0 border-0 shadow-sm">
        <figure class="mb-0">
          <img class="img-fluid rounded" :src="samfile" alt="Portfolio Project">
        </figure>
      </div>
    </div>

    <!-- Proyectos -->
    <div class="col-md-12">
      <div class="position-relative mt-3">
        <h3 class="text-white fs-4 mb-3">Proyectos destacados</h3>

        <div
          v-for="(project, index) in projects"
          :key="index"
          class="card mt-3 border-0 shadow-sm"
        >
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="icons bg-950 text-center rounded-circle me-3">
                <i class="bi bi-code text-primary fs-3"></i>
              </div>

              <div class="flex-grow-1">
                <h3 class="fs-5 fw-bold mb-1">{{ project.title }}</h3>
                <p class="text-white mb-1">{{ project.role }}</p>

                <!-- Tecnologías -->
                <div class="mb-2">
                  <span
                    v-for="(item, i) in project.tech"
                    :key="i"
                    class="badge bg-primary me-1"
                  >
                    {{ item }}
                  </span>
                </div>

                <p class="fs-sm-9 mb-2">
                  {{ project.description }}
                </p>

                <!-- Link -->
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  class="text-decoration-none fw-bold text-primary"
                >
                  Ver proyecto <i class="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
