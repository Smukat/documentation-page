import React, { Component } from 'react';
import SkipMain from './SkipMain';
import CustomNavbar from './CustomNavbar';

export default class Header extends Component {
    
    render() {
        const {
            title,
            categories,
        } = this.props;

        return (
           <div>
               <SkipMain />
               <CustomNavbar title={title} categories={ categories }/>
           </div> 
        );
    }
}

Header.defaultProps = {
    title: "JS Documentation"
};