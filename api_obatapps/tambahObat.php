<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$namaobat = trim($data['namaobat']);
$penyimpanan = trim($data['penyimpanan']);
$stok = trim($data['stok']);
$unit = trim($data['unit']);
$kategori = trim($data['kategori']);
$kadaluwarsa = trim($data['kadaluwarsa']);
$deskripsi = trim($data['deskripsi']);
$namapemasok = trim($data['namapemasok']);

//jika nama matakuliah dan keterangan tidak kosong 
if ($namaobat != '' and 
    $penyimpanan != ''  and 
    $stok != ''  and 
    $unit != '' and 
    $kategori != ''  and 
    $kadaluwarsa != ''  and 
    $deskripsi != '' and 
    $namapemasok != '') {
        
    $query = mysqli_query($koneksi, "INSERT INTO obat(namaobat, penyimpanan, stok, unit, kategori, kadaluwarsa, deskripsi, namapemasok) 
    values('$namaobat', '$penyimpanan', '$stok', '$unit', '$kategori', '$kadaluwarsa', '$deskripsi', '$namapemasok')");
    
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan); 
echo mysqli_error($koneksi);
