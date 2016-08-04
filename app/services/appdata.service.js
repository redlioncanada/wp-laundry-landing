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
                            ctaText: 'Learn More',
                            analytics: {
                                category: "@category",
                                action: "Clicked Bottom Banner",
                                label: "Every Day Care-Learn More"
                            }
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
                                    link: "http://blog.whirlpool.ca/what-to-look-for-when-buying-a-laundry-pair/",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Ratings and Reviews",
                                    alt: "Ratings and Reviews",
                                    desc: "See what others are saying",
                                    cta: "Click Here",
                                    link: "http://www.whirlpool.ca/en_CA/2_3_90/jump-pages_best-products.content.html#Laundry",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Ratings & Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Find Your Whirlpool",
                                    alt: "Find Your Whirlpool",
                                    desc: "Need help finding your range?",
                                    cta: "Click Here",
                                    link: "http://findmy.whirlpool.ca",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Find Your WP"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Additional Features",
                            features: [
                                {
                                    title: "Vibration Control Guarantee",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "/other-assets/en_CA/pdf/2016_Whirlpool_VIBRATION_FREE_LIMITED_GUARANTEE_EN.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry-Additional Features",
                                        label: "Vibration Control Guarantee"
                                    }
                                },
                                {
                                    title: "Load & Go<sup>&trade;</sup> Bulk Dispenser",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "Care is making things easier. Skip adding detergent to every load with the Load & Go<sup>&trade;</sup> system’s cartridge that holds enough detergent for up to 12 loads of laundry.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Hovered Over Laundry-Additional Features",
                                        label: "Load & Go Bulk Dispenser"
                                    }
                                },
                                {
                                    title: "Additional Accessories",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://www.whirlpool.ca/en_CA/Accessories-1/Accessories_Laundry_Accessories-2/102280132/",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry-Additional Features",
                                        label: "Additional Accessories"
                                    }
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
                                    desc: 'Customize your fabric care using the QuickSelect<sup>&trade;</sup> System’s intuitive touch control with memory.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry-Must-See Innovation",
                                        label: "Customized Fabric Care"
                                    }
                                },
                                {
                                    id: 'j-q2jseqmak',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Adaptive Wash Technology',
                                    alt: "Adaptive Wash Technology",
                                    ctaTitle: 'Adaptive Wash Technology',
                                    cta: 'View',
                                    desc: 'Get better clean and better care thanks to the total laundry pair system Adaptive Wash Technology. Now with Active Bloom<sup>&trade;</sup> Wash Action, this technology senses and adapts to each load for customized cleaning with the right amount of wash action and water levels.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry-Must-See Innovation",
                                        label: "Adaptive Wash Technology"
                                    }
                                },
                                {
                                    id: 'oheY1UnexwM',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Wash & Dry in One Cycle',
                                    alt: "Wash & Dry in One Cycle",
                                    ctaTitle: 'Wash & Dry in One Cycle',
                                    cta: 'View',
                                    desc: 'Now you can wash and dry tomorrow’s outfit right in the washer with the All-In-One Care<sup>&trade;</sup> System’s Wash and Dry cycle.',
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry-Must-See Innovation",
                                        label: "Wash & Dry in One Cycle"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choose Your Style',
                            nav: {
                                text: 'See<br/>All',
                                link: 'http://www.whirlpool.ca/en_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966825+4294966986+102280047+4294966878/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Choose Your Laundry Style",
                                    label: "See All Laundry"
                                }
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
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Style",
                                        label: "High-Efficiency Top Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front-load.jpg",
                                    thumb: "./public/images/products/front-load-sml.jpg",
                                    title: "High-Efficiency Front Load",
                                    alt: "High-Efficiency Front Load",
                                    desc: "Front load machines have gained popularity due to their water and energy efficiency, also offering space saving flexibility and contemporary design. This configuration boasts unique features such as Load&Go™, or combined Wash & Dry cycles, making laundry a breeze. Clothes will get the fabric care they deserve with this energy-efficient front load washer.",
                                    link: "http://www.whirlpool.ca/en_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966847+4294966878/",
                                    id: "front-load",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Style",
                                        label: "High-Efficiency Front Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/stacked.jpg",
                                    thumb: "./public/images/products/stacked-sml.jpg",
                                    title: "Small Space Solutions",
                                    alt: "Small Space Solutions",
                                    desc: "Get a space-saving design with closet-depth fit that allows for more flexible installation in your laundry space.",
                                    link: "http://www.whirlpool.ca/en_CA/-[WFW9290FC]-5709597/WFW9290FC/",
                                    id: "stacked",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Style",
                                        label: "Small Space Solutions",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/dryer.jpg",
                                    thumb: "./public/images/products/dryer-sml.jpg",
                                    title: "Ventless Dryer Technology",
                                    alt: "Ventless Dryer Technology",
                                    desc: "Our most efficient dryer technology allows you to enjoy exceptional care for clothes while using less energy than ever. The space-saving design and ventless technology also allow it to be installed just about anywhere.",
                                    link: "http://www.whirlpool.ca/en_CA/laundry-1/laundry-2/dryers-3/-[YWED9290FW]-5733097/YWED9290FW/",
                                    id: "dryer",
                                    ctaText: "Learn More",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Style",
                                        label: "Ventless Dryer Technology",
                                        learnMore: 'Learn More'
                                    }
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
                            ctaText: 'Plus de détails',
                            analytics: {
                                category: "@language-@category",
                                action: "FR-Clicked Bottom Banner",
                                label: "Every Day Care-Learn More"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Guide d'achat",
                                    alt: "Guide d'achat",
                                    desc: "Caractéristiques à rechercher",
                                    cta: "Cliquez ici",
                                    link: "/other-assets/fr_CA/pdf/WP_Laundry_Buying_Guide_FR.pdf",
                                    type: "cart",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry Resources",
                                        label: "Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Évaluations et commentaires",
                                    alt: "Évaluations et commentaires",
                                    desc: "Voyez ce que les autres clients en disent",
                                    cta: "Cliquez ici",
                                    link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html#Laundry",
                                    type: "star",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry Resources",
                                        label: "Ratings & Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouvez votre électroménager Whirlpool",
                                    alt: "Trouvez votre électroménager Whirlpool",
                                    desc: "Vous avez besoin d'aide pour trouver votre duo de lessive?",
                                    cta: "Cliquez ici",
                                    link: "http://trouvermon.whirlpool.ca",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry Resources",
                                        label: "Find Your WP"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Caractéristiques additionnelles",
                            features: [
                                {
                                    title: "Garantie de contrôle des vibrations",
                                    image: "./public/images/more-features-2-fr.jpg",
                                    link: "http://www.whirlpool.ca/other-assets/en_CA/pdf/2016_Whirlpool_VIBRATION_FREE_LIMITED_GUARANTEE_FR.pdf",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry-Additional Features",
                                        label: "Vibration Control Guarantee"
                                    }
                                },
                                {
                                    title: "Distributeur de détergent Load & Go<sup>&trade;</sup>",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "",
                                    alt: "test",
                                    text: "Plus besoin d'ajouter du détergent à chaque brassée grâce au système de remplissage Load & Go<sup>&trade;</sup> . La cartouche Load & Go<sup>&trade;</sup> peut contenir suffisamment de détergent pour laver jusqu'à 12 brassées* de vêtements.",
                                    cta: "",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Hovered Over Laundry-Additional Features",
                                        label: "Load & Go Bulk Dispenser"
                                    }
                                },
                                {
                                    title: "Accessoires Additionnels",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Laundry_Accessories-2/102280132/",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry-Additional Features",
                                        label: "Additional Accessories"
                                    }
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
                                    title: 'Le soin des tissus le plus personnalisé de l\'industrie*',
                                    alt: "Le soin des tissus le plus personnalisé de l\'industrie*",
                                    ctaTitle: 'Le soin des tissus le plus personnalisé de l\'industrie*',
                                    cta: 'Voir',
                                    desc: 'Personnalisez le soin de vos tissus avec le système de commandes intuitives à effleurement avec mémoire QuickSelect<sup>&trade;</sup>.',
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry-Must-See Innovation",
                                        label: "Customized Fabric Care"
                                    }
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Technologie de lavage adaptatif',
                                    alt: "Technologie de lavage adaptatif",
                                    ctaTitle: 'Technologie de lavage adaptatif',
                                    cta: 'Voir',
                                    desc: 'Obtenez un meilleur nettoyage et un meilleur soin des vêtements grâce à la technologie de lavage adaptatif, qui est partie intégrante du système d\'entretien complet des vêtements. Maintenant dotée de l\'action de lavage Active Bloom<sup>&trade;</sup>; cette technologie évalue chaque brassée et adapte les mouvements de lavage et les niveaux d\'eau en conséquence, procurant un nettoyage personnalisé.',
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry-Must-See Innovation",
                                        label: "Adaptive Wash Technology"
                                    }
                                },
                                {
                                    image: './public/images/video-thumb-3.jpg',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Lavage et séchage en un seul programme',
                                    alt: "Lavage et séchage en un seul programme",
                                    ctaTitle: 'Lavage et séchage en un seul programme',
                                    cta: 'Voir',
                                    desc: 'Maintenant vous pouvez laver et sécher votre tenue du lendemain directement dans la laveuse grâce au programme de lavage et de séchage All-In-One Care<sup>&trade;</sup>.',
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Laundry-Must-See Innovation",
                                        label: "Wash & Dry in One Cycle"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Choisissez votre style',
                            nav: {
                                text: 'Tout<br/>Voir',
                                link: 'http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966847+102280319+102280316+102280317/',
                                analytics: {
                                    category: "@language-@category",
                                    action: "FR-Clicked Choose Your Laundry Style",
                                    label: "See All Laundry"
                                }
                            },
                            products: [
                                {
                                    image: "./public/images/products/top-load.jpg",
                                    thumb: "./public/images/products/top-load-sml.jpg",
                                    title: "Modèles haute efficacité à chargement vertical",
                                    alt: "Modèles haute efficacité à chargement vertical",
                                    desc: "Vous recherchez un nettoyage optimal, une bonne efficacité énergétique et une élégance épurée? Ce n'est que le début. Ce style de laveuse traditionnel à chargement vertical a considérablement évolué au cours des dernières années, pour en faire la configuration de lessive la plus populaire sur le marché d'aujourd'hui. Des fonctions perfectionnées et une nouvelle technologie procurent aux vêtements un nettoyage en profondeur et un soin délicat. Grâce à des paniers et tambours à la plus grande capacité, ces appareils vous permettent d'effectuer davantage de lessive, plus rapidement.",
                                    link: "http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+102280317/",
                                    id: "top-load",
                                    ctaText: "Plus de détails",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Choose Your Laundry Style",
                                        label: "High-Efficiency Top Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front-load.jpg",
                                    thumb: "./public/images/products/front-load-sml.jpg",
                                    title: "Modèles haute efficacité à chargement frontal",
                                    alt: "Modèles haute efficacité à chargement frontal",
                                    desc: "Les appareils de lessive à chargement frontal ont gagné en popularité en raison de leur efficacité éconergétique, et de leur polyvalence d'installation et style contemporain. La cartouche Load&Go™, ou le programme de lavage et séchage combinés de cette configuration facilitent la lessive.  Les vêtements reçoivent le soin qu'ils méritent grâce à cette laveuse à chargement frontal à haute efficacité.",
                                    link: "http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+102280316/",
                                    id: "front-load",
                                    ctaText: "Plus de détails",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Choose Your Laundry Style",
                                        label: "High-Efficiency Front Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/stacked.jpg",
                                    thumb: "./public/images/products/stacked-sml.jpg",
                                    title: "Solutions pour les petits espaces",
                                    alt: "Solutions pour les petits espaces",
                                    desc: "Bénéficiez d'une conception qui économise de l'espace et s'ajuste à la profondeur de placard pour une installation polyvalente dans votre espace de lessive.",
                                    link: "http://www.whirlpool.ca/fr_CA/-[WFW9290FC]-5709597/WFW9290FC/",
                                    id: "stacked",
                                    ctaText: "Plus de détails",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Choose Your Laundry Style",
                                        label: "Small Space Solutions",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/dryer.jpg",
                                    thumb: "./public/images/products/dryer-sml.jpg",
                                    title: "Technologie sans évent",
                                    alt: "Technologie sans évent",
                                    desc: "Notre sécheuse à technologie la plus efficace vous permet de profiter d'un soin exceptionnel de vos vêtements tout en consommant moins d'énergie. La conception compacte et sans évent permet d’installer ce modèle pratiquement partout.",
                                    link: "http://www.whirlpool.ca/fr_CA/-[YWED9290FW]-5733097/YWED9290FW/",
                                    id: "dryer",
                                    ctaText: "Plus de détails",
                                    analytics: {
                                        category: "@language-@category",
                                        action: "FR-Clicked Choose Your Laundry Style",
                                        label: "Ventless Dryer Technology",
                                        learnMore: 'Learn More'
                                    }
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