document.getElementById("valueForm").addEventListener("submit"), function(event) {
    event.preventDefault();

    const valures = [
        parseInt(document.getElementById("value1"). value, 10),
        parseInt(document.getElementById("value2"). value, 10),
        parseInt(document.getElementById("value3"). value, 10),
        parseInt(document.getElementById("value4"). value, 10),
        parseInt(document.getElementById("value5"). value, 10)
    ];

    const randomIndex = Math.floor(Math.random() * valures.length);
    const randomValue = values[randmIndex];

    document.getElementById("result").textContent = 'Valor sorteado: ${randomValue}' ;
};