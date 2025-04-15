function showContent(materia) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');

    document.getElementById(materia).style.display = 'block';
}
