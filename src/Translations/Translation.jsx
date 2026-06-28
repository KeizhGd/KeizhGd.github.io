import React from "react";



  



// translations.js
const es = {
  title1: "Desarrollador de Videojuegos Indie",
  technologies1: "GameMaker Studio 2, Unity, GML, C#, Aseprite, Blender, Photoshop, Illustrator, Audacity, LMMS, Android Studio, Google Play Console, Git",
  text1: "Soy un desarrollador independiente de videojuegos con más de 5 años de experiencia creando juegos para dispositivos móviles. Me apasiona diseñar experiencias entretenidas y accesibles para todo tipo de jugadores, cuidando cada detalle del desarrollo, desde la programación y el diseño hasta la publicación y el mantenimiento de mis proyectos.",

  title2: "Mystery of Prophecy",
  technologies2: "Adventure • Puzzle • Story-Driven",
  text2: "Mystery of Prophecy es un juego de aventuras con acertijos y una historia inspirada en temas proféticos. Los jugadores deberán explorar escenarios, resolver misterios y descubrir pistas mientras avanzan por una narrativa llena de desafíos y secretos.",

  title3: "Lake Fishing",
  technologies3: "Fishing • Simulation • Relaxing",
  text3: "Lake Fishing es un simulador de pesca diseñado para ofrecer una experiencia tranquila y envolvente. Inspirado en mi deporte favorito, el juego busca recrear la emoción de la pesca deportiva mediante distintas especies, equipos y escenarios naturales.",

  title4: "Charadas Bíblicas",
  technologies4: "Bible • Trivia • Family",
  text4: "Charadas Bíblicas es un juego pensado para disfrutar en familia o con amigos. Incluye cientos de palabras y personajes bíblicos para adivinar mediante mímica, dibujos o descripciones, convirtiéndose en una forma divertida de aprender y compartir conocimientos bíblicos."
};

const en = {
  title1: "Indie Game Developer",
  technologies1: "GameMaker Studio 2, Unity, GML, C#, Aseprite, Blender, Photoshop, Illustrator, Audacity, LMMS, Android Studio, Google Play Console, Git",
  text1: "I am an independent game developer with over five years of experience creating mobile games. I enjoy building fun and accessible experiences, handling every stage of development, from programming and design to publishing and maintaining my projects.",

  title2: "Mystery of Prophecy",
  technologies2: "Adventure • Puzzle • Story-Driven",
  text2: "Mystery of Prophecy is an adventure game featuring puzzles and a story inspired by prophetic themes. Players explore different environments, solve mysteries, and uncover hidden secrets throughout an engaging narrative.",

  title3: "Lake Fishing",
  technologies3: "Fishing • Simulation • Relaxing",
  text3: "Lake Fishing is a relaxing fishing simulator inspired by my favorite sport. The game aims to recreate the excitement of sport fishing with different fish species, equipment, and beautiful natural environments.",

  title4: "Bible Charades",
  technologies4: "Bible • Trivia • Family",
  text4: "Bible Charades is a family-friendly party game where players guess biblical words and characters through acting, drawing, or descriptions. It is designed to make learning about the Bible both fun and interactive."
};
  
  const getTranslations = (lang) => {
    return lang === 'en' ? en : es;
  };
  
  export default getTranslations;
  















