// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Ипорт задач
import { copy, copyBuild } from './gulp/tasks/copy.js';
import { reset, resetBuild, cleanScss, cleanCss, cleanJs, resetFonts} from './gulp/tasks/reset.js';
import { html, htmlBuild } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js';
import { scss, cssBuild } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images, imagesBuild } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { jsonFile } from './gulp/tasks/jsonFile.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.video);
  gulp.watch(path.watch.jsonFile, jsonFile);
}

// Построение сценариев задач по умолчанию
const mainTasks = gulp.series(gulp.parallel(copy, fonts, html, scss, images, jsonFile));

const dev = gulp.series(reset, mainTasks, js, gulp.parallel(watcher, resetFonts, cleanScss, cleanJs, server));

// Выполнения сценария по умолчанию
gulp.task('default', dev);

// Построение сценариев задач build версия
const build = gulp.series(resetBuild, copyBuild, htmlBuild, cssBuild, cleanCss, imagesBuild);

// Выполнения сценария build версия
gulp.task('build', build);
