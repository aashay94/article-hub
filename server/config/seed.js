/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import Article from '../api/article/article.model';
import User from '../api/user/user.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if (!config.seedDB) {
    return Promise.resolve();
  }

  let promises = [];

  let articlePromise = Article.find({}).remove()
    .then(() => Article.create(
      {
        "index": 0,
        "title": "incididunt aliquip qui",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/34153/pexels-photo.jpg?cs=srgb&dl=backlit-blogging-business-34153.jpg&fm=jpg",
        "body": "Fugiat ut aute Lorem non commodo cupidatat irure. Excepteur eu ea ad fugiat est dolore sint veniam et exercitation ad enim magna exercitation. Culpa est et sit veniam eiusmod incididunt consectetur ipsum in pariatur enim exercitation nulla.",
        "category": "Business",
        "comments": ["Id nisi eiusmod quis sint mollit aliqua officia officia fugiat occaecat ullamco. Occaecat amet minim nulla cillum cillum qui non non laboris sunt ex nostrud.",
          "Id nisi eiusmod quis sint mollit aliqua officia officia fugiat occaecat ullamco. Occaecat amet minim nulla cillum cillum qui non non laboris sunt ex nostrud."],
        "likes": 50
      },
      {
        "index": 1,
        "title": "laborum commodo amet",
        "author": "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?cs=srgb&dl=abstract-access-close-up-1089438.jpg&fm=jpg",
        "body": "Reprehenderit eu fugiat sit qui aliqua ea pariatur ex ad aute. Velit minim velit anim enim culpa ex aliqua officia enim. Ullamco reprehenderit ullamco irure cupidatat labore voluptate sit proident do.",
        "category": "Tech",
        "comments": ["Pariatur fugiat nulla sunt officia aliqua magna. Incididunt elit veniam aute qui adipisicing aute nostrud incididunt qui pariatur id.",
          "Pariatur fugiat nulla sunt officia aliqua magna. Incididunt elit veniam aute qui adipisicing aute nostrud incididunt qui pariatur id."],
        "likes": 71
      },
      {
        "index": 2,
        "title": "qui consectetur ut",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?cs=srgb&dl=beverage-breakfast-browse-1542252.jpg&fm=jpg",
        "body": "Non duis non mollit magna occaecat fugiat. Lorem dolore occaecat tempor veniam fugiat quis non magna. Non do sint qui dolor pariatur ad mollit proident deserunt voluptate occaecat consectetur.",
        "category": "Politics",
        "comments": ["Reprehenderit ea ut labore anim aliqua consectetur anim nisi minim minim ut sunt veniam ea. Officia occaecat ullamco cillum mollit.",
          "Reprehenderit ea ut labore anim aliqua consectetur anim nisi minim minim ut sunt veniam ea. Officia occaecat ullamco cillum mollit."],
        "likes": 32
      },
      {
        "index": 3,
        "title": "amet laboris adipisicing",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?cs=srgb&dl=business-camera-coffee-1509428.jpg&fm=jpg",
        "body": "Officia consectetur qui deserunt pariatur aute officia ad sunt. Laborum sit enim aliqua laborum commodo labore veniam nulla est. Nulla eu anim esse tempor sunt amet.",
        "category": "Politics",
        "comments": ["Excepteur do consequat nostrud labore est magna aliqua veniam velit est. Magna ullamco cillum eu qui culpa.",
          "Excepteur do consequat nostrud labore est magna aliqua veniam velit est. Magna ullamco cillum eu qui culpa."],
        "likes": 3
      },
      {
        "index": 4,
        "title": "aute id cupidatat",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?cs=srgb&dl=architectural-design-architecture-buildings-830891.jpg&fm=jpg",
        "body": "Tempor tempor nisi adipisicing excepteur irure cupidatat sint minim sunt quis. Culpa quis in ut laborum cillum mollit nisi cupidatat veniam tempor. Exercitation ad proident culpa pariatur dolor tempor amet voluptate.",
        "category": "Tech",
        "comments": ["Nostrud labore pariatur qui ut commodo ea consectetur mollit incididunt et. Eu exercitation ad eu cillum enim cupidatat in.",
          "Nostrud labore pariatur qui ut commodo ea consectetur mollit incididunt et. Eu exercitation ad eu cillum enim cupidatat in."],
        "likes": 76
      },
      {
        "index": 5,
        "title": "esse mollit laboris",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1464194/pexels-photo-1464194.jpeg?cs=srgb&dl=action-banner-campaign-1464194.jpg&fm=jpg",
        "body": "Nostrud cupidatat id cupidatat adipisicing quis nostrud minim veniam adipisicing consectetur Lorem sunt pariatur ad. Anim ut cillum sint occaecat mollit exercitation magna sint. Sunt minim eu dolore ex deserunt do exercitation labore nisi.",
        "category": "Politics",
        "comments": ["Est voluptate mollit id deserunt incididunt pariatur do culpa nostrud officia qui enim sunt. Consequat sint tempor irure duis.",
          "Est voluptate mollit id deserunt incididunt pariatur do culpa nostrud officia qui enim sunt. Consequat sint tempor irure duis."],
        "likes": 39
      },
      {
        "index": 6,
        "title": "consequat nisi proident",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?cs=srgb&dl=digital-gear-samsung-51011.jpg&fm=jpg",
        "body": "Voluptate dolore ipsum mollit nulla deserunt enim do anim culpa occaecat. Culpa occaecat officia proident eiusmod. Est laboris cillum id tempor.",
        "category": "Tech",
        "comments": ["Pariatur occaecat esse aute id qui sit proident ipsum adipisicing veniam nostrud. Pariatur elit laborum do cupidatat fugiat tempor tempor cupidatat sunt commodo irure sunt occaecat.",
          "Pariatur occaecat esse aute id qui sit proident ipsum adipisicing veniam nostrud. Pariatur elit laborum do cupidatat fugiat tempor tempor cupidatat sunt commodo irure sunt occaecat."],
        "likes": 11
      },
      {
        "index": 7,
        "title": "et esse ad",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1464215/pexels-photo-1464215.jpeg?cs=srgb&dl=action-adult-banner-1464215.jpg&fm=jpg",
        "body": "Adipisicing eiusmod quis ut et. Velit proident eiusmod veniam et velit sunt incididunt commodo et cillum velit consectetur anim. Exercitation deserunt pariatur minim et id tempor esse laboris aliquip culpa deserunt.",
        "category": "Business",
        "comments": ["Ut ad consequat nostrud nisi tempor nisi deserunt irure velit qui id culpa tempor sit. Excepteur laboris dolore cupidatat anim nulla id consequat voluptate laboris fugiat ex.",
          "Ut ad consequat nostrud nisi tempor nisi deserunt irure velit qui id culpa tempor sit. Excepteur laboris dolore cupidatat anim nulla id consequat voluptate laboris fugiat ex."],
        "likes": 55
      },
      {
        "index": 8,
        "title": "velit ea cupidatat",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/1464213/pexels-photo-1464213.jpeg?cs=srgb&dl=action-adult-banner-1464213.jpg&fm=jpg",
        "body": "Aute ullamco dolor tempor consequat culpa elit ea ipsum veniam excepteur duis. Velit velit velit labore ullamco tempor elit velit proident magna. Tempor id cupidatat est eu aute ullamco enim eu.",
        "category": "Politics",
        "comments": ["Officia consectetur voluptate laboris aliqua. Esse eiusmod fugiat enim dolor fugiat veniam quis ad tempor esse.",
          "Officia consectetur voluptate laboris aliqua. Esse eiusmod fugiat enim dolor fugiat veniam quis ad tempor esse."],
        "likes": 31
      },
      {
        "index": 9,
        "title": "proident in dolore",
        "author":  "5c04d119e150758b5c8c01d2",
        "img": "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?cs=srgb&dl=blurred-background-business-close-up-936137.jpg&fm=jpg",
        "body": "Nisi elit dolor pariatur laborum exercitation dolore nisi. Excepteur ex consectetur in anim sint. Nisi consectetur exercitation sunt duis minim labore esse Lorem laborum non sit ullamco aute.",
        "category": "Business",
        "comments": ["Irure excepteur adipisicing incididunt minim dolore nostrud ea irure aute adipisicing consectetur esse. Culpa labore sit irure nulla do elit voluptate culpa est quis et do tempor reprehenderit.",
          "Irure excepteur adipisicing incididunt minim dolore nostrud ea irure aute adipisicing consectetur esse. Culpa labore sit irure nulla do elit voluptate culpa est quis et do tempor reprehenderit."],
        "likes": 74
      }
    ))
    .then(() => console.log('finished populating things'))
    .catch(err => console.log('error populating things', err));
  promises.push(articlePromise);

  // let userPromise = User.find({}).remove()
  //   .then(() => User.create({
  //     provider: 'local',
  //     name: 'Test User',
  //     email: 'test@example.com',
  //     password: 'test'
  //   }, {
  //       provider: 'local',
  //       role: 'admin',
  //       name: 'Admin',
  //       email: 'admin@example.com',
  //       password: 'admin',

  //     })
  //     .then(() => console.log('finished populating users'))
  //     .catch(err => console.log('error populating users', err)));
  // promises.push(userPromise);

  return Promise.all(promises);
}
