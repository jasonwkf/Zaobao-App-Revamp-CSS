

Vue.prototype.getImageSrc = function (isImageArray) {
  if (isImageArray.length) {
    var url = isImageArray[0].rotator
    var newUrl = "tactical://?url=" + url
    return newUrl
  } else {
    return null
  }
}

Vue.prototype.getImageSrcStatic = function (url) {
  var newUrl = "tactical://?url=" + url;
  return newUrl;
}

function isDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true
  }

  return false
}

function updateDarkMode(darkMode) {
  if (darkMode) {
      console.log("dark mode");
      document.documentElement.classList.add('dark');
  } else {
      document.documentElement.classList.remove('dark');
      console.log("light mode");
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  updateDarkMode(event.matches);
});