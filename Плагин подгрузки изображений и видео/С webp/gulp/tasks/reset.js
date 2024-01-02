import {deleteAsync} from 'del';

export const reset = () => {
  return deleteAsync(app.path.clean);
}
 
export const resetFonts = () => {
  return deleteAsync(app.path.cleanFonts);
}
 
export const cleanScss = () => {
  return deleteAsync(app.path.cleanScss);
}
 
export const cleanImages = () => {
  return deleteAsync(app.path.cleanImages);
}
 
export const cleanCss = () => {
  return deleteAsync(app.path.cleanCss);
}
 
export const cleanJs = () => {
  return deleteAsync(app.path.cleanJs);
}
 
export const resetBuild = () => {
  return deleteAsync(app.path.cleanBuild);
}
 