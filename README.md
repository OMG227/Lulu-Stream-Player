# LULU PLAYER — Brutalist

Static website untuk Vercel dengan UI brutalist dan input URL embed LuluStream langsung dari halaman.

## Cara pakai

1. Buka website.
2. Paste URL embed/player LuluStream pada kolom **EMBED URL**.
3. Klik **LOAD PLAYER ↗**.
4. URL terakhir otomatis disimpan di browser (`localStorage`).
5. Gunakan **CLEAR** untuk menghapus player dan URL tersimpan.

## Deploy

Push folder ini ke GitHub lalu import repository ke Vercel.

## Catatan

Browser hanya bisa menampilkan embed jika server/player tujuan mengizinkan embedding melalui iframe (misalnya tidak memblokir dengan `X-Frame-Options` atau CSP `frame-ancestors`). Gunakan URL/player yang memang disediakan untuk embedding dan sesuai dengan izin serta ketentuan layanan LuluStream.
