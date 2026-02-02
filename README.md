# EXPOCRAFT - Fuar Tasarım Web Sitesi Admin Paneli

## 📋 İçindekiler

Bu paket, fuar tasarım firmanız için hazırlanmış **tam özellikli web sitesi** ve **admin paneli** içermektedir.

### Dosyalar:

**Web Sitesi Sayfaları:**
- `index.html` - Ana Sayfa
- `hizmetler.html` - Hizmetler Sayfası
- `portfolyo.html` - Portföy Sayfası
- `surec.html` - Çalışma Süreci Sayfası
- `iletisim.html` - İletişim Sayfası

**Stil ve Script:**
- `style.css` - Ana stil dosyası
- `script.js` - Ana JavaScript dosyası

**Admin Panel:**
- `admin.html` - Admin panel ana sayfası
- `admin-style.css` - Admin panel stilleri
- `admin-script.js` - Admin panel JavaScript

---

## 🚀 Kurulum

### 1. Basit Yöntem (Bilgisayarınızda Test)

1. Tüm dosyaları bir klasöre koyun
2. `index.html` dosyasına çift tıklayın
3. Site tarayıcınızda açılacaktır

### 2. Online Yayınlama (Netlify - ÖNERİLEN)

**En kolay ve ücretsiz yöntem:**

