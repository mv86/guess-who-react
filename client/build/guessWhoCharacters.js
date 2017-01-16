const characters = [ 
  {
    "id": 0,
    "picture": "./guess_who_players/adrian.png",
    "name": "Adrian",
    "male": true,
    "brownHair": false,
    "blackHair": false,   
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": true,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 1,
    "picture": "./guess_who_players/alex.png",
    "name": "Alex",
    "male": true,
    "brownHair": true,
    "blackHair": false,  
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 2,
    "picture": "./guess_who_players/bertie.png",
    "name": "Bertie",
    "male": true,
    "brownHair": true,
    "blackHair": false,  
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 3,
    "picture": "./guess_who_players/bobby.png",
    "name": "Bobby",
    "male": true,
    "brownHair": false,
    "blackHair": false,   
    "blondeHair": true,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 4,
    "picture": "./guess_who_players/carlos.png",
    "name": "Carlos",
    "male": true,
    "brownHair": false,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": true,
    "glasses": true,
    "beard": true,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 5,
    "picture": "/guess_who_players/claudia.png",
    "name": "Claudia",
    "male": false,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": true,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 6,
    "picture": "/guess_who_players/cookie.png",
    "name": "Cookie",
    "male": false,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 7,
    "picture": "/guess_who_players/cyrus.png",
    "name": "Cyrus",
    "male": true,
    "brownHair": false,   
    "blackHair": true,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": true,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 8,
    "picture": "/guess_who_players/david.png",
    "name": "David",
    "male": true,
    "brownHair": false,   
    "blackHair": true,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 9,
    "picture": "/guess_who_players/diana.png",
    "name": "Diana",
    "male": false,
    "brownHair": false,   
    "blackHair": true,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 10,
    "picture": "/guess_who_players/euan.png",
    "name": "Euan",
    "male": true,
    "brownHair": false,
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": true,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 11,
    "picture": "/guess_who_players/jo.png",
    "name": "Josephine",
    "male": false,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 12,
    "picture": "/guess_who_players/kate.png",
    "name": "Kate",
    "male": false,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": true,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 13,
    "picture": "/guess_who_players/kyle.png",
    "name": "Kyle",
    "male": true,
    "brownHair": false,   
    "blackHair": false,
    "blondeHair": true,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 14,
    "picture": "/guess_who_players/matthew.png",
    "name": "Matthew",
    "male": true,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 15,
    "picture": "/guess_who_players/max.png",
    "name": "Max",
    "male": true,
    "brownHair": false,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": true,
    "glasses": true,
    "beard": true,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 16,
    "picture": "/guess_who_players/paul.png",
    "name": "Paul",
    "male": true,
    "brownHair": false,
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": true,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 17,
    "picture": "/guess_who_players/pavlos.png",
    "name": "Pavlos",
    "male": true,
    "brownHair": false,   
    "blackHair": true,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 18,
    "picture": "/guess_who_players/ross.png",
    "name": "Ross",
    "male": true,
    "brownHair": false,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": true,
    "undefinedHair": false,
    "glasses": false,
    "beard": true,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 19,
    "picture": "/guess_who_players/tomB.png",
    "name": "Tom B",
    "male": true,
    "brownHair": false,   
    "blackHair": true,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": false,
    "umbrella": false,
    "goodLooking": true
  },
  {
    "id": 20,
    "picture": "/guess_who_players/tomC.png",
    "name": "Tom C",
    "male": true,
    "brownHair": true,   
    "blackHair": false,
    "blondeHair": false,
    "gingerHair": false,
    "undefinedHair": false,
    "glasses": false,
    "beard": true,
    "umbrella": true,
    "goodLooking": true
  }
]

export default characters;