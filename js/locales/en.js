EN_CONTENT = {
  landing: {
    title: "Follow the White Squirrel",
    tagline: "Camping and Hiking Tours in Ontario",
    question: "Do you want to get out into nature?",
  },
  intro: {
    invitation: "Let's go on a trip.",
    mission: "Our mission is make it easier for anyone to explore the wilderness of Ontario, far from the concrete and closer to people and nature.",
    explanation: "We'll guide you on a personalized trip to one of Ontario's best outdoor spots. We do multi-day backcountry camping trips in Algonquin Park and day hikes on the Niagara Escarpment. You don't need any experience or equipment, just sunscreen and some curiosity.",
    hikingOrCamping: "What do you want to do?",
    actions: [
      { anchor: "Hiking", url: '#hiking', btnColour: 'green' },
      { anchor: "Camping", url: '#camping', btnColour: 'purple' },
    ],
  },
  camping: {
    headline: "We love camping!",
    price: "$350/390",
    product: "Adventure in Algonquin Park",
    description: "Enjoy one of Canada's classic outdoor experiences, a backcountry camping trip in <a href='http://www.algonquinpark.on.ca/'>Algonquin Park</a>. Algonquin is Ontario's oldest and largest provincial park. We'll plan and guide you through a trip that fits your comfort level and preferences. Our typical excursion is a 3 day trip that includes three days of canoeing and two nights of camping. The regular price is $390. For a 2.5 day weekend trip where we leave Friday evening and return Sunday evening, the prices is reduced to $350. Beginners are welcome!",
    offer: {
      whatWeOffer: "What we offer:",
      items: [
        { label: "Transportation to and from the park" },
        { label: "Tent, sleeping bags, sleeping pads and other camping equipment" },
        { label: "All meals from lunch on the first day to lunch on the last day" },
        { label: "Canoe rental (2 people in a canoe)" },
      ]
    },
    customize: "If you want a more customized trip (longer, shorter, during the week...) let us know what you're looking for and we'll do our best to accommodate!",
    actions: [
      { anchor: "Book a trip", url: '#contact' },
    ],
  },
  hiking: {
    headline: "Hiking sounds good!",
    price: "$90",
    product: "Day trip to Niagara",
    description: "You've probably heard of Niagara Falls. But did you know that the <a href='http://www.escarpment.org/home/index.php'>Niagara Escarpment</a> has many other waterfalls that can be accessed on foot? We'll start they day with a 10km hike along the Escarpment on the Bruce Trail with a stop for lunch at one of the beautiful waterfalls near Hamilton. One of our favourites is <a href='http://www.cityofwaterfalls.ca/felkers-falls/'>Felker's Falls</a>. We'll finish off the day with a tour of three different <a href='http://winecountryontario.ca/'>Niagara wineries</a> where you can relax after the hike with a few wine tastings.",
    offer: {
      whatWeOffer: "What we offer:",
      items: [
        { label: "Day trip including a hike to a waterfall and a winery tour" },
        { label: "Transportation from your doorstep (anywhere in the GTA)" },
        { label: "Picnic lunch and snacks for the afternoon" },
        { label: "Trail guide for the Bruce Trail" },
        { label: "Flexible schedule" },
      ]
    },
    customize: "We're open to customizing this plan according to your preferences. Let us know what your interests are and we'll see what we can do!",
    actions: [
      { anchor: "Book a trip", url: '#contact' },
    ],
  },
  pricing: {
    headline: "Pricing",
    callToAction: "Book it",
    products: [
      {
        name: "camping",
        price: "$350/390",
        hst: "+ HST, per person",
        title: "Adventure in Algonquin Park",
        offer: {
          included: "What's included?",
          items: [
            { label: "Transportation to and from the park" },
            { label: "Tent, sleeping bags, sleeping pads and other camping equipment" },
            { label: "All meals from lunch on the first day to lunch on the last day" },
            { label: "Canoe rentals (2 people in a canoe)" },
            { label: "All park and camping fees for three days" },
            { label: "Reduced price ($350) if we leave the evening of the first day" },
          ]
        },
      },
      {
        name: "hiking",
        price: "$90",
        hst: '+ HST, per person',
        title: "Day hike in Niagara Region",
        offer: {
          included: "What's included?",
          items: [
            { label: "Transportation from your doorstep (anywhere in the GTA)" },
            { label: "Packed lunch and snacks for the afternoon" },
            { label: "Trail guide for the Bruce Trail" },
            { label: "Visit to three Niagara Wineries or Niagara Falls" },
          ]
        },
      },
      {
        name: "custom",
        price: "Call us",
        hst: '',
        title: "Build your own custom trip",
        offer: {
          included: "What's included?",
          items: [
            { label: "We'll help you plan your dream trip" },
            { label: "Ask us about our alternative destinations" },
            { label: "Transportation and equipment as needed" },
            { label: "Negotiable pricing" },
          ]
        },
      },
    ],
  },
  team: {
    headline: "Our Team",
    members: [
      {
        name: "dani",
        greeting: "Hello, my name is Daniel",
        image: "images/dani.jpg",
        bio: "Dani is an economist from Barcelona, Spain. He loves swimming, hiking, and good converations. Last year, he walked for almost 300km on the Camino de Santiago in the north of Spain - in winter!",
        languages: "Dani speaks Catalan, Spanish, English, and a bit of Italian.",
      },
      {
        name: "sharon",
        greeting: "Hi, I'm Sharon",
        image: "images/sharon.jpg",
        bio: "Sharon was born in Singapore and grew up in Waterloo, Ontario. She spent many summers camping and canoeing with her family. Her most memorable hike was climbing El Misti in Peru.",
        languages: "Sharon speaks English, Spanish, and French.",
      },
      {
        name: "bowie",
        greeting: "Woof woof!",
        image: "images/bowie.jpg",
        bio: "Bowie is originally from Tennesse, USA. He is guaranteed to make you smile. He was rescued from a kill shelter and has since gone on to become the CEO of this company. Stay humble, Bowie.",
        languages: "Bowie speaks Dog and Esperanto.",
      },
    ],
    firstAid: "Sharon and Dani both have a valid Wilderness and Remote First Aid certification from the Red Cross."
  },
  gallery: {
    headline: "Gallery",
    baseCamp: "Tents",
    reflections: "Reflections",
    morning: "Morning",
    canoes: "Canoes",
    hike: "Hiking",
    sharonDani: "Hi!",
  },
  contact: {
    contactUs: "Contact us",
    interestedIn:"I'm interested in:",
    hiking: "Day hike in Niagara",
    camping: "Backcountry camping in Algonquin",
    custom: "Custom adventure",
    name: "Name:",
    email: "Email address:",
    departure: "Departure date:",
    return: "Return date:",
    message: "Tell us more about what you'd like to do.",
    submit: "Send!",
  },
  footer: {
    headline: 'Follow the White Squirrel',
    email: 'hola@followthewhitesquirrel.ca',
    phone_en: '(647) 898-1710',
    phone_es: '(647) 928-3095',
    facebook: 'https://www.facebook.com/followthewhitesquirrel',
    instagram: 'https://www.instagram.com/esunabonabota',
  }
}