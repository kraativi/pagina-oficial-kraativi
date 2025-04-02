// let duracionVideo = -1;

// videoFondo.addEventListener('loadedmetadata', function() {
//     duracionVideo = videoFondo.duration;
// });

// let girando = false;
// document.addEventListener('scroll', ()=>{
//     if(duracionVideo==-1) return;
//     if(girando) return;
//     girando=true;
//     const scrollActual = window.scrollY;
//     const scrollFinal = document.body.scrollHeight-window.innerHeight;
//     const segundosCadaPx= duracionVideo/scrollFinal;
//     let segundos = segundosCadaPx*scrollActual;
//     if(segundos>duracionVideo) segundos=duracionVideo;
//     videoFondo.currentTime = segundos;
//     setTimeout(()=>{
//         girando=false;
//     },25);
// });

function Init(){

    const datosServicios = {
        "identidad":{
            "titulo":"Identidad de marca",
            "parrafo":"Tu marca es un mundo que necesita mucho cariño. Por eso, un buen logo, un manual de identidad o un diseño personalizado, especial y KraatiVo ¡no le vendría mal!",
            "servicios":[
                "Creación y rediseño de logo",
                "Manual de identidad",
                "Diseños personalizados"
            ]
        },
        "marketing":{
            "titulo":"Marketing",
            "parrafo":"Con KraatiVi, cada campaña digital es una obra maestra KraatiVa forjada para capturar la atención de tu audiencia. ¡Haz que tu marca brille, destaca en el universo!",
            "servicios":[
                "Planeación de estrategias",
                "Medición y análisis de estrategias",
                "Videos publicitarios",
                "Gestión de redes sociales",
                "Anuncios por redes sociales"
            ]
        },
        "web":{
            "titulo":"Páginas web",
            "parrafo":"¿Te imaginas un lugar donde puedas presentar tu marca, tus productos o servicios en cada rincón de este universo; y que además, destaque con mucha KraatiVidad? ¡Tenemos buenas noticias! Ese lugar puede hacerse realidad, y nosotros somos los forjadores que necesitas!",
            "servicios":[
                "Creación de páginas web",
                "Rediseño y mejora de páginas web"
            ]
        },
        "imagen":{
            "titulo":"Imágenes",
            "parrafo":"Haz realidad tus ideas más locas y originales sin límites. Forjamos tus conceptos en imágenes impactantes y KraatiVas que cuentan una historia. ¡Dale a tu mundo ese toque visual que hará que todos se queden boquiabiertos!",
            "servicios":[
                "Creación de imágenes para tu marca",
                "Creación de imágenes publicitarias",
                "Rediseño y edición de imágenes"
            ]
        },
        "video":{
            "titulo":"Videos",
            "parrafo":"¿Te gustaría que tu marca contara historias que atrapen, informen y sorprendan? ¡Dale vida a tu mensaje con un toque de cine y mucha KraatiVidad! ¡Convertiremos tus ideas en videos tan cautivadores que tu audiencia no podrá apartar la mirada!",
            "servicios":[
                "Creación de vieos para tu marca",
                "Creación de videos publicitarias",
                "Rediseño y edición de videos"
            ]
        },
        "animacion":{
            "titulo":"Animaciones",
            "parrafo":"A veces, una imagen o un texto no bastan para expresar la grandeza de tu marca; pero una animación... ¡Oh, sí, claro que sí! ¡Hay que darle movimiento a esa gran idea!",
            "servicios":[
                "Creación de animaciones 2D y 3D para tu marca",
                "Creación de publicidad animada 2D y 3D",
                "Rediseño de animaciones"
            ]
        },
        "sonido":{
            "titulo":"Sonorización",
            "parrafo":"Entendemos que los sonidos y la música pueden ser el alma de tu marca. Le ponemos ritmo y melodía a tus ideas. ¡Desde sonidos épicos hasta bandas sonoras inolvidables y canciones pegajosas! Haremos que tu marca suene tan bien que hasta tus clientes querrán ponerse a bailar. ¡Haz que el universo escuche tu esencia KraatiVa!",
            "servicios":[
                "Creación de música",
                "Creación de efectos de sonido",
                "Creación de banda sonora"
            ]
        },
    }

    btnMenu.addEventListener('click',()=>{
        menuNavegacion.classList.toggle('on');
        btnMenu.classList.toggle('on');
    });
    
    document.querySelectorAll('[data-enlace]').forEach(enlace=>{
        enlace.addEventListener('click',e=>{
            menuNavegacion.classList.remove('on');
            ScrollSuave(e, enlace.getAttribute('href'));
        })
    });

    document.querySelectorAll('[data-btn-servicio]').forEach(boton=>{
        boton.addEventListener('click',()=>{
            document.querySelectorAll('[data-btn-servicio]').forEach(boton2=>{
                boton2.classList.remove('on');
            });

            boton.classList.add('on');

            const llave = boton.getAttribute('data-btn-servicio');
            const titulo = datosServicios[llave]['titulo'];
            const parrafo = datosServicios[llave]['parrafo'];
            tituloServicio.innerText = titulo;
            parraforServicio.innerText = parrafo;

            const servicios = datosServicios[llave]['servicios'];
            let html = ``;

            servicios.forEach(servicio=>{
                html+=` <div class="div-descripcion">
                            <p>${servicio}</p>
                        </div>`;
            });
            contenedorDetallesServicios.innerHTML = html;
        });
    });

    spanAnioActual.innerText = new Date().getFullYear();

}
Init();

