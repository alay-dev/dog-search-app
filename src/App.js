import React from 'react' ;

import Header from './components/Header' ;
import Body from './components/Body' ;
import Footer from './components/Footer' ;
import './components/App.css' ;
import SideNav from './components/SideNav';

class App extends React.Component {

    state = { isNavOpen: false} ;

    render() {
        return (
            <React.Fragment>
                <i className={`navIcon ${this.state.isNavOpen ? 'fas fa-times':'fas fa-bars' }`}
                    onClick={() =>{
                        this.setState({isNavOpen: !this.state.isNavOpen})
                    }}
                />
                {this.state.isNavOpen ? <SideNav/> : ''}
                <Header/>
                <Body/>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App ;