ES_CONTENT = {
  landing: {
    title: "Follow the White Squirrel",
    tagline: "Camping and Hiking Tours en Ontario",
    question: "¿Te apetecería vivir una increíble experiencia canadiense en la naturaleza?",
  },
  intro: {
    invitation: "¡Vamos a la aventura!",
    mission: "Nuestra misión es facilitar a todo el mundo el acceso y la exploración de la vida salvaje de Ontario, lejos del asfalto y cercano a las personas y a la naturaleza.",
    explanation: "Te guiaremos en un viaje personalizado a uno de los mejores parajes naturales. Vente con nosotros de 'backcountry camping' a Algonquin Park durante un fin de semana. O si lo prefieres, vámonos de hiking por Niagara Escarpment. No necesitas experiencia o equipo, tan sólo crema solar, una sonrisa y curiosidad, el resto lo ponemos nosotros.",
    hikingOrCamping: "¿Qué quieres hacer?",
    actions: [
      { anchor: "Hiking", url: '#hiking', btnColour: 'green' },
      { anchor: "Camping", url: '#camping', btnColour: 'purple' },
    ],
  },
  camping: {
    headline: "¡Vámonos de 'backcountry camping'!",
    price: "$350/390 + HST",
    product: "Aventura en Algonquin Park con canoas",
    description: "Disfruta de una de las clásicas experiencias en Canadá, el 'backcountry camping' en <a href='http://www.algonquinpark.on.ca/'>Algonquin Park</a>. Algonquin es el más grande y antiguo parque provincial de Ontario. Te guiaremos según tus preferencias y nivel de confort. Nuestras excursiones típicas son de 3 días que incluyen dos días de viaje en canoa y tres noches de camping en lugares increíbles. El precio normal es $390. Si hacemos un viaje de 2,5 dias, por ejemplo viernes noche a domingo noche, reducimos el precio a $350. ¡Personas sin experiencia son bienvenidos!",
    offer: {
      whatWeOffer: "¿Qué ofrecemos?",
      items: [
        { label: "Transporte de ida y vuelta al parque." },
        { label: "Tienda, sacos de dormir, colchonetas y equipamiento básico." },
        { label: "Todas las comidas están incluidas." },
        { label: "El alquiler de las canoas." },
      ]
    },
    customize: "Si quieres un viaje personalizado (más largo, más corto, entre semana, algo excepcional...) háznoslo saber y haremos lo mejor posible para adaptarnos!",
    actions: [
      { anchor: "Reserva una excursión", url: '#contact' },
    ],
  },
  hiking: {
    headline: "¡Hiking suena bien!",
    price: "$90 + HST",
    product: "Excursión de un día a Niagara Escarpment",
    description: "Probablemente habrás oido sobre Niagara Falls. Pero, ¿Sabías que <a href='http://www.escarpment.org/home/index.php'>Niagara Escarpment</a> tiene muchas otras cascadas que sólo puedes acceder a pie? Empezaremos el día con una excursión de 10 km a lo largo de Escarpment (por ell llamado Bruce Trail o camino de Bruce)  con una parada para comer en una hermosa cascada cerca de Hamilton. Una de nuestras favoritas es <a href='http://www.cityofwaterfalls.ca/felkers-falls/'>Felker's Falls</a>. Acabaremos el día en diferentes  <a href='http://winecountryontario.ca/'>bodegas de la región de Niagara</a> donde podrás relajarte después de la excursió con una cata de vinos.",
    offer: {
      whatWeOffer: "¿Qué ofrecemos?",
      items: [
        { label: "Excursión de un día a Niagara Escarpment y un tour por las diferentes bodegas" },
        { label: "Transporte de ida y vuelta (dentro de 'Greater Toronto Area')" },
        { label: "Comida y snacks para mantenerte en forma" },
        { label: "Te guiaremos por el llamado 'Bruce Trail'" },
        { label: "Nos adaptamos a tus preferencias y horarios" },
      ]
    },
    customize: "Estamos abiertos a que nos propongas viajes personalizados acorde a tus preferencias. ¡Quizá te interese ir a Niagara Falls! Sin problema. ¡Déjanos saber tus intereses y veremos que podemos hacer!",
    actions: [
      { anchor: "Reserva una excursión", url: '#contact' },
    ],
  },
  pricing: {
    headline: "Precios",
    callToAction: "Reserva",
    products: [
      {
        name: "camping",
        price: "$350/390",
        hst: "+ HST, por persona",
        title: "Aventura en Algonquin Park",
        offer: {
          included: "¿Que se incluye?",
          items: [
            { label: "Transporte de ida y vuelta al parque." },
            { label: "Tienda, sacos de dormir, colchonetas y equipamiento básico." },
            { label: "Todas las comidas están incluidas." },
            { label: "El alquiler de las canoas." },
            { label: "Todas las tasas del parque." },
            { label: "Precio reducido si salimos la noche del primer día." },
          ]
        },
      },
      {
        name: "hiking",
        price: "$90",
        hst: '+ HST, por persona',
        title: "Día de excursión a Niagara Escarpment",
        offer: {
          included: "Que se incluye?",
          items: [
            { label: "Excursión de un día a Niagara Escarpment y tour a las bodegas" },
            { label: "Transporte de ida y vuelta (dentro de 'Greater Toronto Area')" },
            { label: "Comida y snacks para manterte en forma" },
            { label: "Te guiaremos por el llamado 'Bruce Trail'" },
            { label: "Nos adaptamos a tus preferencias y horarios" },
          ]
        },
      },
      {
        name: "custom",
        price: "¡Llámanos!",
        hst: '',
        title: "Construye tus propias vacaciones",
        offer: {
          included: "¿Que se incluye?",
          items: [
            { label: "Te ayudamos a diseñar el viaje de tus sueños" },
            { label: "Pregúntanos acerca de nuestras alternativas, te encantarán" },
            { label: "Transporte y equipamiento según se necesite" },
            { label: "Precio negociable" },
          ]
        },
      },
    ],
  },
  team: {
    headline: "Nuestro equipo",
    members: [
      {
        name: "dani",
        greeting: "Hola, mi nombre es Daniel",
        image: "images/dani.jpg",
        bio: "Dani es economista de Barcelona, España. Le encanta nadar, hiking, y una buena conversación. El año pasado, caminó casi 300km en el Camino de Santiago en el norte de España. ¡En invierno!",
        languages: "Dani habla Catalán, Español, Inglés, y un poco de Italiano.",
      },
      {
        name: "sharon",
        greeting: "Hola, Soy Sharon",
        image: "images/sharon.jpg",
        bio: "Sharon nació en Singapore y creció en Waterloo, Ontario. Pasó muchos veranos de camping y en canoa con sus amigos y familiares. Su hazaña más memorable fue ascender El Misti en Perú.",
        languages: "Sharon habla Inglés, Español, y Francés.",
      },
      {
        name: "bowie",
        greeting: "Woof woof!",
        image: "images/bowie.jpg",
        bio: "Bowie es originario de Tennesse, USA. Te garantiza sacarte una sonrisa. Fue rescatado de morir en una perrera y desde entonces a pasado a ser el CEO de esta empresa. Mantente humilde, Bowie.",
        languages: "Bowie habla Dog y Esperanto.",
      },
    ],
    firstAid: "Sharon y Dani poseen ambos un certificado válido en Ontario de primeros auxilios en la naturaleza salvaje otorgado por la cruz roja."
  },
  gallery: {
    headline: "Galería",
    baseCamp: "Tiendas",
    reflections: "Reflejos",
    morning: "¡Good morning!",
    canoes: "Canoas",
    hike: "Hiking",
    sharonDani: "Hola!",
  },
  contact: {
    contactUs: "Contáctanos",
    interestedIn:"Estoy interesado en:",
    hiking: "Excursión en Niagara Escarpment",
    camping: "Camping y canoa en Alonquin Park",
    custom: "Aventura personalizada",
    name: "Nombre:",
    email: "Correo electrónico:",
    departure: "Fecha de salida:",
    return: "Fecha de llegada:",
    message: "Coméntanos un poco acerca de ti y lo que estás buscando y en que podríamos ayudarte.",
    submit: "¡Enviar!",
  },
  footer: {
    headline: 'Follow the White Squirrel',
    email: 'hola@followthewhitesquirrel.ca',
    phone_en: '(647) 898-1710',
    phone_es: '(647) 928-3095',
    facebook: 'https://www.facebook.com/followthewhitesquirrel',
    twitter: 'https://twitter.com/f_t_w_s',
    instagram: 'https://www.instagram.com/esunabonabota',
  }
}
