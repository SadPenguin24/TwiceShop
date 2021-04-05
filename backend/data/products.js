const products = [
  {
    name: "TWICE - More & More",
    image:
      "https://cdn.shopify.com/s/files/1/0087/5557/6894/products/twice1_1200x1200.jpg?v=1589256434",
    description:
      "CD (Random 1 out of 9) + 88p Photobook + More Postcard + Coaster Card (Random 1 out of 9) + 5 Photocards (Random 5 out of 100) + Double-Side Extra Photocards Set (KPOP MARKET Store Gift)",
    brand: "JYP",
    category: "Album",
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    price: 19.99,
  },
  {
    name: "TWICE - Eyes Wide Open",
    image:
      "https://cdn.shopify.com/s/files/1/0267/1371/8831/products/TWICE-BOX-SET-BACKUpdated_e1b91340-d489-4490-b9e1-9d3fc70cf7f2_1024x.png?v=1602023902",
    description:
      "CD + 88p Photobook + Message Card (Random 1 out of 9) + Lyric Folded Poster (On Pack) (Random 1 out of 10) + D.I.Y Sticker + 5 Photocards (Random 5 out of 100) + Pre-Order Benefit + Folded Poster + Double-Side Extra Photocards Set (KPOP MARKET Store Gift)",
    brand: "JYP",
    category: "Album",
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    price: 29.99,
  },
  {
    name: "TWICE - Candy Bong Z Light Stick",
    image:
      "https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/2577/9154/candyz_detail__73673.1603260494.jpg?c=2",
    description:
      "Chanote: Remove the battery when not in use [Product Specification] - Model : Twice Candybong Z - LED : RGB LED - Bluetooth Ver : CandyBongZ (Operating Range - 10M) - Lightstick Power : AAA x 3EA (Not included) - Lightstick Size : 111 x 264 x 52 mmracterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "JYP",
    category: "Accessory",
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    price: 37.9,
  },
  {
    name: "TWICE - Photobook (Limited)",
    image:
      "https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/1914/8402/ImageViewerEShop__54549.1555703293.jpg?c=2",
    description:
      "Kpop Idol Group Stars 2021 New Wall Calendar Size : 11 x 18 inch / Material : High - ending thick paper Original made in KOREA / High quality designed printing IDOLPARK Gift : Special random combined photocards ( Instagram / Hashtag / Transparent / Message ) 3~5 set",
    brand: "JYP",
    category: "Photobook",
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    price: 27.7,
  },
  {
    name: "TWICE - [TWICELAND] THE OPENING CONCERT DVD",
    image:
      "https://cdn11.bigcommerce.com/s-7uw7zc08qw/images/stencil/608x608/products/1761/8325/ImageViewerEShop__75647.1565880301.jpg?c=2",
    description:
      "Twice - [Twiceland : The Opening Concert DVD] 1st Concert K-POP Sealed package includes 3 DVD Disc+148p Photo Book+9p Photo Card+1p Lenticular Photo Card+1p Paper Stand. Ratio - 16:9 Sound - DTS-HD Master Audio 2.0 Dubbing - Korean Subname - Korean, English Region Code - Korea, U.S.A, SEA, Canada Running Time - 230 min Track List DISK(DVD) 1. TWICELAND THE OPENING PART1 01. Touchdown 01:35:00 02. I'm gonna be a star 03. CHEER UP 04. ¹ÌÃÆ³ªºÁ 05. Truth 06. OOH-AHHÇÏ°Ô 07. 1 TO 10 08. ÅöÇÏ¸é Åå 09. Headphone ½á 10. PONYTAIL 11. Candy Boy 12. PIT-A-PAT 13. NEXT PAGE 14. Woohoo 15. ´Ù½Ã ÇØÁà 16. ¼ÒÁßÇÑ »çû 17. JELLY JELLY 18. TT DISK(DVD) 2. TWICELAND THE OPENING PART2 01. Like a Fool 01:10:00 02. ONE IN A MILLION 03. OOH-AHHÇÏ°Ô 04. CHEER UP 05. TT 06. KNOCK KNOCK DISK(DVD) 3. TWICELAND THE OPENING : MAKING FILM 01. POSTER SHOOTING making film 01:05:00 02. VCR making film 03. CONCERT making film",
    brand: "JYP",
    category: "DVD",
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    price: 41.48,
  },
  {
    name: "Twice 1st Tour Concert Goods - Postcard Set",
    image:
      "https://d3rwyinxzcqr6y.cloudfront.net/Assets/66/602/L_p0065660266.jpg",
    description:
      "TWICE LOMO Cards 54Pcs Twice High quality poster card Twcie gift Postcard for fans TWICE album Cards 54pcs poster card Set HD Photo Cards Twice Members: The photos card set includes Twice members 54pcs per face card box. 54Pcs non-repeating Twice new album cards, each made with high-quality materials LOMO Cards photo card Size : 2.1 x 3.3 inches(5.5 x 8.5 cm)",
    brand: "JYP",
    category: "Postcard",
    countInStock: 0,
    rating: 4.0,
    numReviews: 12,
    price: 6.8,
  },
  {
    name:
      "TWICE MORE AND MORE 9th Mini Album Photo Books 54 Pages Mini Photo Books",
    image:
      "/images/TWICEMOREANDMORE9thMiniAlbumPhotoBooks54PagesMiniPhotoBooks.jpeg",
    description:
      "TWICE MORE And MORE 9th Mini Album Photo Books 54 Pages Mini Photo Books | https://s.lazada.com.ph/s.cou0d",
    brand: "JYP",
    category: "Album",
    countInStock: 7,
    rating: 4.0,
    numReviews: 30,
    price: 192.0,
  },
  {
    name:
      "BZY 10Pcs/Set Kpop TWICE HD Waterproof Lustre Photo card Crystal Card Stickers",
    image:
      "/images/BZY10PcsSetKpopTWICEHDWaterproofLustrePhotocardCrystalCardStickers.jpeg",
    description:
      "Kpop TWICE HD Waterproof Lustre Photo card Crystal Card Stickers BZY 10Pcs/Set | https://s.lazada.com.ph/s.cL2HM",
    brand: "JYP",
    category: "Paper and Party Supplies",
    countInStock: 10,
    rating: 4.0,
    numReviews: 20,
    price: 82.0,
  },
  {
    name: "TWICE Kpop Colorful Memo pad with Sticky Notes Set",
    image: "/images/TWICEKpopColorfulMemopadwithStickyNotesSet.jpeg",
    description:
      "TWICE Kpop Colorful Memo pad with Sticky Notes Set, BTS BLACKPINK TWICE ITZY IZONE EXO | https://s.lazada.com.ph/s.XXgoF",
    brand: "JYP",
    category: "Accessories",
    countInStock: 10,
    rating: 4.5,
    numReviews: 11,
    price: 34.0,
  },
  {
    name:
      "30pcs Kpop TWICE Single Member Member Collective LOMO Box Cards Fans Gift Set",
    image:
      "/images/30pcsKpopTWICESingleMemberMemberCollectiveLOMOBoxCardsFansGiftSet.jpeg",
    description:
      "CMB 30pcs Kpop TWICE Single Member Collective LOMO Box Cards Set | https://s.lazada.com.ph/s.XeYks",
    brand: "JYP",
    category: "Collectibles",
    countInStock: 8,
    rating: 4.0,
    numReviews: 25,
    price: 61.74,
  },
  {
    name: "Twice Notebook Set 2 Notebooks 1 Ballpen Feel Special Kpop",
    image: "/images/TwiceNotebookSet2Notebooks1BallpenFeelSpecialKpop.jpeg",
    description:
      "Twice Notebook Set 2 Notebooks 1 Ballpen Feel Special Kpop | https://s.lazada.com.ph/s.Xe436",
    brand: "JYP",
    category: "School Supplies",
    countInStock: 5,
    rating: 3.8,
    numReviews: 11,
    price: 149.0,
  },
  {
    name: "Twice Photobook Magazine Feel Special Kpop",
    image: "/images/TwicePhotobookMagazineFeelSpecialKpop.jpeg",
    description:
      "Twice Photobook Magazine Feel Special Kpop | https://s.lazada.com.ph/s.Xenkl",
    brand: "JYP",
    category: "Album",
    countInStock: 6,
    rating: 3.5,
    numReviews: 15,
    price: 397.0,
  },
  {
    name: "Twice Poster Feel Special (4 Pcs. Posters In Tube) Kpop",
    image: "/images/TwicePosterFeelSpecial(4Pcs.PostersInTube)Kpop.jpeg",
    description:
      "Twice Poster Feel Special Kpop, 4 Pcs. Posters In Tube | https://s.lazada.com.ph/s.XeIdG",
    brand: "JYP",
    category: "Posters and Prints",
    countInStock: 4,
    rating: 3.0,
    numReviews: 20,
    price: 200.0,
  },
  {
    name: "Twice 3rd mini album collectibles  baseball uniform",
    image: "/images/Twice3rdminialbumcollectiblesbaseballuniform.jpeg",
    description:
      "Twice 3rd mini album collectibles baseball uniform | https://s.lazada.com.ph/s.XeBf0",
    brand: "JYP",
    category: "Uniforms",
    countInStock: 10,
    rating: 4.0,
    numReviews: 24,
    price: 551.0,
  },
  {
    name:
      "Taijiexing Kpop Twice Key Chain Tzuyu Mina Momo Lim Na Yeon Cute Key Ring",
    image:
      "/images/TaijiexingKpopTwiceKeyChainTzuyuMinaMomoLimNaYeonCuteKeyRing.jpeg",
    description:
      "Taijiexing Kpop Twice Key Chain Tzuyu Mina Momo Lim Na Yeon Cute Key Ring | https://s.lazada.com.ph/s.XfXJa",
    brand: "JYP",
    category: "Accessories",
    countInStock: 7,
    rating: 3.0,
    numReviews: 5,
    price: 54.88,
  },
  {
    name: "TWICE KPOP PILLOW 13 X 18 design 12",
    image: "/images/TWICEKPOPPILLOW13X18design12.jpeg",
    description:
      "TWICE KPOP PILLOW 13 design 12, X 18 | https://s.lazada.com.ph/s.XfiTD",
    brand: "JYP",
    category: "Beddings",
    countInStock: 7,
    rating: 4.0,
    numReviews: 12,
    price: 283.88,
  },
];

export default products;
