// const Restaurant = require('./models.js');
const db = require('./postgresIdx.js');
const stream = require('stream');
const fs = require('fs');

// var id, name, phone, image, 
// var address = {};
// var ratings = {};
// ratings.sampleReview = {};
// var schedule = {};
// schedule.monFri = {};
// schedule.satSun = {};

const randomizer = (id) => {
  var nameArr = ['Yogida', 'Lee\'s Kitchen', 'Han Galbi', 'Heart & Seoul', 'Dubu', 'Bibi Me', 'Kim\'s BBQ', 'Bool BBQ', 'Giwa', 'Galbi Me', 'Soon\'s Dubu', 'Song\'s Kitchen', 'Bibi Please', 'House of Tofu', 'Galbi Jib', 'The Hot Stone', 'Pak BBQ', 'Charcoal House', 'Seoul Palace', 'Noodle House', 'Casa Del Mar', 'Tina\'s Tacos', 'Burritos Por Favor', 'El Burro', 'Red Plate Taco'];
  var line1Arr = ['635 Bryon Ave\nNorth Rose, AR 67243', '1893 E Tanner St\nWileyburgh, LA 53498', '878 Christiansen Way\nWest Una, HI 85904', '4316 Romaguera Dr\nVincent, NV 98700', '78 Enola St SW\nHaleyland, ID 12010', '667 Carter Rd\nHesselside, IA 13549', '4567 Cordia Way\nSouth Jaida, MO 02228', '650 Muller Way NE\nTristian, KY 07334', '1965 Leffler Lane\nGulgowski, MA 69978', '55586 Hodkiewicz Ave\nNew Jena, NY 80579', '9620 Stokes St\nConcepcion, IL 72333', '7562 Jennifer Square\nRochester, OK 91873', '111 Gideon Hill\nKoeppton, HI 08985', '56697 Anya Grove\nRobertview, KS 09584', '6454 Gerlach Dr\nBotsfordburgh, MS 22811', '17264 Mervin Pl\nLake Elliott, WI 37525', '210 Alexandre Blvd\nPort Lizahaven, MI 15425', '8200 Winston Blvd\nSouth Colby, CO 73586', '635 S Bryon Way\nNorth Rose, AR 67243', '1893 Tanner Dr SW\nWileyburgh, LA 53498', '878 Christiansen Way\nWest Una, HI 85904', '4316 Romaguera Dr\nVincent, NV 98700', '1744 Enola Ave W\nHaleyland, ID 00010', '667 Carter Rd\nHesselside, IA 13549', '4567 Cordia Ave\nSouth Jaida, MO 02228'];
  var phoneArr = ['(631) 998-3176', '(856) 264-0286', '(808) 720-0531', '(665) 950-4105', '(670) 266-9381', '(892) 887-2183', '(545) 557-1220', '(585) 495-4610', '(778) 494-6586', '(352) 705-6381', '(445) 707-4737', '(463) 420-0741', '(245) 210-8909', '(974) 274-3394', '(958) 285-4640', '(363) 640-8679', '(593) 221-2065', '(870) 944-8562', '(631) 998-3176', '(856) 264-0286', '(382) 720-0531', '(665) 350-4105', '(670) 266-9381', '(892) 887-2183', '(545) 857-1220'];
  var sampleName = ["Edgar", "Jenny", "Martin", "Kendra", "Tyler", "Jim", "Katie", "Timothy", "Peter", "Sandra", "Tammy", "Jeffrey", "Will", "Lisa", "Monica", "Brent", "Andy", "Rosa", "Liz", "Carla", "Mark", "Laurel", "Yesenia", "Katherine", "Esther"]
  var sampleRev = ["Everything I tried was bursting with flavor.", "After my meal, I was knocked into a food coma for a month.", "Sadly, some of my favorite dishes are no longer available.", "My meal was way overcooked.", "My go-to spot when I'm craving something healthy.", "Pretty good, but I think this place might be over-hyped.", "The menu didn't match the one on their website which is a little confusing.", "My coworkers and I order from here at least twice a week.", "Make sure to save room for dessert, because that was the best part of the meal!", "You get what you pay for, I suppose.", "I would eat here every day if I could afford it!", "This place deserves its very average rating.", "You can't go wrong with bibimbap.", "Is their food the best? No. Is it still a great option? Yes.", "Not sure the food is worth the price, but good all the same.", "I had a satisfactory experience and will have to try it again.", "I always crave BBQ for lunch, so I'm a regular.", "The food is always cooked to perfection.", "I can't stop ordering from here. I have a genuine problem.", "It's so good, I nearly left my husband.", "It's quick, it's easy, it's an adequate go-to.", "It took two hours for delivery. I won't be ordering from them again.", "I love coming here after work! It's just so yummy.", "Great spot for a quick lunch.", "Their sides are my favorite."];
  var monFriDelivery = ['11:30am-9:00pm', '11:00am-8:30pm', '11:00am-7:30pm', '10:00am-8:00pm', '10:00am-9:00pm', '11:00am-6:30pm', '10:00am-9:00pm', '10:30am-8:30pm', '11:00am-7:30pm', '10:30am-6:00pm', '11:30am-7:30pm', '11:00am-6:30pm', '11:00am-8:00pm', '11:00am-6:30pm', '10:00am-6:30pm', '10:00am-6:30pm', '11:00am-8:30pm', '11:00am-8:30pm', '11:30am-7:30pm', '10:30am-7:30pm', '11:30am-6:00pm', '10:30am-6:00pm', '11:30am-9:00pm', '11:00am-9:00pm', '10:00am-6:00pm'];
  var monFriPickup = ['12:00pm-11:00pm', '10:30am-10:30pm', '9:00am-11:00pm', '9:00am-11:30pm', '11:30am-11:30pm', '11:30am-11:30pm', '11:00am-10:00pm', '9:00am-10:30pm', '11:00am-11:30pm', '10:00am-10:00pm', '10:00am-10:30pm', '10:00am-11:30pm', '11:00am-11:30pm', '9:00am-10:30pm', '11:00am-11:00pm', '11:00am-10:30pm', '10:30am-10:30pm', '11:00am-11:00pm', '12:00pm-10:30pm', '10:30am-10:00pm', '10:00am-11:30pm', '12:00pm-10:30pm', '10:00am-10:00pm', '12:00pm-11:30pm', '9:00am-10:00pm'];
  var satSunDelivery = ['10:00am-7:30pm', 'Closed', '10:30am-7:30pm', 'Closed', 'Closed', '10:00am-7:30pm', 'Closed', 'Closed', '11:00am-7:30pm', '10:30am-7:30pm', 'Closed', 'Closed', '12:00pm-6:00pm', '10:30am-7:30pm', '10:00am-6:00pm', '11:30am-8:00pm', 'Closed', 'Closed', '11:30am-8:00pm', '12:00pm-6:30pm', '12:00pm-7:30pm', '12:00pm-6:00pm', '12:00pm-6:00pm', 'Closed', '11:00am-7:30pm'];
  var satSunPickup = ['10:00am-7:30pm', 'Closed', '10:30am-7:30pm', 'Closed', 'Closed', '10:00am-7:30pm', 'Closed', 'Closed', '11:00am-7:30pm', '10:30am-7:30pm', 'Closed', 'Closed', '12:00pm-6:00pm', '10:30am-7:30pm', '10:00am-6:00pm', '11:30am-8:00pm', 'Closed', 'Closed', '11:30am-8:00pm', '12:00pm-6:30pm', '12:00pm-7:30pm', '12:00pm-6:00pm', '12:00pm-6:00pm', 'Closed', '11:00am-7:30pm'];
  var img = ['https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/aluminous-749358_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1503392968123-ceabe9e5e630.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/food-1380275_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-5699a35584f4.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/bibimbap-1738580_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-b3fd986e4e67.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1546069901-eacef0df6022.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/cooking-4124108_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1531263539449-56fdf29dfc4d.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1553163147-622ab57be1c7.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/herbs-749360_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/kimchi-fried-rice-241051_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-c75d3a99540d.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1498654896293-37aacf113fd9.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/vegetable-1582920_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/korean-cabbage-in-chili-sauce-1120406_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/toppokki-1607479_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1540138279543-b3728f037467.jpeg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126108_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-245241_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126116_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grilled-pineapple-pork-burrito-2944562_1280.jpg', 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-1613795_1280.jpg'];
  var categories = ['Korean', 'Lunch', 'Dinner', 'Salads', 'Soup', 'Salads', 'BBQ', 'Healthy', 'Rice', 'Noodles', 'Lunch', 'Drinks', 'Mexican', 'Grill', 'Dinner', 'Salads', 'Lunch Specials', 'Dessert', 'Breakfast', 'Chinese', 'Asian', 'Late Night', 'Vegetarian', 'Italian', 'Pizza'];

  return [
    {
      id: id,
      name: nameArr[Math.floor(Math.random() * 25)],
      phone: phoneArr[Math.floor(Math.random() * 25)],
      image: img[Math.floor(Math.random() * 25)],
      priceRange: Math.ceil(Math.random() * 5),
      categories: categories[Math.ceil(Math.random() * 25)]
    },
    {
      line1: line1Arr[Math.floor(Math.random() * 25)],
      milesAway: Math.ceil(Math.random() * 40) / 100
    },
    {
      number: Math.ceil(Math.random() * 1000),
      stars: Math.ceil(Math.random() * 5),
      good: Math.ceil(Math.random() * 100 + 70),
      correct: Math.ceil(Math.random() * 100 + 70)
    },
    {
      name: sampleName[Math.floor(Math.random() * 25)],
      review: sampleRev[Math.floor(Math.random() * 25)]
    },
    {
      delivery: monFriDelivery[Math.floor(Math.random() * 25)],
      pickup: monFriPickup[Math.floor(Math.random() * 25)]
    },
    {
      delivery: satSunDelivery[Math.floor(Math.random() * 25)],
      pickup: satSunPickup[Math.floor(Math.random() * 25)]
    }
  ]; 
}

var infoWriter = fs.createWriteStream('info.json');
var addressWriter = fs.createWriteStream('address.json');
var ratingWriter = fs.createWriteStream('rating.json');
var sampleReviewWriter = fs.createWriteStream('sampleReview.json');
var monFriWriter = fs.createWriteStream('monFri.json');
var satSunWriter = fs.createWriteStream('satSun.json');

function jsonWriter(writer, data, callback) {
  return writer.write(JSON.stringify(data), 'utf8', callback);
}

  let i = 0;
  const callback = (writer) => {
    writer.end();
    console.log('Successfully created JSON in: ', (new Date().getTime() - startTime) / 1000, ' seconds');
  }
  
  function write() {
    let ok = true;
    do {
      i++;
      if (!(i % 100000)) {
        console.log(i);
      }
      if (i === 10000000) {
        jsonWriter(infoWriter, randomizer(i)[0], () => callback(infoWriter));
        jsonWriter(addressWriter, randomizer(i)[1], () => callback(addressWriter));
        jsonWriter(ratingWriter, randomizer(i)[2], () => callback(ratingWriter));
        jsonWriter(sampleReviewWriter, randomizer(i)[3], () => callback(sampleReviewWriter));
        jsonWriter(monFriWriter, randomizer(i)[4], () => callback(monFriWriter));
        jsonWriter(satSunWriter, randomizer(i)[5], () => callback(satSunWriter));
      } else {
        let writer = randomizer(i);
        ok = jsonWriter(infoWriter, writer[0]);
        jsonWriter(addressWriter, writer[1]);
        jsonWriter(ratingWriter, writer[2]);
        jsonWriter(sampleReviewWriter, writer[3]);
        jsonWriter(monFriWriter, writer[4]);
        jsonWriter(satSunWriter, writer[5]);
      }
    } while (i <= 10000000 && ok);
    if (i > 0) {
      infoWriter.once('drain', write);
    //   addressWriter.once('drain', write);
    //   ratingWriter.once('drain', write);
    //   sampleReviewWriter.once('drain', write);
    //   monFriWriter.once('drain', write);
    //   satSunWriter.once('drain', write);
    }
  }
  write();

var startTime = new Date();
console.log('Started creating JSON:', startTime.toUTCString());