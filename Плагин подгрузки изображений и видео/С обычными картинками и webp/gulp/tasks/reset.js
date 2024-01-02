import del from 'del';

export const reset = () => {
  return del(app.path.clean);
}

export const resetFonts = () => {
  return del(app.path.cleanFonts);
}

export const cleanScss = () => {
  return del(app.path.cleanScss);
}

export const cleanCss = () => {
  return del(app.path.cleanCss);
}

export const cleanJs = () => {
  return del(app.path.cleanJs);
}

export const resetBuild = () => {
  return del(app.path.cleanBuild);
}