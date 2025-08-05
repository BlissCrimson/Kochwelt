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


//functions for calculatior
//Recept for Rinderbraten
function getValue_braten_recipe() {
    event.preventDefault(); //Bricht das Ereignis zur gehörenden Standardaktion ab, in dem Fall verhindert es ein Absenden eines Formulars
    //Deklaration
    let i, y, y_string, y_new_string;       //Erforderliche Variablen
    let x;                                  //Variable für ID
    let x_string;                           //Variable für String-Number-Umwandlung
    const ingredients = [];                 //Array für 1 Portionenangabe
    let ingredients_new = [];               //Array für neue Zutatenanzahl

    //Initialisierung
    ingredients[0] = 0.3;    //Rinderfleisch in kg
    ingredients[1] = 0.8;    //Knoblauch
    ingredients[2] = 0.6;    //Zwiebeln
    ingredients[3] = 26;     //Rotwein in ml
    ingredients[4] = 50;     //Rinderbrühe in ml
    ingredients[5] = 0.4;    //Öl in EL

    x = document.getElementById('portionen');   //Portionenanzahl aus dem Input holen
    x_string = x.value;   //Umwandlung von String in Number
    if (x_string < 1 || x_string > 20) {
        alert('Bitte gebe eine Zahl zwischen 1 und 20 ein');
        x.value = 5;
        x_string = x.value;
        calculation(x_string);
    }
    else {
        calculation(x_string);
    }

    //Berechnung
    function calculation(werte) {
        for (i = 0; i < 6; i++) {  //for-Schleife: Anfang: Array[0], Läuft bis Array[9], Erhöhung um 1 im Array bei jedem Durchgang
            y = werte * ingredients[i];   //Berechnung der Mengen; i beschreibt den Ablauf im Array, zutaten[i] wird in jeden Durchlauf neu initialisiert (neuer Wert); y wird immer wieder überschrieben
            y = y.toFixed(2);   //Konvertiert die Zahl zu einem String mit einer festgelegten Anzahl von Nachkommastellen
            y = y.replace('.', ',');  //Ersetzen eines alten Strings durch einen neuen String (Punkt durch Komma ersetzt)
            ingredients_new[i] = y;  //Zuweisung der neuen Zutatenanzahl an einem neuen Array
        }

        //Überschreibung der Zutatenmenge
        document.getElementById('ingridents1').innerHTML = ingredients_new[0];
        document.getElementById('ingridents2').innerHTML = ingredients_new[1];
        document.getElementById('ingridents3').innerHTML = ingredients_new[2];
        document.getElementById('ingridents4').innerHTML = ingredients_new[3];
        document.getElementById('ingridents5').innerHTML = ingredients_new[4];
        document.getElementById('ingridents8').innerHTML = ingredients_new[5];
    }

}

function getValue_paprikapfanne_recipe() {
    event.preventDefault();
    let i, y, y_string, y_new_string;
    let x;
    let x_string;
    const ingredients = [];
    let ingredients_new = [];

    //Initialisierung
    ingredients[0] = 0.5;   //Zwiebel
    ingredients[1] = 0.5;   //Knoblauch
    ingredients[2] = 0.25;  //Chilischote
    ingredients[3] = 0.75;  //Tomatenmark in EL
    ingredients[4] = 0.75;  //Paprikaschoten 
    ingredients[5] = 75;    //Joghurt in g
    ingredients[6] = 0.25;  //Paprikapulver edelsüß in TL
    ingredients[7] = 0.25;  //Paprikapulver rosenscharf in TL
    ingredients[8] = 0.25;  //Basilikum in Handvoll
    ingredients[9] = 0.5;   //Reis in Tassen

    x = document.getElementById('portionen');
    x_string = x.value;
    if (x_string < 1 || x_string > 20) {
        alert('Bitte gebe eine Zahl zwischen 1 und 20 ein');
        x.value = 5;
        x_string = x.value;
        calculation(x_string);
    }
    else {
        calculation(x_string);
    }

    //Berechnung
    function calculation(werte) {
        for (i = 0; i < 10; i++) {
            y = werte * ingredients[i];
            y = y.toFixed(2);
            y = y.replace('.', ',');
            ingredients_new[i] = y;
        }

        //Überschreibung der Zutatenmenge
        document.getElementById('ingridents1').innerHTML = ingredients_new[0];
        document.getElementById('ingridents2').innerHTML = ingredients_new[1];
        document.getElementById('ingridents3').innerHTML = ingredients_new[2];
        document.getElementById('ingridents4').innerHTML = ingredients_new[3];
        document.getElementById('ingridents5').innerHTML = ingredients_new[4];
        document.getElementById('ingridents6').innerHTML = ingredients_new[5];
        document.getElementById('ingridents7').innerHTML = ingredients_new[6];
        document.getElementById('ingridents8').innerHTML = ingredients_new[7];
        document.getElementById('ingridents9').innerHTML = ingredients_new[8];
        document.getElementById('ingridents10').innerHTML = ingredients_new[9];
    }

}

//Recept for Spaghettisalat
function getValue_salad_recipe() {
    event.preventDefault();
    //Deklaration
    let i, y, y_string, y_new_string;
    let x;
    let x_string;
    const ingredients = [];
    let ingredients_new = [];

    //Spaghettisalat
    ingredients[0] = 0.5;     //Spaghetti
    ingredients[1] = 1.75;    //Tomaten
    ingredients[2] = 1.75;    //Eier
    ingredients[3] = 0.25;    //Miracel Whip
    ingredients[4] = 0.125;   //Sahne

    x = document.getElementById('portionen');
    x_string = x.value;
    if (x_string < 1 || x_string > 20) {
        alert('Bitte gebe eine Zahl zwischen 1 und 20 ein');
        x.value = 4;
        x_string = x.value;
        calculation(x_string);
    }
    else {
        calculation(x_string);
    }

    //Berechnung
    function calculation(werte) {
        for (i = 0; i < 6; i++) {
            y = werte * ingredients[i];
            y = y.toFixed(2);
            y = y.toString();
            y = y.replace('.', ',');
            ingredients_new[i] = y;
        }

        //Überschreibung der Zutatenmenge
        document.getElementById('ingridents1').innerHTML = ingredients_new[0];
        document.getElementById('ingridents2').innerHTML = ingredients_new[1];
        document.getElementById('ingridents3').innerHTML = ingredients_new[2];
        document.getElementById('ingridents4').innerHTML = ingredients_new[3];
        document.getElementById('ingridents5').innerHTML = ingredients_new[4];
    }

}