1. [netlify.com](https://netlify.com) adresine gidin
2. "Sign up" ile ücretsiz hesap açın
3. "Sites" → "Add new site" → "Deploy manually"
4. **Tüm dosyaları** sürükleyip bırakın
5. 30 saniye içinde siteniz yayında!
6. Ücretsiz bir URL alırsınız: `sitenizadi.netlify.app`

**Özel domain eklemek için:**
- Netlify'da "Domain settings" → "Add custom domain"
- Kendi domain'inizi bağlayabilirsiniz

### 3. GitHub Pages

1. GitHub'da hesap açın
2. Yeni repository oluşturun
3. Dosyaları yükleyin
4. Settings → Pages → Source: "main branch"
5. Siteniz yayında: `kullaniciadi.github.io/repo-adi`

### 4. Klasik Hosting

Eğer domain + hosting satın aldıysanız:

1. FTP programı (FileZilla) ile hosting'e bağlanın
2. Tüm dosyaları `public_html` veya `www` klasörüne yükleyin
3. `index.html` ana dizinde olmalı

---

## 🎛️ Admin Panel Kullanımı

### Admin Panel'e Giriş

1. Tarayıcınızda `admin.html` dosyasını açın
2. Veya sitenizi yayınladıysanız: `siteadresiniz.com/admin.html`

### Admin Panel Özellikleri

**Sol menüden erişebileceğiniz bölümler:**

📊 **Dashboard**
- Genel istatistikler ve özet bilgiler

🎨 **Ana Sayfa Hero**
- Hero başlık ve alt başlığı
- Buton metinleri
- Arka plan görseli URL'i

ℹ️ **Hakkımızda**
- Firma tanıtım metinleri
- Özellikler listesi

🔧 **Hizmetler**
- Hizmet ekle/düzenle/sil
- Her hizmet için: başlık, icon, açıklama

📂 **Portföy**
- Proje ekle/düzenle/sil
- Kategori, boyut, lokasyon bilgileri

⚙️ **Süreç**
- Çalışma adımlarını düzenleme

💬 **Yorumlar**
- Müşteri yorumu ekle/düzenle/sil
- İsim, pozisyon, yorum metni

📧 **İletişim Bilgileri**
- Adres, telefon, email
- Çalışma saatleri
- Sosyal medya linkleri

📈 **İstatistikler**
- Tamamlanan proje sayısı
- Deneyim yılı
- Müşteri sayısı
- Memnuniyet oranı

⚙️ **Genel Ayarlar**
- Site adı ve slogan
- Footer metni
- Tema renkleri

### Değişiklikleri Kaydetme

1. İstediğiniz değişiklikleri yapın
2. Sağ üstteki **"💾 Değişiklikleri Kaydet"** butonuna tıklayın
3. Değişiklikler tarayıcınızın localStorage'ında saklanır

### Verileri Yedekleme

1. **"📥 Verileri Dışa Aktar"** butonuna tıklayın
2. JSON dosyası indirilir
3. Bu dosyayı saklayarak yedek alın

---

## 📝 Önemli Notlar

### Veri Saklama

⚠️ **ÖNEMLİ:** Admin paneldeki değişiklikler **tarayıcınızın localStorage'ında** saklanır. Bu demek oluyor ki:

- Değişiklikler sadece o tarayıcıda geçerlidir
- Tarayıcı verilerini temizlerseniz kaybolur
- Başka bir bilgisayardan girdiğinizde görünmez

**Çözüm:** Düzenli olarak "Verileri Dışa Aktar" ile yedek alın.

### Gerçek Veritabanı Entegrasyonu

Bu admin panel **demo amaçlıdır**. Gerçek bir web sitesi için:

1. **Backend gereklidir** (PHP, Node.js, Python, vb.)
2. **Veritabanı** (MySQL, MongoDB, vb.)
3. Veya **Headless CMS** kullanın (Strapi, Contentful, Sanity)

---

## 🎨 Özelleştirme

### Renkleri Değiştirme

`style.css` dosyasının başındaki değişkenleri düzenleyin:

```css
:root {
    --primary: #1a1a1a;      /* Ana renk */
    --secondary: #e74c3c;    /* Vurgu rengi */
    --accent: #f39c12;       /* İkincil vurgu */
}
```

### Fontları Değiştirme

HTML dosyalarının `<head>` bölümündeki Google Fonts linkini değiştirin.

### Görselleri Değiştirme

- Hero bölümü görseli: Admin panelden veya CSS'den değiştirilebilir
- Kendi görsellerinizi kullanabilirsiniz

---

## 🔐 Güvenlik

### Admin Panel Güvenliği

⚠️ **ÖNEMLİ GÜVENLİK UYARISI:**

Bu admin panel **şifre koruması YOK**. Sitenizi yayınlarken:

1. `admin.html` dosyasını **farklı bir isimle** kaydedin (örn: `gizli-yonetim-123.html`)
2. Bu dosya adını kimseyle paylaşmayın
3. Veya `.htaccess` ile şifre koyun:

```apache
<Files "admin.html">
AuthType Basic
AuthName "Admin Area"
AuthUserFile /path/.htpasswd
Require valid-user
</Files>
```

### Gerçek Güvenlik İçin

Üretim ortamı için:
- Backend authentication sistemi
- Kullanıcı girişi (login/logout)
- Rol bazlı yetkilendirme
- SSL sertifikası (HTTPS)

---

## 📱 Responsive Tasarım

Site ve admin panel tüm cihazlarda çalışır:
- ✅ Masaüstü bilgisayarlar
- ✅ Laptop
- ✅ Tablet
- ✅ Mobil telefonlar

---

## 🆘 Sorun Giderme

### Değişiklikler Görünmüyor

1. Tarayıcı cache'ini temizleyin (Ctrl+F5)
2. "Değişiklikleri Kaydet" butonuna tıkladığınızdan emin olun
3. localStorage'ın aktif olduğunu kontrol edin

### Admin Panel Açılmıyor

1. Tüm dosyaların aynı klasörde olduğundan emin olun
2. Tarayıcı konsolunu açın (F12) ve hata mesajlarını kontrol edin

### Sitede Değişiklikler Yansımıyor

Admin panel sadece verileri localStorage'a kaydeder. Gerçek sitede görünmesi için:
- JavaScript ile bu verileri HTML'e yazdırmanız gerekir
- Veya backend entegrasyonu yapın

---

## 🎓 Sonraki Adımlar

### Profesyonel Hale Getirmek İçin

1. **Backend Ekleyin:**
   - Node.js + Express
   - PHP + Laravel
   - Python + Django/Flask

2. **Veritabanı Kullanın:**
   - MySQL
   - PostgreSQL
   - MongoDB

3. **Headless CMS:**
   - Strapi
   - Contentful
   - Sanity.io

4. **Form İşleme:**
   - İletişim formunu gerçek email gönderecek şekilde ayarlayın
   - FormSpree, EmailJS gibi servisler kullanın

---

## 📞 Destek

Herhangi bir sorunuz olursa:
- README dosyasını tekrar okuyun
- Tarayıcı konsolundaki hata mesajlarını kontrol edin
- Google'da arama yapın

---

## ✅ Kontrol Listesi

Siteyi yayınlamadan önce:

- [ ] Tüm iletişim bilgileri güncellendi
- [ ] Logo ve görseller yüklendi
- [ ] Tüm sayfalarda test yapıldı
- [ ] Mobil uyumluluk kontrol edildi
- [ ] İletişim formu test edildi
- [ ] Admin panel dosya adı değiştirildi
- [ ] SEO meta tagları eklendi
- [ ] Google Analytics eklendi (opsiyonel)
- [ ] SSL sertifikası aktif

---

## 📄 Lisans

Bu proje size özel olarak hazırlanmıştır. İstediğiniz gibi kullanabilir, değiştirebilir ve yayınlayabilirsiniz.

---

**İyi çalışmalar! 🚀**