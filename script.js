const facts = [
    "I have a passion for cricket and enjoy playing it regularly.",
    "Exploring new places and experiences is something I find exciting and fulfilling.",
    "I have a fascination with snow and enjoy activities related to it.",
    "I am always on the lookout for new games to play and explore.",
    "At 19 years old, I am eager to learn and try new things.",
    "I enjoy painting landscapes."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
