import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./build`;
const devFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    copyBuild: `${buildFolder}/`,
    build: `${buildFolder}/`,
    css: `${buildFolder}/css`,
    images: `${buildFolder}/img/`,
  },
  dev: {
    js: `${devFolder}/js/`,
    css: `${devFolder}/css`,
    cssOveral: `${devFolder}/css/overall/`,
    cssBuild: `${devFolder}/css/*-min.css`,
    fonts: `${devFolder}/fonts/`,
    images: `${devFolder}/img/`,
    imagesBuild: `${devFolder}/img/**/*.{jpg,jpeg,png,gif}`,
    imagesWebpSvg: `${devFolder}/img/**/*.{webp,svg}`,
    dist: `${devFolder}/`,
    html: `${devFolder}/**/*.html`,
    copyBuild: `${devFolder}/**`,
    jsonFile: `${devFolder}/json/`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    scss: `${srcFolder}/css/**/*.scss`,
    scssOveral: `${srcFolder}/css/overall/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    fonts: `${srcFolder}/fonts/**.ttf`,
    svg: `${srcFolder}/img/**/*.svg`,
    html: `${srcFolder}/**/*.html`,
    src: `${srcFolder}/**`,
    jsonFile: `${srcFolder}/json/**`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/css/**/*.scss`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    html: `${srcFolder}/**/*.html`,
    src: `${srcFolder}/`,
    video: `${srcFolder}/video/**`,
    jsonFile: `${srcFolder}/json/**`,
    resources: `${srcFolder}/resources/**`,
  },
  clean: devFolder,
  cleanFonts: `${devFolder}/fonts/*.ttf`,
  cleanScss: `${devFolder}/css/**/*.scss`,
  cleanCss: [`${buildFolder}/css/components`,`${buildFolder}/css/overall`],
  cleanJs: `${devFolder}/js/modules`,
  cleanBuild: buildFolder,
  buildFolder: buildFolder,
  devFolder: devFolder,
  srcFolder: srcFolder,
}