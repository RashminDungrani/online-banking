const browsersync = require('browser-sync').create();
const cached = require('gulp-cached');
const cssnano = require('gulp-cssnano');
const del = require('del');
const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const npmdist = require('gulp-npm-dist');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref-plus');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");    
const cleanCSS = require('gulp-clean-css');

const paths = {
  base:   {
    base:         {
      dir:    './'
    },
    node:         {
      dir:    './node_modules'
    },
    packageLock:  {
      files:  './package-lock.json'
    }
  },
  dist:   {
    base:   {
      dir:    './dist',
      files:  './dist/**/*'
    },
    libs:   {
      dir:    './dist/assets/libs'
    },
    css:    {
      dir:    './dist/assets/css',
    },
    js:    {
      dir:    './dist/assets/js',
      files:  './dist/assets/js/pages',
    },
  },
  src:    {
    base:   {
      dir:    './src',
      files:  './src/**/*'
    },
    css:    {
      dir:    './src/assets/css',
      files:  './src/assets/css/**/*'
    },
    html:   {
      dir:    './src',
      files:  './src/**/*.html',
    },
    img:    {
      dir:    './src/assets/images',
      files:  './src/assets/images/**/*',
    },
    js:     {
      dir:    './src/assets/js',
      pages:  './src/assets/js/pages',
      files:  './src/assets/js/pages/*.js',
      main:   './src/assets/js/*.js',
    },
    partials:   {
      dir:    './src/partials',
      files:  './src/partials/**/*'
    },
    scss:   {
      dir:    './src/assets/scss',
      files:  './src/assets/scss/**/*',
      main:   './src/assets/scss/*.scss'
    }
  }
};

gulp.task('browsersync', function(callback) {
  browsersync.init({
    server: {
      baseDir: [paths.dist.base.dir, paths.src.base.dir, paths.base.base.dir]
    },
  });
  callback();
});

gulp.task('browsersyncReload', function(callback) {
  browsersync.reload();
  callback();
});

gulp.task('watch', function() {
  gulp.watch(paths.src.scss.files, gulp.series('scss', 'browsersyncReload'));
  gulp.watch([paths.src.js.dir], gulp.series('js','browsersyncReload'));
  gulp.watch([paths.src.js.pages], gulp.series('jsPages','browsersyncReload'));
  gulp.watch([paths.src.html.files, paths.src.partials.files], gulp.series('fileinclude', 'browsersyncReload'));
});

gulp.task('js', function() {
  return gulp
    .src(paths.src.js.main)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js.dir));
});

gulp.task('jsPages', function() {
  return gulp
    .src(paths.src.js.files)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js.files));
});

gulp.task('scss', function() {
  return gulp
    .src(paths.src.scss.main)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer()
    )
    .pipe(gulp.dest(paths.dist.css.dir))
    .pipe(cleanCSS())
    .pipe(
      rename({
          // rename app.css to icons.min.css
          suffix: ".min"
      })
  )
  .pipe(sourcemaps.write("./")) // source maps for icons.min.css
  .pipe(gulp.dest(paths.dist.css.dir));
});

gulp.task('fileinclude', function(callback) {
  return gulp
    .src([
      paths.src.html.files,
      '!' + paths.dist.base.files,
      '!' + paths.src.partials.files
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true,
    }))
    .pipe(cached())
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('clean:packageLock', function(callback) {
  del.sync(paths.base.packageLock.files);
  callback();
});

gulp.task('clean:dist', function(callback) {
  del.sync(paths.dist.base.dir);
  callback();
});

gulp.task('copy:all', function() {
  return gulp
    .src([
      paths.src.base.files,
      '!' + paths.src.partials.dir, '!' + paths.src.partials.files,
      '!' + paths.src.scss.dir, '!' + paths.src.scss.files,
      '!' + paths.src.js.dir, '!' + paths.src.js.files, '!' + paths.src.js.main, 
      '!' + paths.src.html.files,
    ])
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('copy:libs', function() {
  return gulp
    .src(npmdist(), { base: paths.base.node.dir })
    .pipe(rename(function(path) {
        path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
    }))
    .pipe(gulp.dest(paths.dist.libs.dir));
});

gulp.task('html', function() {
  return gulp
    .src([
      paths.src.html.files,
      '!' + paths.dist.base.files,
      '!' + paths.src.partials.files
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true,
    }))
    .pipe(replace(/href="(.{0,10})node_modules/g, 'href="$1assets/libs'))
    .pipe(replace(/src="(.{0,10})node_modules/g, 'src="$1assets/libs'))
    .pipe(useref())
    .pipe(cached())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssnano({svgo: false})))
    .pipe(gulp.dest(paths.dist.base.dir));
});

// gulp.task('build', gulp.series(gulp.parallel('clean:tmp', 'clean:packageLock', 'clean:dist', 'copy:all', 'copy:libs'), 'scss', 'html'));
gulp.task('build', gulp.series(gulp.parallel('clean:packageLock', 'clean:dist', 'copy:all', 'copy:libs'), 'scss', 'html'));

// gulp.task('default', gulp.series(gulp.parallel('fileinclude', 'scss'), gulp.parallel('browsersync', 'watch')));
gulp.task('default', gulp.series(gulp.parallel('clean:packageLock', 'clean:dist', 'copy:all', 'copy:libs', 'fileinclude', 'scss', 'js', 'jsPages', 'html'), gulp.parallel('browsersync', 'watch')));