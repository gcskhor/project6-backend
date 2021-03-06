const ingredientsList = [
  "5 spice powder",
  "alfredo pasta sauce",
  "almond extract",
  "almond flour",
  "almond milk",
  "almonds",
  "anchovies",
  "angel hair pasta",
  "apple",
  "apple cider",
  "apple juice",
  "apricots",
  "asparagus",
  "avocado",
  "avocado oil",
  "baby-back ribs",
  "bacon",
  "baguette",
  "baking powder",
  "baking soda",
  "balsamic vinegar",
  "bamboo shoots",
  "banana",
  "basil",
  "bay leaves",
  "bbq sauce",
  "bean sprouts",
  "beans",
  "beef",
  "beef broth",
  "beef stock",
  "beer",
  "beets",
  "bell pepper",
  "berries",
  "biscuits",
  "black bean sauce",
  "black beans",
  "black pepper",
  "black sesame seeds",
  "blackberries",
  "blue cheese",
  "blueberries",
  "bok choy",
  "bread",
  "bread crumbs",
  "brie",
  "brinjal",
  "broccoli",
  "brown rice",
  "brown rice flour",
  "brown sugar",
  "brownie mix",
  "brussel sprouts",
  "butter",
  "buttermilk",
  "butternut squash",
  "cabbage",
  "caesar dressing",
  "cajun seasoning",
  "cake flour",
  "canned baked beans",
  "canned black beans",
  "canned kidney beans",
  "canned mushrooms",
  "canned soup",
  "canned tomatoes",
  "canned tuna",
  "cantaloupe",
  "capsicum",
  "carrots",
  "cauliflower",
  "celery",
  "cereal",
  "cheddar",
  "cheddar cheese",
  "cheese",
  "cheese tortellini",
  "cherry",
  "cherry tomatoes",
  "chestnuts",
  "chia seeds",
  "chicken",
  "chicken broth",
  "chicken stock",
  "chili paste",
  "chilli sauce",
  "chocolate",
  "chocolate chip cookies",
  "chocolate syrup",
  "chye sim",
  "cider vinegar",
  "cilantro",
  "cinnamon roll",
  "cinnamon stick",
  "clams",
  "clove",
  "coarsely ground pepper",
  "cocoa powder",
  "coconut",
  "coconut milk",
  "coconut oil",
  "coconut water",
  "cod",
  "coffee",
  "cola",
  "condensed milk",
  "cookies",
  "cooking oats",
  "coriander",
  "corn",
  "corn chips",
  "corn flakes cereal",
  "corn flour",
  "corn kernels",
  "corn syrup",
  "corned beef",
  "cottage cheese",
  "crabmeat",
  "cranberries",
  "cranberry juice",
  "cream",
  "cream cheese",
  "cream of chicken soup",
  "cream of mushroom soup",
  "cream of tartar",
  "creamed corn",
  "cucumber",
  "cumin seeds",
  "cupcake",
  "curry leaves",
  "curry powder",
  "dairy free milk",
  "dark brown sugar",
  "dark chocolate",
  "dark chocolate chips",
  "dark sesame oil",
  "dates",
  "deli ham",
  "diced ham",
  "double cream",
  "edamame",
  "eggplant",
  "eggs",
  "english muffin",
  "espresso",
  "evaporated milk",
  "extra virgin olive oil",
  "fennel",
  "fennel seeds",
  "feta cheese",
  "fettuccine",
  "fish",
  "fish ball",
  "fish sauce",
  "fish stock",
  "flax seeds",
  "flour",
  "flour tortillas",
  "fontina cheese",
  "food dye",
  "french bread",
  "fresh chives",
  "fresh mint",
  "fresh mozzarella",
  "fresh rosemary",
  "fresh thyme leaves",
  "frosting",
  "garlic",
  "garlic paste",
  "garlic powder",
  "garlic salt",
  "gelatin",
  "ginger",
  "gnocchi",
  "goat cheese",
  "gouda cheese",
  "graham crackers",
  "granola",
  "grapefruit",
  "grapes",
  "grapeseed oil",
  "greek yogurt",
  "green beans",
  "green grapes",
  "green olives",
  "green onions",
  "greens",
  "grill seasoning",
  "ground beef",
  "ground cinnamon",
  "ground cloves",
  "ground coriander seeds",
  "ground cumin",
  "ground flaxseed",
  "ground ginger",
  "ground lamb",
  "ground nutmeg",
  "ground pork",
  "gruyere",
  "guacamole",
  "halibut fillet",
  "ham",
  "hamburger buns",
  "hazelnuts",
  "hemp seeds",
  "herbs",
  "hoisin sauce",
  "honey mustard",
  "horseradish",
  "hot dog",
  "hot sauce",
  "hummus",
  "ice",
  "ice cream",
  "ikan bilis",
  "instant coffee powder",
  "instant espresso powder",
  "italian bread",
  "italian seasoning",
  "jalapeno",
  "jasmine rice",
  "jelly",
  "juice",
  "kaffir lime leaves",
  "kale",
  "ketchup",
  "kidney beans",
  "kiwis",
  "lactose free milk",
  "ladyfingers",
  "lamb",
  "lasagna noodles",
  "leeks",
  "lemon",
  "lemon curd",
  "lemon juice",
  "lemongrass",
  "lettuce",
  "lime",
  "lime juice",
  "linguine",
  "live lobster",
  "macadamia nuts",
  "mango",
  "maple syrup",
  "margarine",
  "marshmallows",
  "mascarpone",
  "matcha",
  "mayonnaise",
  "meatballs",
  "milk",
  "miso",
  "mushroom",
  "mussels",
  "mustard",
  "mustard seeds",
  "nectarine",
  "nonfat milk",
  "nutella",
  "nutritional yeast",
  "oats",
  "oil",
  "okra",
  "olive oil",
  "olives",
  "onion",
  "onion powder",
  "orange",
  "orange juice",
  "oyster sauce",
  "oysters",
  "palm sugar",
  "pancetta",
  "panko",
  "papaya",
  "paprika",
  "parsley",
  "pasta",
  "pasta sauce",
  "peach",
  "peanut butter",
  "peanut oil",
  "peanuts",
  "pear",
  "peas",
  "pecan",
  "penne",
  "peppercorns",
  "peppermint extract",
  "pepperoni",
  "peppers",
  "pesto",
  "pickle relish",
  "pickles",
  "pine nuts",
  "pineapple",
  "pineapple juice",
  "pink himalayan salt",
  "pinto beans",
  "pistachios",
  "pita",
  "plain yogurt",
  "plum",
  "pomegranate juice",
  "pomegranate seeds",
  "popcorn",
  "pork",
  "pork roast",
  "potato",
  "potato chips",
  "potato starch",
  "poultry seasoning",
  "prunes",
  "puff pastry",
  "pumpkin",
  "pumpkin seeds",
  "quinoa",
  "radishes",
  "raisins",
  "ramen noodles",
  "ranch dressing",
  "raspberries",
  "raspberry jam",
  "raw cashews",
  "prawn",
  "red chilli",
  "red lentils",
  "red onion",
  "red pepper flakes",
  "red pepper powder",
  "rice",
  "rice flour",
  "rice noodles",
  "rice paper",
  "rice vinegar",
  "rice wine",
  "ritz crackers",
  "roasted nuts",
  "roasted peanuts",
  "rosemary",
  "sage",
  "salad dressing",
  "salami",
  "salmon fillet",
  "salsa",
  "salt",
  "saltine crackers",
  "sandwich bun",
  "sausage",
  "sea scallops",
  "seasoned bread crumbs",
  "seasoning blend",
  "self-rising flour",
  "sesame oil",
  "sesame seeds",
  "shallot",
  "shells",
  "short pasta",
  "short ribs",
  "shortbread cookies",
  "shortcrust pastry",
  "shortening",
  "shredded coconut",
  "shredded mozzarella",
  "Sirloin",
  "smoked salmon",
  "snapper fillets",
  "snow peas",
  "sour cream",
  "sourdough bread",
  "soy milk",
  "soy sauce",
  "spaghetti",
  "spinach",
  "squash",
  "sriracha sauce",
  "steak",
  "steel cut oats",
  "strawberries",
  "strawberry jam",
  "sugar",
  "sugar syrup",
  "sunflower oil",
  "sunflower seeds",
  "tapioca flour",
  "tea bags",
  "teriyaki sauce",
  "thai chiles",
  "thyme",
  "toast",
  "tofu",
  "tomato",
  "tomato juice",
  "tomato paste",
  "tomato puree",
  "tomato sauce",
  "tomato soup",
  "tortilla",
  "tortilla chips",
  "truffle oil",
  "tuna",
  "turkey",
  "turmeric",
  "turnips",
  "vegetable broth",
  "vegetable oil",
  "vegetable stock",
  "vinegar",
  "walnuts",
  "water chestnuts",
  "watercress",
  "whipping cream",
  "white bread",
  "white pepper",
  "won ton wraps",
  "worcestershire sauce",
  "yeast",
  "yellow onion",
  "yogurt",
];

export default ingredientsList;
