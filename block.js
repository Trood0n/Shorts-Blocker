document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "La discipline est le pont entre les objectifs et leur réalisation.",
    "Arrête de rêver ta vie, commence à vivre tes rêves.",
    "Chaque seconde compte. Ne les gaspille pas.",
    "Le succès appartient à ceux qui agissent.",
    "Moins de scroll, plus de contrôle.",
    "What color is your bugatti?",
    "Tu peux scroller ou tu peux gagner. Pas les deux."
  ];

  const quoteElement = document.getElementById("quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
});