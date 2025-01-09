module.exports = function(eleventyConfig) {

     eleventyConfig.addWatchTarget("./_src/js/");
     eleventyConfig.addPassthroughCopy("./_src/js/");

     eleventyConfig.addWatchTarget("./_src/css/");
     eleventyConfig.addPassthroughCopy("./_src/css/");
    return {
         dir: {
              input: "_src"
         }
    }
}