import filipap from "./filipap.png";
import filipan from "./filipan.png";
import logo from "./logo.ico";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.png";
import brand_img from "./brand_img.jpeg";
import project_img_1 from "./project_img_1.jpeg";
import project_img_2 from "./project_img_2.jpeg";
import project_img_3 from "./project_img_3.jpeg";
import project_img_4 from "./project_img_4.jpeg";
import project_img_5 from "./project_img_5.jpeg";
import project_img_6 from "./project_img_6.jpeg";
import project_img_7 from "./project_img_7.jpeg";
import project_img_8 from "./project_img_8.jpeg";
import project_img_9 from "./project_img_9.jpeg";
import project_img_10 from "./project_img_10.jpeg";
import project_img_11 from "./project_img_11.jpg";
import scroll from "./scroll.gif";
import blog from "./almaslibres.jpeg"

export const assets = {
  blog,
  scroll,
  filipap,
  filipan,
  logo,
  header_img,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  project_img_7,
  project_img_8,
  project_img_9,
  project_img_10,
  project_img_11,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Bar Casa Blanca",

    image: project_img_1,
  },
  {
    title: "Quincho 'El Encuentro' ",

    image: project_img_2,
  },
  {
    title: "Vidriera Local de Niños",

    image: project_img_3,
  },
  {
    title: "Vidriera Local de Indumentaria",

    image: project_img_4,
  },
  {
    title: "La habitación de Bianca",

    image: project_img_5,
  },
  {
    title: "Salon de belleza y estética",

    image: project_img_6,
  },
  {
    title: "Retrato de Toti",

    image: project_img_7,
  },
  {
    title: "Salon de eventos",

    image: project_img_8,
  },
  {
    title: "Living familiar",

    image: project_img_9,
  },
  {
    title: "Bar",

    image: project_img_10,
  },
  {
    title: "El retrato de Tori",

    image: project_img_11,
  },
];
export const cuadrosData = [
  {
    name: 'Estándar',
    id: 'cuadro-estandar',
    href: 'https://wa.me/543876434135?text=Hola%20Filipa!%20Quiero%20comprar%20un%20retrato%20estándar',
    precio: '$5.000',
    dimensiones: '40x50',
    description: 'Perfecto para decorar espacios pequeños y medianos.',
    caracteristicas: [
      'Dimensiones: 40x50 cm',
      'Marco de madera premium',
      'Vidrio protector antireflejo',
      'Acabado mate o brillante',
      'Garantía de 1 año'
    ],
    featured: false,
  },
  {
    name: 'Premium',
    id: 'cuadro-premium',
    href: 'https://wa.me/543876434135?text=Hola%20Filipa!%20Quiero%20comprar%20un%20retrato%20premium',
    precio: '$7.500',
    dimensiones: '50x70',
    description: 'Ideal para espacios amplios y salas de estar.',
    caracteristicas: [
      'Dimensiones: 50x70 cm',
      'Marco de madera premium',
      'Vidrio protector antireflejo',
      'Acabado mate o brillante',
      'Garantía de 2 años',
      'Instalación incluida'
    ],
    featured: true,
  },
  {
    name: 'Deluxe',
    id: 'cuadro-deluxe',
    href: 'https://wa.me/543876434135?text=Hola%20Filipa!%20Quiero%20comprar%20un%20retrato%20deluxe',
    precio: '$10.000',
    dimensiones: '70x100',
    description: 'La mejor opción para espacios grandes y galerías.',
    caracteristicas: [
      'Dimensiones: 70x100 cm',
      'Marco de madera de lujo',
      'Vidrio protector museográfico',
      'Acabado personalizado',
      'Garantía de por vida',
      'Instalación incluida',
      'Certificado de autenticidad'
    ],
    featured: false,
  }
];

