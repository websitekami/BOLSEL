const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const tableBody = document.querySelector('#dataTable th')
const searchInputMobile = document.getElementById('searchInputMobile');

  searchToggle.addEventListener('click', () => {
    if (searchBar.classList.contains('hidden')) {
      searchBar.classList.remove('hidden');
      searchInputMobile.focus();
    } else {
      searchBar.classList.add('hidden');
      searchInputMobile.value = ''; 
    }
  });

  document.getElementById("lautForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const kelompok = document.getElementById("kelompok").value;
  const jenis = document.getElementById("jenis").value;
  const tanggal = document.getElementById("tanggal").value;
  const lokasi = document.getElementById("lokasi").value;

 
  const dataBaru = {
    kelompok,
    jenis,
    tanggal,
    lokasi
  };


  const existingData = JSON.parse(localStorage.getItem("dataKelompok")) || [];

  existingData.push(dataBaru);

  localStorage.setItem("dataKelompok", JSON.stringify(existingData));


  this.reset();

  window.location.href = "data.html";
});
