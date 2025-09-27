// exemple crud articles (version immuable)

// fonction pour ajouter un article (immutabilité)
function ajouterArticle(articles, article) {
    return [...articles, article];
}

// fonction pour afficher la liste des articles
function afficherArticles(articles) {
    articles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.titre} (Auteur: ${article.auteur})`);
    });
}

// fonction pour supprimer un article (immutabilité)
function supprimerArticle(articles, index) {
    if (index > 0 && index <= articles.length) {
        // Prendre tous les articles sauf celui à l'index spécifié
        return articles.filter((_, i) => i !== index - 1);
    } else {
        console.log("Index invalide");
        return articles;
    }
}

// exemple d'utilisation
let listeDArticles = [];
listeDArticles = ajouterArticle(listeDArticles, { titre: "Apprendre JavaScript", auteur: "John Doe" });
listeDArticles = ajouterArticle(listeDArticles, { titre: "Comprendre les Promesses", auteur: "Jane Doe" });
listeDArticles = ajouterArticle(listeDArticles, { titre: "Maîtriser les Fonctions Asynchrones", auteur: "Jim Doe" });

afficherArticles(listeDArticles);
listeDArticles = supprimerArticle(listeDArticles, 2);
console.log("Après suppression:");
afficherArticles(listeDArticles);