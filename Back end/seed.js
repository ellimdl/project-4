const { Cart, Order, Product, User } = require("./models");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Mongo Connection Open!!");
  })
  .catch((err) => {
    console.log(err);
  });

const products = [
  {
    noOfApartment: 453,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Anson Road",
    district: "02",
    project: "Newport Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Hong Leong Properties Pte Ltd",
    totalUnits: 453,
    img: "https://pic2.99.co/v3/HxGavpKkBATCQkmjQkjPJe?mode=fill&text=&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=8c92addbfac9effb45ff37e20dfe0cbeeabd5ccb&width=1600",
  },
  {
    noOfApartment: 372,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Ang Mo Kio Rise",
    district: "20",
    project: "AMO Residence",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "United Venture Development (2021) Pte Ltd",
    totalUnits: 372,
    img: "https://images.prismic.io/99-content/9d9298d2-0bd8-44f8-be13-50dfe69b9035_AMO+Residences+main.jpeg?auto=compress,format",
  },
  {
    noOfApartment: 407,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Northumberland Road",
    district: "08",
    project: "Piccadilly Grand",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "Maximus Residential SG Pte Ltd/Maximus Commercial SG Pte Ltd",
    totalUnits: 407,
    img: "https://pic2.99.co/v3/kgVATroyPfXJR7nL3tKRvj?mode=fill&text=&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=ea30ed84bd3412354ad4c948a38c4e36fe5da083&width=1600",
  },
  {
    noOfApartment: 215,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Shenton Way",
    district: "01",
    project: "Residential apartments",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Perennial Shenton Property Pte Ltd",
    totalUnits: 215,
    img: "https://pic2.99.co/v3/Q7hJjsY23YWHBCFQbFWxPc?mode=fill&text=99.co&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=63a17919a0fc1688a906a6c4fd9c6c3465ce8dfb&width=1068",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Tengah Garden Walk",
    district: "24",
    project: "Copen Grand",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Taurus Properties SG Pte Ltd",
    totalUnits: 639,
    img: "https://esingaporeproperty.sg/wp-content/uploads/2018/04/Copen-Grand-Executive-Condominium.jpeg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2026",
    noOfSemiDetached: 0,
    street: "Tampines Street 62",
    district: "18",
    project: "Tenet",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "TQS Development Pte Ltd",
    totalUnits: 618,
    img: "https://sg2-cdn.pgimgs.com/developer-listing/4483416/OUPHO.138069341.V800/Tenet-Pasir-Ris-Tampines-Singapore.jpg",
  },
  {
    noOfApartment: 605,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Lentor Central",
    district: "26",
    project: "Lentor Modern",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Lentor Central Pte Ltd/Lentor Modern Pte Ltd",
    totalUnits: 605,
    img: "https://static.businesstimes.com.sg/s3fs-public/image/2022/09/19/Lentor20Modern_2.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Upper Bukit Timah Road",
    district: "23",
    project: "Condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 408,
    developerName: "CDL Aries Pte Ltd",
    totalUnits: 408,
    img: "https://pic2.99.co/v3/eCX4MFmZadqLK7Yu7kJASL?sampling=lanczos&version=1&mode=fill&signature=2577eaf8641f345b3e70a937c31c439118b15b09",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2026",
    noOfSemiDetached: 0,
    street: "Yuan Ching Road",
    district: "22",
    project: "Condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 306,
    developerName: "Winville Investment Pte Ltd",
    totalUnits: 306,
    img: "https://www.condo.com.sg/wp-content/uploads/2022/09/Yuan-Ching-Road-Condo-at-Lakeside-Garden-by-Chip-Eng-Seng.jpg",
  },
  {
    noOfApartment: 748,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Marina View",
    district: "01",
    project: "Residential apartments",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Boulevard Development Pte Ltd/Boulevard Midtown Pte Ltd",
    totalUnits: 748,
    img: "https://marinaviewresidences.com/files/folder_web_4282/images/marinaview-landsite-MJI300.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Lentor Hills Road",
    district: "26",
    project: "Lentor Hills Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 598,
    developerName: "Lentor Hills Development Pte Ltd",
    totalUnits: 598,
    img: "https://www.lentor-hillsresidences.com/wp-content/uploads/2022/08/Lentor-Hills-Residences-condo-singapore-developer-penrose-facade-1024x652.jpg",
  },
  {
    noOfApartment: 270,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Yew Siang Road",
    district: "05",
    project: "Terra Hill",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Hoi Hup Sunway Kent Ridge Pte Ltd",
    totalUnits: 270,
    img: "https://www.terrahillresidence.com.sg/wp-content/uploads/2022/08/terra-hill-kiresidence2.webp",
  },
  {
    noOfApartment: 255,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Anson Road",
    district: "02",
    project: "Service apartments",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "UE Development (Anson) Pte Ltd",
    totalUnits: 255,
    img: "https://www.propertyfishing.com/wp-content/uploads/anson-residences-hero.jpg",
  },
  {
    noOfApartment: 807,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Thiam Siew Avenue",
    district: "15",
    project: "The Continuum",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Hoi Hup Sunway Katong Pte Ltd",
    totalUnits: 807,
    img: "https://www.the-continuums.sg/wp-content/uploads/2022/10/the-continuum-thiam-siew-singapore-actual-site-1024x573.jpeg",
  },
  {
    noOfApartment: 324,
    expectedTOPYear: "2025",
    noOfSemiDetached: 0,
    street: "Maxwell Road",
    district: "01",
    project: "TMW Maxwell",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Maxwell Commercial Pte Ltd/Maxwell Residential Pte Ltd",
    totalUnits: 324,
    img: "https://tmwmaxwells.com.sg/wp-content/uploads/2022/09/maxwell-mrt-station-near-tmw-maxwell-mixed-development-at-maxwell-road-tanjong-pagar-by-chip-eng-seng-and-singhaiyi-singapore-450x250.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Shelford Road",
    district: "11",
    project: "Condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 205,
    developerName: "United Venture Development (Watten) Pte Ltd",
    totalUnits: 205,
    img: "https://www.asiaproperty365.com/wp-content/uploads/2017/05/Slide3-1.jpg",
  },
  {
    noOfApartment: 1012,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Dunman Road",
    district: "15",
    project: "Residential apartments",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Sing-Haiyi Jade Pte Ltd",
    totalUnits: 1012,
    img: "https://dunmanroadcondominium.com/wp-content/uploads/2021/01/3900-alton-aerial-night-2.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Jalan Tembusu",
    district: "15",
    project: "Condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 640,
    developerName: "Tembusu Residential Pte Ltd",
    totalUnits: 640,
    img: "https://www.condo.com.sg/wp-content/uploads/2021/06/Jalan-Tembusu-Condo-1.jpg",
  },
  {
    noOfApartment: 900,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Jalan Anak Bukit",
    district: "21",
    project: "The Reserve Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "FE Landmark Pte Ltd",
    totalUnits: 900,
    img: "https://esingaporeproperty.sg/wp-content/uploads/2018/04/Artists-Impression-The-Reserve-Residences-and-Mall.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2027",
    noOfSemiDetached: 0,
    street: "Bukit Batok West Avenue 8",
    district: "23",
    project: "Executive condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "TQS(2) Development Pte Ltd",
    totalUnits: 360,
    img: "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2021/12/23/rrbukitbatok2312_0.jpg?VersionId=STEiq3f0FU3C6WOTx1cHb3xEypDyYkx6",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Pine Grove",
    district: "21",
    project: "Condominium development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 520,
    developerName: "United Venture Development (No. 5) Pte Ltd",
    totalUnits: 520,
    img: "https://pinegroveresidences.com/files/folder_web_4285/images/lo2-6Km600.jpg",
  },
  {
    noOfApartment: 275,
    expectedTOPYear: "2025",
    noOfSemiDetached: 0,
    street: "Slim Barracks Rise",
    district: "05",
    project: "Blossoms By The Park",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "EL Development (Buona Vista) Pte Ltd/EL Development (One-North) Pte Ltd",
    totalUnits: 275,
    img: "https://www.blossomsbythepark.sg/wp-content/uploads/2022/07/Land-Plot-Panormamic-View-For_Blossoms-By-The-Park_New-Condo-at-Slim-Barracks-Rise-by-EL-Developments.jpeg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Dairy Farm Walk",
    district: "23",
    project: "The Botany At Dairy Farm",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 386,
    developerName: "Sim Lian JV (Dairy Farm) Pte Ltd",
    totalUnits: 386,
    img: "https://www.thebotanyatdairyfarm.sg/wp-content/uploads/2022/07/German_International_School_Beside_The_Botany_at_Dairy_Farm_New_Condo_at_Dairy_Farm_Walk_Bukit_Panjang_by_Sim_Lian_Group_Limited.jpg",
  },
  {
    noOfApartment: 154,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Orchard Boulevard",
    district: "10",
    project: "Boulevard 88",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Granmil Holdings Pte Ltd",
    totalUnits: 154,
    img: "https://boulevard88condo.sg/wp-content/uploads/2019/05/Boulevard-88-Official-Facade.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2023",
    noOfSemiDetached: 10,
    street: "Belgravia Drive",
    district: "28",
    project: "Belgravia Green",
    noOfDetachedHouse: 0,
    noOfTerrace: 71,
    noOfCondo: 0,
    developerName: "Fairview Developments Pte Ltd",
    totalUnits: 81,
    img: "https://esingaporeproperty.sg/wp-content/uploads/2018/06/Belgravia-Green-Rocky-Pond.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Shunfu Road",
    district: "20",
    project: "Jadescape",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 1206,
    developerName: "Qingjian Realty (Marymount) Pte Ltd",
    totalUnits: 1206,
    img: "https://www.jadescape-condos.sg/wp-content/uploads/2018/12/jadescape-bird-eye-gallery.png",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Potong Pasir Avenue 1",
    district: "13",
    project: "The Tre Ver",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 729,
    developerName: "UVD (Projects) Pte Ltd",
    totalUnits: 729,
    img: "https://trever-condo.com.sg/wp-content/uploads/2019/12/The-Tre-Ver-Condo.jpg",
  },
  {
    noOfApartment: 468,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Sims Avenue",
    district: "14",
    project: "Parc Esta",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "MCL Land (Everbright) Pte Ltd",
    totalUnits: 468,
    img: "https://parcesta-condo.com.sg/wp-content/uploads/2019/12/Parc-Esta-Condo-Family-Lagoon.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2023",
    noOfSemiDetached: 0,
    street: "Toh Tuck Road",
    district: "21",
    project: "Daintree Residence",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 327,
    developerName: "Setia (Bukit Timah) Pte Ltd",
    totalUnits: 327,
    img: "https://daintreeresidence.officialpage.co/wp-content/uploads/2020/07/50m-Leisure-Pool-Hero-Shot.jpg",
  },
  {
    noOfApartment: 1451,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Hougang Avenue 7",
    district: "19",
    project: "Riverfront Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 21,
    noOfCondo: 0,
    developerName: "Rio Casa Venture Pte Ltd",
    totalUnits: 1472,
    img: "https://www.riverfrontresidencescondo.com.sg/wp-content/uploads/Riverfront-Residences-Picture-3.jpg?5981e6&5981e6",
  },
  {
    noOfApartment: 1410,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Hougang Avenue 2",
    district: "19",
    project: "The Florence Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Florence Development Pte Ltd",
    totalUnits: 1410,
    img: "https://www.myexclusivecondo.com/wp-content/uploads/2019/01/The-Florence-Residences-Island-Pool.jpg",
  },
  {
    noOfApartment: 1840,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Normanton Park",
    district: "05",
    project: "Normanton Park",
    noOfDetachedHouse: 0,
    noOfTerrace: 22,
    noOfCondo: 0,
    developerName: "Kingsford Huray Development Pte Ltd",
    totalUnits: 1862,
    img: "https://www.normantonpark-residences.sg/wp-content/uploads/2020/12/Normanton-Park-Drone-View.jpeg",
  },
  {
    noOfApartment: 1012,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Serangoon North Avenue 1",
    district: "19",
    project: "Affinity At Serangoon",
    noOfDetachedHouse: 0,
    noOfTerrace: 40,
    noOfCondo: 0,
    developerName: "Oxley Serangoon Pte Ltd",
    totalUnits: 1052,
    img: "https://affinityatserangoonville.sg/wp-content/uploads/2015/04/Affinity-At-Serangoon-Aerial-View.jpg",
  },
  {
    noOfApartment: 667,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Bidadari Park Drive",
    district: "13",
    project: "The Woodleigh Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "The Woodleigh Mall Pte Ltd/The Woodleigh Residences Pte Ltd",
    totalUnits: 667,
    img: "https://woodleighresidence.com/wp-content/uploads/2020/10/Woodleigh-Residences-Condo.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Tampines Lane",
    district: "18",
    project: "Treasure At Tampines",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 2203,
    developerName: "Sim Lian (Treasure) Pte Ltd",
    totalUnits: 2203,
    img: "https://stacked-editorial.sgp1.digitaloceanspaces.com/editorial/wp-content/uploads/2020/08/15204023/treasure-at-tampines-showflat-model.jpg",
  },
  {
    noOfApartment: 498,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "South Buona Vista Road",
    district: "05",
    project: "Kent Ridge Hill Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 50,
    noOfCondo: 0,
    developerName: "Oxley Spinel Pte Ltd",
    totalUnits: 548,
    img: "https://www.kentridgehillresidence.sg/wp-content/uploads/2018/09/kent-ridge-hill-residences_perspective-1024x588.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Rifle Range Road",
    district: "21",
    project: "Mayfair Gardens",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 215,
    developerName: "Citrine Property Pte Ltd",
    totalUnits: 215,
    img: "https://www.themayfairgardens.com.sg/wp-content/uploads/2018/08/Mayfair-Gardens-Image.jpg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Amber Gardens",
    district: "15",
    project: "Amber Park",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 592,
    developerName: "Aquarius Properties Pte Ltd",
    totalUnits: 592,
    img: "https://stacked-editorial.sgp1.digitaloceanspaces.com/editorial/wp-content/uploads/2021/06/15173416/amber-park-final-review.jpg",
  },
  {
    noOfApartment: 476,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Fourth Avenue",
    district: "10",
    project: "Fourth Avenue Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Valleypoint Investments Pte Ltd",
    totalUnits: 476,
    img: "https://www.fourthavenuesresidences.com.sg/wp-content/uploads/2020/04/fourth-avenue-residences-night-pool-view-singapore-350x399.png",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 50,
    street: "Lorong 1 Realty Park",
    district: "19",
    project: "Parkwood Collection",
    noOfDetachedHouse: 0,
    noOfTerrace: 3,
    noOfCondo: 0,
    developerName: "Fantasia (Park) Pte Ltd",
    totalUnits: 53,
    img: "https://www.theparkwoodcollection.com/wp-content/uploads/2020/02/parkwood-collection-c2-artist-impression-singapore.jpg",
  },
  {
    noOfApartment: 230,
    expectedTOPYear: "2025",
    noOfSemiDetached: 0,
    street: "Bukit Timah Road",
    district: "10",
    project: "Perfect Ten",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Japura Development Pte Ltd",
    totalUnits: 230,
    img: "https://www.perfecttencondo.com/wp-content/uploads/2021/09/Perfect-ten-condo-Former-City-Towers-by-japura-development-Overall-View-singapore.jpeg",
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Brookvale Drive",
    district: "21",
    project: "KI Residences At Brookvale",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 660,
    developerName: "Hoi Hup Sunway Clementi Pte Ltd",
    totalUnits: 660,
    img: "https://www.kiresidence.com.sg/wp-content/uploads/2020/10/ki-residences-grand-entrance-singapore.jpg",
  },
  {
    noOfApartment: 774,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Pearl Bank",
    district: "03",
    project: "One Pearl Bank",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Areca Investment Pte Ltd",
    totalUnits: 774,
    img: "https://www.capitaland.com/content/dam/capitaland-media-library/residential/Singapore/Singapore/one-pearl-bank/Sora_Dayview.jpg.transform/cap-midres/image.jpg",
  },
  {
    noOfApartment: 527,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Jiak Kim Street",
    district: "03",
    project: "Riviere/Fraser Residence Promenade Singapore",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Frasers Property Quayside Pte Ltd",
    totalUnits: 527,
    img: "https://riviere-official.com.sg/wp-content/uploads/2015/04/Riviere-Facade-2.jpg",
  },
  {
    noOfApartment: 265,
    expectedTOPYear: "2023",
    noOfSemiDetached: 0,
    street: "Mattar Road",
    district: "14",
    project: "The Antares",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "FSKH Development Pte Ltd",
    totalUnits: 265,
    img: "https://daryllum.com/wp-content/uploads/2019/09/The-Antares-by-FSKH-Development-800x600.jpg",
  },
  {
    noOfApartment: 219,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Beach Road",
    district: "07",
    project: "Midtown Bay",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Guoco Midtown Pte Ltd/Midtown Bay Pte Ltd",
    totalUnits: 219,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "How Sun Drive",
    district: "19",
    project: "The Gazania",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 250,
    developerName: "Singhaiyi Huajiang Sun Pte Ltd",
    totalUnits: 250,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2028",
    noOfSemiDetached: 104,
    street: "Belgravia Drive",
    district: "28",
    project: "Belgravia Ace",
    noOfDetachedHouse: 0,
    noOfTerrace: 3,
    noOfCondo: 0,
    developerName: "Fairview Developments Pte Ltd",
    totalUnits: 107,
  },
  {
    noOfApartment: 340,
    expectedTOPYear: "2024",
    noOfSemiDetached: 0,
    street: "Dunearn Road",
    district: "11",
    project: "Pullman Residences Newton",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "EL Development (Horizon) Pte Ltd",
    totalUnits: 340,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Sumang Walk",
    district: "19",
    project: "Piermont Grand",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Pavo Properties Pte Ltd",
    totalUnits: 820,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Arthur Road",
    district: "15",
    project: "LIV @ MB",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 298,
    developerName: "BSEL Development Pte Ltd",
    totalUnits: 298,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Leedon Heights",
    district: "10",
    project: "Leedon Green",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 638,
    developerName: "Asia Radiant Pte Ltd",
    totalUnits: 638,
  },
  {
    noOfApartment: 1074,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Silat Avenue",
    district: "03",
    project: "Avenue South Residence",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "United Venture Development (Silat) Pte Ltd",
    totalUnits: 1074,
  },
  {
    noOfApartment: 262,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Everton Road",
    district: "02",
    project: "Sky Everton",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "SL Capital (6) Pte Ltd",
    totalUnits: 262,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "River Valley Close",
    district: "09",
    project: "The Avenir",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 376,
    developerName: "Carmel Development Pte Ltd",
    totalUnits: 376,
  },
  {
    noOfApartment: 200,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Meyer Road",
    district: "15",
    project: "Meyer Mansion",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Meyer Mansion Pte Ltd",
    totalUnits: 200,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Hillview Rise",
    district: "23",
    project: "Midwood",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 564,
    developerName: "Hillview Rise Development Pte Ltd",
    totalUnits: 564,
  },
  {
    noOfApartment: 1450,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Jalan Lempeng",
    district: "05",
    project: "Parc Clematis",
    noOfDetachedHouse: 6,
    noOfTerrace: 12,
    noOfCondo: 0,
    developerName: "Sing-Haiyi Gold Pte Ltd",
    totalUnits: 1468,
  },
  {
    noOfApartment: 258,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "De Souza Avenue",
    district: "21",
    project: "Verdale",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "C&C (JJK) Pte Ltd",
    totalUnits: 258,
  },
  {
    noOfApartment: 551,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Holland Village Way",
    district: "10",
    project: "One Holland Village Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "Commons Residential Pte Ltd/Commons SR Trustee Pte Ltd/Commons Commercial Trustee Pte Ltd",
    totalUnits: 551,
  },
  {
    noOfApartment: 680,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Compassvale Bow/Sengkang Central",
    district: "19",
    project: "Sengkang Grand Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "Siena Residential Development Pte Ltd/Siena Trustee Pte Ltd (as Trustee-Manager of Siena Commercial Trust)",
    totalUnits: 680,
  },
  {
    noOfApartment: 276,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Upper Changi Road North",
    district: "17",
    project: "Parc Komo/Komo Shoppes",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "CEL Real Estate Development Pte Ltd",
    totalUnits: 276,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Flora Drive",
    district: "17",
    project: "Kassia",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 276,
    developerName: "Tripartite Developers Pte Ltd",
    totalUnits: 276,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2023",
    noOfSemiDetached: 0,
    street: "Canberra Walk",
    district: "27",
    project: "Parc Canberra",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Hoi Hup Sunway Canberra Pte Ltd",
    totalUnits: 496,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Jalan Eunos",
    district: "14",
    project: "Urban Treasures",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 237,
    developerName: "Fragrance Treasures Pte Ltd",
    totalUnits: 237,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Chin Swee Road",
    district: "03",
    project: "The Landmark",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 396,
    developerName: "Landmark JV Pte Ltd",
    totalUnits: 396,
  },
  {
    noOfApartment: 460,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Dairy Farm Lane",
    district: "23",
    project: "Dairy Farm Residences/Dairy Farm Mall",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "UE Dairy Farm Pte Ltd",
    totalUnits: 460,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Anchorvale Crescent",
    district: "19",
    project: "Ola",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Anchorvale Pte Ltd",
    totalUnits: 548,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Holland Road",
    district: "10",
    project: "Hyll On Holland",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 319,
    developerName: "FEC Skypark Pte Ltd",
    totalUnits: 319,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2025",
    noOfSemiDetached: 0,
    street: "Harbourfront Avenue",
    district: "04",
    project: "The Reef At King's Dock",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 429,
    developerName: "Harbourfront Three Pte Ltd",
    totalUnits: 429,
  },
  {
    noOfApartment: 633,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Toh Tuck Road",
    district: "21",
    project: "Forett At Bukit Timah",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Qingjian Perennial (Bukit Timah) Pte Ltd",
    totalUnits: 633,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Tampines Street 86",
    district: "18",
    project: "Parc Central Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Hoi Hup Sunway Tampines J.V. Pte Ltd",
    totalUnits: 700,
  },
  {
    noOfApartment: 566,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Sims Drive",
    district: "14",
    project: "Penrose",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "NovaSims Development Pte Ltd",
    totalUnits: 566,
  },
  {
    noOfApartment: 522,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Middle Road",
    district: "07",
    project: "The M",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Wingcharm Investment Pte Ltd",
    totalUnits: 522,
  },
  {
    noOfApartment: 378,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Makeway Avenue",
    district: "09",
    project: "Kopar At Newton",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "CEL Newton Pte Ltd",
    totalUnits: 378,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 4,
    street: "Ang Mo Kio Avenue 5/Nim Road",
    district: "28",
    project: "Pollen Collection",
    noOfDetachedHouse: 0,
    noOfTerrace: 128,
    noOfCondo: 0,
    developerName: "Singapore United Estates Pte Ltd",
    totalUnits: 132,
  },
  {
    noOfApartment: 640,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Clementi Avenue 1",
    district: "05",
    project: "Clavon",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "United Venture Development (Clementi 1) Pte Ltd",
    totalUnits: 640,
  },
  {
    noOfApartment: 558,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Tan Quee Lan Street",
    district: "07",
    project: "Midtown Modern",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Guoco Midtown II Pte Ltd/Midtown Modern Pte Ltd",
    totalUnits: 558,
  },
  {
    noOfApartment: 364,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Bernam Street",
    district: "02",
    project: "One Bernam",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "HY-MCC (Bernam) Pte Ltd",
    totalUnits: 364,
  },
  {
    noOfApartment: 34,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Hoe Chiang Road",
    district: "02",
    project: "Service apartments/Hotel development",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Fragrance Grandeur Pte Ltd",
    totalUnits: 34,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Canberra Crescent",
    district: "27",
    project: "Provence Residence",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "MCC Land (Canberra) Pte Ltd",
    totalUnits: 413,
  },
  {
    noOfApartment: 696,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Clarke Quay/River Valley Road/Tan Tye Place",
    district: "06",
    project: "Canninghill Piers",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName:
      "DBS Trustee Limited/Legend Commercial Trustee Pte Ltd/Legend Quay Pte Ltd",
    totalUnits: 696,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Fernvale Lane",
    district: "28",
    project: "Parc Greenwich",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Fernvale Lane Pte Ltd",
    totalUnits: 496,
  },
  {
    noOfApartment: 448,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Canberra Drive",
    district: "27",
    project: "The Watergardens At Canberra",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "United Venture Development (2020) Pte Ltd",
    totalUnits: 448,
  },
  {
    noOfApartment: 540,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Irwell Hill",
    district: "09",
    project: "Irwell Hill Residences",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "CDL Perseus Pte Ltd",
    totalUnits: 540,
  },
  {
    noOfApartment: 487,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Pasir Ris Drive 8/Pasir Ris Drive 3/Pasir Ris Central",
    district: "18",
    project: "Pasir Ris 8",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Phoenix Residential Pte Ltd/Phoenix Commercial Pte Ltd",
    totalUnits: 487,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "Canberra Drive",
    district: "27",
    project: "The Commodore",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 219,
    developerName: "JBE (Canberra) Pte Ltd",
    totalUnits: 219,
  },
  {
    noOfApartment: 268,
    expectedTOPYear: "na",
    noOfSemiDetached: 0,
    street: "New Upper Changi Road/Tanah Merah Kechil Link",
    district: "16",
    project: "Sceneca Residence",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "MCC Land (TMK) Pte Ltd",
    totalUnits: 268,
  },
  {
    noOfApartment: 0,
    expectedTOPYear: "2027",
    noOfSemiDetached: 0,
    street: "Yishun Close",
    district: "27",
    project: "North Gaia",
    noOfDetachedHouse: 0,
    noOfTerrace: 0,
    noOfCondo: 0,
    developerName: "Sing Holdings (Yishun) Pte Ltd",
    totalUnits: 616,
  },
];

