import React, { Component } from 'react';
import Certificado from './Certificado';


class Certificados extends Component {

  constructor(props) {
    super(props)
    this.certificates = [
      {
        id: 'C1',
        image: 'cert_1.jpg',
        title: 'HTML, CSS, JS ES9 y Node.js',
        url: 'https://www.udemy.com/certificate/UC-ef6cb7f1-adee-47c1-a2e8-b44233cfc331/',
      },
      {
        id: 'C2',
        image: 'cert_2.jpg',
        title: 'Desarrollo Web con Javascript',
        url: 'https://www.udemy.com/certificate/UC-3962b95a-1b10-4965-a496-29c722c7b9fa/',
      },
      {
        id: 'C3',
        image: 'cert_3.jpg',
        title: 'HTML, CSS, JS, JQuery y React.js',
        url: 'https://www.udemy.com/certificate/UC-e0605128-26c8-46d8-acc6-64b39727cdbb/',
      },
      {
        id: 'C4',
        image: 'cert_4.png',
        title: 'Fundamentals of Scalable Data Science',
        url: 'https://coursera.org/share/aaf2a15cf69290986f6a90e8b47ef3f4',
      },
      {
        id: 'C5',
        image: 'cert_4.png',
        title: 'Advanced Machine Learning and Signal Processing',
        url: 'https://coursera.org/share/99fbf9380226beee29e5d862bd7959ae',
      },
      {
        id: 'C6',
        image: 'cert_4.png',
        title: 'Applied AI with DeepLearning',
        url: 'https://coursera.org/share/98471a3d0cbf8c6fc78c964ec3df50b8',
      }
    ];
  }

  render() {
    return (
      <div className="certificados">
        <section className="contenedor">
          <h2>Certificados Extra</h2>
          <div className="contenedor-certificados">
            {this.certificates.map(certificate => <Certificado key={certificate.id} {...certificate} />)}
          </div>
        </section>
      </div>
    );
  }

}

export default Certificados;