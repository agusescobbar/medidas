document.getElementById('medidasForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('ficha-nombre').textContent = document.getElementById('nombre').value;
  document.getElementById('ficha-busto').textContent = "Contorno Busto: " + document.getElementById('contornoBusto').value + " cm";
  document.getElementById('ficha-altura').textContent = "Contorno Cuello: " + document.getElementById('contornoCuello').value + " cm";
  document.getElementById('ficha-cintura').textContent = "Cintura: " + document.getElementById('cintura').value + " cm";
  document.getElementById('ficha-cadera').textContent = "Cadera: " + document.getElementById('cadera').value + " cm";
  document.getElementById('ficha-hombro').textContent = "Hombro: " + document.getElementById('hombro').value + " cm";
  document.getElementById('ficha-largo').textContent = "Largo: " + document.getElementById('largo').value + " cm";


  document.getElementById('ficha').style.display = 'block';
  window.scrollTo({ top: document.getElementById('ficha').offsetTop, behavior: 'smooth' });
});
//que haces leyendo mi codigo putita, soy la uno aunque me olvide
document.getElementById('descargarBtn').addEventListener('click', function(e) {
  e.preventDefault();
  html2canvas(document.getElementById('ficha'), { scale: 2 }).then(canvas => {
    let enlace = document.createElement('a');
    enlace.href = canvas.toDataURL('image/png');
    const nombreFicha = document.getElementById('nombre').value.trim().replace(/\s+/g, '_') || 'sin_nombre';
    enlace.download = `ficha_medidas_${nombreFicha}.png`;
    enlace.click();
  });
});