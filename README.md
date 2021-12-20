# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

# Selecteurs JS

document.querySelector => selectionner un élément avec le sélecteur complet : .xxxx ou #xxx, .header ul => un élément, soit rien
document.querySelectorAll => selectionner un ou plusieurs éléments avec le sélecteur complet : .xxxx ou #xxx, .header ul li => un tableau rempli de 0 ou 1 ou X éléments
document.getElementById => sélectionner un id dans la page => renseigner l'ID sans le #

# Variables en javascript

var => totalement interdite : vieux javascript

10% des cas
let => permet de déclarer une variable et de la modifier par la suite

let name = "Julien";
name = "Antoine";

let identity = { name: "Julien", pays: "France" };
identity = { name: "Antoine", pays: "Suisse" };

90% des cas
const => permet de déclarer une variable mais impossible par la suite de la modifier

const name = "Julien";
name = "Antoine"; ==> impossible

const number = 10;
number = 15; ===> impossible

const identity = { name: "Julien", pays: "France" };
identity.name = "Antoine"; ==> OK (modification possible au 2e d°, impossible au 1er d°)(ici : objet dans la constante)

const names = ["Julien"];
names.push("Antoine"); ===> ["Julien", "Antoine"] ==> OK (tableau dans la constante)


# Types javascript

string ==> "Julien"
number ===> 5
boolean => true/false
array => ["Julien", "Antoine"] ===> [5, 10, 15] ===> [{ name: "Julien", pays: "France"}, { name: "Antoine", pays: "France"}]; (tableau d'objet, le plus fréquent, pex formulaire)
objet => { name: "Julien", pays: "France" }; ==> objet.propriete => objet.pays, objet.name

# Manipuler un tableau

const tableau = ["Julien", "Antoine", "Jacques"];
const tableauObjet = [{ name: "Julien" }, { name: "Antoine" }];

forEach

tableau.forEach((element) => {
    // 3 fois ici, une fois avec name égal à Julien, puis Antoine, puis Jacques
    // Si ça a avait été un objet on aurait eu l'objet dans name
    console.log(element) ===> Julien et après Antoine et après Jacques
});

tableauObjet.forEach((identity) => {
    // identity égal à { name: "Julien" } et après { name: "Antoine" };
    console.log(identity.name) ==> Julien et après Antoine
});

map
filter

# Accéder à un objet

const objet = { name: "Julien", pays: "France" };

objet.name ==> Julien
objet.pays ==> France