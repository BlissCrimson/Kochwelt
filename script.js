// function for contact.html
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mpwlddqo", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}



// function showSidebar //



function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"
}


//function for calculatior

function getValue() {
    event.preventDefault(); //Bricht das Ereignis zur gehörenden Standardaktion ab, in dem Fall verhindert es ein Absenden eines Formulars
    
    //Mengen für eine Portion im Array
    const zutaten = []; //Deklaration eines Array
    //Initialisierung des Arrays mit vorgegebenen Werten
    zutaten[0] = 0.5;   //Zwiebel
    zutaten[1] = 0.5;   //Knoblauch
    zutaten[2] = 0.25;  //Chilischote
    zutaten[3] = 0.75;  //Tomatenmark in EL
    zutaten[4] = 0.75;  //Paprikaschoten 
    zutaten[5] = 75;  //Joghurt in g
    zutaten[6] = 0.25;  //Paprikapulver edelsüß in TL
    zutaten[7] = 0.25;  //Paprikapulver rosenscharf in TL
    zutaten[8] = 0.25;  //Basilikum in Handvoll
    zutaten[9] = 0.5;   //Reis in Tassen

    let zutaten_new = []; //Deklaration eines neuen Array für die fertige Berechnung
    let x = document.getElementById('portionen');   //Holt die Portionenanzahl aus dem Input
    let x_string = x.value; //Umwandlung von String in Number
    let i, y, y_string, y_new_string;  //Deklaration (Erschaffung) erforderlicher Variablen

    for (i = 0; i < 10; i++) {  //for-Schleife: Anfang: Array[0], Läuft bis Array[9], Erhöhung um 1 im Array bei jedem Durchgang
        y = x_string * zutaten[i];   //Berechnung der Mengen; i beschreibt den Ablauf im Array, zutaten[i] wird in jeden Durchlauf neu initialisiert (neuer Wert); y wird immer wieder überschrieben
        y_string = y.toString();    //Umwandlung von Number in String
        y_new_string = y_string.replace('.', ',');  //Ersetzen eines alten Strings durch einen neuen String (Punkt durch Komma ersetzt)
        zutaten_new[i] = y_new_string;  //Zuweisung der neuen Zutatenanzahl an einem neuen Array
    }

    //Überschreibung der Zutatenmenge
    document.getElementById('ingridents1').innerHTML = zutaten_new[0];  //Zwiebel
    document.getElementById('ingridents2').innerHTML = zutaten_new[1];  //Knoblauch
    document.getElementById('ingridents3').innerHTML = zutaten_new[2];  //Chilischote
    document.getElementById('ingridents4').innerHTML = zutaten_new[3];  //Tomatenmark in EL
    document.getElementById('ingridents5').innerHTML = zutaten_new[4];  //Paprikaschoten 
    document.getElementById('ingridents6').innerHTML = zutaten_new[5];  //Joghurt in g
    document.getElementById('ingridents7').innerHTML = zutaten_new[6];  //Paprikapulver edelsüß in TL
    document.getElementById('ingridents8').innerHTML = zutaten_new[7];  //Paprikapulver rosenscharf in_new TL
    document.getElementById('ingridents9').innerHTML = zutaten_new[8];  //Basilikum in Handvoll
    document.getElementById('ingridents10').innerHTML = zutaten_new[9];  //Reis in Tassen
}
