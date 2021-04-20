import React, { useEffect } from 'react' ;
import { connect } from 'react-redux' ;
import { fetchDogs, getDogInfo } from '../actions/' ;
import dogImg from '../img/dog.jpg' ;

import Modal from './Modal' ;
import { motion } from 'framer-motion' ;

import './Body.css' ;

const Body = ({fetchDogs, dogs, getDogInfo, selectedDog}) => {

    useEffect(()=>{
        fetchDogs() ;
    },[fetchDogs]);

    const renderImg = dogs.map(obj => {
        return (
            <motion.div className="container" key={obj.id} initial={{opacity:0, x: "-100vw"}} animate={{opacity:1, x: 0}} transition={{ delay: 1}}>
                <motion.img whileHover={{opacity:1}} src={obj.image ? obj.image.url: dogImg} alt={obj.name}/>
                <div className="container__info" onClick={() => getDogInfo(obj.id)}>
                    <h3>{obj.name}</h3>
                    <h4>{obj.breed_group}</h4>
                </div> 
            </motion.div>
        ) 
            
    });

    const handleClick = (e) => {
        getDogInfo(null) ;
    }

    const getdata = dogs.find(dog => dog.id === selectedDog) ;

    return(
        <div className="body">
            {dogs ? renderImg: '' }
            {selectedDog ? <Modal onClick={(e) => handleClick(e)} data={getdata}/>: ''}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs,
        selectedDog: state.selectedDog
    } ;
};

export default connect(mapStateToProps, { fetchDogs, getDogInfo })(Body) ;