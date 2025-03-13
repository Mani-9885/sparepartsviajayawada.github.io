// Company Data
const companyData = [
    { id: 1, name: "Royal Enfield", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_kwl7xm.jpg" },
    { id: 2, name: "Hero", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_3_lruu8z.png" },
    { id: 3, name: "Honda", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_2_vxpbu7.png" },
    { id: 4, name: "TVS", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_xbrxez.png" },
    { id: 5, name: "Bajaj", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_1_cdtjhb.jpg" },
    { id: 6, name: "Suzuki", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1741345079/download_1_xzkboi.png" },
];

// Bike Models by Company
const bikeData = [
    // Royal Enfield
    
    // 1990s Models
    { 
        id: 1, 
        companyId: 1, 
        name: "Bullet 350", 
        year: "1990–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/c_thumb,w_200,g_face/v1739858431/Classic_350_noif3c.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 2, 
        companyId: 1, 
        name: "Bullet 500", 
        year: "1990–2020", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bullet_500_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 3, 
        companyId: 1, 
        name: "Enfield Diesel", 
        year: "1993–2010", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/enfield_diesel_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },

    // 2000s Models
    { 
        id: 4, 
        companyId: 1, 
        name: "Thunderbird 350", 
        year: "2002–2020", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/thunderbird_350_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 5, 
        companyId: 1, 
        name: "Classic 350", 
        year: "2009–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739688733/royal-enfield-select-model-airborne-blue-1579618691640_qejfy2.webp", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 6, 
        companyId: 1, 
        name: "Classic 500", 
        year: "2009–2020", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/classic_500_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },

    // 2010s Models
    { 
        id: 7, 
        companyId: 1, 
        name: "Himalayan 411", 
        year: "2016–2023", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858430/Himalaya_kclqaq.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 8, 
        companyId: 1, 
        name: "Thunderbird 350X", 
        year: "2018–2020", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/thunderbird_350x_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 9, 
        companyId: 1, 
        name: "Thunderbird 500X", 
        year: "2018–2020", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/thunderbird_500x_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 10, 
        companyId: 1, 
        name: "Interceptor 650", 
        year: "2018–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/interceptor_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 11, 
        companyId: 1, 
        name: "Continental GT 650", 
        year: "2018–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/continental_gt_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },

    // 2020s Models
    { 
        id: 12, 
        companyId: 1, 
        name: "Meteor 350", 
        year: "2020–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/meteor_350_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 13, 
        companyId: 1, 
        name: "Scram 411", 
        year: "2022–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/scram_411_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 14, 
        companyId: 1, 
        name: "Hunter 350", 
        year: "2022–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hunter_350_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 15, 
        companyId: 1, 
        name: "Super Meteor 650", 
        year: "2023–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/super_meteor_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 16, 
        companyId: 1, 
        name: "Shotgun 650", 
        year: "2023–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/shotgun_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 17, 
        companyId: 1, 
        name: "Himalayan 450", 
        year: "2023–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/himalayan_450_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 18, 
        companyId: 1, 
        name: "Guerrilla 450", 
        year: "2024–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/guerrilla_450_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 19, 
        companyId: 1, 
        name: "Bear 650", 
        year: "2024–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bear_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 20, 
        companyId: 1, 
        name: "Goan Classic 350", 
        year: "2024–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/goan_classic_350_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 21, 
        companyId: 1, 
        name: "Scram 440", 
        year: "2024–Present", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/scram_440_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },

    // Upcoming Models by 2025
    { 
        id: 22, 
        companyId: 1, 
        name: "Classic 650", 
        year: "2025", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/classic_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 23, 
        companyId: 1, 
        name: "Bullet 650", 
        year: "2025", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bullet_650_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 24, 
        companyId: 1, 
        name: "Continental GT 450", 
        year: "2025", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/continental_gt_450_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 25, 
        companyId: 1, 
        name: "Scrambler 450", 
        year: "2025", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/scrambler_450_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    { 
        id: 26, 
        companyId: 1, 
        name: "Classic 350 Bobber", 
        year: "2025", 
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/classic_350_bobber_placeholder.jpg", 
        components: [
            { id: 1, name: "Engine" }, 
            { id: 2, name: "Transmission" }, 
            { id: 3, name: "Suspension" }, 
            { id: 4, name: "Brakes" }, 
            { id: 5, name: "Electrical System" }, 
            { id: 6, name: "Frame and Body" }, 
            { id: 7, name: "Wheels and Tires" }, 
            { id: 8, name: "Exhaust System" }
        ]
    },
    // Hero
    
    // 1990s Models
    { id: 1, companyId: 2, name: "CD 100", year: "1984–2004", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_cd100_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 2, companyId: 2, name: "Splendor", year: "1994–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_splendor_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 3, companyId: 2, name: "CBZ", year: "1999–2005", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_cbz_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2000s Models
    { id: 4, companyId: 2, name: "Passion", year: "2001–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_passion_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 5, companyId: 2, name: "Karizma", year: "2003–2014", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_karizma_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 6, companyId: 2, name: "Glamour", year: "2005–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_glamour_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2010s Models
    { id: 7, companyId: 2, name: "HF Deluxe", year: "2007–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_hf_deluxe_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 8, companyId: 2, name: "Xpulse 200", year: "2019–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_xpulse200_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 9, companyId: 2, name: "Xtreme 160R", year: "2020–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_xtreme160r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2020s Models
    { id: 10, companyId: 2, name: "Karizma XMR", year: "2023–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_karizma_xmr_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 11, companyId: 2, name: "Xtreme 125R", year: "2024–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_xtreme125r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 12, companyId: 2, name: "Mavrick 440", year: "2024–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_mavrick440_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 13, companyId: 2, name: "Xpulse 210", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_xpulse210_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 14, companyId: 2, name: "Xtreme 250R", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/hero_xtreme250r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },


    // Honda
   
    // 1990s Models
    { id: 15, companyId: 3, name: "Shine", year: "2006–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_shine_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 16, companyId: 3, name: "Unicorn", year: "2004–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_unicorn_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2000s Models
    { id: 17, companyId: 3, name: "CBR150R", year: "2002–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cbr150r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 18, companyId: 3, name: "CB Twister", year: "2010–2016", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cb_twister_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2010s Models
    { id: 19, companyId: 3, name: "CBR250R", year: "2011–2018", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cbr250r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 20, companyId: 3, name: "Hornet 160R", year: "2015–2020", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_hornet160r_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 21, companyId: 3, name: "H’ness CB350", year: "2020–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_hness_cb350_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2020s Models
    { id: 22, companyId: 3, name: "CB200X", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cb200x_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 23, companyId: 3, name: "CB350 RS", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cb350rs_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 24, companyId: 3, name: "Hornet 2.0", year: "2020–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_hornet2_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 25, companyId: 3, name: "CB500X", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/honda_cb500x_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },


    // TVS
   
    // 1990s Models
    { id: 26, companyId: 4, name: "Victor", year: "2001–2018", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_victor_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2000s Models
    { id: 27, companyId: 4, name: "Apache RTR 160", year: "2007–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_apache_rtr160_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 28, companyId: 4, name: "Apache RTR 180", year: "2009–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_apache_rtr180_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2010s Models
    { id: 29, companyId: 4, name: "Apache RTR 200", year: "2016–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_apache_rtr200_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 30, companyId: 4, name: "Radeon", year: "2018–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_radeon_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 31, companyId: 4, name: "Apache RR 310", year: "2017–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_apache_rr310_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2020s Models
    { id: 32, companyId: 4, name: "Raider 125", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_raider125_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 33, companyId: 4, name: "Ronin", year: "2022–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_ronin_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 34, companyId: 4, name: "Apache RTR 165 RP", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/tvs_apache_rtr165rp_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },


    // Bajaj
    
    // 1990s Models
    { id: 44, companyId: 5, name: "Pulsar 150", year: "2001–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar150_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 45, companyId: 5, name: "Pulsar 180", year: "2001–2019", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar180_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2000s Models
    { id: 46, companyId: 5, name: "Discover 125", year: "2004–2020", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_discover125_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 47, companyId: 5, name: "Avenger 220", year: "2005–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_avenger220_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 48, companyId: 5, name: "Pulsar NS200", year: "2012–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar_ns200_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2010s Models
    { id: 49, companyId: 5, name: "Platina 100", year: "2006–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_platina100_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 50, companyId: 5, name: "Dominar 400", year: "2016–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_dominar400_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 51, companyId: 5, name: "Pulsar RS200", year: "2015–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar_rs200_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2020s Models
    { id: 52, companyId: 5, name: "Pulsar N160", year: "2022–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar_n160_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 53, companyId: 5, name: "Pulsar N250", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar_n250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 54, companyId: 5, name: "Dominar 250", year: "2020–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_dominar250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 55, companyId: 5, name: "Pulsar F250", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/bajaj_pulsar_f250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },


    // Suzuki
    
    // 2000s Models
    { id: 35, companyId: 6, name: "Heat", year: "2005–2010", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_heat_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 36, companyId: 6, name: "Zeus", year: "2005–2010", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_zeus_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2010s Models
    { id: 37, companyId: 6, name: "Gixxer 150", year: "2014–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_gixxer150_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 38, companyId: 6, name: "Gixxer SF", year: "2015–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_gixxer_sf_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 39, companyId: 6, name: "Intruder 150", year: "2017–2020", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_intruder150_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

    // 2020s Models
    { id: 40, companyId: 6, name: "V-Strom 250", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_vstrom250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 41, companyId: 6, name: "Gixxer 250", year: "2019–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_gixxer250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 42, companyId: 6, name: "Hayabusa", year: "2021–Present", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_hayabusa_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },
    { id: 43, companyId: 6, name: "Gixxer SF 250", year: "2025", image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739878431/suzuki_gixxer_sf250_placeholder.jpg", components: [{ id: 1, name: "Engine" }, { id: 2, name: "Transmission" }, { id: 3, name: "Suspension" }, { id: 4, name: "Brakes" }, { id: 5, name: "Electrical System" }, { id: 6, name: "Frame and Body" }, { id: 7, name: "Wheels and Tires" }, { id: 8, name: "Exhaust System" }] },

];

// Spare Parts Data (Generic, compatible across brands)
const sparePartsData = [
    { id: 1, componentId: 1, name: "Piston", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Piston_ks34ug.jpg" },
    { id: 2, componentId: 1, name: "Crankshaft", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/camshaft_wxbacw.jpg" },
    { id: 3, componentId: 1, name: "Cylinder Head", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Cylinder_head_pkkcgs.jpg" },
    { id: 4, componentId: 1, name: "Camshaft", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/Crankshaft_bgcjv9.jpg" },
    { id: 5, componentId: 1, name: "Air Filter", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Air_filter_gkqxqj.jpg" },
    { id: 6, componentId: 1, name: "Exhaust System", price: 250, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/exhaust_pipe_ogouc1.jpg" },
    { id: 37, componentId: 1, name: "Carburetor", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/gear_box_zfmivw.jpg" },
    { id: 38, componentId: 1, name: "Oil Filter", price: 20, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/oil_filter_placeholder.jpg" },
    { id: 39, componentId: 1, name: "Gasket Set", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/gasket_set_placeholder.jpg" },
    { id: 7, componentId: 2, name: "Clutch", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/clutch_noq99f.jpg" },
    { id: 8, componentId: 2, name: "Gearbox", price: 300, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/gear_box_zfmivw.jpg" },
    { id: 9, componentId: 2, name: "Chain Drive", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/chain_drive_l3ogl3.jpg" },
    { id: 10, componentId: 2, name: "Sprockets", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871114/sprocket_rfpwle.jpg" },
    { id: 11, componentId: 2, name: "Clutch Cable", price: 20, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/clutch_cable_pgf6rs.jpg" },
    { id: 12, componentId: 2, name: "Gear Shifter", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871114/gear_shifter_cgpxid.jpg" },
    { id: 40, componentId: 2, name: "Clutch Plates", price: 60, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/clutch_plates_placeholder.jpg" },
    { id: 41, componentId: 2, name: "Transmission Chain", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/transmission_chain_placeholder.jpg" },
    { id: 13, componentId: 3, name: "Front Fork", price: 180, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/front_fork_ohaba4.jpg" },
    { id: 14, componentId: 3, name: "Rear Shock Absorbers", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/rear_shock_absorbers_bgasnr.jpg" },
    { id: 15, componentId: 3, name: "Swingarm", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/spingarm_zjxs4c.jpg" },
    { id: 42, componentId: 3, name: "Fork Oil Seals", price: 25, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/fork_oil_seals_placeholder.jpg" },
    { id: 43, componentId: 3, name: "Suspension Bushings", price: 15, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/suspension_bushings_placeholder.jpg" },
    { id: 16, componentId: 4, name: "Brake Disc", price: 70, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brake_disc_es0dy6.jpg" },
    { id: 17, componentId: 4, name: "Brake Calipers", price: 90, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/front-rear-brake-caliper_cegk8i.jpg" },
    { id: 18, componentId: 4, name: "Brake Pads", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brakepads_hywk3y.jpg" },
    { id: 19, componentId: 4, name: "Brake Lines", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brakeline_qalsfb.jpg" },
    { id: 44, componentId: 4, name: "Brake Master Cylinder", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brake_master_cylinder_placeholder.jpg" },
    { id: 45, componentId: 4, name: "Brake Shoes", price: 35, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brake_shoes_placeholder.jpg" },
    { id: 20, componentId: 5, name: "Battery", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/Amaron_Battery_lqekog.jpg" },
    { id: 21, componentId: 5, name: "Alternator", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872766/Alternator_slq9aq.jpg" },
    { id: 22, componentId: 5, name: "Spark Plug", price: 10, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/Spark_plug_hnjnab.jpg" },
    { id: 23, componentId: 5, name: "Headlight", price: 60, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/headlight_jdzzzs.jpg" },
    { id: 24, componentId: 5, name: "Tail Light", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872768/tail_light_fckh2d.jpg" },
    { id: 25, componentId: 5, name: "Indicator Lights", price: 20, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/indicator_lights_mgidrt.jpg" },
    { id: 46, componentId: 5, name: "Ignition Coil", price: 45, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/ignition_coil_placeholder.jpg" },
    { id: 47, componentId: 5, name: "Wiring Harness", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/wiring_harness_placeholder.jpg" },
    { id: 48, componentId: 5, name: "Starter Motor", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/starter_motor_placeholder.jpg" },
    { id: 26, componentId: 6, name: "Main Frame", price: 500, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1739873639/images_2_u5oh7g.jpg" },
    { id: 27, componentId: 6, name: "Fuel Tank", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873003/tank_ej5fnk.jpg" },
    { id: 28, componentId: 6, name: "Seat", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873002/seat_d2li5p.jpg" },
    { id: 29, componentId: 6, name: "Footpegs", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873002/images_icfhmv.jpg" },
    { id: 30, componentId: 6, name: "Handlebars", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873639/images_1_w06c1r.jpg" },
    { id: 49, componentId: 6, name: "Side Panels", price: 60, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873639/side_panels_placeholder.jpg" },
    { id: 50, componentId: 6, name: "Mudguard Front", price: 70, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873639/mudguard_front_placeholder.jpg" },
    { id: 51, componentId: 6, name: "Mudguard Rear", price: 70, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873639/mudguard_rear_placeholder.jpg" },
    { id: 31, componentId: 7, name: "Rim", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/KXA00016-Style2-_clvmtd.avif" },
    { id: 32, componentId: 7, name: "Tire", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873738/tyers_h8g6lf.jpg" },
    { id: 33, componentId: 7, name: "Spokes", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873738/spokes_iwnd8f.jpg" },
    { id: 34, componentId: 7, name: "Hub", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/hub_n8i5cd.jpg" },
    { id: 52, componentId: 7, name: "Wheel Bearings", price: 25, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/wheel_bearings_placeholder.jpg" },
    { id: 53, componentId: 7, name: "Axle", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/axle_placeholder.jpg" },
    { id: 35, componentId: 8, name: "Muffler", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/muffler_sxedcd.jpg" },
    { id: 36, componentId: 8, name: "Header Pipe", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/header_pipe_bo0lid.jpg" },
    { id: 54, componentId: 8, name: "Exhaust Gasket", price: 15, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/exhaust_gasket_placeholder.jpg" },
    { id: 55, componentId: 8, name: "Silencer Clamp", price: 10, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/silencer_clamp_placeholder.jpg" },
];

let cart = [];
let currentComponentId = null;
let currentCompanyId = null;

// Show Homepage (Companies)
function showHome() {
    document.getElementById("home").classList.add("active");
    document.getElementById("models").classList.remove("active");
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.remove("active");
    renderCompanies();
}

// Show Models Page
function showModels(companyId) {
    currentCompanyId = companyId;
    document.getElementById("home").classList.remove("active");
    document.getElementById("models").classList.add("active");
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.remove("active");
    renderBikeModels(companyId);
}

// Show Components Page
function showComponents(modelId) {
    document.getElementById("models").classList.remove("active");
    document.getElementById("components").classList.add("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.remove("active");
    renderComponents(modelId);
}

// Show Spare Parts Page
function showSpareParts(componentId) {
    currentComponentId = componentId;
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.add("active");
    document.getElementById("cart").classList.remove("active");
    renderSpareParts(componentId);
}

// Show Cart
function showCart() {
    document.getElementById("home").classList.remove("active");
    document.getElementById("models").classList.remove("active");
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.add("active");
    renderCart();
}

// Render Companies
function renderCompanies() {
    const companyList = document.getElementById("company-list");
    companyList.innerHTML = companyData
        .map(
            (company) => `
            <div class="card" onclick="showModels(${company.id})">
                <img src="${company.image}" alt="${company.name}">
                <h3>${company.name}</h3>
            </div>
        `
        )
        .join("");
}

// Render Bike Models
function renderBikeModels(companyId) {
    const models = bikeData.filter((model) => model.companyId === companyId);
    const modelList = document.getElementById("model-list");
    modelList.innerHTML = models
        .map(
            (model) => `
            <div class="card" onclick="showComponents(${model.id})">
                <img src="${model.image}" alt="${model.name}">
                <h3>${model.name} (${model.year})</h3>
            </div>
        `
        )
        .join("");
}

// Render Components
function renderComponents(modelId) {
    const model = bikeData.find((m) => m.id === modelId);
    const componentList = document.getElementById("component-list");
    componentList.innerHTML = model.components
        .map(
            (component) => `
            <div class="card" onclick="showSpareParts(${component.id})">
                <h3>${component.name}</h3>
            </div>
        `
        )
        .join("");
}

// Render Spare Parts
function renderSpareParts(componentId) {
    const spareParts = sparePartsData.filter((part) => part.componentId === componentId);
    const sparePartList = document.getElementById("spare-part-list");
    sparePartList.innerHTML = spareParts
        .map(
            (part) => {
                const isInCart = cart.some(item => item.id === part.id);
                return `
                <div class="card">
                    <img src="${part.image}" alt="${part.name}">
                    <h3>${part.name}</h3>
                    <p>$${part.price}</p>
                    <button id="cart-btn-${part.id}" class="${isInCart ? 'carted' : ''}" onclick="addToCart(${part.id})">
                        ${isInCart ? 'Item Carted' : 'Add to Cart'}
                    </button>
                </div>
            `;
            }
        )
        .join("");
}

// Add to Cart
function addToCart(partId) {
    const part = sparePartsData.find((p) => p.id === partId);
    const cartItem = cart.find((item) => item.id === partId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        part.quantity = 1;
        cart.push(part);
    }

    updateCartCount();
    renderSpareParts(currentComponentId);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart
        .map(
            (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price} x ${item.quantity} = $${item.price * item.quantity}</p>
                </div>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
        `
        )
        .join("");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("cart-total").textContent = `Total: $${total}`;
}

// Increase Quantity
function increaseQuantity(partId) {
    const cartItem = cart.find((item) => item.id === partId);
    if (cartItem) {
        cartItem.quantity += 1;
        updateCartCount();
        renderCart();
        renderSpareParts(currentComponentId);
    }
}

// Decrease Quantity
function decreaseQuantity(partId) {
    const cartItem = cart.find((item) => item.id === partId);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity === 0) {
            cart = cart.filter((item) => item.id !== partId);
        }
        updateCartCount();
        renderCart();
        renderSpareParts(currentComponentId);
    }
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        showError("Your cart is empty. Add some items first!");
        return;
    }
    document.getElementById("user-verification").style.display = "block";
}

// Submit Order with Firebase
function submitOrder(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const spinner = document.getElementById("loading-spinner");

    if (!username || !phone) {
        showError("Please fill in all fields.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        showError("Please enter a valid 10-digit phone number.");
        return;
    }

    spinner.style.display = "block";

    firebase.firestore().collection("orders").add({
        username: username,
        phone: phone,
        items: cart.map(item => ({
           name: item.company name,
            name: item.model name,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            total: item.price * item.quantity
        })),
        totalAmount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        spinner.style.display = "none";
        document.getElementById("user-verification").style.display = "none";
        document.getElementById("order-confirmation").style.display = "block";
        cart = [];
        updateCartCount();
        renderCart();
        renderSpareParts(currentComponentId);
        setTimeout(() => {
            document.getElementById("order-confirmation").style.display = "none";
            showHome();
        }, 3000);
    })
    .catch(error => {
        spinner.style.display = "none";
        showError("Failed to place order: " + error.message);
        console.error("Firebase error:", error);
    });
}

// Show Error Message
function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.style.cssText = "color: red; text-align: center; margin-top: 1rem;";
    errorDiv.textContent = message;
    const form = document.getElementById("order-form");
    form.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}

// Initialize
showHome();
