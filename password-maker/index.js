const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');


// le lowercase.checked vient du fait que un id sur un checkbox pas besoin de le déclarer le js le reconnait
// console.log(lowercase.checked);
// Math.floor c'est pour enlever les virgules (0,7) et arrondie a l'unité inférieur
function generatePassword() {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0){
        alert('Veuillez sélectionner des critères');
        return;
    }

    for (i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)];
        console.log(password);
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy');

    generateButton.textContent = "Copié";

    setTimeout(() => {
        generateButton.textContent ="Générer mot de passe";
    }, 2000);
}

generateButton.addEventListener('click', generatePassword);