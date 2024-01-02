export const jsonFile = () => {
  return app.gulp.src(app.path.src.jsonFile)
  .pipe(app.gulp.dest(app.path.dev.jsonFile))
}
