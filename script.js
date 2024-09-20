// Data acak untuk berbagai atribut karakter
const races = ['Elf', 'Manusia', 'Orc', 'Dwarf', 'Naga'];
const guilds = ['Guild Petualang', 'Guild Penyihir', 'Guild Ksatria', 'Guild Pemburu'];
const skills = ['Fireball', 'Healing', 'Invisibility', 'Sword Mastery', 'Archery', 'Summoning', 'Stealth', 'Lightning Strike', 'Earthquake', 'Water Manipulation', 'Mind Control', 'Teleportation'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk mengambil beberapa skill acak
function getRandomSkills(arr, count) {
    let selectedSkills = [];
    while (selectedSkills.length < count) {
        let skill = getRandomItem(arr);
        if (!selectedSkills.includes(skill)) {
            selectedSkills.push(skill);
        }
    }
    return selectedSkills;
}

function generateCharacter() {
    const name = document.getElementById('nameInput').value;
    
    if (name === "") {
        alert("Masukkan nama karakter!");
        return;
    }

    // Generate data acak
    const race = getRandomItem(races);
    const level = getRandomNumber(1, 100);
    const guild = getRandomItem(guilds);
    const strength = getRandomNumber(10, 100);
    const mana = getRandomNumber(10, 100);
    const health = getRandomNumber(10, 100);
    const agility = getRandomNumber(10, 100);
    const selectedSkills = getRandomSkills(skills, getRandomNumber(2, 5)); // Mendapatkan 2 hingga 5 skill

    // Menampilkan deskripsi karakter dengan animasi
    const outputDiv = document.getElementById('output');
    const output = `
        <h2 class="animate__animated animate__fadeInDown">Nama: ${name}</h2>
        <p class="animate__animated animate__fadeInUp"><strong>Ras:</strong> ${race}</p>
        <p class="animate__animated animate__fadeInUp"><strong>Level:</strong> ${level}</p>
        <p class="animate__animated animate__fadeInUp"><strong>Guild:</strong> ${guild}</p>
        <h3 class="animate__animated animate__fadeInUp">Atribut Kekuatan:</h3>
        <ul class="animate__animated animate__fadeInUp">
            <li><strong>Strength:</strong> ${strength}/100</li>
            <li><strong>Mana:</strong> ${mana}/100</li>
            <li><strong>Health:</strong> ${health}/100</li>
            <li><strong>Agility:</strong> ${agility}/100</li>
        </ul>
        <h3 class="animate__animated animate__fadeInUp">Skill Fantasi:</h3>
        <ul class="animate__animated animate__fadeInUp">
            ${selectedSkills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;

    outputDiv.innerHTML = output;
    outputDiv.style.display = "block";
    outputDiv.classList.add("animate__fadeIn"); // Menambahkan animasi fade-in saat hasil muncul
}
