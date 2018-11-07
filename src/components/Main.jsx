import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PropTypes from 'prop-types';
import Article from './Article';
import MainHeader from './MainHeader';
// import { github } from 'react-syntax-highlighter/styles/hljs';

const Main = ({ articles, section }) => {
	console.log(articles[0].id);
	const article = Object.values(articles).map(article => (
		<Article
			title={article.title}
			key={article.id}
			description={article.description}
			example={article.example}
			syntax={article.syntax} />
	));


	return (
		<main id="content">
			<MainHeader section={section}/>
			{article}
		</main>
	);

};

Main.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object).isRequired,
	section: PropTypes.string.isRequired,
};

export default Main;
