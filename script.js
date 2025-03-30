// Oyuncu bakiyelerini yükle
let balances = JSON.parse(localStorage.getItem("balances")) || [15000000, 15000000, 15000000, 15000000];

// Şu an girilen değer
let inputAmount = 0;
let multiplier = 1;

// Arayüzü güncelle
function updateUI() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`balance${i}`).innerText = balances[i - 1].toLocaleString();
    }
    document.getElementById("amountInput").value = inputAmount.toLocaleString();
}

// Rakam ekleme
function addNumber(num) {
    inputAmount = inputAmount * 10 + num;
    updateUI();
}

// K ve M tuşlarını ayarla
function setMultiplier(value) {
    inputAmount *= value;
    updateUI();
}

// Bakiyeyi güncelleme fonksiyonu
function updateBalance(type) {
    let playerIndex = document.getElementById("playerSelect").value - 1;

    if (type === "+") {
        balances[playerIndex] += inputAmount;
    } else if (type === "-") {
        balances[playerIndex] -= inputAmount;
    }

    localStorage.setItem("balances", JSON.stringify(balances)); // Kaydet
    inputAmount = 0; // Girişi sıfırla
    updateUI();
}

// Seçilen oyuncuya 2 milyon ekleme fonksiyonu
function baslangic() {
    let playerIndex = document.getElementById("playerSelect").value - 1; // Seçili oyuncu

    // Seçilen oyuncuya 2 milyon ekle
    balances[playerIndex] += 2000000;

    // Yeni bakiyeleri kaydet
    localStorage.setItem("balances", JSON.stringify(balances));

    // UI'yı güncelle
    updateUI();
}
// Bütün bakiyeleri sıfırla
//function resetBalances() {
 //   balances = [15000000, 15000000, 15000000, 15000000]; // Hepsini sıfırla
/////    localStorage.setItem("balances", JSON.stringify(balances)); // Yeni bakiyeleri kaydet
 //   inputAmount = 0; // Girişi sıfırla
//    updateUI();
//}

function resetBalances() {
    // Kullanıcıdan onay al
    if (confirm("Tüm bakiyeleri sıfırlamak istediğinizden emin misiniz?")) {
        // Eğer kullanıcı onay verirse
        balances = [15000000, 15000000, 15000000, 15000000]; // Bakiyeleri sıfırla
        localStorage.setItem("balances", JSON.stringify(balances)); // Yeni bakiyeleri kaydet
        inputAmount = "0"; // Girişi sıfırla
        updateUI(); // UI'yı güncelle
    } else {
        // Kullanıcı onaylamazsa, işlem yapılmaz
        console.log("Sıfırlama işlemi iptal edildi.");
    }
}


// Son basamağı silme
// Son basamağı silme
function removeLastDigit() {
    // Eğer inputAmount 0'dan büyükse, son basamağı sil
    if (inputAmount > 0) {
        inputAmount = Math.floor(inputAmount / 10);
    } else {
        inputAmount = 0;
    }
    updateUI();
}
// Sayfa yüklendiğinde UI’yi güncelle
updateUI();
