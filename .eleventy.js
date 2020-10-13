
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {

    // Adding cssmin filter to minify stylesheets
    eleventyConfig.addFilter("cssmin", function(css) {
        return new CleanCSS({}).minify(css).styles;
    });

    markdownTemplateEngine: "njk";

    eleventyConfig.setTemplateFormats([
        "md",
        "njk"
    ]);

    // Use Passthrough File Copy to include static assets in site output _site
    eleventyConfig.addPassthroughCopy("./src/css/");

    return {
        dir: {
            input: "src",
            output: "_site",
        },
        includes: "_includes",
        layouts: "_includes/layouts"
    };
};