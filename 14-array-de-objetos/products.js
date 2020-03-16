const products = [
  {
    "id": 1,
    "name": "Cherries - Maraschino,jar",
    "price": 7.95,
    "stock": 15,
    "store": "Disco"
  },
  { 
    "id": 2, 
    "name": "Apron", 
    "price": 39.44, 
    "stock": 62, 
    "store": "Día" 
  },
  {
    "id": 3,
    "name": "Jerusalem Artichoke",
    "price": 22.31,
    "stock": 63,
    "store": "Día"
  },
  {
    "id": 4,
    "name": "Chicken - Whole Fryers",
    "price": 17.7,
    "stock": 19,
    "store": "Disco"
  },
  {
    "id": 5,
    "name": "Oregano - Fresh",
    "price": 19.2,
    "stock": 36,
    "store": "Jumbo"
  },
  {
    "id": 6,
    "name": "Rosemary - Fresh",
    "price": 25.24,
    "stock": 27,
    "store": "Coto"
  },
  {
    "id": 7,
    "name": "Bagels Poppyseed",
    "price": 2.5,
    "stock": 41,
    "store": "Coto"
  },
  {
    "id": 8,
    "name": "Chilli Paste, Ginger Garlic",
    "price": 15.24,
    "stock": 26,
    "store": "Coto"
  },
  {
    "id": 9,
    "name": "Juice - Orangina",
    "price": 10.86,
    "stock": 1,
    "store": "Día"
  },
  {
    "id": 10,
    "name": "Shrimp - 16 - 20 Cooked, Peeled",
    "price": 4.12,
    "stock": 19,
    "store": "Día"
  },
  {
    "id": 11,
    "name": "Wine - Touraine Azay - Le - Rideau",
    "price": 7.84,
    "stock": 78,
    "store": "Jumbo"
  },
  {
    "id": 12,
    "name": "Pie Pecan",
    "price": 43.56,
    "stock": 83,
    "store": "Día"
  },
  {
    "id": 13,
    "name": "Tomato Puree",
    "price": 45.07,
    "stock": 2,
    "store": "Día"
  },
  {
    "id": 14,
    "name": "Beef - Rib Roast, Cap On",
    "price": 20.71,
    "stock": 46,
    "store": "Día"
  },
  {
    "id": 15,
    "name": "Crab - Blue, Frozen",
    "price": 46.4,
    "stock": 55,
    "store": "Jumbo"
  },
  {
    "id": 16,
    "name": "Peas Snow",
    "price": 22.08,
    "stock": 83,
    "store": "Jumbo"
  },
  {
    "id": 17,
    "name": "Bouq All Italian - Primerba",
    "price": 32.78,
    "stock": 66,
    "store": "Disco"
  },
  {
    "id": 18,
    "name": "Water - San Pellegrino",
    "price": 19.69,
    "stock": 58,
    "store": "Coto"
  },
  {
    "id": 19,
    "name": "Lemon Grass",
    "price": 24.05,
    "stock": 33,
    "store": "Jumbo"
  },
  {
    "id": 20,
    "name": "Pur Source",
    "price": 23.92,
    "stock": 52,
    "store": "Coto"
  },
  {
    "id": 21,
    "name": "Venison - Striploin",
    "price": 45.45,
    "stock": 1,
    "store": "Jumbo"
  },
  {
    "id": 22,
    "name": "Burger Veggie",
    "price": 32.89,
    "stock": 28,
    "store": "Día"
  },
  {
    "id": 23,
    "name": "Appetizer - Asian Shrimp Roll",
    "price": 29.87,
    "stock": 83,
    "store": "Día"
  },
  {
    "id": 24,
    "name": "Wine - Shiraz Wolf Blass Premium",
    "price": 39.68,
    "stock": 49,
    "store": "Día"
  },
  {
    "id": 25,
    "name": "Coffee - Ristretto Coffee Capsule",
    "price": 40.66,
    "stock": 9,
    "store": "Disco"
  },
  {
    "id": 26,
    "name": "Ham - Procutinni",
    "price": 49.81,
    "stock": 83,
    "store": "Coto"
  },
  {
    "id": 27,
    "name": "Energy Drink - Franks Original",
    "price": 1.49,
    "stock": 77,
    "store": "Jumbo"
  },
  {
    "id": 28,
    "name": "Uniform Linen Charge",
    "price": 46.14,
    "stock": 83,
    "store": "Día"
  },
  {
    "id": 29,
    "name": "Sage - Fresh",
    "price": 38.48,
    "stock": 59,
    "store": "Disco"
  },
  {
    "id": 30,
    "name": "Juice - Happy Planet",
    "price": 15.58,
    "stock": 42,
    "store": "Coto"
  },
  {
    "id": 31,
    "name": "Tilapia - Fillets",
    "price": 24.69,
    "stock": 17,
    "store": "Coto"
  },
  {
    "id": 32,
    "name": "Wine - Spumante Bambino White",
    "price": 3.69,
    "stock": 23,
    "store": "Jumbo"
  },
  {
    "id": 33,
    "name": "Wine - Bourgogne 2002, La",
    "price": 14.41,
    "stock": 88,
    "store": "Jumbo"
  },
  {
    "id": 34,
    "name": "Beef - Tenderloin - Aa",
    "price": 12.87,
    "stock": 77,
    "store": "Día"
  },
  {
    "id": 35,
    "name": "Rice - Long Grain",
    "price": 22.79,
    "stock": 57,
    "store": "Jumbo"
  },
  {
    "id": 36,
    "name": "Garlic - Primerba, Paste",
    "price": 42.35,
    "stock": 30,
    "store": "Día"
  },
  {
    "id": 37,
    "name": "Lotus Rootlets - Canned",
    "price": 45.27,
    "stock": 96,
    "store": "Jumbo"
  },
  {
    "id": 38,
    "name": "Potatoes - Mini White 3 Oz",
    "price": 43.98,
    "stock": 51,
    "store": "Día"
  },
  {
    "id": 39,
    "name": "Chocolate Eclairs",
    "price": 49.55,
    "stock": 30,
    "store": "Jumbo"
  },
  {
    "id": 40,
    "name": "Veal - Sweetbread",
    "price": 34.79,
    "stock": 82,
    "store": "Disco"
  },
  {
    "id": 41,
    "name": "Doilies - 10, Paper",
    "price": 5.14,
    "stock": 79,
    "store": "Disco"
  },
  {
    "id": 42,
    "name": "Energy Drink",
    "price": 37.33,
    "stock": 27,
    "store": "Disco"
  },
  {
    "id": 43,
    "name": "Cocoa Butter",
    "price": 35.48,
    "stock": 51,
    "store": "Coto"
  },
  {
    "id": 44,
    "name": "Compound - Orange",
    "price": 11.61,
    "stock": 85,
    "store": "Jumbo"
  },
  {
    "id": 45,
    "name": "Wine - Red, Metus Rose",
    "price": 45.17,
    "stock": 12,
    "store": "Disco"
  },
  {
    "id": 46,
    "name": "Dried Cherries",
    "price": 11.6,
    "stock": 91,
    "store": "Disco"
  },
  {
    "id": 47,
    "name": "Bread - Hot Dog Buns",
    "price": 16.0,
    "stock": 71,
    "store": "Coto"
  },
  {
    "id": 48,
    "name": "Ham - Cooked Italian",
    "price": 34.09,
    "stock": 93,
    "store": "Día"
  },
  {
    "id": 49,
    "name": "Whmis Spray Bottle Graduated",
    "price": 15.42,
    "stock": 99,
    "store": "Jumbo"
  },
  {
    "id": 50,
    "name": "Towel - Roll White",
    "price": 17.24,
    "stock": 66,
    "store": "Día"
  },
  {
    "id": 51,
    "name": "Food Colouring - Orange",
    "price": 48.15,
    "stock": 100,
    "store": "Día"
  },
  {
    "id": 52,
    "name": "Tomatoes - Hot House",
    "price": 34.45,
    "stock": 47,
    "store": "Jumbo"
  },
  {
    "id": 53,
    "name": "Soup - Knorr, Ministrone",
    "price": 40.08,
    "stock": 79,
    "store": "Coto"
  },
  {
    "id": 54,
    "name": "Pork - Inside",
    "price": 24.33,
    "stock": 38,
    "store": "Disco"
  },
  {
    "id": 55,
    "name": "Energy Drink - Redbull 355ml",
    "price": 45.08,
    "stock": 31,
    "store": "Jumbo"
  },
  {
    "id": 56,
    "name": "Pastry - Baked Scones - Mini",
    "price": 8.42,
    "stock": 9,
    "store": "Coto"
  },
  {
    "id": 57,
    "name": "Onions - Green",
    "price": 28.53,
    "stock": 4,
    "store": "Coto"
  },
  {
    "id": 58,
    "name": "Petit Baguette",
    "price": 15.71,
    "stock": 89,
    "store": "Coto"
  },
  {
    "id": 59,
    "name": "Lamb Rack - Ontario",
    "price": 24.7,
    "stock": 4,
    "store": "Jumbo"
  },
  {
    "id": 60,
    "name": "Wine - Chardonnay Mondavi",
    "price": 25.0,
    "stock": 92,
    "store": "Jumbo"
  },
  {
    "id": 61,
    "name": "Duck - Legs",
    "price": 3.53,
    "stock": 22,
    "store": "Disco"
  },
  {
    "id": 62,
    "name": "Pasta - Detalini, White, Fresh",
    "price": 16.03,
    "stock": 12,
    "store": "Día"
  },
  {
    "id": 63,
    "name": "Sea Bass - Fillets",
    "price": 20.58,
    "stock": 19,
    "store": "Día"
  },
  {
    "id": 64,
    "name": "Pizza Pizza Dough",
    "price": 49.11,
    "stock": 38,
    "store": "Día"
  },
  {
    "id": 65,
    "name": "Water - Mineral, Natural",
    "price": 8.85,
    "stock": 46,
    "store": "Disco"
  },
  {
    "id": 66,
    "name": "Trout - Hot Smkd, Dbl Fillet",
    "price": 21.73,
    "stock": 39,
    "store": "Jumbo"
  },
  {
    "id": 67,
    "name": "Puff Pastry - Sheets",
    "price": 9.39,
    "stock": 19,
    "store": "Día"
  },
  {
    "id": 68,
    "name": "Pickerel - Fillets",
    "price": 38.77,
    "stock": 74,
    "store": "Jumbo"
  },
  {
    "id": 69,
    "name": "Tomatoes - Cherry",
    "price": 47.82,
    "stock": 36,
    "store": "Disco"
  },
  {
    "id": 70,
    "name": "Kellogs Special K Cereal",
    "price": 49.6,
    "stock": 33,
    "store": "Disco"
  },
  {
    "id": 71,
    "name": "Cookie Trail Mix",
    "price": 34.63,
    "stock": 42,
    "store": "Día"
  },
  {
    "id": 72,
    "name": "Soup - Campbells Chili Veg",
    "price": 5.77,
    "stock": 14,
    "store": "Disco"
  },
  {
    "id": 73,
    "name": "Vinegar - Cider",
    "price": 27.8,
    "stock": 2,
    "store": "Día"
  },
  {
    "id": 74,
    "name": "Pastry - Cheese Baked Scones",
    "price": 49.94,
    "stock": 79,
    "store": "Jumbo"
  },
  {
    "id": 75,
    "name": "Cake Sheet Combo Party Pack",
    "price": 23.07,
    "stock": 35,
    "store": "Disco"
  },
  {
    "id": 76,
    "name": "Liners - Banana, Paper",
    "price": 20.58,
    "stock": 97,
    "store": "Día"
  },
  {
    "id": 77,
    "name": "Calypso - Black Cherry Lemonade",
    "price": 38.9,
    "stock": 64,
    "store": "Día"
  },
  {
    "id": 78,
    "name": "Basil - Primerba, Paste",
    "price": 25.56,
    "stock": 24,
    "store": "Jumbo"
  },
  {
    "id": 79,
    "name": "Sauce - Vodka Blush",
    "price": 8.42,
    "stock": 8,
    "store": "Día"
  },
  {
    "id": 80,
    "name": "Ice Cream Bar - Drumstick",
    "price": 11.11,
    "stock": 54,
    "store": "Día"
  },
  {
    "id": 81,
    "name": "Sword Pick Asst",
    "price": 31.81,
    "stock": 43,
    "store": "Jumbo"
  },
  {
    "id": 82,
    "name": "Bread - Roll, Canadian Dinner",
    "price": 5.49,
    "stock": 15,
    "store": "Día"
  },
  {
    "id": 83,
    "name": "Cinnamon - Stick",
    "price": 3.98,
    "stock": 49,
    "store": "Día"
  },
  {
    "id": 84,
    "name": "Cheese - Augre Des Champs",
    "price": 3.54,
    "stock": 27,
    "store": "Día"
  },
  {
    "id": 85,
    "name": "Tomato - Plum With Basil",
    "price": 49.25,
    "stock": 83,
    "store": "Disco"
  },
  {
    "id": 86,
    "name": "Wine - Prosecco Valdobiaddene",
    "price": 10.7,
    "stock": 57,
    "store": "Coto"
  },
  {
    "id": 87,
    "name": "Sage - Rubbed",
    "price": 17.02,
    "stock": 18,
    "store": "Jumbo"
  },
  {
    "id": 88,
    "name": "Pur Value",
    "price": 11.79,
    "stock": 3,
    "store": "Disco"
  },
  {
    "id": 89,
    "name": "Anchovy Paste - 56 G Tube",
    "price": 40.07,
    "stock": 74,
    "store": "Coto"
  },
  {
    "id": 90,
    "name": "Wine - Saint - Bris 2002, Sauv",
    "price": 42.0,
    "stock": 14,
    "store": "Día"
  },
  {
    "id": 91,
    "name": "Vodka - Moskovskaya",
    "price": 28.37,
    "stock": 23,
    "store": "Día"
  },
  {
    "id": 92,
    "name": "French Kiss Vanilla",
    "price": 49.44,
    "stock": 87,
    "store": "Jumbo"
  },
  {
    "id": 93,
    "name": "Soup Campbells - Italian Wedding",
    "price": 10.22,
    "stock": 74,
    "store": "Jumbo"
  },
  {
    "id": 94,
    "name": "Brandy Apricot",
    "price": 39.59,
    "stock": 13,
    "store": "Disco"
  },
  {
    "id": 95,
    "name": "Silicone Parch. 16.3x24.3",
    "price": 37.95,
    "stock": 56,
    "store": "Día"
  },
  {
    "id": 96,
    "name": "Wine - Clavet Saint Emilion",
    "price": 17.15,
    "stock": 38,
    "store": "Coto"
  },
  {
    "id": 97,
    "name": "Wine - Chianti Classica Docg",
    "price": 18.51,
    "stock": 74,
    "store": "Día"
  },
  {
    "id": 98,
    "name": "Cheese - Feta",
    "price": 12.16,
    "stock": 69,
    "store": "Día"
  },
  {
    "id": 99,
    "name": "Pickerel - Fillets",
    "price": 33.16,
    "stock": 44,
    "store": "Día"
  },
  {
    "id": 100,
    "name": "Crush - Cream Soda",
    "price": 34.36,
    "stock": 100,
    "store": "Disco"
  }
]
