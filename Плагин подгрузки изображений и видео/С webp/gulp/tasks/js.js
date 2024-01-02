import fileinclude from "gulp-file-include";

export const js = () => {
 return app.gulp.src(app.path.src.js, {sourcemaps: true })
 .pipe(app.plugins.plumber(
   app.plugins.notify.onError({
     title: 'JS',
     message: 'Error: <%= error.message %>',
   }))
 )
 .pipe(fileinclude({
  prefix: "--",
 }))
 .pipe(app.gulp.dest(app.path.dev.js))
 .pipe(app.plugins.browsersync.stream());
}