const users = [
  {
    username: "Username_1",
    email: "username1@email.com",
    password: "password1",
    isAdmin: false,
  },
  {
    username: "Username_2",
    email: "username2@email.com",
    password: "password2",
    isAdmin: false,
  },
];

const carts = [
  {
    userId: "Username_1",
    products: [{ productId: "Gamer Backpack", quantity: 2 }],
  },
  {
    userId: "Username_2",
    products: [{ productId: "Fashionista Backpack", quantity: 1 }],
  },
];

const orders = [
  {
    userId: "Username_1",
    name: "Ryan",
    products: [
      { productId: "Gamer Backpack", title: "Gamer Backpack", quantity: 2 },
    ],
    amount: 1000,
    address: "78 Hotel California",
    email: "ryan@email.com",
    status: "dispatched",
  },
  {
    userId: "Username_2",
    name: "Elijah",
    products: [
      {
        productId: "Fashionista Backpack",
        title: "Fashionista Backpack",
        quantity: 1,
      },
    ],
    amount: 350,
    address: "33 Beverly Hills",
    email: "elijah@email.com",
    status: "pending",
  },
];

const performSeed = async () => {
  const createdProducts = await Product.insertMany(products);
  console.log(`Created ${createdProducts.length} products`);

  const createdUsers = await User.insertMany(users);
  console.log(`Created ${createdUsers.length} users`);

  const createdCarts = await Cart.insertMany(carts);
  console.log(`Created ${createdCarts.length} carts`);

  const createdOrders = await Order.insertMany(orders);
  console.log(`Created ${createdOrders.length} orders`);
};

// performSeed();

performSeed().then(() => {
  mongoose.connection.close();
});

setInterval(() => {
  console.log("Countdown 2s and exit...");
  process.exit(0);
}, 2000);