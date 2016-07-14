
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
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
						title: "Vibration Control Guarantee",
						image: "./public/images/more-features-2.jpg",
						link: "#",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Load & Go<sup>&trade;</sup> Bulk Dispenser",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "test",
						text: "Care is making things easier. Skip adding detergent to every load with the Load & Go<sup>&trade;</sup> system’s cartridge that holds enough detergent for up to 12 loads of laundry.",
						cta: ""
					},
					{
						title: "Additional Accessories",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Laundry_Accessories-2/102280132/",
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
                        link: "http://www.whirlpool.ca/en_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966847+4294966878/",
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
                        link: "http://www.whirlpool.ca/en_CA/laundry-1/laundry-2/dryers-3/-[YWED9290FW]-5733097/YWED9290FW/",
                        id: "dryer",
                        ctaText: "Learn More"
                    }
				]
			}
		}
		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead.jpg",
				alt: "test",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'Plus de détails'
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
						link: "http://blog.whirlpool.ca/look-buying-range/",
						type: "cart"
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Évaluations et commentaires",
						alt: "Évaluations et commentaires",
						desc: "Voyez ce que les autres clients en disent",
						cta: "Cliquez ici",
						link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html#Laundry",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez votre électroménager Whirlpool",
						alt: "Trouvez votre électroménager Whirlpool",
						desc: "Vous avez besoin d'aide pour trouver votre duo de lessive?",
						cta: "Cliquez ici",
						link: "http://trouvermon.whirlpool.ca",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Caractéristiques additionnelles",
				features: [
					{
						title: "Garantie de contrôle des vibrations",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/other-assets/en_CA/pdf/2016_Whirlpool_VIBRATION_FREE_LIMITED_GUARANTEE_FR.pdf",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Distributeur de détergent Load & Go<sup>&trade;</sup>",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "test",
						text: "Plus besoin d'ajouter du détergent à chaque brassée grâce au système de remplissage Load & Go<sup>&trade;</sup> . La cartouche Load & Go<sup>&trade;</sup> peut contenir suffisamment de détergent pour laver jusqu'à 12 brassées* de vêtements.",
						cta: ""
					},
					{
						title: "Accessoires Additionnels",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Laundry_Accessories-2/102280132/",
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
						title: 'Le soin des tissus le plus personnalisé de l\'industrie*',
						alt: "Le soin des tissus le plus personnalisé de l\'industrie*",
						ctaTitle: 'Le soin des tissus le plus personnalisé de l\'industrie*',
						cta: 'Voir',
						desc: 'Personnalisez le soin de vos tissus avec le système de commandes intuitives à effleurement avec mémoire QuickSelect<sup>&trade;</sup>.'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Technologie de lavage adaptatif',
						alt: "Technologie de lavage adaptatif",
						ctaTitle: 'Technologie de lavage adaptatif',
						cta: 'Voir',
						desc: 'Obtenez un meilleur nettoyage et un meilleur soin des vêtements grâce à la technologie de lavage adaptatif, qui est partie intégrante du système d\'entretien complet des vêtements. Maintenant dotée de l\'action de lavage Active BloomTM; cette technologie évalue chaque brassée et adapte les mouvements de lavage et les niveaux d\'eau en conséquence, procurant un nettoyage personnalisé.',
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Lavage et séchage en un seul programme',
						alt: "Lavage et séchage en un seul programme",
						ctaTitle: 'Lavage et séchage en un seul programme',
						cta: 'Voir',
						desc: 'Maintenant vous pouvez laver et sécher votre tenue du lendemain directement dans la laveuse grâce au programme de lavage et de séchage All-In-One Care<sup>&trade;</sup>.'
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+4294966847+102280319+102280316+102280317/'
				},
				products: [
					{
						image: "./public/images/products/top-load.jpg",
						thumb: "./public/images/products/top-load-sml.jpg",
                        title: "Modèles haute efficacité à chargement vertical",
                        alt: "Modèles haute efficacité à chargement vertical",
                        desc: "Vous recherchez un nettoyage optimal, une efficacité énergétique et une élégance épurée? Ce n'est que le début. Ce style de laveuse traditionnel à chargement vertical a considérablement évolué au cours des dernières années, pour en faire la configuration de lessive la plus populaire sur le marché d'aujourd'hui. Des fonctions perfectionnées et une nouvelle technologie procurent aux vêtements un nettoyage en profondeur et un soin délicat. Grâce à des paniers et tambours à la plus grande capacité, ces appareils vous permettent d'effectuer davantage de lessive, plus rapidement.",
                        link: "http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+102280317/",
                        id: "top-load",
                        ctaText: "Plus de détails"
                    },
					{
						image: "./public/images/products/front-load.jpg",
						thumb: "./public/images/products/front-load-sml.jpg",
                        title: "Modèles haute efficacité à chargement frontal",
                        alt: "Modèles haute efficacité à chargement frontal",
                        desc: "Les appareils de lessive à chargement frontal ont gagné en popularité en raison de leur efficacité éconergétique, et de leur polyvalence d'installation et style contemporain. La cartouche Load&Go™, ou le programme de lavage et séchage combinés de cette configuration facilite la lessive.  Les vêtements reçoivent le soin qu'ils méritent grâce à cette laveuse à chargement frontal à haute efficacité.",
                        link: "http://www.whirlpool.ca/fr_CA/Laundry-1/Laundry_Laundry_Washers-3/102280047+102280316/",
                        id: "front-load",
                        ctaText: "Plus de détails"
                    },
					{
						image: "./public/images/products/stacked.jpg",
						thumb: "./public/images/products/stacked-sml.jpg",
                        title: "Solutions pour les petits espaces",
                        alt: "Solutions pour les petits espaces",
                        desc: "Bénéficiez d'une conception qui économise de l'espace et s'ajuste à la profondeur de placard5 pour une installation polyvalente dans votre espace de lessive.",
                        link: "http://www.whirlpool.ca/fr_CA/-[WFW9290FC]-5709597/WFW9290FC/",
                        id: "stacked",
                        ctaText: "Plus de détails"
                    },
					{
						image: "./public/images/products/dryer.jpg",
						thumb: "./public/images/products/dryer-sml.jpg",
                        title: "Technologie sans évent",
                        alt: "Technologie sans évent",
                        desc: "Notre sécheuse à technologie la plus efficace vous permet de profiter d'un soin exceptionnel de vos vêtements tout en consommant moins d'énergie. La conception compacte et sans évent permet d’installer ce modèle pratiquement partout.",
                        link: "http://www.whirlpool.ca/fr_CA/-[YWED99HEDC]-1305267/YWED99HEDC/",
                        id: "dryer",
                        ctaText: "Plus de détails"
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}