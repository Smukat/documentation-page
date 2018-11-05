import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Parameters = ({ name, explanation, example }) => (
    <div>
      <h4 className="article-parameters">{name}</h4>
      <p>{explanation}</p>
      <pre>
        <SyntaxHighlighter language="javascript">{example}</SyntaxHighlighter>
      </pre>
    </div>);

Parameters.propTypes = {
  name: PropTypes.string,
  explanation: PropTypes.string,
  example: PropTypes.string,
};
export default Parameters;