export const posts = [
  {
    id: 1,
    title: 'Almas Libres',
    description:
      'Éste mural sin dudas fue de los que más me atravesó a la hora de pintarlo. Agustina, mi clienta, quería que todo tuviese un porqué. Escuché su historia y armamos juntas éste proyecto que no solo quedó soñado si no que también fue liberador para ella. Agus quería plasmar la esencia de la unión familiar aunque no estén todos los integrantes en el mismo plano. Su familia estaba conformada por su mamá, su hermana mayor y ella, quien a su vez tiene su pequeña familia, su compañero y dos hijos. Hace muy poco sufrió la pérdida de 3 pilares, su abuelo, su papá y su hermano. De esta manera y a libre interpretación el mural cuenta con un árbol de la vida, flores blancas, tres follajes rosas, un nido con tres huevos y 3 almas libres. MATERIALES - Acrilicos - Pinceles TIEMPO 18 horas',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Mural', href: '#' },
    
    image:
      'https://i.postimg.cc/VNtd49ZG/almas-libres.jpg',
  },
  {
    id: 2,
    title: 'Almas Libres',
    description:
      'Éste mural sin dudas fue de los que más me atravesó a la hora de pintarlo. Agustina, mi clienta, quería que todo tuviese un porqué. Escuché su historia y armamos juntas éste proyecto que no solo quedó soñado si no que también fue liberador para ella. Agus quería plasmar la esencia de la unión familiar aunque no estén todos los integrantes en el mismo plano. Su familia estaba conformada por su mamá, su hermana mayor y ella, quien a su vez tiene su pequeña familia, su compañero y dos hijos. Hace muy poco sufrió la pérdida de 3 pilares, su abuelo, su papá y su hermano. De esta manera y a libre interpretación el mural cuenta con un árbol de la vida, flores blancas, tres follajes rosas, un nido con tres huevos y 3 almas libres. MATERIALES - Acrilicos - Pinceles TIEMPO 18 horas',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Mural', href: '#' },
    
    image:
      'https://i.postimg.cc/VNtd49ZG/almas-libres.jpg',
  },
  
];
export const proyectos = [
  {
    id: 1,
    name: 'Mural CASABLANCA',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/5NTVNhpG/project-img-1.jpg',
    
  },
  {
    id: 2,
    name: 'Quiencho "El Encuentro"',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/RZtz3gD0/project-img-2.jpg',
    
  },
  {
    id: 3,
    name: 'Vidriera local de niños',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/0QkgBP26/project-img-3.jpg',
    
  },
  {
    id: 4,
    name: 'Vidriera Local de indumentaria',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/bvjf1179/project-img-4.jpg',
    
  },
  {
    id: 5,
    name: 'La habitación de Bianca',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/8CBQ4jDQ/project-img-5.jpg',
   
  },
  {
    id: 6,
    name: 'Salón de Belleza y estética "Dana S"',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/Y9dccZhd/project-img-6.jpg',
    
  },
  {
    id: 7,
    name: 'El retrato de Toti',
    category: 'Retrato',
    imageSrc: 'https://i.postimg.cc/Vvvxzgtm/project-img-7.jpg',
    
  },
  {
    id: 8,
    name: 'Salon de enventos Verónica Vera',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/sxLtxWPS/project-img-8.jpg',
    
  },
  {
    id: 9,
    name: 'Mochila Urbana',
    category: 'Accesorios',
    imageSrc: 'https://i.postimg.cc/WpfR5RR3/project-img-9.jpg',
    imageAlt: 'Mochila negra con múltiples compartimentos.',
  },
  {
    id: 10,
    name: 'Living familiar',
    category: 'Mural',
    imageSrc: 'https://i.postimg.cc/qM9Pd8vH/project-img-10.jpg',
    
  },
  {
    id: 11,
    name: 'El retrato de Tori',
    category: 'Retrato',
    imageSrc: 'https://i.postimg.cc/4NKDM8Z1/project-img-11.jpg',
  },

];