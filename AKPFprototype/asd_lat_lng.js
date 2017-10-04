const schoolLocations = {
  "Lake Hood Elementary": {"lat": 61.18537309999999, "lng": -149.9522238},
  "Susitna Elementary": {"lat": 61.198218, "lng": -149.738452},
  "Lake Otis Elementary": {"lat": 61.1909199, "lng": -149.8371496},
  "Bartlett High School": {"lat": 61.23230779999999, "lng": -149.7332245},
  "Orion Elementary School": {"lat": 61.2344805, "lng": -149.8598817},
  "Gladys Wood Elementary": {"lat": 61.1571963, "lng": -149.9356313},
  "Goldenview Middle School": {"lat": 61.07797780000001, "lng": -149.77834},
  "Denali Montessori Elementary": {"lat": 61.2132436, "lng": -149.880805},
  "Chester Valley Elementary": {"lat": 61.20469869999999, "lng": -149.7474182},
  "Anchorage STrEaM Academy": {"lat": 61.1923263, "lng": -149.7353267},
  "Dimond High School": {"lat": 61.1427896, "lng": -149.9353272},
  "Chugiak Elementary": {"lat": 61.4005816, "lng": -149.463816},
  "Benson Secondary/S.E.A.R.C.H.": {"lat": 61.17957289999999, "lng": -149.7595708},
  "Tudor Elementary": {"lat": 61.17451670000001, "lng": -149.8497912},
  "Bear Valley Elementary": {"lat": 61.084336, "lng": -149.748271},
  "Airport Heights Elementary": {"lat": 61.20703249999999, "lng": -149.8299206},
  "Ocean View Elementary": {"lat": 61.11280889999999, "lng": -149.8770521},
  "PAIDEIA Cooperative School": {"lat": 61.21214309999999, "lng": -149.8948624},
  "Turnagain Elementary": {"lat": 61.194364, "lng": -149.948545},
  "Eagle Academy Charter School": {"lat": 61.3191903, "lng": -149.5795836},
  "West High School": {"lat": 61.199717, "lng": -149.9165701},
  "Mountain View Elementary": {"lat": 61.23195080000001, "lng": -149.8069032},
  "Crossroads School": {"lat": 61.2238748, "lng": -149.8179343},
  "Fairview Elementary": {"lat": 61.2100575, "lng": -149.8553049},
  "Creekside Park Elementary": {"lat": 61.2162473, "lng": -149.7422018},
  "College Gate Elementary": {"lat": 61.192716, "lng": -149.7830486},
  "Inlet View Elementary": {"lat": 61.209721, "lng": -149.906223},
  "Ursa Major Elementary": {"lat": 61.2512633, "lng": -149.6778324},
  "Bayshore Elementary": {"lat": 61.1253322, "lng": -149.9403145},
  "William Tyson Elementary": {"lat": 61.22700029999999, "lng": -149.8253507},
  "Ursa Minor Elementary": {"lat": 61.2468153, "lng": -149.6875149},
  "Sand Lake Elementary": {"lat": 61.1525443, "lng": -149.9536855},
  "Steller Secondary School": {"lat": 61.19737929999999, "lng": -149.8934241},
  "Spring Hill Elementary": {"lat": 61.1330359, "lng": -149.8296711},
  "McLaughlin Secondary School": {"lat": 61.1870735, "lng": -149.8318119},
  "Northern Lights ABC K-8 School": {"lat": 61.1656734, "lng": -149.8358723},
  "The New Path High School": {"lat": 22.5158751, "lng": 88.32374279999999},
  "Service High School": {"lat": 61.13893249999999, "lng": -149.7812427},
  "North Star Elementary": {"lat": 61.1992929, "lng": -149.8936499},
  "South Anchorage High School": {"lat": 61.09989700000001, "lng": -149.806931},
  "Nicholas J. Begich Middle School": {"lat": 61.2077049, "lng": -149.7433764},
  "Rogers Park Elementary": {"lat": 61.1938085, "lng": -149.8557497},
  "Willow Crest Elementary": {"lat": 61.1799054, "lng": -149.904247},
  "Aquarian Charter School": {"lat": 61.19244639999999, "lng": -149.9169092},
  "Romig Middle School": {"lat": 61.1979559, "lng": -149.9154029},
  "Abbott Loop Elementary": {"lat": 61.1439499, "lng": -149.8331465},
  "Bowman Elementary": {"lat": 61.114982, "lng": -149.8457136},
  "Northwood ABC": {"lat": 61.17646199999999, "lng": -149.925877},
  "Campbell Elementary": {"lat": 61.15483399999999, "lng": -149.901534},
  "Russian Jack Elementary": {"lat": 61.2009783, "lng": -149.7992603},
  "Nunaka Valley Elementary": {"lat": 61.20324369999999, "lng": -149.77563},
  "Wendler Middle School": {"lat": 61.1939401, "lng": -149.8368723},
  "Taku Elementary": {"lat": 61.1560177, "lng": -149.8691875},
  "Ravenwood Elementary": {"lat": 61.3057527, "lng": -149.5050101},
  "Aurora Elementary": {"lat": 61.2371193, "lng": -149.863662},
  "Rilke Schule Charter School": {"lat": 61.1333542, "lng": -149.8356091},
  "King Career Center": {"lat": 61.19343689999999, "lng": -149.8327343},
  "Huffman Elementary": {"lat": 61.11102039999999, "lng": -149.8082709},
  "Government Hill Elementary": {"lat": 61.2337099, "lng": -149.8702919},
  "Muldoon Elementary": {"lat": 61.21837799999999, "lng": -149.7197253},
  "Mt. Spurr Elementary": {"lat": 61.2431163, "lng": -149.8183182},
  "Central Middle School of Science": {"lat": 61.20817959999999, "lng": -149.8892418},
  "Polaris K-12 School": {"lat": 61.1646939, "lng": -149.8537661},
  "Fire Lake Elementary": {"lat": 61.3456506, "lng": -149.5489194},
  "Alpenglow Elementary": {"lat": 61.3012132, "lng": -149.5245182},
  "O'Malley Elementary": {"lat": 61.12013409999999, "lng": -149.7686876},
  "Williwaw Elementary": {"lat": 61.21123789999999, "lng": -149.7972826},
  "Whaley School": {"lat": 61.200522, "lng": -149.8145061},
  "Ptarmigan Elementary": {"lat": 61.214226, "lng": -149.7653709},
  "Hanshew Middle School": {"lat": 61.13017379999999, "lng": -149.8301804},
  "Kasuun Elementary": {"lat": 61.15790569999999, "lng": -149.8081827},
  "Homestead Elementary": {"lat": 61.3149035, "lng": -149.5466041},
  "East High School": {"lat": 61.19973570000001, "lng": -149.8042216},
  "Kincaid Elementary": {"lat": 61.15749199999999, "lng": -149.970288},
  "Scenic Park Elementary": {"lat": 61.1848433, "lng": -149.7482049},
  "Winterberry School": {"lat": 61.1947047, "lng": -149.7922786},
  "Mears Middle School": {"lat": 61.1279641, "lng": -149.9313769},
  "Klatt Elementary": {"lat": 61.11269290000001, "lng": -149.9094234},
  "Girdwood School": {"lat": 60.9684839, "lng": -149.1279878},
  "Alaska State School for Deaf and Hard of Hearing": {"lat": 61.19412589999999, "lng": -149.7756012},
  "Family Partnership Charter School": {"lat": 61.1983724, "lng": -149.8766048},
  "S.A.V.E. High School": {"lat": 61.169661, "lng": -149.8740929},
  "Baxter Elementary": {"lat": 61.1935278, "lng": -149.7617542},
  "Wonder Park Elementary": {"lat": 61.21925369999999, "lng": -149.7843558},
  "Eagle River High School": {"lat": 61.2983124, "lng": -149.5726435},
  "Frontier Charter School": {"lat": 61.19479659999999, "lng": -149.8911932},
  "Mirror Lake Middle School": {"lat": 61.4273073, "lng": -149.4248193},
  "Chugiak High School": {"lat": 61.3696248, "lng": -149.5349859},
  "Chugach Optional Elementary": {"lat": 61.2103175, "lng": -149.890182},
  "Chinook Elementary": {"lat": 61.14166580000001, "lng": -149.9394992},
  "Rabbit Creek Elementary": {"lat": 61.0965691, "lng": -149.8350215},
  "Gruening Middle School": {"lat": 61.3064778, "lng": -149.5484343},
  "Trailside Elementary": {"lat": 61.13966589999999, "lng": -149.7875584},
  "Clark Middle School": {"lat": 61.22270450000001, "lng": -149.8116735},
  "Alaska Native Cultural Charter School": {"lat": 61.2175846, "lng": -149.8103759},
  "Eagle River Elementary": {"lat": 61.3190165, "lng": -149.5697858},
  "Avail School": {"lat": 61.21799209999999, "lng": -149.8869567},
  "Birchwood ABC Elementary": {"lat": 61.3740339, "lng": -149.531961},
  "Highland Academy Charter": {"lat": 61.1939631, "lng": -149.7754994}
};

export default schoolLocations;
