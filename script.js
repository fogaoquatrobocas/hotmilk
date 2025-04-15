function toggleMateria(materia) {
    const materias = ['biologia', 'historia', 'fisica'];
    
   
    materias.forEach(m => {
        document.getElementById(m).style.display = 'none';
    });
    
    
    document.getElementById(materia).style.display = 'block';
}

function showSubdivisao(subdivisaoId) {
    
    const subdivisoes = document.querySelectorAll('.subdivisao');
    subdivisoes.forEach(sub => {
        sub.classList.remove('active');
    });

  
    document.getElementById(subdivisaoId).classList.add('active');
}
