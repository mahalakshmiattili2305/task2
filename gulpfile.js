import gulp from "gulp";
import nunjucksRender from "gulp-nunjucks-render";
import htmlmin from "gulp-htmlmin";
import clean from "gulp-clean";

const paths = {
  templates: "src/*.njk",
  dist: "dist"
};

export function cleanDist() {
  return gulp.src(paths.dist, { read: false, allowEmpty: true })
    .pipe(clean());
}

export function build() {
  return gulp.src(paths.templates)
    .pipe(nunjucksRender({
      path: ["src"]
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist));
}

export default gulp.series(cleanDist, build);