export interface ShortCourseData {
  title: string;
  description: string;
  dates: {
    date: string;
    displayDate: string;
    time: string;
  }[];
  maxParticipants: string;
  location: string;
  price: number;
  duration: string;
  specialOffer?: {
    code: string;
    discount: string;
    validUntil: string;
    note: string;
  };
  courseType?: {
    label: string;
    options: string[];
  };
  whoShouldAttend?: string[];
  whatYoullLearn?: string[];
  takeHomeMessage?: string;
  dressCode?: string;
  callToAction?: string;
  whatYoullMake?: string[];
  instructor?: string;
  whatYoullExperience?: string[];
  whyThisCourse?: string;
  whyLearnToMake?: string[];
  antipastoMessage?: string;
}

export const shortCourseData: { [key: string]: ShortCourseData } = {
  barista: {
    title: 'One-Day Barista Class ☕✨',
    description: `Calling all coffee lovers! Want to learn how to make the perfect espresso, froth silky milk, and create stunning latte art in just one day? Join our Coffee Lovers One-Day Barista Class and discover the secrets behind crafting café-quality coffee. Whether you're a beginner or simply want to improve your skills, this hands-on class is perfect for you! Only 6 spots per class!`,
    dates: [
      {
        date: '2025-02-21',
        displayDate: '21 February 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-04-15',
        displayDate: '15 April 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-05-23',
        displayDate: '23 May 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-06-17',
        displayDate: '17 June 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-07-16',
        displayDate: '16 July 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-08-15',
        displayDate: '15 August 2025',
        time: '1:00 PM – 5:00 PM',
      },
      {
        date: '2025-11-14',
        displayDate: '14 November 2025',
        time: '1:00 PM – 5:00 PM',
      },
    ],
    maxParticipants: '6-8',
    location:
      'ABM Hospitality Lab (242 Castlereagh Street Sydney NSW 2000 Australia)',
    price: 150,
    duration: '4 hours (One Day Only!)',
    whoShouldAttend: [
      'Coffee lovers who want to learn how to make the perfect espresso',
      'Anyone looking to improve their coffee skills',
      'Beginners excited about mastering latte art and milk frothing!',
    ],
    whatYoullLearn: [
      'How to extract a perfect espresso',
      'Milk frothing techniques to create creamy, silky drinks',
      'Simple yet beautiful latte art techniques',
      'Hands-on experience with professional coffee equipment',
    ],
    takeHomeMessage:
      'Leave with the skills to impress your friends and family with your barista-level coffee at home!',
    dressCode:
      'For safety and comfort, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to follow food safety standards.',
    callToAction:
      "Limited spots available! Don't miss out—book your place now!",
  },
  cake: {
    title: 'Classic French Cakes Masterclass 🍰✨',
    description: `Love baking but never tried making French cakes? This class is for you! Whether you're a beginner or a home baker keen to explore classic French patisserie, this hands-on masterclass will teach you all the essential techniques to create stunning desserts.`,
    dates: [
      {
        date: '2025-03-27',
        displayDate: '27 March 2025',
        time: '12:30 PM – 6:00 PM',
      },
    ],
    maxParticipants: '8',
    location:
      'Kitchen Haymarket (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, NSW 2000)',
    price: 180,
    duration: '5.5 hours (One Day Only!)',
    whoShouldAttend: [
      "You love baking but haven't tried French cakes before",
      'You want to learn new skills and impress family & friends',
      "You're curious about professional pastry techniques",
    ],
    whatYoullLearn: [
      'How to bake and assemble an Opera Cake with perfect layers',
      'The secrets to flaky, buttery pastry and smooth lemon curd',
      'Simple techniques to decorate like a pro',
      'Essential French pastry skills to boost your confidence in the kitchen',
    ],
    whatYoullMake: [
      '🍫 Classic French Opera Cake – A decadent layered cake with almond sponge, coffee buttercream, and smooth chocolate ganache.',
      '🍋 Lemon Petit Tarts – Crisp, buttery pastry filled with tangy lemon curd and finished with a glossy glaze.',
    ],
    instructor:
      "This class is led by a former pastry chef from one of Sydney's most renowned hatted restaurants. With years of experience in high-end patisseries, they'll guide you through each step, making it easy for anyone—even if you've never baked a French cake before!",
    dressCode:
      'For safety and comfort in the kitchen, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to comply with food safety standards.',
    callToAction:
      "Limited spots available! Don't miss this chance to learn from a top pastry chef and take home your own handmade French cakes.",
  },
  focaccia: {
    title: 'Sourdough & Focaccia Masterclass 🥖✨',
    description: `Discover the art of artisan breadmaking in our comprehensive Sourdough & Focaccia Masterclass. Learn from a medal-winning sourdough expert and master the complete process of creating authentic sourdough bread and delicious focaccia.`,
    dates: [
      {
        date: '2025-06-17',
        displayDate: '17 June 2025',
        time: '1:00pm – 6:30pm',
      },
      {
        date: '2025-09-24',
        displayDate: '24 September 2025',
        time: '10:00am – 3:30pm',
      },
    ],
    maxParticipants: '10',
    location:
      'Kitchen Haymarket (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000)',
    price: 160,
    duration: '5.5 hours (One Day Only!)',
    whoShouldAttend: [
      'This class is ideal for beginners as well as those looking to refine their baking skills',
      "Whether you're new to sourdough or keen to get back into baking",
      "You'll learn every step of the process – including how to fit sourdough baking into your daily routine",
    ],
    whatYoullExperience: [
      'Learn from a medal-winning sourdough expert.',
      'Master the complete sourdough and focaccia-making process.',
      'Take home a freshly baked loaf of focaccia and sourdough.',
      'Enjoy your own handmade bread with family, friends, or loved ones.',
      'An unforgettable hands-on experience in artisan breadmaking.',
    ],
    whyThisCourse:
      'Compared to regular bread, sourdough and focaccia offer better digestibility, natural fermentation benefits, and richer flavour. Sourdough is made with wild yeast, reducing gluten content and making it easier to digest. Focaccia, with its light texture and olive oil richness, is a healthier and more flavourful alternative to processed bread.',
    whyLearnToMake: [
      'Control the ingredients – no additives or preservatives.',
      'Improve gut health with natural fermentation.',
      'Develop a rewarding skill you can enjoy for a lifetime.',
      'Share homemade, high-quality bread with your loved ones.',
    ],
    takeHomeMessage:
      'Make your baking experience truly special – learn from an expert and take home more than just bread, but a skill for life!',
    dressCode:
      'Participants are advised to wear flat, enclosed, rubber soled shoes for comfort and safety in the kitchens. To ensure food safety procedures are followed, long hair should be tied back and all unnecessary jewellery removed.',
    callToAction:
      "Limited spots available! Don't miss this chance to learn from a medal-winning sourdough expert and take home your own handmade artisan bread.",
  },
  wine: {
    title: 'Wine Appreciation One-Day Class 🍷✨',
    description: `Love wine and want to learn how to taste, pair, and appreciate it like a pro? Join our Wine Appreciation One-Day Class and explore the basics of wine, from tasting techniques to understanding different varietals. While you're learning, enjoy a delicious antipasto and cheese platter to pair with a selection of wines! Whether you're a beginner or just looking to enhance your knowledge, this is the perfect class for you.`,
    dates: [
      {
        date: '2025-04-16',
        displayDate: '16 April 2025',
        time: '5:00 PM – 8:30 PM',
      },
      {
        date: '2025-05-09',
        displayDate: '9 May 2025',
        time: '5:00 PM – 8:30 PM',
      },
      {
        date: '2025-07-03',
        displayDate: '3 July 2025',
        time: '5:00 PM – 8:30 PM',
      },
    ],
    maxParticipants: '12',
    location:
      'ABM Hospitality Management Lab (242 Castlereagh Street Sydney NSW 2000 Australia)',
    price: 150,
    duration: '3.5 hours (One Day Only!)',
    whoShouldAttend: [
      'Anyone over 18 who would love to try and appreciate wine',
      'Wine enthusiasts looking to expand their tasting knowledge',
      'Beginners eager to learn about wine pairing and serving methods',
    ],
    whatYoullLearn: [
      'Basic wine tasting techniques',
      'How to pair wine with food',
      'Understanding different wine varietals',
      'Proper wine serving methods and storage practices',
    ],
    antipastoMessage:
      '🍴 Enjoy an Antipasto & Cheese Platter! While you learn, indulge in a delicious platter of antipasto and cheese, perfectly paired with a variety of wines to enhance your tasting experience.',
    takeHomeMessage:
      '🎁 Take Home Your Knowledge! Walk away with the confidence to choose, taste, and serve wine like an expert!',
    dressCode:
      'For safety and comfort, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to follow food safety standards.',
    callToAction:
      "🔥 Limited spots available! Don't miss out—book your place now!",
  },
  dessert: {
    title: 'Fine Dining Dessert Plating Course 🍰✨',
    description: `Get ready to create a show-stopping dessert with lemongrass cream on pistachio sponge and raspberry sorbet! This course is your ticket to mastering the art of fine dining plating.`,
    dates: [
      {
        date: '2025-10-03',
        displayDate: '3 October 2025',
        time: '12:30pm – 4:00pm',
      },
    ],
    maxParticipants: '8',
    location:
      'ABM Kitchen (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000)',
    price: 150,
    duration: '3.5 hours (One Day Only!)',
    whoShouldAttend: [
      "Whether you're a chef, home cook, or aspiring food influencer, this course will take your plating skills to the next level!",
      "If you're a cafe or restaurant owner looking to wow on social media or a passionate home cook ready to impress",
      'This course will give you the perfect foundation in fine dining-style plating',
    ],
    whatYoullLearn: [
      'Master the art of fine dining dessert plating',
      'Create show-stopping desserts with lemongrass cream on pistachio sponge',
      'Perfect your raspberry sorbet plating techniques',
      'Learn professional plating skills that will take your dishes from great to absolutely stunning',
    ],
    takeHomeMessage: "Let's make your desserts unforgettable!",
    dressCode:
      'Participants are advised to wear flat, enclosed, rubber soled shoes for comfort and safety in the kitchens. To ensure food safety procedures are followed, long hair should be tied back and all unnecessary jewellery removed.',
    callToAction:
      "🔥 Limited spots available! Don't miss out—book your place now!",
  },
  mixology: {
    title: 'Shake, Stir & Sip – Cocktail Making & Mixology Class! 🍹✨',
    description: `Join us for a fun and interactive cocktail-making experience! Whether you're a beginner or a cocktail enthusiast, this class will teach you how to shake, stir, and mix like a pro. Learn the secrets behind crafting delicious, beautifully presented drinks, impress your friends, and, of course, enjoy your own creations. Make it a memorable afternoon with your besties!`,
    dates: [
      {
        date: '2025-08-29',
        displayDate: '29 August 2025',
        time: '2:00pm – 6:00pm',
      },
      {
        date: '2025-10-17',
        displayDate: '17 October 2025',
        time: '2:00pm – 6:00pm',
      },
    ],
    maxParticipants: '12',
    location:
      'ABM Hospitality Management Lab (242 Castlereagh Street Sydney NSW 2000 Australia)',
    price: 150,
    duration: '4 hours (One Day Only!)',
    whoShouldAttend: [
      '🎉 Hen parties',
      '🎂 Birthday celebrations (18+)',
      "👯‍♀️ Girls' night out",
      '🥂 Team-building events',
      '🍹 Cocktail lovers & beginners',
    ],
    whatYoullLearn: [
      'How to shake, stir, and mix like a pro',
      'The secrets behind crafting delicious, beautifully presented drinks',
      'Professional cocktail-making techniques',
      'How to impress your friends with your mixology skills',
    ],
    takeHomeMessage: 'Make it a memorable afternoon with your besties!',
    dressCode:
      'For safety and comfort, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to follow food safety standards.',
    callToAction:
      '📅 Book now – limited spots available! 🔞 Must be over 18 to attend.',
  },
  petit: {
    title: 'French Petit Four Masterclass – Macaron Edition! 🥐✨',
    description: `Ever wanted to bake perfect macarons with crisp shells and soft, chewy centres? Join our French Petit Four Course (Macaron) and learn from a former pastry chef from one of Sydney's top hatted restaurants! Whether you're a home cook or a chef looking to refine your skills, this hands-on class will take your baking to the next level.`,
    dates: [
      {
        date: '2025-04-02',
        displayDate: '2 April 2025',
        time: '1:00 PM – 4:30 PM',
      },
      {
        date: '2025-09-18',
        displayDate: '18 September 2025',
        time: '1:00 PM – 4:30 PM',
      },
    ],
    maxParticipants: '8',
    location:
      'Kitchen Haymarket (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, NSW 2000)',
    price: 120,
    duration: '3.5 hours (One Day Only!)',
    whoShouldAttend: [
      'Home bakers looking to master the art of macarons',
      'Chefs wanting to refine their patisserie skills',
      'Anyone who loves delicate French pastries!',
    ],
    whatYoullLearn: [
      'The secrets to smooth, crisp macaron shells',
      'How to make light, flavourful fillings',
      'Techniques for piping, baking, and assembling macarons like a pro',
    ],
    takeHomeMessage:
      "🎁 Take Home Your Handmade Macarons! After baking, you'll pack your beautifully crafted macarons into a box to take home and enjoy or share with family and friends!",
    instructor:
      "This class is led by a former pastry chef from one of Sydney's top hatted restaurants. With years of experience in high-end patisseries, they'll guide you through each step, making it easy for anyone—even if you've never made macarons before!",
    dressCode:
      'For safety and comfort, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to follow food safety standards.',
    callToAction:
      "🔥 Limited spots available! Don't miss out—book your place now!",
  },
  vegan: {
    title: '1-Day Vegan & Vegetarian Cooking Class 🌱✨',
    description: `Vegan and vegetarian meals aren't just for vegetarians—they're packed with health benefits and full of flavour! Forget the idea that plant-based dishes are just salads—you'll be amazed at how delicious and satisfying they can be. Learn from a professional chef and master a variety of flavourful, creative dishes. Impress your family and friends with your new skills—they'll be surprised at how good plant-based cooking can be!`,
    dates: [
      {
        date: '2025-07-11',
        displayDate: '11 July 2025',
        time: '1:00pm – 5:30pm',
      },
    ],
    maxParticipants: '10',
    location:
      'ABM Kitchen (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000)',
    price: 150,
    duration: '5.5 hours (One Day Only!)',
    whoShouldAttend: [
      'Ideal for home cooks and chefs looking to expand their skills',
      'Anyone interested in plant-based cooking',
      'Those wanting to learn healthy, flavourful meal preparation',
    ],
    whatYoullLearn: [
      'How to create delicious and satisfying plant-based dishes',
      'Master a variety of flavourful, creative vegan and vegetarian recipes',
      'Professional cooking techniques for plant-based ingredients',
      'How to impress family and friends with your new plant-based cooking skills',
    ],
    takeHomeMessage:
      "Impress your family and friends with your new skills—they'll be surprised at how good plant-based cooking can be!",
    dressCode:
      'Participants are advised to wear flat, enclosed, rubber soled shoes for comfort and safety in the kitchens. To ensure food safety procedures are followed, long hair should be tied back and all unnecessary jewellery removed.',
    callToAction: '📅 Limited spots available – book now!',
  },
  chocolate: {
    title: 'Chocolate Class – Xmas 🍫✨',
    description: `Get into the festive spirit with our Christmas Chocolate Class! Learn the art of tempering chocolate, create beautiful chocolate decorations, and decorate your own gingerbread house. Perfect for home cooks and chefs looking to add professional chocolate skills to their repertoire.`,
    dates: [
      {
        date: '2025-12-16',
        displayDate: '16 December 2025',
        time: '1:00pm – 4:30pm',
      },
    ],
    maxParticipants: '8',
    location:
      'Kitchen Haymarket (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000)',
    price: 130,
    duration: '3.5 hours (One Day Only!)',
    whoShouldAttend: [
      'Home cooks and chefs who would like to improve on professional development',
      'Anyone wanting to learn chocolate tempering techniques',
      'Those interested in festive baking and decoration',
    ],
    whatYoullLearn: [
      'The art of tempering chocolate',
      'How to create beautiful chocolate decorations',
      'Techniques for decorating a gingerbread house',
      'Professional chocolate working skills',
    ],
    takeHomeMessage:
      'Take home your beautifully decorated gingerbread house and chocolate creations to share with family and friends this Christmas!',
    dressCode:
      'Participants are advised to wear flat, enclosed, rubber soled shoes for comfort and safety in the kitchens. To ensure food safety procedures are followed, long hair should be tied back and all unnecessary jewellery removed.',
    callToAction:
      '🎄 Limited spots available – book your Christmas chocolate adventure now!',
  },
  pastries: {
    title: 'Classic French Pastries Masterclass 🥐✨',
    description: `Learn to create two iconic French pastries—Mille Feuille and Croque en Bouche (croquembouche) and take your delicious creations home to share! Whether it's a high tea, birthday, or any special event, these pastries will elevate your hosting game. Mille Feuille, with its layers of puff pastry and creamy vanilla custard, is perfect for afternoon teas and celebratory gatherings, while the stunning Croque en Bouche, a tower of profiteroles with caramel threads, is a show-stopper at weddings and christenings. Imagine your home filled with the irresistible aroma of buttery pastries, setting the perfect atmosphere for any occasion.`,
    dates: [
      {
        date: '2025-06-26',
        displayDate: '26 June 2025',
        time: '10:00am – 3:30pm',
      },
    ],
    maxParticipants: '8',
    location:
      'ABM Kitchen Haymarket (Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000)',
    price: 160,
    duration: '5.5 hours (One Day Only!)',
    whoShouldAttend: [
      'This course is ideal for home cooks and chefs looking to enhance their skills',
      'Anyone wanting to add a touch of French elegance to any event',
      'Those interested in mastering iconic French pastry techniques',
    ],
    whatYoullLearn: [
      'How to create the perfect Mille Feuille with layers of puff pastry and creamy vanilla custard',
      'Master the art of Croque en Bouche (croquembouche) - a tower of profiteroles with caramel threads',
      'Professional French pastry techniques and assembly methods',
      'How to elevate your hosting game with show-stopping pastries',
    ],
    whatYoullMake: [
      '🥐 Mille Feuille – Layers of puff pastry and creamy vanilla custard, perfect for afternoon teas and celebratory gatherings.',
      '🏰 Croque en Bouche (Croquembouche) – A stunning tower of profiteroles with caramel threads, a show-stopper at weddings and christenings.',
    ],
    takeHomeMessage:
      'Take your delicious creations home to share! Imagine your home filled with the irresistible aroma of buttery pastries, setting the perfect atmosphere for any occasion.',
    dressCode:
      'For safety and comfort, please wear flat, enclosed, rubber-soled shoes. Long hair must be tied back, and jewellery removed to follow food safety standards.',
    callToAction:
      'Book now and bring these show-stopping pastries into your kitchen!',
  },
  fss: {
    title: 'NSW Food Safety Supervisor Certificate (FSS)',
    description:
      'Food Safety Supervisor certification course for NSW hospitality industry.',
    dates: [
      { date: '2024-05-02', displayDate: '2nd May', time: '9:00am - 5:00pm' },
      { date: '2024-05-30', displayDate: '30th May', time: '9:00am - 5:00pm' },
      { date: '2024-06-05', displayDate: '5th June', time: '9:00am - 5:00pm' },
    ],
    maxParticipants: '12',
    location: 'ABM Campus',
    price: 180,
    duration: '8 hours (One Day Only!)',
    specialOffer: {
      code: 'ABMFSS15',
      discount: '15% discount until 30 June!',
      validUntil: '30 June',
      note: '(New customers only)',
    },
    courseType: {
      label: 'Choose the course',
      options: ['Certificate', 'Recertificate'],
    },
  },
};
