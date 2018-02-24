"use strict";
// Variables
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");

// Files paths
const htmlFiles = "src/**/*.html";
const sassFiles = "src/sass/**/*.scss";
const imageFiles = "src/images/**/*";
const jsFiles = "src/js/**/*.js";
const vendorFiles = "src/vendor-assets/**/*";

// HTML Tasks
gulp.task("html", function(){
  return gulp.src(htmlFiles)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest("build"));
});

// CSS Tasks
gulp.task("css", function(){
  return gulp.src(sassFiles)
  .pipe(sass().on("error", sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest("build/css"))
});

// Images Tasks
gulp.task("images", function(){
  return gulp.src(imageFiles)
  .pipe(imagemin())
  .pipe(gulp.dest("build/images"));
});

// JS Tasks
gulp.task("js", function(){
  return gulp.src(jsFiles)
  .pipe(babel({presets: ["env"]}))
  .pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(gulp.dest("build/js"));
});

// Vendor assets
gulp.task("vendors", function(){
  return gulp.src(vendorFiles)
  .pipe(gulp.dest("build/vendor-assets"));
});

// Watch Tasks
gulp.task("watch", function(){
  gulp.watch(htmlFiles, ["html"]);
  gulp.watch(sassFiles, ["css"]);
  gulp.watch(imageFiles, ["images"]);
  gulp.watch(jsFiles, ["js"]);
  gulp.watch(vendorFiles, ["vendors"]);
});

// Default Task
gulp.task("default", ["html", "css", "images", "js", "vendors", "watch"]);