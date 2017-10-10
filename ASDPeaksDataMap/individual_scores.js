const individualScores = {
  "Dimond High School": {"ELA": "60.4", "Math": "76.7"},
  "Rabbit Creek Elementary": {"ELA": "36.8", "Math": "32.0"},
  "Northwood ABC": {"ELA": "65.2", "Math": "60.4"},
  "Bowman Elementary": {"ELA": "56.5", "Math": "50.7"},
  "Government Hill Elementary": {"ELA": "59.6", "Math": "63.2"},
  "Ocean View Elementary": {"ELA": "63.0", "Math": "49.6"},
  "Clark Middle School": {"ELA": "75.2", "Math": "90.7"},
  "Chester Valley Elementary": {"ELA": "77.4", "Math": "83.8"},
  "Service High School": {"ELA": "73.1", "Math": "76.8"},
  "Chugach Optional Elementary": {"ELA": "30.3", "Math": "32.4"},
  "Bear Valley Elementary": {"ELA": "29.7", "Math": "32.9"},
  "North Star Elementary": {"ELA": "79.7", "Math": "84.8"},
  "Alpenglow Elementary": {"ELA": "49.7", "Math": "47.1"},
  "Wonder Park Elementary": {"ELA": "85.2", "Math": "77.5"},
  "Klatt Elementary": {"ELA": "64.8", "Math": "53.2"},
  "Mirror Lake Middle School": {"ELA": "44.7", "Math": "57.7"},
  "Hanshew Middle School": {"ELA": "62.3", "Math": "75.3"},
  "Russian Jack Elementary": {"ELA": "72.2", "Math": "68.8"},
  "Wendler Middle School": {"ELA": "75.9", "Math": "84.4"},
  "Rilke Schule Charter School": {"ELA": "44.9", "Math": "41.0"},
  "Bartlett High School": {"ELA": "74.8", "Math": "90.5"},
  "West High School": {"ELA": "60.9", "Math": "74.9"},
  "Lake Hood Elementary": {"ELA": "69.4", "Math": "68.0"},
  "Ursa Major Elementary": {"ELA": "56.0", "Math": "47.9"},
  "Alaska State School for Deaf and Hard of Hearing": {"ELA": "80 or more", "Math": "80 or more"},
  "Willow Crest Elementary": {"ELA": "67.3", "Math": "65.8"},
  "Benson Secondary/S.E.A.R.C.H.": {"ELA": "89.1", "Math": "95 or more"},
  "Chugiak High School": {"ELA": "62.4", "Math": "77.6"},
  "Anchorage STrEaM Academy": {"ELA": "57.1", "Math": "64.9"},
  "Mountain View Elementary": {"ELA": "89.7", "Math": "79.5"},
  "Goldenview Middle School": {"ELA": "48.4", "Math": "55.8"},
  "East High School": {"ELA": "79.4", "Math": "86.9"},
  "Northern Lights ABC K-8 School": {"ELA": "25.7", "Math": "34.8"},
  "Tudor Elementary": {"ELA": "67.8", "Math": "62.7"},
  "College Gate Elementary": {"ELA": "62.2", "Math": "62.2"},
  "Campbell Elementary": {"ELA": "67.8", "Math": "59.9"},
  "Gladys Wood Elementary": {"ELA": "67.3", "Math": "64.3"},
  "Eagle Academy Charter School": {"ELA": "34.7", "Math": "20.4"},
  "Scenic Park Elementary": {"ELA": "63.1", "Math": "57.1"},
  "Susitna Elementary": {"ELA": "71.4", "Math": "58.8"},
  "Homestead Elementary": {"ELA": "33.9", "Math": "21.6"},
  "Family Partnership Charter School": {"ELA": "50.0", "Math": "67.7"},
  "Aquarian Charter School": {"ELA": "25.6", "Math": "31.7"},
  "Fairview Elementary": {"ELA": "87.5", "Math": "83.9"},
  "Central Middle School of Science": {"ELA": "65.9", "Math": "82.3"},
  "Aurora Elementary": {"ELA": "38.9", "Math": "34.4"},
  "Ursa Minor Elementary": {"ELA": "46.0", "Math": "42.4"},
  "Eagle River Elementary": {"ELA": "59.0", "Math": "53.4"},
  "William Tyson Elementary": {"ELA": "81.3", "Math": "76.4"},
  "Creekside Park Elementary": {"ELA": "74.6", "Math": "78.8"},
  "Ptarmigan Elementary": {"ELA": "82.6", "Math": "78.8"},
  "Birchwood ABC Elementary": {"ELA": "40.6", "Math": "36.7"},
  "Trailside Elementary": {"ELA": "41.8", "Math": "28.8"},
  "O'Malley Elementary": {"ELA": "41.4", "Math": "33.1"},
  "Baxter Elementary": {"ELA": "60.3", "Math": "61.2"},
  "Nunaka Valley Elementary": {"ELA": "75.8", "Math": "75.8"},
  "Frontier Charter School": {"ELA": "51.5", "Math": "72.3"},
  "Huffman Elementary": {"ELA": "37.6", "Math": "31.2"},
  "Airport Heights Elementary": {"ELA": "79.0", "Math": "72.4"},
  "Muldoon Elementary": {"ELA": "79.9", "Math": "71.9"},
  "Winterberry School": {"ELA": "53.3", "Math": "74.4"},
  "Nicholas J. Begich Middle School": {"ELA": "74.6", "Math": "87.8"},
  "Whaley School": {"ELA": "81.3", "Math": "96.6"},
  "Alaska Native Cultural Charter School": {"ELA": "77.2", "Math": "63.0"},
  "Lake Otis Elementary": {"ELA": "78.1", "Math": "78.7"},
  "Bayshore Elementary": {"ELA": "29.3", "Math": "22.3"},
  "Inlet View Elementary": {"ELA": "44.3", "Math": "42.9"},
  "Crossroads School": {"ELA": "*", "Math": "*"},
  "Chinook Elementary": {"ELA": "63.0", "Math": "58.9"},
  "Mears Middle School": {"ELA": "55.4", "Math": "70.4"},
  "Turnagain Elementary": {"ELA": "62.5", "Math": "57.6"},
  "Williwaw Elementary": {"ELA": "86.7", "Math": "73.6"},
  "Chugiak Elementary": {"ELA": "54.5", "Math": "40.6"},
  "Spring Hill Elementary": {"ELA": "68.7", "Math": "60.4"},
  "Gruening Middle School": {"ELA": "45.8", "Math": "58.3"},
  "Kincaid Elementary": {"ELA": "44.5", "Math": "33.4"},
  "Eagle River High School": {"ELA": "57.9", "Math": "70.3"},
  "Sand Lake Elementary": {"ELA": "53.0", "Math": "43.5"},
  "McLaughlin Secondary School": {"ELA": "92.1", "Math": "90 or more"},
  "Avail School": {"ELA": "*", "Math": "60 or more"},
  "Rogers Park Elementary": {"ELA": "39.1", "Math": "37.8"},
  "Mt. Spurr Elementary": {"ELA": "45.0", "Math": "38.9"},
  "PAIDEIA Cooperative School": {"ELA": "63.9", "Math": "82.0"},
  "The New Path High School": {"ELA": "*", "Math": "*"},
  "South Anchorage High School": {"ELA": "61.0", "Math": "64.5"},
  "Abbott Loop Elementary": {"ELA": "74.9", "Math": "68.7"},
  "Steller Secondary School": {"ELA": "27.8", "Math": "50.3"},
  "Orion Elementary School": {"ELA": "40.8", "Math": "31.7"},
  "Fire Lake Elementary": {"ELA": "61.2", "Math": "58.8"},
  "Kasuun Elementary": {"ELA": "65.3", "Math": "64.0"},
  "Romig Middle School": {"ELA": "52.7", "Math": "68.8"},
  "Polaris K-12 School": {"ELA": "44.3", "Math": "61.1"},
  "Denali Montessori Elementary": {"ELA": "53.9", "Math": "69.1"},
  "Girdwood School": {"ELA": "30.5", "Math": "29.7"},
  "Taku Elementary": {"ELA": "73.6", "Math": "71.5"},
  "Highland Academy Charter": {"ELA": "48.6", "Math": "63.1"},
  "S.A.V.E. High School": {"ELA": "*", "Math": "*"},
  "Ravenwood Elementary": {"ELA": "36.5", "Math": "32.6"},
  "King Career Center": {"ELA": "*", "Math": "*"}
};

export default individualScores;