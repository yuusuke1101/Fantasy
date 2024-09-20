// Data acak untuk berbagai atribut karakter
const races = ['Elf', 'Manusia', 'Orc', 'Dwarf', 'Naga'];
const guilds = ['Guild Petualang', 'Guild Penyihir', 'Guild Ksatria', 'Guild Pemburu'];
const skills = ['Fireball', 'Healing', 'Invisibility', 'Sword Mastery', 'Archery', 'Summoning', 'Stealth'];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    const health = getRandomNumber(10, 100);
    const skill = getRandomItem(skills);

    // Menampilkan deskripsi karakter
    const output = `
        <h2>Nama: ${name}</h2>
        <p>Ras: ${race}</p>
        <p>Level: ${level}</p>
        <p>Guild: ${guild}</p>
        <p>Kekuatan: ${strength}/100</p>
        <p>Kesehatan: ${health}/100</p>
        <p>Skill Fantasi: ${skill}</p>
    `;
    document.getElementById('output').innerHTML = output;
}
