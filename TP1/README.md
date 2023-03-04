### M413 - TD1 : Réponses aux Questions

## EXERCICE 1

# 6.1

➢ l'élément qui déclenchera l'appel de la fonction est le chargement de la page

➢ On utilise document.getElementById()

➢ on utilise la propriété Id

➢ on utilise document.getElementsByTagName("h2")[0]

➢ on utilise Selections des balises.length

➢ on utilise document.getElementByClassName("firstOrLast")

➢ on utilise % 2 si le résultat est 0 alors c'est pair

# 6.2

➢ textContent sert a recuperer le texte dans la balise, innerHTML sert a reecrire la balise au complet, innerText sert a reecrire uniquement le texte de la balise

# 6.3

on utilise :
var el = document.getElementsByTagName("meta"); pour selectionner toutes les balises meta
var firstAuthor = el[1].getAttribute("content"); el[1] pour selectionner le premier author
var lastAuthor = el[el.length-1].getAttribute("content");  el[el.length-1] pour selectionner le dernier element

## EXERCICE 2

➢ on obtient le nombre de jours en soustrayant la date voulue a la date actuelle
quon divise par (1000*60*60*24)

➢ on fait la mise a jour du texte grace a la mathode replace :
p.innerHTML = p.innerHTML.replace("xxx", diff);

# 7.1

j'ai utiliser setInterval car setTimeout bloque apres le premier rafraichissement


# 8.1

➢ On utilise input.addEventListener("input", function() {});

➢ en changeant la class de l'input input.className = "white"

