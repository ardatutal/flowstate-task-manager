# flowstate — Akıllı Odak ve Görev Yönetim Paneli

**flowstate**, günlük odaklanma seanslarını ve öncelikli görevleri tek ekranda takip etmeyi sağlayan, verileri tarayıcı belleğinde (`LocalStorage`) saklayan modern bir görev yönetim uygulamasıdır.

## Canlı Uygulama Linki
- **Canlı Yayın:** https://flowstate-task-manager-zeta.vercel.app

## Ekran Görüntüsü
<img width="2249" height="1172" alt="203" src="https://github.com/user-attachments/assets/ffcf8b46-1073-47c9-8673-8f6abd819e2b" />



## Özellikler
- **Hızlı Görev Ekleme:** Odaklanılacak yeni görevleri anında listeye ekleme.
- **Durum Takibi:** Görev metnine tıklayarak tamamlandı/bekliyor geçişi yapma ve görsel durum ayrımı.
- **Kalıcı Depolama (`LocalStorage`):** Eklenen ve güncellenen görevlerin sayfa yenilense bile tarayıcıda korunması.
- **Kayıt Silme:** Tamamlanan veya vazgeçilen görevleri listeden kaldırma.

## Kullanılan Teknolojiler
- **Frontend:** React, Vite, JavaScript (ES6+)
- **Stil & Tasarım:** Modern CSS (Flexbox, koyu tema arayüz tasarımı)
- **Veri Saklama:** Web Storage API (`LocalStorage`)
- **Geliştirme & Yayın Ortamı:** StackBlitz, GitHub, Vercel / Netlify

## Kurulum ve Çalıştırma
Projeyi yerel bilgisayarınızda çalıştırmak için:

```bash
git clone [https://github.com/ardatutal/vitejs-vite-gdonuptp.git](https://github.com/ardatutal/vitejs-vite-gdonuptp.git)
cd vitejs-vite-gdonuptp
npm install
npm run dev
