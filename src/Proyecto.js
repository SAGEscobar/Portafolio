import React from 'react'

const rendTecnologia = (tec, pos) =>{
        return (<li key={pos}><i className={tec}></i> {tec}</li>);
}

const Proyecto = ({image, tecnologias, site, code, centrado}) => {
    return  (
        <div className={centrado ? "proyecto centrado": "proyecto"}>
                    <div className="previews">
                        <img src={`./img/portafolio_imgs/${image}`} alt="Imagen_Sitio" />
                    </div>
                    <h4>Tecnologias</h4>
                    
                    <ul className="tecnologias">
                        {tecnologias.map(rendTecnologia)}
                    </ul>
                    
                    <footer className="proyecto-footer">
                        <a href={site} className="boton vicita" target="_blank" rel="noreferrer" >Visitar</a>
                        <a href={code} className="boton codigo" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i> Codigo</a>
                    </footer>
                </div>
    );
}

export default Proyecto