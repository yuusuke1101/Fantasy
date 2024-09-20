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

    // Menampilkan deskripsi karakter
    const output = `
        <h2>Nama: ${name}</h2>
        <p>Ras: ${race}</p>
        <p>Level: ${level}</p>
        <p>Guild: ${guild}</p>
        <h3>Atribut Kekuatan:</h3>
        <ul>
            <li>Strength: ${strength}/100</li>
            <li>Mana: ${mana}/100</li>
            <li>Health: ${health}/100</li>
            <li>Agility: ${agility}/100</li>
        </ul>
        <h3>Skill Fantasi:</h3>
        <ul>
            ${selectedSkills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
    document.getElementById('output').innerHTML = output;
}
