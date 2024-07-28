<template>
    <div class="container-lg">
        <div class="mt-4">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Acerca del Sistema Bibliotecario ITCA-FEPADE
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"> El Sistema Bibliotecario de la Escuela Especializada en Ingeniería ITCA – FEPADE, es una unidad de apoyo bibliográfico a todas las carreras técnicas y de ingeniería que ofrece la Escuela. Desde esta Unidad, se apoya la docencia, la investigación y la proyección social.<br><br>
                        Facilitando el acceso a los recursos de información y difusión de los mismos, brindando servicios de calidad y contribuyendo así en los procesos de creación de conocimiento para la realización de los objetivos académicos y científicos de la Escuela Especializada en Ingeniería ITCA-FEPADE. La primera biblioteca de ITCA nace con el Instituto Tecnológico Centroamericano, en el año 1973, funcionando en el Edificio de Cafetería Escuela hasta 1992.<br>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        ¿Quiénes son nuestros clientes?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Estudiantes activos de las diferentes carreras técnicas y de ingenierías.
                        Personal docente, administrativo, mantenimiento; permanente y eventual (Préstamo interno y externo).<br>
                        Ex alumnos (Servicio interno).<br>
                        Estudiantes de educación media y superior (Servicio interno).<br>
                        Visitantes, profesionales y otros (Servicio interno).</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Horarios
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Biblioteca Central – Santa Tecla, La Libertad<br><br>
                        Lunes a Viernes De 7:00 a.m. a 6:00 p.m. Sin cerrar al mediodía
                        Sábado 8:00 a.m. a 12:00 m. y de 1:00 p.m. a 5:00 p.m.
                        Bibliotecas de Centros Regionales Zacatecoluca, San Miguel, Santa Ana y La Unión
                        Lunes a viernes
                        de 7:00 a.m. a 12: 00 m. y de 12:40 p.m. a 4:25 p.m.
                        Direcciones<br><br>
                        Sede central – Santa Tecla
                        Km. 11.5 Carretera a Santa Tecla, La Libertad
                        Tels. (503)2132-7555 y (503)2132-7556; Fax (503)2132-7599<br><br>
                        Centro regional Santa Ana
                        Final 10a. Av. Sur, Finca Procavia
                        Tel. (503) 2440-4348,
                        (503) 2440-2007,(503) 2440-1310
                        Tel. Fax. (503) 2440-3183<br><br>
                        Centro regional San Miguel
                        Km. 140, Carretera a Santa Rosa de Lima.
                        Tels. (503) 2669-2292, (503) 2669-2299,
                        (503) 2269-0617; Fax. (503) 2669-0961<br><br>
                        Centro regional Zacatecoluca
                        Km. 64 1/2, desvío Hacienda El Nilo, sobre autopista a Zacatecoluca y Usulután.
                        Tel. (503) 2334-0763,
                        (503) 2334-0768,
                        (503) 2334-0112
                        Fax. (503) 2334-0462<br><br>
                        Centro regional La Unión
                        Calle Santa María, Colonia Belén, atrás del Instituto Nacional de La Unión.
                        Tel. (503) 2668-4700; (503)2668-4722.</div>
                  </div>
                </div>
              </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'infoContent'
    }
</script>
<style scoped>
.accordion-button {
    background-color: transparent;
    color: var(--bs-red);
    border: none;
    box-shadow: none;
    font-weight: bold;
}

.accordion-button:not(.collapsed) {
    color: var(--bs-gold);
}

.accordion-button:hover {
    background-color: transparent;
    color: var(--bs-gold);
}

.accordion-item {
    border: none;
}

.accordion-body {
    color: var(--bs-red);
    background-color: transparent;
    border-top: 1px solid var(--bs-red);
}

</style>