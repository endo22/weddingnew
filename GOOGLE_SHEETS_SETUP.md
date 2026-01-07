# Setup Google Sheets untuk Wedding Wishes

Ucapan dari tamu akan tersimpan di Google Sheets secara gratis dan permanen.

## Langkah Setup:

### 1. Buat Google Spreadsheet Baru
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Rename spreadsheet menjadi "Wedding Wishes" atau nama lain
4. Rename Sheet1 menjadi "Wishes"
5. Di baris pertama, buat header:
   - A1: `ID`
   - B1: `Name`
   - C1: `Attendance`
   - D1: `Message`
   - E1: `Timestamp`

### 2. Setup Google Apps Script
1. Di Google Sheets, klik **Extensions** > **Apps Script**
2. Hapus kode default `function myFunction() {}`
3. Copy-paste semua kode dari file `google-apps-script.js` di project ini
4. Klik **Save** (icon disk atau Ctrl+S)
5. Rename project jadi "Wedding Wishes API"

### 3. Deploy sebagai Web App
1. Klik tombol **Deploy** > **New deployment**
2. Klik icon **gear** ⚙️ > pilih **Web app**
3. Setting:
   - **Description**: Wedding Wishes API
   - **Execute as**: Me
   - **Who has access**: **Anyone** (penting!)
4. Klik **Deploy**
5. **Copy URL** yang muncul (contoh: `https://script.google.com/macros/s/ABC123.../exec`)
6. Klik **Done**

### 4. Tambahkan URL ke Project
1. Buat file `.env` di root project (copy dari `.env.example`)
2. Isi dengan URL yang sudah di-copy:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```
3. Save file `.env`

### 5. Test Aplikasi
1. Restart development server: `npm run dev`
2. Buka aplikasi di browser
3. Test kirim ucapan di form
4. Cek Google Sheets - data harus muncul
5. Refresh halaman - ucapan harus tampil

## Catatan Penting:
- ✅ **Gratis selamanya** - tidak ada biaya
- ✅ **Unlimited submissions** - tidak ada batasan jumlah ucapan
- ✅ **Data tersimpan permanen** di Google Sheets
- ✅ **Bisa di-moderate** - hapus/edit ucapan spam langsung di Sheets
- ✅ **Bisa di-export** ke Excel kapan saja
- ⚠️ **Jangan share link Spreadsheet** - cukup deploy Apps Script saja
- ⚠️ **File .env jangan di-commit** ke GitHub (sudah ada di .gitignore)

## Troubleshooting:
- Jika ucapan tidak tersimpan: pastikan **Who has access** = **Anyone**
- Jika error 403: Re-deploy Apps Script dengan setting yang benar
- Jika ucapan tidak muncul: cek console browser untuk error
