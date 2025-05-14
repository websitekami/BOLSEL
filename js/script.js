const form = document.getElementById('lautForm');
const tableBody = document.querySelector('#dataTable tbody');
const prediksiText = document.getElementById('prediksiText');

searchToggle.addEventListener('click', () => {
    if (searchBar.classList.contains('hidden')) {
      searchBar.classList.remove('hidden');
      searchInputMobile.focus();
    } else {
      searchBar.classList.add('hidden');
      searchInputMobile.value = ''; 
    }
  });

const lautForm = document.getElementById('lautForm');

  lautForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const berat = document.getElementById('berat').value;
    const lokasi = document.getElementById('lokasi').value;

    const dataBaru = {
      jenis,
      berat,
      lokasi
    };

  
    const dataSimpan = JSON.parse(localStorage.getItem('dataIkan')) || [];


    dataSimpan.push(dataBaru);

 
    localStorage.setItem('dataIkan', JSON.stringify(dataSimpan));

    
    window.location.href = 'data.html';
  });

 
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
    );
  }

  const prediksiSection = document.getElementById('prediksi');

  function animatePrediksi() {
    if (isInViewport(prediksiSection)) {
      prediksiSection.classList.add('active');
      window.removeEventListener('scroll', animatePrediksi);
    }
  }

  window.addEventListener('scroll', animatePrediksi);
  window.addEventListener('load', animatePrediksi);

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
  }


  function animateForm() {
    if (isInViewport(lautForm)) {
      lautForm.classList.add('animate');
      window.removeEventListener('scroll', animateForm);
    }
  }

  window.addEventListener('scroll', animateForm);
  window.addEventListener('load', animateForm);