import React from 'react' ;
import { motion } from 'framer-motion' ;
import { connect } from 'react-redux' ;
import { searchDogs, fetchDogs } from '../actions/' ;

import './Header.css';

const Header = ({ searchDogs, fetchDogs }) => {

    const handleChange = (e) =>{
        const term = e.target.value ;
        if(term.length){
            searchDogs(term) ;
        }
        else {
            fetchDogs() ;
        }
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault() ;
        const term = e.target.children[0].value ;
        if(term.length){
            searchDogs(term) ;
        }
        else {
            fetchDogs() ;
        }
    }
    return(
        <motion.div className="header">
            <motion.h1 initial={{y: '-50px', opacity:0}} animate={{y: 0, opacity:1 }} transition={{delay: 0.5, duration: 1}} >“Dogs do speak, but only to those who know how to listen.”<span>– Orhan Pamuk</span></motion.h1>
            <form className="header__form" onSubmit={handleFormSubmit} >
                <input type="text" placeholder="Search dog by breeds. Toy, terrier etc" onChange={handleChange}/>
                <button type="submit"><i className="fas fa-search"/></button>
            </form>
        </motion.div>
    );
}


export default connect(null, { searchDogs, fetchDogs })(Header) ;