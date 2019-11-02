const Restaurant = require('./models.js');
const db = require('./index.js');
const Promise = require('bluebird');
const stream = require('stream');
const fs = require('fs');

// var id, name, phone, image, 
// var address = {};
// var ratings = {};
// ratings.sampleReview = {};
// var schedule = {};
// schedule.monFri = {};
// schedule.satSun = {};

var restaurants = [];

const randomizer = () => {
  var nameArr = ['Yogida', 'Lee\'s Kitchen', 'Han Galbi', 'Heart & Seoul', 'Dubu', 'Bibi Me', 'Kim\'s BBQ', 'Bool BBQ', 'Giwa', 'Galbi Me', 'Soon\'s Dubu', 'Song\'s Kitchen', 'Bibi Please', 'House of Tofu', 'Galbi Jib', 'The Hot Stone', 'Pak BBQ', 'Charcoal House', 'Seoul Palace', 'Noodle House', 'Casa Del Mar', 'Tina\'s Tacos', 'Burritos Por Favor', 'El Burro', 'Red Plate Taco'];
  var line1Arr = ['635 Bryon Ave', '1893 E Tanner St', '878 Christiansen Way', '4316 Romaguera Dr', '78 Enola St SW', '667 Carter Rd', '4567 Cordia Way', '650 Muller Way NE', '1965 Leffler Lane', '55586 Hodkiewicz Ave', '9620 Stokes St', '7562 Jennifer Square', '111 Gideon Hill', '56697 Anya Grove', '6454 Gerlach Dr', '17264 Mervin Pl', '210 Alexandre Blvd', '8200 Winston Blvd', '635 S Bryon Way', '1893 Tanner Dr SW', '878 Christiansen Way', '4316 Romaguera Dr', '1744 Enola Ave W', '667 Carter Rd', '4567 Cordia Ave'];
  var line2Arr = ['North Rose, AR 67243', 'Wileyburgh, LA 53498', 'West Una, HI 85904', 'Vincent, NV 98700', 'Haleyland, ID 12010', 'Hesselside, IA 13549', 'South Jaida, MO 02228', 'Tristian, KY 07334', 'Gulgowski, MA 69978', 'New Jena, NY 80579', 'Concepcion, IL 72333', 'Rochester, OK 91873', 'Koeppton, HI 08985', 'Robertview, KS 09584', 'Botsfordburgh, MS 22811', 'Lake Elliott, WI 37525', 'Port Lizahaven, MI 15425', 'South Colby, CO 73586', 'North Rose, AR 67243', 'Wileyburgh, LA 53498', 'West Una, HI 85904', 'Vincent, NV 98700', 'Haleyland, ID 00010', 'Hesselside, IA 13549', 'South Jaida, MO 02228'];
  var phoneArr = ['(631) 998-3176', '(856) 264-0286', '(808) 720-0531', '(665) 950-4105', '(670) 266-9381', '(892) 887-2183', '(545) 557-1220', '(585) 495-4610', '(778) 494-6586', '(352) 705-6381', '(445) 707-4737', '(463) 420-0741', '(245) 210-8909', '(974) 274-3394', '(958) 285-4640', '(363) 640-8679', '(593) 221-2065', '(870) 944-8562', '(631) 998-3176', '(856) 264-0286', '(382) 720-0531', '(665) 350-4105', '(670) 266-9381', '(892) 887-2183', '(545) 857-1220'];
  var sampleName = ["Edgar", "Jenny", "Martin", "Kendra", "Tyler", "Jim", "Katie", "Timothy", "Peter", "Sandra", "Tammy", "Jeffrey", "Will", "Lisa", "Monica", "Brent", "Andy", "Rosa", "Liz", "Carla", "Mark", "Laurel", "Yesenia", "Katherine", "Esther"]
  var sampleRev = ["Everything I tried was bursting with flavor.", "After my meal, I was knocked into a food coma for a month.", "Sadly, some of my favorite dishes are no longer available.", "My meal was way overcooked.", "My go-to spot when I'm craving something healthy.", "Pretty good, but I think this place might be over-hyped.", "The menu didn't match the one on their website which is a little confusing.", "My coworkers and I order from here at least twice a week.", "Make sure to save room for dessert, because that was the best part of the meal!", "You get what you pay for, I suppose.", "I would eat here every day if I could afford it!", "This place deserves its very average rating.", "You can't go wrong with bibimbap.", "Is their food the best? No. Is it still a great option? Yes.", "Not sure the food is worth the price, but good all the same.", "I had a satisfactory experience and will have to try it again.", "I always crave BBQ for lunch, so I'm a regular.", "The food is always cooked to perfection.", "I can't stop ordering from here. I have a genuine problem.", "It's so good, I nearly left my husband.", "It's quick, it's easy, it's an adequate go-to.", "It took two hours for delivery. I won't be ordering from them again.", "I love coming here after work! It's just so yummy.", "Great spot for a quick lunch.", "Their sides are my favorite."];
  var monFriDelivery = ['11:30am-9:00pm', '11:00am-8:30pm', '11:00am-7:30pm', '10:00am-8:00pm', '10:00am-9:00pm', '11:00am-6:30pm', '10:00am-9:00pm', '10:30am-8:30pm', '11:00am-7:30pm', '10:30am-6:00pm', '11:30am-7:30pm', '11:00am-6:30pm', '11:00am-8:00pm', '11:00am-6:30pm', '10:00am-6:30pm', '10:00am-6:30pm', '11:00am-8:30pm', '11:00am-8:30pm', '11:30am-7:30pm', '10:30am-7:30pm', '11:30am-6:00pm', '10:30am-6:00pm', '11:30am-9:00pm', '11:00am-9:00pm', '10:00am-6:00pm'];
  var monFriPickup = ['12:00pm-11:00pm', '10:30am-10:30pm', '9:00am-11:00pm', '9:00am-11:30pm', '11:30am-11:30pm', '11:30am-11:30pm', '11:00am-10:00pm', '9:00am-10:30pm', '11:00am-11:30pm', '10:00am-10:00pm', '10:00am-10:30pm', '10:00am-11:30pm', '11:00am-11:30pm', '9:00am-10:30pm', '11:00am-11:00pm', '11:00am-10:30pm', '10:30am-10:30pm', '11:00am-11:00pm', '12:00pm-10:30pm', '10:30am-10:00pm', '10:00am-11:30pm', '12:00pm-10:30pm', '10:00am-10:00pm', '12:00pm-11:30pm', '9:00am-10:00pm'];
  var satSunDelivery = ['10:00am-7:30pm', 'Closed', '10:30am-7:30pm', 'Closed', 'Closed', '10:00am-7:30pm', 'Closed', 'Closed', '11:00am-7:30pm', '10:30am-7:30pm', 'Closed', 'Closed', '12:00pm-6:00pm', '10:30am-7:30pm', '10:00am-6:00pm', '11:30am-8:00pm', 'Closed', 'Closed', '11:30am-8:00pm', '12:00pm-6:30pm', '12:00pm-7:30pm', '12:00pm-6:00pm', '12:00pm-6:00pm', 'Closed', '11:00am-7:30pm'];
  var satSunPickup = ['10:00am-7:30pm', 'Closed', '10:30am-7:30pm', 'Closed', 'Closed', '10:00am-7:30pm', 'Closed', 'Closed', '11:00am-7:30pm', '10:30am-7:30pm', 'Closed', 'Closed', '12:00pm-6:00pm', '10:30am-7:30pm', '10:00am-6:00pm', '11:30am-8:00pm', 'Closed', 'Closed', '11:30am-8:00pm', '12:00pm-6:30pm', '12:00pm-7:30pm', '12:00pm-6:00pm', '12:00pm-6:00pm', 'Closed', '11:00am-7:30pm'];
  var img = ['https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/aluminous-749358_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1503392968123-ceabe9e5e630.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/food-1380275_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-5699a35584f4.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/bibimbap-1738580_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-b3fd986e4e67.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1546069901-eacef0df6022.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/cooking-4124108_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1531263539449-56fdf29dfc4d.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1553163147-622ab57be1c7.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/herbs-749360_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/kimchi-fried-rice-241051_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-c75d3a99540d.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1498654896293-37aacf113fd9.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/vegetable-1582920_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/korean-cabbage-in-chili-sauce-1120406_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/toppokki-1607479_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1540138279543-b3728f037467.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126108_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-245241_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126116_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grilled-pineapple-pork-burrito-2944562_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-1613795_1280.jpg'];
  var categories = ['Korean', 'Lunch', 'Dinner', 'Salads', 'Soup', 'Salads', 'BBQ', 'Healthy', 'Rice', 'Noodles', 'Lunch', 'Drinks', 'Mexican', 'Grill', 'Dinner', 'Salads', 'Lunch Specials', 'Dessert', 'Breakfast', 'Chinese', 'Asian', 'Late Night', 'Vegetarian', 'Italian', 'Pizza'];

  return {
    name: nameArr[Math.ceil(Math.random() * 25)],
    address: {
      line1: line1Arr[Math.ceil(Math.random() * 25)],
      line2: line2Arr[Math.ceil(Math.random() * 25)],
      milesAway: Math.floor(Math.random() * 40) / 100
    },
    phone: phoneArr[Math.ceil(Math.random() * 25)],
    ratings: {
      number: Math.ceil(Math.random() * 1000),
      stars: Math.ceil(Math.random() * 5) / 10,
      good: Math.ceil(Math.random() * 100 + 70),
      correct: Math.ceil(Math.random() * 100 + 70),
      sampleReview: {
        name: sampleName[Math.ceil(Math.random() * 25)],
        review: sampleRev[Math.ceil(Math.random() * 25)]
      }
    },
    schedule: {
      monFri: {
        delivery: monFriDelivery[Math.ceil(Math.random() * 25)],
        pickup: monFriPickup[Math.ceil(Math.random() * 25)]
      },
      satSun: {
        delivery: satSunDelivery[Math.ceil(Math.random() * 25)],
        pickup: satSunPickup[Math.ceil(Math.random() * 25)],
      }
    },
    image: img[Math.ceil(Math.random() * 25)],
    priceRange: Math.ceil(Math.random() * 5),
    categories: categories[Math.ceil(Math.random() * 25)]
  };
}

