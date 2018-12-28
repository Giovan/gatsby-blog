module.exports = {
  siteMetadata: {
    title: 'NamoxBase The Blog',
		description: 'The open source collaborative Namox Labs blog.'
  },
  plugins: [
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		}
  ]
}