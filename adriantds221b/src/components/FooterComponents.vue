<template>
    <div class="container-lg">
        <div class="mt-5 mb-5">
            <div class="card">
                <div class="card-header">
                  Informacion
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p> Sé un profesional de éxito estudiando una de nuestras carreras Técnicas e Ingenierías.</p>
                    <footer class="blockquote-footer">Escuela Especializada en Ingeniería <cite title="Source Title">ITCA-FEPADE</cite></footer>
                  </blockquote>
                </div>
              </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterContent'
}
</script>

<style scoped>
    .card {
        border: 1px solid var(--bs-red);
        border-radius: 0.25rem;
    }

    .card-header {
        background-color: rgba(233, 242, 177, 0.588);
        color: var(--bs-red);
        font-weight: bold;
    }

    .card-body {
        background-color: transparent;
        color: var(--bs-red);
    }

    .blockquote-footer {
        color: var(--bs-gold);
    }

    .blockquote-footer cite {
        color: var(--bs-gold);
    }
</style>