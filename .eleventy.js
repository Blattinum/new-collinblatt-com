module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy({ 'src/me.gif': '/me.gif' });
    eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': '/favicon.ico' });

    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/assets/");
    
    return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
    };
  }