<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$id = trim($data['id']);
$namaobat = trim($data['namaobat']);
$penyimpanan = trim($data['penyimpanan']);
$stok = trim($data['stok']);
$unit = trim($data['unit']);
$kategori = trim($data['kategori']);
$kadaluwarsa = trim($data['kadaluwarsa']);
$deskripsi = trim($data['deskripsi']);
$namapemasok = trim($data['namapemasok']);

//jika nama matakuliah dan keterangan tidak kosong 
if ($id != '' and
    $namaobat != '' and 
    $penyimpanan != ''  and 
    $stok != ''  and 
    $unit != '' and 
    $kategori != ''  and 
    $kadaluwarsa != ''  and 
    $deskripsi != '' and 
    $namapemasok != '') {
        
    $query = mysqli_query($koneksi, "UPDATE obat SET namaobat='$namaobat',penyimpanan='$penyimpanan', stok='$stok', unit='$unit', kategori='$kategori', kadaluwarsa='$kadaluwarsa', deskripsi='$deskripsi', namapemasok='$namapemasok' WHERE id='$id'");
    $pesan['status'] = 'berhasil';
} else {
    $pesan['status'] = 'gagal';
}
echo json_encode($pesan); 
echo mysqli_error($koneksi);
