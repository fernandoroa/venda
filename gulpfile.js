const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const browserSync = require("browser-sync").create();

gulp.task("html", function () {
  return gulp
    .src(["./views/*.njk"])
    .pipe(
      nunjucksRender({
        path: ["./views"],
      })
    )
    .pipe(gulp.dest("./pages"));
});

gulp.task("public", function () {
  return gulp.src(["./public*/**/*"]).pipe(gulp.dest("pages/"));
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./pages",
    },
  });
  gulp.watch("./pages/*.html").on("change", browserSync.reload);
  gulp.watch("./views/*.njk", gulp.series("html"));
});

// pictures manually copied
gulp.task("default", gulp.series("html", "public", "watch"));
