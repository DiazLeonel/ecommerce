const products = [
    {
        id: "1",
        img: "https://i.imgur.com/8wD3Qxu.png",
        title: "J-45 Standard",
        description: "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 Standard's classic combination.",
        category: "acustic",
        price: 2849,
        stock: 3
    },
    {
        id: "2",
        img: "https://i.imgur.com/LrJ2DhO.png",
        title: "J-45 Standard",
        description: "The J-45 is a truly legendary guitar. The world-famous Workhorse is Gibson's best-selling acoustic of all time. Now it is available in a new 12-string version. Featuring a mahogany body, Sitka spruce top, and mahogany neck, it has a SlimTaper™ neck profile for playing comfort, a bone nut and saddle, TUSQ® bridge pins, Grover® Mini Rotomatic® tuners, and comes equipped with LR Baggs™ VTC electronics.",
        category: "acustic",
        price: 3399,
        stock: 8
    },
    {
        id: "3",
        img: "https://i.imgur.com/oIhh7vb.png",
        title: "SJ-200 Standard",
        description: "The legacy of Gibson’s “King of the Flat-Tops” lives on in the SJ-200 Standard. From its inaugural appearance in 1937, Gibson’s SJ-200 set an unmatched standard. The SJ-200 continues a legacy of the world’s most famous acoustic guitar, and certainly one of the most popular. The body features gorgeous flame maple and is finished in your choice of Wine Red or Autumnburst.",
        category: "acustic",
        price: 4999,
        stock: 4
    },
    {
        id: "4",
        img: "https://imgur.com/XLPm4os.png",
        title: "Hummingbird Standard",
        description: "Much of the Hummingbird’s appeal lies in its versatility. No matter how you attack this flat-top, it pumps out rich, deep tones, and is equally at home strumming first-position chords as it is taking the spotlight for picking lead lines. Its spacious mahogany body and sweet, select Sitka spruce top are more than capable of nailing down the rhythm in the hands of a rock and roll sideman or accompanying the most nuanced performance under the fingers of today’s alternative singer-songwriter.",
        category: "acustic",
        price: 3999,
        stock: 7
    },
    {
        id: "5",
        img: "https://imgur.com/YiUi1Pq.png",
        title: "G-45",
        description: "The G-45 is equipped with a Gibson Player Port™. The Player Port is an original Gibson concept from the early 1960s that has been refined by our acoustic luthier team to deliver a truly revolutionary sonic improvement that adds a new dimension to the sound. The Gibson Player Port allows you to hear the guitar as you're playing it like you've never heard it before—the same way your audience hears it—maximizing the sonic impact for an immersive playing and listening experience.",
        category: "acustic",
        price: 1199,
        stock: 0
    },
    {
        id: "6",
        img: "https://imgur.com/OOeQRmV.png",
        title: "Jerry Cantrell",
        description: "Whether you’re writing a song at home, laying it down in the studio, or bringing it to thousands on stage, the Jerry Cantrell “Atone” Songwriter delivers. Made to the Alice in Chains guitarist's specifications and prominently featured in his “Atone” video, the Jerry Cantrell “Atone” Songwriter builds upon the traditional Gibson Songwriter platform. It adds several unique, personalized features, including a thinner body depth for playing comfort.",
        category: "acustic",
        price: 3749,
        stock: 4
    },
    {
        id: "7",
        img: "https://imgur.com/5U8WFn6.png",
        title: "Gene Simmons G2",
        description: "Gene Simmons is a legendary rock icon and the bassist from KISS, and his new Gibson Gene Simmons G2 Thunderbird Bass reflects his tastes. Designed to meet the musical needs of modern bassists, it features the classic Reverse Thunderbird™ body and headstock shape. The G2 Thunderbird Bass is voiced with a pair of powerful T-Bird pickups, each with individual Volume controls and paired with a master Tone control. The bound ebony fretboard features pearloid reverse split diamond inlays.",
        category: "bass",
        price: 2799,
        stock: 0
    },
    {
        id: "8",
        img: "https://imgur.com/NJJQZXl.png",
        title: "SG Standard Bass",
        description: "The SG Bass has the legendary looks, sound and feel which made it one of Gibson's most iconic basses. The short scale length is actually a big part of this sound! While the short scale length of the SG Bass is preferred by smaller players, it's also preferred by many for the strong fundamental tone for which this short scale bass is known. As expected, the solid mahogany body has deeply sculpted scarfing and the rounded profile mahogany neck and rosewood fingerboard feels familiar and comfortable.",
        category: "bass",
        price: 1599,
        stock: 9
    },
    {
        id: "9",
        img: "https://imgur.com/bHZqFv3.png",
        title: "Thunderbird Bass",
        description: "The Gibson Thunderbird has the classic reverse body and headstock design as originally introduced in 1963 as Gibson's first neck-through-body bass design. The traditional 9-ply mahogany/walnut neck through body construction provides a thundering low end response and a piano like sustain. The narrow nut width and rounded neck profile neck feels both fast and intuitive.",
        category: "bass",
        price: 2299,
        stock: 9
    },
    {
        id: "10",
        img: "https://imgur.com/G3XvGIZ.png",
        title: "Non-Reverse Thunderbird",
        description: "Ever since it was first released back in 1965, the Non-Reverse Thunderbird has been THE choice for forward-looking bassists who want to make their own path and steadfastly refuse to follow the crowd. The Non-Reverse Thunderbird's distinctive styling and huge, thunderous tone make it a standout on stage and in the studio. Now you have the opportunity to make one of these relatively rare 'birds your own with the release of the new Gibson USA Non-Reverse Thunderbird. ",
        category: "bass",
        price: 2199,
        stock: 0
    },
    {
        id: "11",
        img: "https://imgur.com/WvNbZgX.png",
        title: "Les Paul Junior Tribute DC",
        description: "The Les Paul Junior Tribute DC Bass is a tribute to the historic Gibson EB-0 bass from the late 50's, but with modern features. Not just for smaller players, the short scale length is actually chosen by many for its strong fundamental tone and sits perfectly in a track when recording. The mahogany double cutaway body and maple neck with rosewood fingerboard balances perfectly when playing either sitting or strapped on.",
        category: "bass",
        price: 999,
        stock: 0
    },
    {
        id: "12",
        img: "https://imgur.com/VbMWOaC.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "13",
        img: "https://imgur.com/IVkbwb8.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "14",
        img: "https://imgur.com/2LfjFm0.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "15",
        img: "https://imgur.com/mjHv9bV.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "16",
        img: "https://imgur.com/z42sDvK.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "17",
        img: "https://imgur.com/VJqFo92.png",
        title: "The Primrose",
        description: "",
        category: "designer",
        price: 74.99,
        stock: 8
    },
    {
        id: "18",
        img: "https://imgur.com/W9pHgnm.png",
        title: "The Primrose",
        description: "",
        category: "es",
        price: 74.99,
        stock: 8
    },
    {
        id: "19",
        img: "https://imgur.com/6jCNjk0.png",
        title: "The Primrose",
        description: "",
        category: "es",
        price: 74.99,
        stock: 8
    },
    {
        id: "20",
        img: "https://imgur.com/trBvWXF.png",
        title: "The Primrose",
        description: "",
        category: "es",
        price: 74.99,
        stock: 8
    },
    {
        id: "21",
        img: "https://imgur.com/PHgyAIT.png",
        title: "The Primrose",
        description: "",
        category: "es",
        price: 74.99,
        stock: 8
    },
    {
        id: "22",
        img: "https://imgur.com/8sJZuc4.png",
        title: "Les Paul Standard '50s",
        description: "The new Les Paul Standard returns to the classic design that made it relevant, played and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50's has a solid mahogany body with a maple top, a rounded 50's-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic bridge, aluminum stop bar tailpiece, vintage deluxe tuners with keystone buttons, and aged gold tophat knobs. The calibrated Burstbucker 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with AlNiCo II magnets, audio taper potentiometers and orange drop capacitors.",
        category: "lespaul",
        price: 2699,
        stock: 8
    },
    {
        id: "23",
        img: "https://imgur.com/YU0bqGv.png",
        title: "Les Paul Standard '50s P-90",
        description: "The new Les Paul Standard returns to the classic design that made it famous. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s P-90 has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. The classic P-90 pickups (neck and bridge) are loaded with Alnico 5 magnets, audio taper potentiometers, and Orange Drop® capacitors.",
        category: "lespaul",
        price: 2699,
        stock: 8
    },
    {
        id: "24",
        img: "https://imgur.com/jUFzHwD.png",
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
        }, 500)
    })
}

export const getProductsId = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}