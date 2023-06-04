// Data Jadwal Pesawat
let jadwalPesawat = [
    { id: 1, asal: 'CGK', tujuan: 'DPS', maskapai: 'Garuda Indonesia', tanggal: '2023-06-01' },
    { id: 2, asal: 'SUB', tujuan: 'CGK', maskapai: 'AirAsia', tanggal: '2023-06-02' },
    { id: 3, asal: 'DPS', tujuan: 'SUB', maskapai: 'Lion Air', tanggal: '2023-06-03' },
  ];
  
  // Fungsi untuk mencari jadwal pesawat berdasarkan asal, tujuan, dan tanggal
  function cariJadwalPesawat(asal, tujuan, tanggal) {
    return jadwalPesawat.filter(jadwal => {
      return jadwal.asal === asal && jadwal.tujuan === tujuan && jadwal.tanggal === tanggal;
    });
  }
  
  // Fungsi untuk menambahkan jadwal pesawat
  function tambahJadwalPesawat(jadwal) {
    jadwalPesawat.push(jadwal);
  }
  
  // Fungsi untuk menghapus jadwal pesawat berdasarkan ID
  function hapusJadwalPesawat(id) {
    jadwalPesawat = jadwalPesawat.filter(jadwal => jadwal.id !== id);
  }
  
  // Fungsi untuk mengedit jadwal pesawat berdasarkan ID
  function editJadwalPesawat(id, jadwalBaru) {
    jadwalPesawat = jadwalPesawat.map(jadwal => {
      if (jadwal.id === id) {
        return { ...jadwal, ...jadwalBaru };
      }
      return jadwal;
    });
  }
  
  // Contoh penggunaan
  const hasilPencarian = cariJadwalPesawat('CGK', 'DPS', '2023-06-01');
  console.log(hasilPencarian);
  
  const jadwalBaru = { id: 4, asal: 'DPS', tujuan: 'CGK', maskapai: 'Citilink', tanggal: '2023-06-04' };
  tambahJadwalPesawat(jadwalBaru);
  console.log(jadwalPesawat);
  
  hapusJadwalPesawat(3);
  console.log(jadwalPesawat);
  
  const jadwalBaru2 = { asal: 'CGK', tujuan: 'DPS', maskapai: 'AirAsia', tanggal: '2023-06-01' };
  editJadwalPesawat(1, jadwalBaru2);
  console.log(jadwalPesawat);  