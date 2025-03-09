console.log("Day 1 Bonus");
console.log("-".repeat(20));

function welcome() {
    for (let i = 1; i <= 6; i++) {
        document.write(`<h${i}>welcome to my page</h${i}>`);
    }
}
welcome();


// --------------------------------------------------------
var detaile = document.getElementById('details');

function tableDetails() {

    do {
        var name = prompt("Enter Your Name: ");
        if (name && isNaN(name)) {
            break;
        }
    } while (true);

    do {
        var birthYear = prompt("Enter Your birth year (must be less than 2010): ");
        birthYear = parseInt(birthYear);

        if (!isNaN(birthYear && birthYear < 2010)) {
            break;
        }
    } while (true);

    var age = 2025 - birthYear;

    var div = document.querySelector('div');

    div.innerHTML = `
        <table style="border:1px solid black;">
            <tbody>
                <tr style="border:1px solid black;padding:15px;">
                    <td style="border:1px solid black;padding:15px;">Name:</td>
                    <td style=" border:1px solid black;padding:15px;"> ${name}</td>
                </tr>
                <tr style="border:1px solid black;padding:15px;">
                    <td style="border:1px solid black;padding:15px;">Birth Year: </td>
                    <td style=" border:1px solid black;padding:15px;">${birthYear}</td>
                </tr>
                <tr style="border:1px solid black;padding:15px;">
                    <td style="border:1px solid black;padding:15px;">Age: </td>
                    <td style=" border:1px solid black;padding:15px;"> ${age}</td>
                </tr>
            </tbody>
        </table>
        `;
}

detaile.onclick = function () {
    tableDetails();
}

//------------------------------------------------------------------------------------------


