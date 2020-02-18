var gulp = require('gulp'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    cache = require('gulp-cache'); 

gulp.task('less', function() {
    return gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function() {
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('pug', function() {
    return gulp.src('src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
    return gulp.src([
        'src/libs/jquery/dist/jquery.min.js',
		'src/libs/slick/dist/slick.min.js',
		'src/libs/bootstrap/dist/js/bootstrap.min.js',
		'src/libs/bootstrap/dist/js/bootstrap.bundle.min.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('css-libs', function() {
    return gulp.src('src/css/libs.css')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
});

gulp.task('js', function() {
    return gulp.src('src/js/common.js')
    .pipe(uglify())
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('browser-sync', function()  {
    browserSync({
        server: {baseDir: 'src'},
        notify: false
    });
});

gulp.task('clean', async function() {
    return del.sync('dist');
});

gulp.task('clear', async function() {
    return cache.clearAll();
});

gulp.task('img', function() {
    return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.pug', gulp.series('pug'));
    gulp.watch('src/less/**/*.less', gulp.series('less'));
    gulp.watch('src/*.html', gulp.series('code'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('prebuild', async function() {
    var buildCss = gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))

    var buildImg = gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'))

    var buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.parallel('watch', 'less', 'pug', 'browser-sync'))
gulp.task('build', gulp.parallel('prebuild', 'clean'));
