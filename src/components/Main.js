import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { github } from 'react-syntax-highlighter/styles/hljs';

export default class Main extends React.Component { 
    render() {
        return (
            <div>
                <h2>Article Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
                <SyntaxHighlighter language='javascript'>{
`function coco() {
    return a + b;
}`
                }</SyntaxHighlighter>
            

            </div>
        );
    }
};