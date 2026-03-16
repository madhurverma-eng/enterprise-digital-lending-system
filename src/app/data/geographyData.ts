// Indian Geography: State → District → City mapping
// This is a representative subset for demo purposes

export interface GeographyNode {
  districts: Record<string, string[]>; // district → cities
}

export const INDIAN_GEOGRAPHY: Record<string, GeographyNode> = {
  'Andhra Pradesh': {
    districts: {
      'Visakhapatnam': ['Visakhapatnam', 'Anakapalle', 'Gajuwaka', 'Narsipatnam'],
      'Guntur': ['Guntur', 'Tenali', 'Mangalagiri', 'Narasaraopet'],
      'Krishna': ['Vijayawada', 'Machilipatnam', 'Gudivada', 'Nuzvid'],
      'East Godavari': ['Kakinada', 'Rajahmundry', 'Amalapuram', 'Peddapuram'],
      'West Godavari': ['Eluru', 'Bhimavaram', 'Tadepalligudem', 'Narsapur'],
      'Chittoor': ['Tirupati', 'Chittoor', 'Madanapalle', 'Srikalahasti'],
      'Kurnool': ['Kurnool', 'Nandyal', 'Adoni', 'Yemmiganur'],
      'Anantapur': ['Anantapur', 'Hindupur', 'Guntakal', 'Dharmavaram'],
      'Nellore': ['Nellore', 'Gudur', 'Kavali', 'Atmakur'],
      'Prakasam': ['Ongole', 'Chirala', 'Markapur', 'Kandukur'],
    },
  },
  'Arunachal Pradesh': {
    districts: {
      'Papum Pare': ['Itanagar', 'Naharlagun', 'Banderdewa'],
      'Tawang': ['Tawang', 'Jang', 'Lumla'],
      'East Kameng': ['Seppa', 'Chayangtajo'],
      'West Kameng': ['Bomdila', 'Dirang', 'Kalaktang'],
    },
  },
  'Assam': {
    districts: {
      'Kamrup Metropolitan': ['Guwahati', 'Dispur', 'Chandrapur'],
      'Dibrugarh': ['Dibrugarh', 'Naharkatia', 'Chabua'],
      'Jorhat': ['Jorhat', 'Titabor', 'Mariani'],
      'Nagaon': ['Nagaon', 'Hojai', 'Lanka'],
      'Sonitpur': ['Tezpur', 'Rangapara', 'Biswanath Chariali'],
      'Cachar': ['Silchar', 'Karimganj', 'Hailakandi'],
    },
  },
  'Bihar': {
    districts: {
      'Patna': ['Patna', 'Danapur', 'Barh', 'Bikram', 'Phulwari Sharif'],
      'Gaya': ['Gaya', 'Bodh Gaya', 'Sherghati', 'Tekari'],
      'Muzaffarpur': ['Muzaffarpur', 'Sitamarhi', 'Sheohar'],
      'Bhagalpur': ['Bhagalpur', 'Naugachia', 'Sultanganj'],
      'Darbhanga': ['Darbhanga', 'Laheriasarai', 'Benipur'],
      'Purnia': ['Purnia', 'Kishanganj', 'Katihar'],
      'Vaishali': ['Hajipur', 'Mahua', 'Lalganj'],
      'Nalanda': ['Bihar Sharif', 'Rajgir', 'Hilsa'],
    },
  },
  'Chhattisgarh': {
    districts: {
      'Raipur': ['Raipur', 'Naya Raipur', 'Arang', 'Abhanpur'],
      'Bilaspur': ['Bilaspur', 'Korba', 'Katghora'],
      'Durg': ['Durg', 'Bhilai', 'Rajnandgaon', 'Dalli Rajhara'],
      'Raigarh': ['Raigarh', 'Sarangarh', 'Dharamjaigarh'],
      'Jagdalpur': ['Jagdalpur', 'Bastar', 'Kondagaon'],
    },
  },
  'Goa': {
    districts: {
      'North Goa': ['Panaji', 'Mapusa', 'Vasco da Gama', 'Margao', 'Calangute'],
      'South Goa': ['Margao', 'Ponda', 'Quepem', 'Canacona', 'Sanguem'],
    },
  },
  'Gujarat': {
    districts: {
      'Ahmedabad': ['Ahmedabad', 'Gandhinagar', 'Sanand', 'Dholka', 'Bavla'],
      'Surat': ['Surat', 'Bardoli', 'Mandvi', 'Kamrej'],
      'Vadodara': ['Vadodara', 'Anand', 'Padra', 'Dabhoi'],
      'Rajkot': ['Rajkot', 'Morbi', 'Gondal', 'Jetpur'],
      'Bhavnagar': ['Bhavnagar', 'Palitana', 'Sihor', 'Mahuva'],
      'Jamnagar': ['Jamnagar', 'Dwarka', 'Khambhalia'],
      'Kutch': ['Bhuj', 'Gandhidham', 'Mundra', 'Anjar'],
      'Mehsana': ['Mehsana', 'Patan', 'Visnagar', 'Unjha'],
      'Valsad': ['Valsad', 'Vapi', 'Navsari', 'Bilimora'],
    },
  },
  'Haryana': {
    districts: {
      'Gurugram': ['Gurugram', 'Sohna', 'Pataudi', 'Farrukhnagar'],
      'Faridabad': ['Faridabad', 'Ballabhgarh', 'Palwal'],
      'Panipat': ['Panipat', 'Samalkha', 'Israna'],
      'Ambala': ['Ambala', 'Ambala Cantt', 'Barara'],
      'Hisar': ['Hisar', 'Hansi', 'Fatehabad'],
      'Karnal': ['Karnal', 'Assandh', 'Nilokheri'],
      'Rohtak': ['Rohtak', 'Meham', 'Kalanaur'],
      'Sonipat': ['Sonipat', 'Ganaur', 'Gohana'],
    },
  },
  'Himachal Pradesh': {
    districts: {
      'Shimla': ['Shimla', 'Theog', 'Rampur', 'Kufri'],
      'Kangra': ['Dharamshala', 'Palampur', 'Kangra', 'Baijnath'],
      'Mandi': ['Mandi', 'Sundernagar', 'Jogindernagar'],
      'Kullu': ['Kullu', 'Manali', 'Bhuntar'],
      'Solan': ['Solan', 'Baddi', 'Nalagarh', 'Parwanoo'],
    },
  },
  'Jharkhand': {
    districts: {
      'Ranchi': ['Ranchi', 'Namkum', 'Kanke', 'Bundu'],
      'Jamshedpur': ['Jamshedpur', 'Adityapur', 'Mango', 'Bistupur'],
      'Dhanbad': ['Dhanbad', 'Jharia', 'Sindri', 'Katras'],
      'Bokaro': ['Bokaro Steel City', 'Chas', 'Bermo'],
      'Hazaribagh': ['Hazaribagh', 'Ramgarh', 'Chatra'],
      'Deoghar': ['Deoghar', 'Madhupur', 'Jasidih'],
    },
  },
  'Karnataka': {
    districts: {
      'Bengaluru Urban': ['Bengaluru', 'Yelahanka', 'Whitefield', 'Electronic City', 'Marathahalli'],
      'Bengaluru Rural': ['Nelamangala', 'Devanahalli', 'Doddaballapura', 'Hosakote'],
      'Mysuru': ['Mysuru', 'Nanjangud', 'T. Narsipur', 'Hunsur'],
      'Mangaluru': ['Mangaluru', 'Udupi', 'Puttur', 'Sullia'],
      'Hubli-Dharwad': ['Hubli', 'Dharwad', 'Navalgund', 'Kundgol'],
      'Belagavi': ['Belagavi', 'Gokak', 'Athani', 'Chikkodi'],
      'Kalaburagi': ['Kalaburagi', 'Aland', 'Chincholi', 'Sedam'],
      'Tumakuru': ['Tumakuru', 'Tiptur', 'Madhugiri', 'Sira'],
      'Shimoga': ['Shimoga', 'Bhadravati', 'Sagar', 'Thirthahalli'],
    },
  },
  'Kerala': {
    districts: {
      'Thiruvananthapuram': ['Thiruvananthapuram', 'Neyyattinkara', 'Nedumangad', 'Attingal'],
      'Ernakulam': ['Kochi', 'Aluva', 'Angamaly', 'Perumbavoor', 'Muvattupuzha'],
      'Kozhikode': ['Kozhikode', 'Koyilandy', 'Vadakara', 'Ramanattukara'],
      'Thrissur': ['Thrissur', 'Chalakudy', 'Irinjalakuda', 'Kunnamkulam'],
      'Kollam': ['Kollam', 'Punalur', 'Paravur', 'Karunagappally'],
      'Palakkad': ['Palakkad', 'Ottapalam', 'Shoranur', 'Chittur'],
      'Kannur': ['Kannur', 'Thalassery', 'Payyanur', 'Mattanur'],
      'Kottayam': ['Kottayam', 'Changanassery', 'Pala', 'Vaikom'],
      'Alappuzha': ['Alappuzha', 'Cherthala', 'Kayamkulam', 'Haripad'],
      'Malappuram': ['Malappuram', 'Manjeri', 'Perinthalmanna', 'Tirur'],
      'Idukki': ['Painavu', 'Thodupuzha', 'Munnar', 'Nedumkandam'],
      'Wayanad': ['Kalpetta', 'Sultan Bathery', 'Mananthavady'],
      'Kasaragod': ['Kasaragod', 'Kanhangad', 'Uppala'],
      'Pathanamthitta': ['Pathanamthitta', 'Adoor', 'Thiruvalla', 'Ranni'],
    },
  },
  'Madhya Pradesh': {
    districts: {
      'Bhopal': ['Bhopal', 'Sehore', 'Vidisha', 'Raisen'],
      'Indore': ['Indore', 'Mhow', 'Depalpur', 'Sanwer'],
      'Jabalpur': ['Jabalpur', 'Katni', 'Sagar'],
      'Gwalior': ['Gwalior', 'Morena', 'Shivpuri', 'Dabra'],
      'Ujjain': ['Ujjain', 'Dewas', 'Ratlam', 'Shajapur'],
      'Satna': ['Satna', 'Rewa', 'Maihar'],
    },
  },
  'Maharashtra': {
    districts: {
      'Mumbai City': ['Mumbai', 'Colaba', 'Dadar', 'Andheri', 'Bandra'],
      'Mumbai Suburban': ['Borivali', 'Malad', 'Goregaon', 'Kandivali', 'Mulund'],
      'Pune': ['Pune', 'Pimpri-Chinchwad', 'Hinjewadi', 'Kothrud', 'Hadapsar'],
      'Thane': ['Thane', 'Kalyan', 'Dombivli', 'Ulhasnagar', 'Bhiwandi'],
      'Nagpur': ['Nagpur', 'Wardha', 'Chandrapur', 'Amravati'],
      'Nashik': ['Nashik', 'Malegaon', 'Ozar', 'Sinnar'],
      'Aurangabad': ['Aurangabad', 'Jalna', 'Phulambri'],
      'Kolhapur': ['Kolhapur', 'Ichalkaranji', 'Sangli', 'Miraj'],
      'Solapur': ['Solapur', 'Pandharpur', 'Barshi', 'Mangalvedhe'],
      'Raigad': ['Panvel', 'Alibag', 'Kharghar', 'Pen'],
      'Satara': ['Satara', 'Karad', 'Wai', 'Mahabaleshwar'],
      'Navi Mumbai': ['Navi Mumbai', 'Airoli', 'Vashi', 'Nerul', 'Belapur'],
    },
  },
  'Manipur': {
    districts: {
      'Imphal West': ['Imphal', 'Lamphelpat'],
      'Imphal East': ['Porompat', 'Jiribam'],
      'Thoubal': ['Thoubal', 'Kakching'],
    },
  },
  'Meghalaya': {
    districts: {
      'East Khasi Hills': ['Shillong', 'Nongpoh', 'Cherrapunji'],
      'West Garo Hills': ['Tura', 'Williamnagar'],
    },
  },
  'Mizoram': {
    districts: {
      'Aizawl': ['Aizawl', 'Darlawn'],
      'Lunglei': ['Lunglei', 'Hnahthial'],
    },
  },
  'Nagaland': {
    districts: {
      'Kohima': ['Kohima', 'Chiephobozou'],
      'Dimapur': ['Dimapur', 'Chumukedima'],
    },
  },
  'Odisha': {
    districts: {
      'Khordha': ['Bhubaneswar', 'Jatni', 'Balianta', 'Balipatna'],
      'Cuttack': ['Cuttack', 'Choudwar', 'Athagarh'],
      'Ganjam': ['Berhampur', 'Chatrapur', 'Aska'],
      'Puri': ['Puri', 'Konark', 'Pipili'],
      'Sambalpur': ['Sambalpur', 'Jharsuguda', 'Bargarh'],
      'Balasore': ['Balasore', 'Jaleswar', 'Soro'],
    },
  },
  'Punjab': {
    districts: {
      'Ludhiana': ['Ludhiana', 'Khanna', 'Jagraon', 'Samrala'],
      'Amritsar': ['Amritsar', 'Ajnala', 'Baba Bakala'],
      'Jalandhar': ['Jalandhar', 'Phagwara', 'Nakodar', 'Shahkot'],
      'Patiala': ['Patiala', 'Rajpura', 'Nabha', 'Samana'],
      'Bathinda': ['Bathinda', 'Rampura Phul', 'Goniana'],
      'Mohali': ['Mohali', 'Kharar', 'Derabassi', 'Lalru'],
      'Pathankot': ['Pathankot', 'Sujanpur', 'Dhar Kalan'],
    },
  },
  'Rajasthan': {
    districts: {
      'Jaipur': ['Jaipur', 'Sanganer', 'Amber', 'Chomu', 'Shahpura'],
      'Jodhpur': ['Jodhpur', 'Phalodi', 'Bilara', 'Osian'],
      'Udaipur': ['Udaipur', 'Nathdwara', 'Rajsamand', 'Salumbar'],
      'Kota': ['Kota', 'Bundi', 'Baran', 'Jhalawar'],
      'Ajmer': ['Ajmer', 'Pushkar', 'Beawar', 'Kishangarh'],
      'Bikaner': ['Bikaner', 'Nokha', 'Lunkaransar'],
      'Alwar': ['Alwar', 'Bhiwadi', 'Tijara', 'Neemrana'],
      'Jaisalmer': ['Jaisalmer', 'Pokaran', 'Barmer'],
      'Sikar': ['Sikar', 'Fatehpur', 'Lachhmangarh'],
    },
  },
  'Sikkim': {
    districts: {
      'East Sikkim': ['Gangtok', 'Singtam', 'Rangpo'],
      'West Sikkim': ['Pelling', 'Geyzing'],
      'South Sikkim': ['Namchi', 'Ravangla'],
    },
  },
  'Tamil Nadu': {
    districts: {
      'Chennai': ['Chennai', 'Tambaram', 'Avadi', 'Ambattur', 'Guindy'],
      'Coimbatore': ['Coimbatore', 'Mettupalayam', 'Pollachi', 'Tirupur'],
      'Madurai': ['Madurai', 'Melur', 'Usilampatti', 'Thirumangalam'],
      'Tiruchirappalli': ['Tiruchirappalli', 'Srirangam', 'Lalgudi'],
      'Salem': ['Salem', 'Attur', 'Mettur', 'Rasipuram'],
      'Tirunelveli': ['Tirunelveli', 'Palayamkottai', 'Ambasamudram'],
      'Erode': ['Erode', 'Gobichettipalayam', 'Bhavani', 'Sathyamangalam'],
      'Vellore': ['Vellore', 'Ranipet', 'Ambur', 'Vaniyambadi'],
      'Thanjavur': ['Thanjavur', 'Kumbakonam', 'Pattukkottai'],
      'Kanchipuram': ['Kanchipuram', 'Chengalpattu', 'Mahabalipuram'],
    },
  },
  'Telangana': {
    districts: {
      'Hyderabad': ['Hyderabad', 'Secunderabad', 'HITEC City', 'Gachibowli', 'Kukatpally'],
      'Rangareddy': ['Shamshabad', 'Ibrahimpatnam', 'Chevella', 'Maheshwaram'],
      'Medchal-Malkajgiri': ['Medchal', 'Kompally', 'Alwal', 'Keesara'],
      'Warangal': ['Warangal', 'Hanamkonda', 'Kazipet'],
      'Karimnagar': ['Karimnagar', 'Jagtial', 'Huzurabad'],
      'Nizamabad': ['Nizamabad', 'Bodhan', 'Armoor'],
      'Khammam': ['Khammam', 'Kothagudem', 'Sathupalli'],
    },
  },
  'Tripura': {
    districts: {
      'West Tripura': ['Agartala', 'Bishalgarh', 'Jirania'],
      'Gomati': ['Udaipur', 'Amarpur'],
    },
  },
  'Uttar Pradesh': {
    districts: {
      'Lucknow': ['Lucknow', 'Mohanlalganj', 'Bakshi Ka Talab', 'Malihabad'],
      'Noida': ['Noida', 'Greater Noida', 'Dadri', 'Jewar'],
      'Ghaziabad': ['Ghaziabad', 'Modinagar', 'Murad Nagar', 'Loni'],
      'Kanpur': ['Kanpur', 'Unnao', 'Akbarpur', 'Bilhaur'],
      'Agra': ['Agra', 'Fatehpur Sikri', 'Firozabad', 'Tundla'],
      'Varanasi': ['Varanasi', 'Chandauli', 'Mirzapur'],
      'Prayagraj': ['Prayagraj', 'Naini', 'Phulpur', 'Handia'],
      'Meerut': ['Meerut', 'Hapur', 'Modinagar', 'Sardhana'],
      'Bareilly': ['Bareilly', 'Pilibhit', 'Aonla'],
      'Aligarh': ['Aligarh', 'Hathras', 'Khair', 'Atrauli'],
      'Gorakhpur': ['Gorakhpur', 'Deoria', 'Kushinagar'],
      'Jhansi': ['Jhansi', 'Lalitpur', 'Orai'],
      'Mathura': ['Mathura', 'Vrindavan', 'Govardhan', 'Baldeo'],
    },
  },
  'Uttarakhand': {
    districts: {
      'Dehradun': ['Dehradun', 'Mussoorie', 'Rishikesh', 'Haridwar'],
      'Nainital': ['Nainital', 'Haldwani', 'Bhimtal', 'Ramnagar'],
      'Almora': ['Almora', 'Ranikhet', 'Bageshwar'],
      'Udham Singh Nagar': ['Rudrapur', 'Kashipur', 'Bazpur', 'Sitarganj'],
    },
  },
  'West Bengal': {
    districts: {
      'Kolkata': ['Kolkata', 'Salt Lake', 'New Town', 'Howrah', 'Behala'],
      'North 24 Parganas': ['Barrackpore', 'Dum Dum', 'Barasat', 'Bongaon'],
      'South 24 Parganas': ['Diamond Harbour', 'Baruipur', 'Canning', 'Kakdwip'],
      'Howrah': ['Howrah', 'Uluberia', 'Shyampur'],
      'Hooghly': ['Chinsurah', 'Serampore', 'Chandannagar', 'Tarakeswar'],
      'Darjeeling': ['Darjeeling', 'Siliguri', 'Kurseong', 'Mirik'],
      'Murshidabad': ['Berhampore', 'Lalbag', 'Jangipur'],
      'Burdwan': ['Burdwan', 'Asansol', 'Durgapur', 'Raniganj'],
      'Nadia': ['Krishnanagar', 'Nabadwip', 'Kalyani', 'Santipur'],
      'Malda': ['English Bazar', 'Old Malda', 'Gazole'],
    },
  },
};

