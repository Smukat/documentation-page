import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from 'reactstrap';
import Parameters from './Parameters.jsx';

const Article = ({ title, description, example, syntax }) => {
  const parameters = Object.values(syntax.parameters).map(parameter => (
    <Parameters
      name={parameter.name}
      explanation={parameter.explanation}
      example={parameter.example}
    />
  ));

  return (
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <p>{description}</p>
      <pre>
        <SyntaxHighlighter language="javascript">{example}</SyntaxHighlighter>
      </pre>
      <div>
        <h3 className="article-subtitle">Parameters:</h3>
        {parameters}
        <h3 className="article-subtitle">Return Value:</h3>
        <p>{syntax.return}</p>
        <Button outline color="primary"><a href={syntax.link} target="_blank" rel="noopener noreferrer">Learn More</a></Button>{' '}

      </div>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  example: PropTypes.string,
  syntax: PropTypes.object.isRequired,

};
export default Article;
