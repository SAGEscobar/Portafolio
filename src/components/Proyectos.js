import React, { Component } from 'react';
import Proyecto from './Proyecto';

class Proyectos extends Component {

  

  constructor(props){
    super(props)
    this.projects = [
      {
        id: 1,
        image: 'bienes_raices.png',
        tecnologias: ['HTML', 'CSS'],
        site: 'https://jolly-almeida-c2aa2c.netlify.app/',
        code: 'https://github.com/SAGEscobar/BinesRaices.git',
      },
      {
        id: 2,
        image:'agenda.png',
        tecnologias:['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript'],
        site:'http://agenda.great-site.net/',
        code:'https://github.com/SAGEscobar/AgendaPHP.git',
      },
      {
        id: 3,
        image:'uptask.png',
        tecnologias:['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript'],
        site:'http://uptask.great-site.net/login.php',
        code:'https://github.com/SAGEscobar/uptask.git',
      },
      {
        id: 4,
        image: 'petgram.png',
        tecnologias:['Javascript', 'React', 'Node', 'StyledComponents', 'graphql'],
        site: 'https://petgram-theta-neon.vercel.app/',
        code: 'https://github.com/SAGEscobar/petgram',
      },
      {
        id: 5,
        image:'gdlwebcamp.png',
        tecnologias:['HTML', 'CSS' , 'Javascript', 'JQuery', 'PHP', 'MySQL'],
        site:'http://gdlwebcamp.great-site.net/',
        code:'https://github.com/SAGEscobar/gdlWebCamp.git',
      }
    ];
  }

  render() {
    return (
      <div className="contenedor">
        <main className="servicios">
          <h2>Portafolio</h2>
          <div className="contenedor-proyectos">
            {this.projects.map(project => <Proyecto key={project.id} {...project} />)}
          </div>
        </main>
      </div>
    )
  }

}

export default Proyectos;