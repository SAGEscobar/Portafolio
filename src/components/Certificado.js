import React from 'react'

const Certificado = ({image, title, url}) =>{
    return (
        <div className='certificado'>
            <a href={url} target='_blank' rel="noreferrer">
            <img src={`./img/cert_images/${image}`} alt='imagen_Certificado' />
            </a>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Certificado