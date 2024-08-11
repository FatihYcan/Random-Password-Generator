function generatePassword() {
  var harfler = "abcdefghijklmnopqrstuvwxyz";
  var semboller = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  var rakamlar = "0123456789";

  var uzunluk = 10;
  var gerekenSayi = 3;
  var gerekenSembolCift = 2;
  var gerekenSemboleTek = 1;

  var sifre = "";

  // Yardımcı fonksiyon: rastgele bir karakter seçme
  function rastgeleSec(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  // Büyük harf ekle
  sifre += rastgeleSec(harfler.toUpperCase());

  // Küçük harf ekle
  sifre += rastgeleSec(harfler);

  // Sayılar eklemek için döngü
  for (var i = 0; i < gerekenSayi; i++) {
    sifre += rastgeleSec(rakamlar);
  }

  // Semboller eklemek için döngü
  for (var i = 0; i < gerekenSembolCift; i++) {
    sifre += rastgeleSec(semboller);
  }

  for (var i = 0; i < gerekenSemboleTek; i++) {
    sifre += rastgeleSec(semboller);
  }

  // Geri kalan karakterleri rastgele seçerek ekle
  for (var i = sifre.length; i < uzunluk; i++) {
    var secim = Math.floor(Math.random() * 3); // 0, 1 veya 2
    if (secim === 0) {
      sifre += rastgeleSec(harfler);
    } else if (secim === 1) {
      sifre += rastgeleSec(rakamlar);
    } else {
      sifre += rastgeleSec(semboller);
    }
  }

  // Şifreyi karıştır
  sifre = sifre
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  // Şifreyi ekrana yazdır
  document.getElementById("password").textContent =
    "Your Password is: " + sifre;
}

// Kod başlangıcında bir kez çağrılır
generatePassword();
