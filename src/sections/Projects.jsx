import ProjectCard from "../components/ProjectCard";
import bookimg from "../assets/Books-mala_2.avif";
import affimg from "../assets/Affiliate-Marketing-101.png.webp";
import restau from "../assets/restau.png";
import dash from "../assets/dash.png";
import ai_dash from "../assets/ai_dash.png";
import aiCallScreenshot from "../assets/aiCallScreenshot.png";
import mobile_img from "../assets/mobile_img.png";
import website_img from "../assets/website_img.png";
import dashboard_img from "../assets/adminlte.png";
import gestion_materiel_img from "../assets/gestion.png";
import commercial_site_img from "../assets/commercial_site_img.webp";
var i = 0;
const projectsData = [
  {
    id: i++,
    title: "Foodie Flow - Landing Page",
    description:
      "Foodie Flow Landing Spark est une page d'accueil web moderne pour le projet Foodie Flow : elle présente les fonctionnalités clés, les visuels de l'application, et offre un point d'entrée attractif pour les utilisateurs et investisseurs. Conçue avec une attention particulière portée à l'expérience utilisateur et au design, cette landing page sert à mettre en valeur la marque et à orienter les visiteurs vers l'application principale.",
    technologies: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/Mrmohsine/foodie-flow-landing-spark",
    demo: "https://foodie-flow-landing-spark.vercel.app",
    image: dash,
  },
  {
    id: i++,
    title: "FoodieFlow — Restaurant management",
    description:
      "FoodieFlow est une solution web complète de gestion de restaurant : elle permet de gérer les menus, les commandes, les réservations, et les flux de travail du personnel. Que vous soyez à la recherche d'un module rapide pour la prise de commande ou d'un tableau de bord complet pour la gestion de la cuisine et du service, FoodieFlow offre une interface fluide et moderne. Déployée via React + Vite, elle est pensée pour s'intégrer dans un écosystème évolutif et s'adapter à la réalité opérationnelle des restaurants.",
    technologies: ["ReactJS", "Firebase", "TailwindCSS"],
    github: "https://github.com/Mrmohsine/foodieflow",
    demo: "https://foodieflow.vercel.app",
    image: restau,
  },
  {
    id: i++,
    title: "AgenteClara — Landing Page",
    description:
      "La landing page d'AgenteClara est une interface moderne et épurée conçue pour présenter le concept, les fonctionnalités et la vision du projet AiCall — une solution basée sur l'intelligence artificielle et la voix. Cette page met en avant les points clés du produit, capte l'attention des visiteurs et les oriente efficacement vers l'application ou les informations importantes. Elle est optimisée pour la performance, le SEO et une expérience utilisateur fluide.",
    technologies: ["Nextjs", "TailwindCSS"],
    github: "https://github.com/Mrmohsine/AiCall",
    demo: "https://lustravoice.com",
    image: aiCallScreenshot,
  },
  {
    id: i++,
    title: "AgenteClara — Dashboard",
    description:
      "Le tableau de bord AgenteClara est une interface moderne permettant de gérer et superviser l’activité de la plateforme AgenteClara. Il offre une vue centralisée sur les appels, les utilisateurs, les configurations, ainsi que les statistiques en temps réel. Conçu pour être rapide, clair et intuitif, ce dashboard facilite la gestion opérationnelle du système grâce à une UI moderne et une structure optimisée.",
    technologies: ["Nextjs", "TailwindCSS", "Firebase"],
    github: "https://github.com/Mrmohsine/AiCall_Dash",
    demo: "https://ai-call-dash-rosy.vercel.app",
    image: ai_dash,
  },
  {
    id: i++,
    title: "Archaine",
    description:
      "Cette application mobile très légère développée avec Expo comporte uniquement deux écrans : une page d’accueil simple et une page dédiée au scan de QR code. Elle démontre l’utilisation de React Native avec Expo pour gérer la navigation basique, l’accès à la caméra et le scan en temps réel. C’est un projet minimaliste, rapide à charger et parfait comme base pour intégrer des fonctionnalités de scan ou d’authentification via QR code.",
    technologies: ["React Native", "Expo go"],
    github: "https://github.com/Mrmohsine/expo-app",
    demo: "https://expo.dev/accounts/mohsinemsd/projects/my-expo-app",
    image: mobile_img,
  },
  {
    id: i++,
    title: "School Landing Page",
    description:
      "Une landing page moderne et responsive pour une école, développée avec React, Vite et Tailwind CSS. Ce projet présente un design épuré avec une navigation intuitive, des sections hero attractives et des composants interactifs pour présenter efficacement les informations de l'école. Optimisée pour la performance, elle constitue une base solide pour le développement de sites éducatifs complets.",
    technologies: ["ReactJS", "Tailwind CSS"],
    github: "https://github.com/Mrmohsine/fake_school",
    demo: "https://fake-school-wheat.vercel.app/",
    image: website_img,
  },
  {
    id: i++,
    title: "Dashboard Analytics",
    description:
      "Un tableau de bord interactif développé avec PHP et JavaScript, utilisant AdminLTE pour afficher des DataTables et des graphiques. Il permet de manipuler et visualiser des données provenant d'une API en temps réel, offrant une interface claire pour l’analyse et le suivi des informations importantes.",
    technologies: ["PHP", "JavaScript", "MySql"],
    image: dashboard_img,
  },
  {
    id: i++,
    title: "Gestion du Matériel",
    description:
      "Une plateforme complète de gestion de tout le matériel acheté par une entreprise (ordinateurs, scanners, tables, etc.). Chaque élément est enregistré dans une DataTable avec toutes les opérations CRUD, et un QR code est généré pour chaque matériel avec toutes ses informations, prêt à être imprimé et collé sur l’équipement.",
    technologies: ["PHP", "JavaScript", "MySql"],
    image: gestion_materiel_img,
  },
  {
    id: i++,
    title: "Site Commercial Entreprise",
    description:
      "Un site web complet pour une entreprise, avec une partie publique moderne pour les clients et un back-office administrateur permettant de modifier tous les contenus : textes, images, couleurs, sections et menus. Développé avec PHP et JavaScript, il combine flexibilité et administration facile pour gérer entièrement le site.",
    technologies: ["PHP", "JavaScript", "MySql"],
    image: commercial_site_img,
  },
  {
    id: i++,
    title: "Book Store",
    description:
      "Un site web dédié aux livres où vous pouvez facilement acheter, lire en ligne, ou télécharger une grande variété de titres. Que vous soyez à la recherche des dernières nouveautés ou de classiques intemporels, notre plateforme vous permet de découvrir et d'accéder aux livres qui vous passionnent, le tout depuis un seul endroit. Profitez d'une expérience de lecture flexible et adaptée à vos besoins, avec des options pour chaque type de lecteur.",
    technologies: ["ReactJS", "Laravel", "tailwindcss"],
    image: bookimg,
  },
  {
    id: i++,
    title: "Affiliate website",
    description:
      "Un site web affilié qui vous permet de découvrir et d'accéder aux meilleures offres et produits de nos partenaires. Que vous cherchiez des recommandations, des promotions exclusives ou des comparatifs de produits, notre plateforme vous guide vers les meilleures options pour faire vos achats en toute confiance. Profitez d'une expérience utilisateur simplifiée et de conseils avisés pour tirer le meilleur parti de vos achats en ligne grâce à notre réseau d'affiliés.",
    technologies: ["Laravel", "tailwindcss"],
    image: affimg,
  },
];

function Projects() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <h1 className="text-white text-4xl md:text-5xl lg:text-5xl text-center mt-20 font-bold">
        Projects
      </h1>

      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          showLine={index < projectsData.length - 1}
          onImageClick={openInNewTab}
        />
      ))}
    </>
  );
}

export default Projects;
