System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppDataService = (function () {
                function AppDataService(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead.jpg",
                            alt: "test",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
                            image: './public/images/banner.jpg',
                            ctaText: 'Learn More'
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "Buying Guide",
                                    desc: "What to look for when buying",
                                    cta: "Click Here",
                                    link: "http://blog.whirlpool.ca/look-buying-range/",
                                    type: "cart"
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Ratings and Reviews",
                                    alt: "Ratings and Reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html#Laundry",
                                    type: "star"
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Find Your Whirlpool",
                                    alt: "Find Your Whirlpool",
                                    desc: "Need help finding your range?",
                                    cta: "Click Here",
                                    link: "http://findmy.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Additional Features",
                            features: [
                                {
                                    title: "Load & Go<sup>&trade;</sup> Bulk Dispenser",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "http://www.whirlpool.com/duet",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Vibration Control Guarantee",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "http://www.whirlpool.ca/other-assets/en_CA/pdf/2016_Whirlpool_VIBRATION_FREE_LIMITED_GUARANTEE_EN.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                },
                                {
                                    title: "Additional Accessories",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Laundry_Accessories-2/102280132/ ",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Must-See Innovation",
                            videos: [
                                {
                                    id: 'w4erD5cKGe4',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'The Most Customized Fabric Care in the Industry*',
                                    alt: "The Most Customized Fabric Care in the Industry",
                                    ctaTitle: 'The Most Customized Fabric Care in the Industry*',
                                    cta: 'Play Video',
                                    desc: 'Customize your fabric care using the QuickSelect<sup>&trade;</sup> System’s intuitive touch control with memory.'
                                },
                                {
                                    id: 'j-q2jseqmak',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Adaptive Wash Technology',
                                    alt: "Adaptive Wash Technology",
                                    ctaTitle: 'Adaptive Wash Technology',
                                    cta: 'View',
                                    desc: 'Get better clean and better care thanks to the total laundry pair system Adaptive Wash Technology. Now with Active Bloom<sup>&trade;</sup> Wash Action, this technology senses and adapts to each load for customized cleaning with the right amount of wash action and water levels.',
                                },
                                {
                                    id: 'oheY1UnexwM',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Wash & Dry in One Cycle',
                                    alt: "Wash & Dry in One Cycle",
                                    ctaTitle: 'Wash & Dry in One Cycle',
                                    cta: 'View',
                                    desc: 'Now you can wash and dry tomorrow’s outfit right in the washer with the All-In-One Care<sup>&trade;</sup> System’s Wash and Dry cycle.'
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose Your Style',
                            nav: {
                                text: 'See<br/>All',
                                link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003/'
                            },
                            products: [
                                {
                                    image: "./public/images/products/top-load.jpg",
                                    thumb: "./public/images/products/top-load-sml.jpg",
                                    title: "High-Efficiency Top Load",
                                    alt: "High-Efficiency Top Load",
                                    desc: "Looking for excellent cleaning performance, energy efficiency and sleek design? That’s just the beginning. This familiar top-load style washer has evolved tremendously in recent years, becoming the most popular laundry configuration on the market today. Advanced features and new technology give clothes a deep clean and gentle care. With the largest capacity drums available, these machines allow you to get more laundry done, faster.",
                                    link: "http://www.whirlpool.ca/en_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966825/",
                                    id: "top-load",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/front-load.jpg",
                                    thumb: "./public/images/products/front-load-sml.jpg",
                                    title: "High-Efficiency Front Load",
                                    alt: "High-Efficiency Front Load",
                                    desc: "Front load machines have gained popularity due to their water and energy efficiency, also offering space saving flexibility and contemporary design. This configuration boasts unique features such as Load&Go™, or combined Wash & Dry cycles, making laundry a breeze. Clothes will get the fabric care they deserve with this energy-efficient front load washer.",
                                    link: "http://www.whirlpool.ca/en_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966825/",
                                    id: "front-load",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/stacked.jpg",
                                    thumb: "./public/images/products/stacked-sml.jpg",
                                    title: "Small Space Solutions",
                                    alt: "Small Space Solutions",
                                    desc: "Get a space-saving design with closet-depth fit that allows for more flexible installation in your laundry space.",
                                    link: "http://www.whirlpool.ca/en_CA/-[WFW9290FC]-5709597/WFW9290FC/",
                                    id: "stacked",
                                    ctaText: "Learn More"
                                },
                                {
                                    image: "./public/images/products/dryer.jpg",
                                    thumb: "./public/images/products/dryer-sml.jpg",
                                    title: "Ventless Dryer Technology",
                                    alt: "Ventless Dryer Technology",
                                    desc: "Our most efficient dryer technology allows you to enjoy exceptional care for clothes while using less energy than ever. The space-saving design and ventless technology also allow it to be installed just about anywhere.",
                                    link: "http://www.whirlpool.ca/en_CA/-[YWED99HEDC]-1305267/YWED99HEDC/",
                                    id: "dryer",
                                    ctaText: "Learn More"
                                }
                            ]
                        }
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead-fr.jpg",
                            alt: "test",
                            title: ""
                        },
                        banner: {
                            enabled: true,
                            link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
                            image: './public/images/banner_fr.jpg',
                            ctaText: 'En savoir plus'
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Guide D'achat",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    alt: "test",
                                    cta: "Cliquez ici",
                                    link: "/other-assets/fr_CA/pdf/WP_Cooking_Buying_Guide_FR.pdf",
                                    type: "cart"
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Classements et Évaluations",
                                    desc: "Voyez ce que les autres clients en disent",
                                    alt: "test",
                                    cta: "Cliquez ici",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html#Ovens",
                                    type: "star"
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouvez Votre Électroménager Whirlpool",
                                    desc: "Vous avez besoin d’aide pour trouver une cuisinière?",
                                    alt: "test",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.whirlpool.ca",
                                    type: "magnifier"
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Fonctions supplémentaires",
                            features: [
                                {
                                    title: "Élément FlexHeat<sup>&trade;</sup>",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "",
                                    alt: "Élément Flex Heat",
                                    text: "L'élément FlexHeat™ permet d'avoir deux ou trois éléments en un seul. L’anneau intérieur de 6 po est idéal pour les petites casseroles et les anneaux extérieurs permettent d'accueillir de plus grandes batteries de cuisine.",
                                    cta: ""
                                },
                                {
                                    title: "Capteur de température",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "",
                                    alt: "Capteur de température",
                                    text: "Un capteur intégré surveille la température du four et contrôle les éléments de cuisson pour assurer des résultats uniformes et délicieux à chaque fois.",
                                    cta: ""
                                },
                                {
                                    title: "Garantie d’installation FIT",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "/other-assets/fr_CA/WHR_FIT_Front Control_Guarantee_2016_FR.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: ""
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Innovation à voir absolument",
                            videos: [
                                {
                                    image: './public/images/video-thumb-1.jpg',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Cuisinières électriques et au gaz ',
                                    alt: "Cuisinières électriques et au gaz ",
                                    ctaTitle: 'Cuisinières électriques et au gaz',
                                    cta: 'Voir',
                                    desc: 'Préparez votre souper plus rapidement et regagnez ainsi du temps dans votre journée bien occupée, grâce aux cuisinières équipées du système TimeSavor<sup>&trade;</sup>.'
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Technologie Frozen Bake<sup>&trade;</sup>',
                                    alt: "Technologie Frozen Bake",
                                    ctaTitle: 'Technologie<br/>Frozen Bake<sup>&trade;</sup>',
                                    cta: 'Voir',
                                    desc: 'La technologie Frozen Bake™ cuit les aliments plus rapidement, éliminant le besoin de préchauffer le four pour vos aliments favoris, tels que les pizzas, lasagnes, pépites de poulet, frites ou tartes. Il suffit de sélectionner le type d\'aliment, la température et le temps de cuisson indiqué sur l\'emballage du produit congelé, puis le four personnalisera la cuisson.',
                                },
                                {
                                    image: './public/images/video-thumb-3.jpg',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Cuisson par convection à ventilation',
                                    alt: "Cuisson par convection à ventilation",
                                    ctaTitle: 'Cuisson par convection à ventilation',
                                    cta: 'Voir',
                                    desc: 'Obtenez une cuisson uniforme sur toutes les grilles grâce à la convection par ventilateur. La chaleur se propage dans tout le four, vous obtiendrez ainsi des résultats optimaux, quelle que soit la grille utilisée.'
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choisissez votre style',
                            nav: {
                                text: 'Tout<br/>Voir',
                                link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003/'
                            },
                            products: [
                                {
                                    image: "./public/images/products/fcr.png",
                                    thumb: "./public/images/products/thumbs/fcr.png",
                                    title: "Cuisinières à commandes frontales",
                                    alt: "Cuisinières à commandes frontales",
                                    desc: "Les commandes frontales sont plus sécuritaires et faciles d'accès, et leur allure intégrée s'agence à toute cuisine. Vous pouvez installer ces cuisinières au bout du comptoir, grâce aux parois finies.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+100000374/",
                                    id: "front-control-ranges",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/rcr.png",
                                    thumb: "./public/images/products/thumbs/rcr.png",
                                    title: "Cuisinières à commandes arrière",
                                    alt: "Cuisinières à commandes arrière",
                                    desc: "Ces cuisinières peuvent se placer entre les placards/comptoirs, au bout d'un comptoir ou même séparément; et les commandes sont placées sur le panneau arrière. Les prix varient, du modèle de base au modèle supérieur.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+4294965600/",
                                    id: "rear-control-ranges",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/dor.png",
                                    thumb: "./public/images/products/thumbs/dor.png",
                                    title: "Cuisinières à four double",
                                    alt: "Cuisinières à four double",
                                    desc: "Les fours doubles sont de tailles et formes variées. Réfléchissez à ce que vous cuisinez le plus fréquemment et pour combien de personnes. Les deux fours permettent de cuire vos pâtisseries et le souper en même temps.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102280003+102280334/",
                                    id: "double-oven-ranges",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/wall-oven.png",
                                    thumb: "./public/images/products/thumbs/wall-oven.png",
                                    title: "Fours muraux",
                                    alt: "Fours muraux",
                                    desc: "Les fours muraux encastrés sont très polyvalents. Situés à hauteur de poitrine, les plats lourds sont faciles à transférer sur le comptoir. Choix variés : four à micro-ondes encastré, four mural simple, double, ou combiné avec un four à micro-ondes.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102280007/",
                                    id: "wall-oven",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/cooktop.png",
                                    thumb: "./public/images/products/thumbs/cooktop.png",
                                    title: "Tables de cuisson",
                                    alt: "Tables de cuisson",
                                    desc: "Cette surface de cuisson à brûleurs ou éléments peut se placer sur un comptoir existant ou séparément. Excellente technologie pour porter à ébullition, mijoter ou frire des œufs brouillés rapidement.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102280011/",
                                    id: "cooktops",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/microwave.png",
                                    thumb: "./public/images/products/thumbs/microwave.png",
                                    title: "Fours à micro-ondes",
                                    alt: "Fours à micro-ondes",
                                    desc: "Les fours à micro-ondes à hotte intégrée s’installent au dessus de votre surface de cuisson. Certains modèles sont dotés de la cuisson à convection, utilisant des ventilateurs internes et des éléments chauffants séparés faisant circuler uniformément l'air chaud.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102280018/",
                                    id: "microwaves",
                                    ctaText: "En savoir plus"
                                },
                                {
                                    image: "./public/images/products/hood.png",
                                    thumb: "./public/images/products/thumbs/hood.png",
                                    title: "Hottes",
                                    alt: "Hottes",
                                    desc: "Les hottes de ventilation sont une façon élégante d'aérer votre cuisine. Choix de hottes sous armoire, hottes montées sur îlot et hottes murales. Certaines sont aussi dotées d'un éclairage de surface de cuisson.",
                                    link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Hoods-3/102280014/",
                                    id: "hoods",
                                    ctaText: "En savoir plus"
                                }
                            ]
                        }
                    };
                }
                AppDataService.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppDataService.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppDataService);
                return AppDataService;
            }());
            exports_1("AppDataService", AppDataService);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map