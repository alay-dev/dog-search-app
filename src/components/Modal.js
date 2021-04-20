import ReactDOM from 'react-dom' ;
import dogImg from '../img/dog.jpg' ;

import './Modal.css' ;

const Modal = ({ data, onClick}) => {
    return ReactDOM.createPortal(
        <>
            <div className="background" onClick={()=>onClick()}></div>
            <div className="content">
                <img src={data.image? data.image.url : dogImg } alt={data.name}/>
                <div className="dog__info">
                    <h2>{data.name ? data.name: 'Name unknwon'}</h2>
                    <p className="breed__grp">{data.breed_group ? data.breed_group : 'Breed group unknown'}</p>
                    <p><span>Bred for : </span>{`${data.bred_for? data.bred_for :'unknown'}`}</p>
                    <p><span>Origin : </span> {`${data.origin? data.origin: 'unknown'}`}</p>
                    <p><span>Life span : </span>{`${data.life_span ? data.life_span : 'unknown'}`}</p>
                    <p><span>Weight : </span>{`${data.weight.imperial ? data.weight.imperial : 'unknown' } lb`}</p>
                    <p><span>Height : </span>{`${data.height.imperial  ? data.height.imperial : 'unknown'} feet`}</p>
                    <p><span>Temperament : </span>{`${data.temperament ? data.temperament : 'unknown'}`}</p>
                </div>
            </div>
        </>,
        document.querySelector('#modal') 
    );
} 

export default Modal ; 