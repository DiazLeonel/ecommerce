const products = [
    {
        id: "1",
        img: "./catalogo/acc2.png",
        title: "String Change Kit",
        description: "The Gibson String Change Kit includes all the tools you need to change your guitar strings like a pro. The heavy-duty string winder features a high-quality axle that allows for smooth, wobble-free rotations, a jumbo-sized grip, and a handy built-in bridge pin puller. The sharp, pro-quality string cutters feature ultra-soft grips that are built for comfort, making string changes simple. This kit is an essential accessory for any player’s guitar case.",
        category: "accesory",
        subCategory: "cleaningAndCare",
        price: 19.99,
        stock: 6
    },
    {
        id: "2",
        img: "./catalogo/acc3.png",
        title: "Guitar Polish",
        description: "Any musician knows that regular maintenance is a must when it comes to your cherished musical instrument. Gibson's Guitar Polish is specially designed to keep your instrument of choice – be it guitar, banjo or mandolin –clean and beautiful.",
        category: "accesory",
        price: 6.99,
        stock: 13
    },
    {
        id: "3",
        img: "./catalogo/acc4.png",
        title: "Multi-Tool",
        description: "A precision pocket apparatus to handle all of your on-site repair needs!",
        category: "accesory",
        price: 19.99,
        stock: 13
    },
    {
        id: "4",
        img: "./catalogo/acustic1.png",
        title: "J-45 Standard",
        description: "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 Standard's classic combination of a Sitka spruce top coupled with mahogany back and sides deliver a sound with incredible dynamic range, warm mids, and a tight punchy bass. Now available in Cherry; a Gibson hardshell case is included.",
        category: "acustic",
        price: 2849,
        stock: 3
    },
    {
        id: "5",
        img: "./catalogo/acustic2.png",
        title: "J-45 Standard",
        description: "The J-45 is a truly legendary guitar. The world-famous Workhorse is Gibson's best-selling acoustic of all time. Now it is available in a new 12-string version. Featuring a mahogany body, Sitka spruce top, and mahogany neck, it has a SlimTaper™ neck profile for playing comfort, a bone nut and saddle, TUSQ® bridge pins, Grover® Mini Rotomatic® tuners, and comes equipped with LR Baggs™ VTC electronics, making it ready to deliver beautiful, chiming, 12-string tones on stage or in the studio, right out of the included Gibson hardshell case.",
        category: "acustic",
        price: 3399,
        stock: 8
    },
    {
        id: "6",
        img: "./catalogo/acustic3.png",
        title: "SJ-200 Standard",
        description: "The legacy of Gibson’s “King of the Flat-Tops” lives on in the SJ-200 Standard. From its inaugural appearance in 1937, Gibson’s SJ-200 set an unmatched standard. The SJ-200 continues a legacy of the world’s most famous acoustic guitar, and certainly one of the most popular. The body features gorgeous flame maple and is finished in your choice of Wine Red or Autumnburst. It comes equipped with gold Grover® Rotomatic® tuners, a TUSQ® nut, saddle, and bridge pins, and it is stage and studio-ready with an internal LR Baggs™ Anthem mic/pickup system. A Gibson hardshell case is included.",
        category: "acustic",
        price: 4999,
        stock: 4
    },
    {
        id: "7",
        img: "./catalogo/acustic4.png",
        title: "Hummingbird Standard",
        description: "Much of the Hummingbird’s appeal lies in its versatility. No matter how you attack this flat-top, it pumps out rich, deep tones, and is equally at home strumming first-position chords as it is taking the spotlight for picking lead lines. Its spacious mahogany body and sweet, select Sitka spruce top are more than capable of nailing down the rhythm in the hands of a rock and roll sideman or accompanying the most nuanced performance under the fingers of today’s alternative singer-songwriter. The Hummingbird's mahogany neck has a comfortable rounded profile and mother of pearl parallelogram inlays. This 'bird has a TUSQ® nut, saddle, and bridge pins, Grover® Rotomatic® tuners, the iconic Hummingbird graphics on the pickguard, and is equipped with LR Baggs® VTC electronics, so it's ready to plug in on stage or in the studio. A Gibson hardshell case is included.",
        category: "acustic",
        price: 3999,
        stock: 7
    },
    {
        id: "8",
        img: "./catalogo/acustic5.png",
        title: "G-45",
        description: "The G-45 is equipped with a Gibson Player Port™. The Player Port is an original Gibson concept from the early 1960s that has been refined by our acoustic luthier team to deliver a truly revolutionary sonic improvement that adds a new dimension to the sound. The Gibson Player Port allows you to hear the guitar as you're playing it like you've never heard it before—the same way your audience hears it—maximizing the sonic impact for an immersive playing and listening experience. The G-45 is part of the Generation™ Collection. Like all models in this collection, it is made in Bozeman, MT, by the same highly skilled craftspeople who make all Gibson acoustics. It features a solid Sitka spruce top and solid walnut back and sides for tone that sounds crisp and resonant. You'll find that the slightly thinner round shoulder body is exceptionally comfortable to hold and play. The TUSQ® nut and saddle, along with the Grover® Mini Rotomatic® tuners deliver solid tuning stability so you can spend more time playing instead of tuning, and the utile neck with its easy-playing Advanced Response neck profile is so comfortable you won't want to put it down. A gig bag is also included.",
        category: "acustic",
        price: 1199,
        stock: 0
    },
    {
        id: "9",
        img: "./catalogo/acustic6.png",
        title: "Jerry Cantrell",
        description: "Whether you’re writing a song at home, laying it down in the studio, or bringing it to thousands on stage, the Jerry Cantrell “Atone” Songwriter delivers. Made to the Alice in Chains guitarist's specifications and prominently featured in his “Atone” video, the Jerry Cantrell “Atone” Songwriter builds upon the traditional Gibson Songwriter platform. It adds several unique, personalized features, including a thinner body depth for playing comfort, his signature “Circle in Square” pickguard, Jerry Cantrell signature on the truss rod cover, Double J waterslide decal on the back of the headstock, “12” inlay at the 12th fret, gold hardware with gold Grover® Mini Rotomatic® tuners, and an L.R. Baggs™ VTC pickup and preamp so it’s ready to plug in whenever you are.",
        category: "acustic",
        price: 3749,
        stock: 4
    },
    {
        id: "10",
        img: "./catalogo/bajo1.png",
        title: "Gene Simmons G2",
        description: "Gene Simmons is a legendary rock icon and the bassist from KISS, and his new Gibson Gene Simmons G2 Thunderbird Bass reflects his tastes. Designed to meet the musical needs of modern bassists, it features the classic Reverse Thunderbird™ body and headstock shape. The G2 Thunderbird Bass is voiced with a pair of powerful T-Bird pickups, each with individual Volume controls and paired with a master Tone control. The bound ebony fretboard features pearloid reverse split diamond inlays. A Graph Tech® nut and Hipshot® Mini Clover tuners keep the tuning rock-solid, while the other end of the strings anchor to a Hipshot® Bass Bridge. The back of the headstock features a G2 logo. The Ebony nitrocellulose lacquer finish is paired with Black Chrome hardware and a Mirror Plex truss rod cover and Mirror Plex pickguard with a laser engraved custom Gene Simmons logo. A modern hardshell case is included.",
        category: "bass",
        price: 2799,
        stock: 0
    },
    {
        id: "11",
        img: "./catalogo/bajo2.png",
        title: "SG Standard Bass",
        description: "The SG Bass has the legendary looks, sound and feel which made it one of Gibson's most iconic basses. The short scale length is actually a big part of this sound! While the short scale length of the SG Bass is preferred by smaller players, it's also preferred by many for the strong fundamental tone for which this short scale bass is known. As expected, the solid mahogany body has deeply sculpted scarfing and the rounded profile mahogany neck and rosewood fingerboard feels familiar and comfortable. A pair of calibrated SG bass pickups (neck and bridge) with individual volume and master tone controls add further tonal possibilities.",
        category: "bass",
        price: 1599,
        stock: 9
    },
    {
        id: "12",
        img: "./catalogo/bajo3.png",
        title: "Thunderbird Bass",
        description: "The Gibson Thunderbird has the classic reverse body and headstock design as originally introduced in 1963 as Gibson's first neck-through-body bass design. The traditional 9-ply mahogany/walnut neck through body construction provides a thundering low end response and a piano like sustain. The narrow nut width and rounded neck profile neck feels both fast and intuitive. The Thunderbird high output, ceramic magnet loaded humbucking pickups (neck and bridge) deliver the sonic and iconic low end voice for which the Thunderbird is known. Available in 2 classic finishes: Tobacco Burst and Ebony.",
        category: "bass",
        price: 2299,
        stock: 9
    },
    {
        id: "13",
        img: "./catalogo/bajo4.png",
        title: "Non-Reverse Thunderbird",
        description: "Ever since it was first released back in 1965, the Non-Reverse Thunderbird has been THE choice for forward-looking bassists who want to make their own path and steadfastly refuse to follow the crowd. The Non-Reverse Thunderbird's distinctive styling and huge, thunderous tone make it a standout on stage and in the studio. Now you have the opportunity to make one of these relatively rare 'birds your own with the release of the new Gibson USA Non-Reverse Thunderbird. Equipped with a Non-Reverse mahogany body and mahogany neck with a rosewood fretboard and 20 medium jumbo frets, each of the two Thunderbird pickups has a volume control, allowing you to use them separately, or to blend them in any amount you prefer. A master tone control rounds out the simple yet highly effective control layout. The three-ply white pickguard features the iconic Thunderbird graphic. The Non-Reverse Thunderbird is equipped with a Graph Tech® nut. A 3-point adjustable bridge provides a full range of adjustment for action and intonation, while Hipshot® Ultralite® tuning machines hold down the strings at the other end and deliver accurate and stable tuning while keeping headstock weight low to improve balance. Available in Inverness Green, Faded Pelham Blue, and Sparkling Burgundy, a hardshell case is included.",
        category: "bass",
        price: 2199,
        stock: 0
    },
    {
        id: "14",
        img: "./catalogo/bajo5.png",
        title: "Les Paul Junior Tribute DC",
        description: "The Les Paul Junior Tribute DC Bass is a tribute to the historic Gibson EB-0 bass from the late 50's, but with modern features. Not just for smaller players, the short scale length is actually chosen by many for its strong fundamental tone and sits perfectly in a track when recording. The mahogany double cutaway body and maple neck with rosewood fingerboard balances perfectly when playing either sitting or strapped on. It's equipped with a single expanded range LP BassBucker pickup with single volume and tone controls for simplicity. The volume pot has a push-pull feature to coil tap the pickup scooping the mids for further tone shaping possibilities.",
        category: "bass",
        price: 999,
        stock: 0
    },
    {
        id: "15",
        img: "./catalogo/cable1.png",
        title: "Original Cable (20 ft.)",
        description: "Gibson Vintage Original Instrument Cables faithfully carry the signal from your instrument to your amp without the tone-robbing effects of cable capacitance. These Switchcraft-manufactured cables use only premium, low capacitance conductors, and each is fully shielded for low-noise performance. Based on vintage Gibson cables from the 50s and 60s, with both low-profile right-angle and straight connectors, they're compatible with every instrument, regardless of manufacturer.",
        category: "cable",
        price: 49.99,
        stock: 4
    },
    {
        id: "16",
        img: "./catalogo/cable2.png",
        title: "Original Cable (10 ft.)",
        description: "Gibson Vintage Original Instrument Cables faithfully carry the signal from your instrument to your amp without the tone-robbing effects of cable capacitance. These Switchcraft-manufactured cables use only premium, low capacitance conductors, and each is fully shielded for low-noise performance. Based on vintage Gibson cables from the 50s and 60s, with both low-profile right-angle and straight connectors, they're compatible with every instrument, regardless of manufacturer.",
        category: "cable",
        price: 39.99,
        stock: 6
    },
    {
        id: "17",
        img: "./catalogo/cable3.png",
        title: "Maestro Patch Cables",
        description: "`````````Maestro 6' Patch Cables are the perfect length for connecting effects pedals and other signal patching needs, faithfully carrying the signal without the tone-robbing effects of cable capacitance. Using only premium, low-capacitance conductors, each cable is fully shielded for low-noise performance. With their low-profile right-angle connectors, these cables minimize the space needed between pedals, allowing for more compact pedal layouts.",
        category: "cable",
        price: 17.99,
        stock: 7
    },
    {
        id: "18",
        img: "./catalogo/case1.png",
        title: "Premium Softcase",
        description: "Gibson’s Premium Softcases have a rugged vinyl exterior and a plush inner lining to help keep your instrument safe and secure. They feature two accessory compartments; one with an organizer at the top near the headstock and a larger compartment on the front so you can take all of your accessories along with you.",
        category: "case",
        price: 149,
        stock: 4
    },
    {
        id: "19",
        img: "./catalogo/case2.png",
        title: "Premium Softcase",
        description: "Gibson’s Premium Softcases have a rugged vinyl exterior and a plush inner lining to help keep your instrument safe and secure. They feature two accessory compartments; one with an organizer at the top near the headstock and a larger compartment on the front so you can take all of your accessories along with you",
        category: "case",
        price: 149,
        stock: 3
    },
    {
        id: "20",
        img: "./catalogo/case3.png",
        title: "Premium Softcase",
        description: "Gibson’s Premium Softcases have a rugged vinyl exterior and a plush inner lining to help keep your instrument safe and secure. They feature two accessory compartments; one with an organizer at the top near the headstock and a larger compartment on the front so you can take all of your accessories along with you.",
        category: "case",
        price: 149,
        stock: 1
    },
    {
        id: "21",
        img: "./catalogo/correa1.png",
        title: "Hemp Guitar Strap",
        description: "This adjustable length Hemp Guitar Strap is made from durable, eco-friendly hemp fiber webbing. It has a 2'' width, and tan color. The ends are 2-ply reinforced natural cork, and there is a small pocket at one end to hold spare picks. It's the perfect strap for your Generation Collection Acoustic, or any other Gibson guitar.",
        category: "correa",
        price: 29.99,
        stock: 7
    },
    // {
    //     id: "22",
    //     img: "./catalogo/correa2.png",
    //     title: "The Garden",
    //     description: "",
    //     category: "correa",
    //     price: 49.99,
    //     stock: 4
    // },
    // {
    //     id: "23",
    //     img: "./catalogo/correa3.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "correa",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "24",
    //     img: "./catalogo/designer1.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "25",
    //     img: "./catalogo/designer2.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "26",
    //     img: "./catalogo/designer3.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "27",
    //     img: "./catalogo/designer4.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "28",
    //     img: "./catalogo/designer5.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "29",
    //     img: "./catalogo/designer6.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "designer",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "30",
    //     img: "./catalogo/es1.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "es",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "31",
    //     img: "./catalogo/es2.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "es",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "32",
    //     img: "./catalogo/es3.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "es",
    //     price: 74.99,
    //     stock: 8
    // },
    // {
    //     id: "33",
    //     img: "./catalogo/es6.png",
    //     title: "The Primrose",
    //     description: "",
    //     category: "es",
    //     price: 74.99,
    //     stock: 8
    // },
    {
        id: "34",
        img: "./catalogo/lespaul1.png",
        title: "Les Paul Standard '50s",
        description: "The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and aged gold tophat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors.",
        category: "lespaul",
        price: 2699,
        stock: 8
    },
    {
        id: "35",
        img: "./catalogo/lespaul2.png",
        title: "Les Paul Standard '50s P-90",
        description: "The new Les Paul Standard returns to the classic design that made it famous. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s P-90 has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. The classic P-90 pickups (neck and bridge) are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.",
        category: "lespaul",
        price: 2699,
        stock: 8
    },
    {
        id: "36",
        img: "./catalogo/lespaul3.png",
        title: "Les Paul Standard '60s",
        description: "The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 60's has a solid mahogany body with an AA figured maple top, and a slim taper 60's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with a classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, Grover Rotomatic 'Kidney' tuners, and gold top hat knobs with silver reflectors. The Burstbucker 61R (neck) Burstbucker 61T (bridge) pickups are loaded with AlNiCo V magnets, audio taper potentiometers and orange drop capacitors.",
        category: "lespaul",
        price: 2699,
        stock: 8
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsId = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        },2000)
    })
}