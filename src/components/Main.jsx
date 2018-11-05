import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import Article from './Article.jsx';
// import { github } from 'react-syntax-highlighter/styles/hljs';

const Main = ({ articles }) => {
	const article = Object.values(articles).map(article => (
		<Article
			title={article.title}
			description={article.description}
			example={article.example}
			syntax={article.syntax} />
	));

	return (
		<main id="content">
			{article}
		</main>
	);

};

Main.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
