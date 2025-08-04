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
    //Deklaration
    let i, y, y_string, y_new_string;       //Erforderliche Variablen
    let x1, x2, x3;                         //Variablen für IDs
    let x1_string, x2_string, x3_string;    //Variablen für String-Number-Umwandlung
    const ingredients_paprika = [];         //Array für Paprika-Reis-Pfanne
    const ingredients_braten = [];          //Array für Rinderbraten
    const ingredients_salat = [];           //Array für Spaghettisalat
    let ingredients_paprika_new = [];       //Array für neue Zutatenanzahl Paprika-Reis-Pfanne
    let ingredients_braten_new = [];        //Array für neue Zutatenanzahl Rinderbraten
    let ingredients_salat_new = [];         //Array für neue Zutatenanzahl Spaghettisalat
    //Initialisierung
    //Rinderbraten
    ingredients_braten[0] = 0.3;    //Rinderfleisch in kg
    ingredients_braten[1] = 0.8;    //Knoblauch
    ingredients_braten[2] = 0.6;    //Zwiebeln
    ingredients_braten[3] = 26;     //Rotwein in ml
    ingredients_braten[4] = 50;     //Rinderbrühe in ml
    ingredients_braten[5] = 0.4;    //Öl in EL
    //Paprika-Reis-Pfanne
    ingredients_paprika[0] = 0.5;   //Zwiebel
    ingredients_paprika[1] = 0.5;   //Knoblauch
    ingredients_paprika[2] = 0.25;  //Chilischote
    ingredients_paprika[3] = 0.75;  //Tomatenmark in EL
    ingredients_paprika[4] = 0.75;  //Paprikaschoten 
    ingredients_paprika[5] = 75;    //Joghurt in g
    ingredients_paprika[6] = 0.25;  //Paprikapulver edelsüß in TL
    ingredients_paprika[7] = 0.25;  //Paprikapulver rosenscharf in TL
    ingredients_paprika[8] = 0.25;  //Basilikum in Handvoll
    ingredients_paprika[9] = 0.5;   //Reis in Tassen
    //Spaghettisalat
    ingredients_salat[0] = 0.5;     //Spaghetti
    ingredients_salat[1] = 1.75;    //Tomaten
    ingredients_salat[2] = 1.75;    //Eier
    ingredients_salat[3] = 0.25;    //Miracel Whip
    ingredients_salat[4] = 0.125;   //Sahne

    //Portionenanzahl aus dem Input holen
    x1 = document.getElementById('portionen_braten');      //Rinderbraten
    x2 = document.getElementById('portionen_paprika');     //Paprika-Reis-Pfanne
    x3 = document.getElementById('portionen_salat');       //Spaghettisalat
    //Umwandlung von String in Number
    x1_string = x1.value;
    x2_string = x2.value;
    x3_string = x3.value;

    //Taschenrechnerfunktion
    //Rinderbraten
    for (i = 0; i < 6; i++) {  //for-Schleife: Anfang: Array[0], Läuft bis Array[9], Erhöhung um 1 im Array bei jedem Durchgang
        y = x1_string * ingredients_braten[i];   //Berechnung der Mengen; i beschreibt den Ablauf im Array, zutaten[i] wird in jeden Durchlauf neu initialisiert (neuer Wert); y wird immer wieder überschrieben
        y_string = y.toString();    //Umwandlung von Number in String
        y_new_string = y_string.replace('.', ',');  //Ersetzen eines alten Strings durch einen neuen String (Punkt durch Komma ersetzt)
        ingredients_braten_new[i] = y_new_string;  //Zuweisung der neuen Zutatenanzahl an einem neuen Array
    }
    //Paprika-Reis-Pfanne
    for (i = 0; i < 10; i++) {
        y = x2_string * ingredients_paprika[i];
        y_string = y.toString();
        y_new_string = y_string.replace('.', ',');
        ingredients_paprika_new[i] = y_new_string;
    }
    //Spaghettisalat
    for (i = 0; i < 5; i++) {
        y = x3_string * ingredients_salat[i];
        y_string = y.toString();
        y_new_string = y_string.replace('.', ',');
        ingredients_salat_new[i] = y_new_string;
    }

    //Überschreibung der Zutatenmenge
    //Rinderbraten
    document.getElementById('ingridents1_braten').innerHTML = ingredients_braten_new[0];  
    document.getElementById('ingridents2_braten').innerHTML = ingredients_braten_new[1];  
    document.getElementById('ingridents3_braten').innerHTML = ingredients_braten_new[2];  
    document.getElementById('ingridents4_braten').innerHTML = ingredients_braten_new[3];  
    document.getElementById('ingridents5_braten').innerHTML = ingredients_braten_new[4];  
    document.getElementById('ingridents6_braten').innerHTML = ingredients_braten_new[5];  
    //Paprika-Reis-Pfanne
    document.getElementById('ingridents1_paprika').innerHTML = ingredients_paprika_new[0];  
    document.getElementById('ingridents2_paprika').innerHTML = ingredients_paprika_new[1];  
    document.getElementById('ingridents3_paprika').innerHTML = ingredients_paprika_new[2];  
    document.getElementById('ingridents4_paprika').innerHTML = ingredients_paprika_new[3];  
    document.getElementById('ingridents5_paprika').innerHTML = ingredients_paprika_new[4];  
    document.getElementById('ingridents6_paprika').innerHTML = ingredients_paprika_new[5];  
    document.getElementById('ingridents7_paprika').innerHTML = ingredients_paprika_new[6];  
    document.getElementById('ingridents8_paprika').innerHTML = ingredients_paprika_new[7];  
    document.getElementById('ingridents9_paprika').innerHTML = ingredients_paprika_new[8];  
    document.getElementById('ingridents10_paprika').innerHTML = ingredients_paprika_new[9]; 
    //Spaghettisalat
    document.getElementById('ingridents1_salat').innerHTML = ingredients_salat_new[0]; 
    document.getElementById('ingridents2_salat').innerHTML = ingredients_salat_new[1];  
    document.getElementById('ingridents3_salat').innerHTML = ingredients_salat_new[2]; 
    document.getElementById('ingridents4_salat').innerHTML = ingredients_salat_new[3];  
    document.getElementById('ingridents5_salat').innerHTML = ingredients_salat_new[4];  
}
