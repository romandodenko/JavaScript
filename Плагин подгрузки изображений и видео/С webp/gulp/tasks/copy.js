export const copy = () => {
  return app.gulp.src(app.path.src.src)
  .pipe(app.gulp.dest(app.path.dev.dist))
}

export const copyBuild = () => {
  return app.gulp.src(app.path.dev.copyBuild)
  .pipe(app.gulp.dest(app.path.build.copyBuild))
}