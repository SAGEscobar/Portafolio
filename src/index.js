import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Proyecto from './Proyecto';
import './Proyecto.css';
import './Certificado'
import './Certificado.css'
import reportWebVitals from './reportWebVitals';import Certificado from './Certificado';
;

ReactDOM.render(
  <React.StrictMode>
      <Proyecto
        image='bienes_raices.png'
        tecnologias={['HTML', 'CSS']}
        site='https://jolly-almeida-c2aa2c.netlify.app/'
        code='https://github.com/SAGEscobar/BinesRaices.git'
        />
      <Proyecto
        image='agenda.png'
        tecnologias={['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript']}
        site='http://agenda.great-site.net/'
        code='https://github.com/SAGEscobar/AgendaPHP.git'
        />
      <Proyecto
        image='uptask.png'
        tecnologias={['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript']}
        site='http://uptask.great-site.net/login.php'
        code='https://github.com/SAGEscobar/uptask.git'
        />
      <Proyecto 
        image='gdlwebcamp.png'
        tecnologias={['HTML', 'CSS' , 'Javascript', 'JQuery', 'PHP', 'MySQL']}
        site='http://gdlwebcamp.great-site.net/'
        code='https://github.com/SAGEscobar/gdlWebCamp.git'
        centrado
      />
  </React.StrictMode>,
  document.querySelector('div.contenedor-proyectos')
);

ReactDOM.render(
    <React.StrictMode>
        <Certificado image='cert_1.jpg' title='HTML, CSS, JS ES9 y Node.js' url='https://www.udemy.com/certificate/UC-ef6cb7f1-adee-47c1-a2e8-b44233cfc331/' />
        <Certificado image='cert_2.jpg' title='Desarrollo Web con Javascript' url='https://www.udemy.com/certificate/UC-3962b95a-1b10-4965-a496-29c722c7b9fa/' />
        <Certificado image='cert_3.jpg' title='HTML, CSS, JS, JQuery y React.js' url='https://www.udemy.com/certificate/UC-e0605128-26c8-46d8-acc6-64b39727cdbb/' />
        <Certificado image='cert_4.png' title='Fundamentals of Scalable Data Science' url='https://coursera.org/share/aaf2a15cf69290986f6a90e8b47ef3f4' />
        <Certificado image='cert_4.png' title='Advanced Machine Learning and Signal Processing' url='https://coursera.org/share/99fbf9380226beee29e5d862bd7959ae' />
        <Certificado image='cert_4.png' title='Applied AI with DeepLearning' url='https://coursera.org/share/98471a3d0cbf8c6fc78c964ec3df50b8' />
    </React.StrictMode>,
    document.querySelector('.contenedor-certificados')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* <div class="proyecto">
<!-- <h3>Bienes Raices (Layout)</h3> -->

<div class="previews">
    <img src="img/portafolio_imgs/bienes_raices.png" alt="Imagen_Sitio">
</div>
<h4>Tecnologias</h4>

<ul class="tecnologias">
    <li><i class="fab fa-html5"></i> HTML</li>
    <li><i class="fab fa-css3-alt"></i> CSS</li>
</ul>

<footer class="proyecto-footer">
    <a href="" class="boton vicita">Visitar</a>
    <a href="" class="boton codigo"><i class="fab fa-github"></i> Codigo</a>
</footer>
</div>
*/