// import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
  //  app.gulp.src(app.path.src.fonts)
  // .pipe(ttf2woff())
  // .pipe(app.gulp.dest(app.path.dev.fonts))
  return  app.gulp.src(app.path.src.fonts)
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.dev.fonts))
}