// Union Territories
export const UNION_TERRITORIES: Record<string, GeographyNode> = {
  'Delhi': {
    districts: {
      'New Delhi': ['New Delhi', 'Connaught Place', 'Chanakyapuri', 'Lodhi Colony'],
      'Central Delhi': ['Karol Bagh', 'Paharganj', 'Darya Ganj', 'Chandni Chowk'],
      'South Delhi': ['Hauz Khas', 'Greater Kailash', 'Nehru Place', 'Saket'],
      'North Delhi': ['Civil Lines', 'Sadar Bazaar', 'Kotwali'],
      'East Delhi': ['Preet Vihar', 'Laxmi Nagar', 'Mayur Vihar'],
      'West Delhi': ['Rajouri Garden', 'Janakpuri', 'Dwarka', 'Tilak Nagar'],
      'South West Delhi': ['Vasant Kunj', 'Dwarka', 'Najafgarh'],
      'North West Delhi': ['Rohini', 'Pitampura', 'Narela'],
      'North East Delhi': ['Seelampur', 'Shahdara', 'Jaffrabad'],
      'South East Delhi': ['Kalkaji', 'Defence Colony', 'Okhla'],
      'Shahdara': ['Shahdara', 'Dilshad Garden', 'Vivek Vihar'],
    },
  },
  'Chandigarh': {
    districts: {
      'Chandigarh': ['Chandigarh', 'Manimajra', 'Sector 17', 'Sector 22'],
    },
  },
  'Puducherry': {
    districts: {
      'Puducherry': ['Puducherry', 'Oulgaret', 'Villianur'],
      'Karaikal': ['Karaikal', 'Thirunallar'],
    },
  },
  'Jammu & Kashmir': {
    districts: {
      'Srinagar': ['Srinagar', 'Lal Chowk', 'Dal Gate', 'Hazratbal'],
      'Jammu': ['Jammu', 'Akhnoor', 'R.S. Pura', 'Bishnah'],
      'Anantnag': ['Anantnag', 'Pahalgam', 'Kokernag'],
      'Baramulla': ['Baramulla', 'Sopore', 'Pattan'],
      'Udhampur': ['Udhampur', 'Reasi', 'Ramnagar'],
    },
  },
  'Ladakh': {
    districts: {
      'Leh': ['Leh', 'Khaltse', 'Nubra'],
      'Kargil': ['Kargil', 'Drass', 'Zanskar'],
    },
  },
  'Andaman & Nicobar Islands': {
    districts: {
      'South Andaman': ['Port Blair', 'Wandoor', 'Ferrargunj'],
      'North & Middle Andaman': ['Mayabunder', 'Diglipur', 'Rangat'],
    },
  },
  'Dadra & Nagar Haveli and Daman & Diu': {
    districts: {
      'Dadra & Nagar Haveli': ['Silvassa', 'Amli'],
      'Daman': ['Daman', 'Nani Daman'],
      'Diu': ['Diu'],
    },
  },
  'Lakshadweep': {
    districts: {
      'Lakshadweep': ['Kavaratti', 'Agatti', 'Minicoy'],
    },
  },
};

// Combined for easy access
export const ALL_GEOGRAPHY: Record<string, GeographyNode> = {
  ...INDIAN_GEOGRAPHY,
  ...UNION_TERRITORIES,
};

// Get sorted list of all states/UTs
export function getAllStates(): string[] {
  return Object.keys(ALL_GEOGRAPHY).sort();
}

// Get districts for a state
export function getDistricts(state: string): string[] {
  const node = ALL_GEOGRAPHY[state];
  return node ? Object.keys(node.districts).sort() : [];
}

// Get cities for a state + district
export function getCities(state: string, district: string): string[] {
  const node = ALL_GEOGRAPHY[state];
  if (!node) return [];
  const cities = node.districts[district];
  return cities ? [...cities].sort() : [];
}