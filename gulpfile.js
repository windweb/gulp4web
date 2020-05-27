let project_folder = "dist"; // объявляем переменную dist
let source_folder = "#src"; // объявляем переменную с исходниками scr

// переменная с путями
let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/img/",
		fonts: project_folder + "/fonts/"
	},
	src: {
		html: project_folder + "/",
		css: project_folder + "/css/style.scss",
		js: project_folder + "/js/script.js",
		img: project_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: project_folder + "/fonts/*.ttf",
	},
	watch: {
		html: project_folder + "/**/*.html",
		css: project_folder + "/css/**/*.scss",
		js: project_folder + "/js/**/*.js",
		img: project_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
	}
	clean: "./" + project_folder + "/"
}

let {
	src,
	dest
} = require('gulp')