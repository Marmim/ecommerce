let cartCount = 0;

function addNotif() {

    // Supposons que chaque clic sur "Ajouter au panier" ajoute un produit
    cartCount++;

    // Mettez à jour le nombre dans l'icône du panier
     cartCount=document.getElementById('cart-count').innerText ;
}