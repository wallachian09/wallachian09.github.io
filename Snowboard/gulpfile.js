var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'); 

gulp.task('sass', function() {
    return gulp.src('src/sass/main.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function() {
    return gulp.src('src/*.html')
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function() {
    return gulp.src([
        'src/libs/jquery/dist/jquery.min.js',
		'src/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/bootstrap/dist/js/bootstrap.min.js',
		'src/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
		'src/libs/jQuery-viewport-checker/dist/jquery.viewportchecker.min.js'
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
    gulp.watch('src/sass/**/*.sass', gulp.series('sass'));
    gulp.watch('src/*.html', gulp.series('code'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('prebuild', async function() {
    var buildCss = gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js'))

    //var buildImg = gulp.src('src/img/*')
    //.pipe(gulp.dest('dist/img'))

    var buildHtml = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.parallel('watch', 'sass', 'browser-sync'))
gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass', 'scripts'));
