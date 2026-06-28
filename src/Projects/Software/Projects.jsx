const es = [
  {
    image: "Projects/KeizhGd.png",
    nombre: "Keizh Games",
    descripcion: "Desarrollador Independiente de Videojuegos",
    aplicacion: "Perfil",
    tecnologias: "GameMaker Studio 2, GML, Unity, C#, Aseprite, Blender, Photoshop, Audacity, Android Studio, Google Play Console",
    fecha: "Más de 5 años de experiencia",
    empresas: "Keizh Games",
    rol: "Indie Game Developer",
    objetivo:
      "Crear videojuegos entretenidos y de calidad para jugadores de todas las edades, desarrollando cada proyecto desde la idea hasta su publicación.",
    duracion: "Desde 2020",
    resultados:
      "Varios juegos publicados y nuevos proyectos actualmente en desarrollo.",
    desafios:
      "Aprender constantemente nuevas tecnologías y mejorar cada juego con la retroalimentación de la comunidad.",
    enlace: "",
    plataforma: "Android / PC",
    estado: "Activo",
  },
  {
    image: "Projects/MysteryOfProphecy.png",
    nombre: "Mystery of Prophecy",
    descripcion: "Juego de aventura, exploración y acertijos inspirado en temas proféticos.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML, Aseprite, Audacity",
    fecha: "En desarrollo",
    empresas: "Keizh Games",
    rol: "Proyecto Personal",
    objetivo:
      "Crear una aventura inmersiva con exploración, acertijos y una historia envolvente.",
    duracion: "Proyecto a largo plazo",
    resultados:
      "Actualmente en desarrollo con nuevas mecánicas y contenido en constante evolución.",
    desafios:
      "Diseñar un mundo interesante y una historia que motive al jugador a descubrir todos sus secretos.",
    enlace: "",
    plataforma: "Android / PC",
    estado: "En desarrollo",
  },
  {
    image: "Projects/LakeFishing.png",
    nombre: "Lake Fishing",
    descripcion: "Simulador de pesca relajante.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML, Blender, Aseprite",
    fecha: "En desarrollo",
    empresas: "Keizh Games",
    rol: "Proyecto Personal",
    objetivo:
      "Brindar una experiencia de pesca deportiva relajante y realista.",
    duracion: "Proyecto principal",
    resultados:
      "El juego continúa creciendo con nuevas mecánicas, especies y escenarios.",
    desafios:
      "Crear un sistema de pesca entretenido y una progresión satisfactoria.",
    enlace: "",
    plataforma: "Android",
    estado: "En desarrollo",
  },
  {
    image: "Projects/BiblicalCharades.png",
    nombre: "Charadas Bíblicas",
    descripcion: "Juego de charadas para aprender y divertirse en familia.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML",
    fecha: "Publicado",
    empresas: "Keizh Games",
    rol: "Proyecto Personal",
    objetivo:
      "Crear una forma divertida de aprender sobre la Biblia jugando con familiares y amigos.",
    duracion: "Varios meses",
    resultados:
      "Publicado en Google Play y disponible para jugadores de todas las edades.",
    desafios:
      "Seleccionar cientos de palabras bíblicas y crear una experiencia sencilla y entretenida.",
    enlace: "",
    plataforma: "Android",
    estado: "Publicado",
  },
];

const en = [
  {
    image: "Projects/KeizhGd.png",
    nombre: "Keizh Games",
    descripcion: "Independent Game Developer",
    aplicacion: "Profile",
    tecnologias: "GameMaker Studio 2, GML, Unity, C#, Aseprite, Blender, Photoshop, Audacity, Android Studio, Google Play Console",
    fecha: "5+ Years of Experience",
    empresas: "Keizh Games",
    rol: "Indie Game Developer",
    objetivo:
      "Create fun and high-quality games for players of all ages, taking each project from concept to release.",
    duracion: "Since 2020",
    resultados:
      "Several published games and multiple projects currently in development.",
    desafios:
      "Continuously learning new technologies and improving every game through community feedback.",
    enlace: "",
    plataforma: "Android / PC",
    estado: "Active",
  },
  {
    image: "Projects/MysteryOfProphecy.png",
    nombre: "Mystery of Prophecy",
    descripcion: "Adventure, exploration and puzzle game inspired by prophetic themes.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML, Aseprite, Audacity",
    fecha: "In Development",
    empresas: "Keizh Games",
    rol: "Personal Project",
    objetivo:
      "Create an immersive adventure with exploration, puzzles and a compelling story.",
    duracion: "Long-term Project",
    resultados:
      "Currently under active development with new mechanics and content.",
    desafios:
      "Building an engaging world and a story that encourages players to uncover every secret.",
    enlace: "",
    plataforma: "Android / PC",
    estado: "In Development",
  },
  {
    image: "Projects/LakeFishing.png",
    nombre: "Lake Fishing",
    descripcion: "Relaxing fishing simulator.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML, Blender, Aseprite",
    fecha: "In Development",
    empresas: "Keizh Games",
    rol: "Personal Project",
    objetivo:
      "Deliver a relaxing and realistic sport fishing experience.",
    duracion: "Main Project",
    resultados:
      "The game continues to grow with new mechanics, fish species and environments.",
    desafios:
      "Creating enjoyable fishing mechanics and satisfying progression.",
    enlace: "",
    plataforma: "Android",
    estado: "In Development",
  },
  {
    image: "Projects/BiblicalCharades.png",
    nombre: "Bible Charades",
    descripcion: "A family-friendly charades game based on the Bible.",
    aplicacion: "Android",
    tecnologias: "GameMaker Studio 2, GML",
    fecha: "Published",
    empresas: "Keizh Games",
    rol: "Personal Project",
    objetivo:
      "Provide a fun way to learn about the Bible with family and friends.",
    duracion: "Several Months",
    resultados:
      "Published on Google Play and available for players of all ages.",
    desafios:
      "Building a large collection of biblical words while keeping the gameplay simple and enjoyable.",
    enlace: "",
    plataforma: "Android",
    estado: "Published",
  },
];

const getProjects = (language = "es") => {
  return language === "en" ? en : es;
};

export default getProjects;