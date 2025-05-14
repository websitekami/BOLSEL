const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const tableBody = document.querySelector('#dataTable th')
const searchInputMobile = document.getElementById('searchInputMobile');
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

  document.addEventListener('DOMContentLoaded', () => {
    const dataTabel = document.getElementById('dataTable');
    const dataIkan = JSON.parse(localStorage.getItem('dataIkan')) || [];

    dataIkan.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="data5">${index + 1}</td>
        <td class="data5">${item.jenis}</td>
        <td class="data5">${item.berat}</td>
        <td class="data5">${item.lokasi}</td>
        <td class="data5">
          <button class="text-red-600 hover:text-red-800" onclick="hapusDataIkan(${index})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      dataTabel.appendChild(row);
    });
  });

  function hapusDataIkan(index) {
    const dataIkan = JSON.parse(localStorage.getItem('dataIkan')) || [];
    dataIkan.splice(index, 1);
    localStorage.setItem('dataIkan', JSON.stringify(dataIkan));
    window.location.reload();
  }

  function hapusData(index) {
    const dataIkan = JSON.parse(localStorage.getItem('dataIkan')) || [];
    dataIkan.splice(index, 1);
    localStorage.setItem('dataIkan', JSON.stringify(dataIkan));
    window.location.reload();
  }

  document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("kelompokTable");
  const data = JSON.parse(localStorage.getItem("dataKelompok")) || [];

  data.forEach((item, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td class="kelompok5">${index + 1}</td>
      <td class="kelompok5">${item.kelompok}</td>
      <td class="kelompok5">${item.jenis}</td>
      <td class="kelompok5">${item.tanggal}</td>
      <td class="kelompok5">${item.lokasi}</td>
      <td class="kelompok5"><button onclick="hapusData(${index})" class="text-red-600">Hapus</button></td>
    `;
  });
});

function hapusData(index) {
  const data = JSON.parse(localStorage.getItem("dataKelompok")) || [];
  data.splice(index, 1);
  localStorage.setItem("dataKelompok", JSON.stringify(data));
  window.location.reload(); 
}