// var data = randomizer();

// const seeding = () => {
//   var start = 1;
//   var end = 10000;
//   var max = 100;
//   var data = [];
//   var seed = (i) => {
//     return new Promise(() => {
//       for (i; i <= 100; i++) {
//         data.push(randomizer(i))
//       }
//     })
//   }

//   return new Promise((resolve, reject) => {
//     while (max <= end) {
//       seed(start)
//       .then(() => {
//         start += 100;
//         max += 100;
//       })
//       .catch((err) => {
//         reject(err);
//       })
//     }
//   })

// }

// const seeding = () => {
//   var data = [];

//   for (var i = 0; i < 500000; i++) {
//     data.push(randomizer(i));
//   }
//   console.log(new Date().toUTCString());
//   return data;
// }

// const seeding = (writer) => {
//   let i = 500000;
// //   write();
  
//   var write = () => {
//     let ok = true;
    
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//     do {
//       i--;
//       if (i === 0) {
//         Restaurant.insertMany(randomizer(i))
//       } else {
//         ok = Restaurant.insertMany(randomizer(i))
//       }
//     } while (i > 0 && ok);
//   }
//   write();
// //   console.log('Successfully seeded database at: ', new Date().toUTCString());
// }
var restaurants = [];

function seeding(writer, data, callback) {
  let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (!(i % 100000)) {
        console.log(restaurants.length);
      }
      if (i === 0) {
        restaurants.push(data);
        writer.write(JSON.stringify(restaurants), callback);
      } else {
        restaurants.push(data);
        ok = writer.write(JSON.stringify(restaurants));
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

console.log('Started seeding:', new Date().toUTCString());

seeding(fs.createWriteStream('./database/restaurants.json'), randomizer(), () => {
  fs.createWriteStream('./database/restaurants.json', JSON.stringify(restaurants), 'utf8').end();
  console.log('Successfully seeded database at: ', new Date().toUTCString());
});

// const data = seeding();

// const insertRestaurants = () => {
//     Restaurant.insertMany(data)
//     .then(() => {
//       console.log('Successfully seeded database!');
//     })
//     .catch(err => {
//       console.log('Could not seed :(', err);
//     });
//   };
  
//   insertRestaurants();