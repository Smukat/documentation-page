import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import Article from './Article';
import MainHeader from './MainHeader';
// import { github } from 'react-syntax-highlighter/styles/hljs';

const Main = ({ articles, categories }) => {
	const article = Object.values(articles).map(article => (
		<Article
			title={article.title}
			description={article.description}
			example={article.example}
			syntax={article.syntax} />
	));

	const header = Object.values(categories).map(category => (
		<MainHeader category={category.category}/>
	));


	return (
		<main id="content">
			{header}
			{article}
		</main>
	);

};

Main.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object).isRequired,
	categories: PropTypes.array.isRequired,
};

export default Main;
