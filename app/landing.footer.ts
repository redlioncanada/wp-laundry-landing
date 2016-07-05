import {Component, Input} from 'angular2/core'

@Component({
    selector: 'footer',
    template: `
	<div id="footer-wrap">
	    <div id="footer-nav">
            <ul data-ga-action="Clicked Footer Majors Nav">
                <li><a href="http://www.kitchenaid.ca/en_CA/major-appliances/" data-ga-label="@clicked-text">Major Appliances</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/cooktops-3/102310008/" data-ga-label="@clicked-text">Cooktops</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/dishwashers-3/102310014/" data-ga-label="@clicked-text">Dishwasher</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/disposers-and-compactors-3/102310299/" data-ga-label="@clicked-text">Disposers & Compactors</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/hoods-and-vents-3/102310029/" data-ga-label="@clicked-text">Hoods & Vents</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/microwaves-3/102310037/" data-ga-label="@clicked-text">Microwaves</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/ranges-3/102310042/" data-ga-label="@clicked-text">Ranges</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/" data-ga-label="@clicked-text">Refrigerators</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/" data-ga-label="@clicked-text">Undercounter Refrigerators</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/wall-ovens-3/102310003/" data-ga-label="@clicked-text">Wall Ovens</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/warming-drawers-3/102310057/" data-ga-label="@clicked-text">Warming Drawers</a></li>
            </ul>
            <ul data-ga-action="Clicked Footer Portables Nav">
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/" data-ga-label="@clicked-text">Countertop Appliances</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/pro-line/" data-ga-label="@clicked-text">Pro Line Series</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/2_1_2_30_209/brand_small-appliances_Beverage-Maker_overview.content.html" data-ga-label="@clicked-text">Beverage Products</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/blenders/" data-ga-label="@clicked-text">Blenders</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/coffee-products/" data-ga-label="@clicked-text">Coffee Products</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/commercial-products/" data-ga-label="@clicked-text">Commercial Products</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/countertop-ovens/" data-ga-label="@clicked-text">Countertop Ovens</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/kettles/" data-ga-label="@clicked-text">Electric Kettles</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/food-processors/" data-ga-label="@clicked-text">Food Processors</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/hand-blenders/" data-ga-label="@clicked-text">Hand Blenders</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/hand-mixers/" data-ga-label="@clicked-text">Hand Mixers</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/countertop-appliances-1/juicers-3/102310341/" data-ga-label="@clicked-text">Juicers</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/slow-cookers/" data-ga-label="@clicked-text">Slow Cookers</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/-%5B4KSS1121ER%5D-2104367/4KSS1121ER/" data-ga-label="@clicked-text">Sparkling Beverage Maker</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/stand-mixer-attachments/" data-ga-label="@clicked-text">Stand Mixer Attachments</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/stand-mixers/" data-ga-label="@clicked-text">Stand Mixers</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/toasters/" data-ga-label="@clicked-text">Toasters</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/countertop-appliances/waffle-makers/" data-ga-label="@clicked-text">Waffle Makers</a></li>
            </ul>
            <ul data-ga-action="Clicked Footer Kitchenware Nav">
                <li><a href="http://www.kitchenaid.ca/en_CA/kitchenware/" data-ga-label="@clicked-text">Kitchenware</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/kitchenware-1/bakeware-3/102310174/" data-ga-label="@clicked-text">Bakeware</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/kitchenware-1/cookware-3/102310335/" data-ga-label="@clicked-text">Cookware</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/shop/kitchenware-1/kettles-3/102310218/" data-ga-label="@clicked-text">Tea Kettles</a></li>
            </ul>
            <ul data-ga-action="Clicked Footer Service & Support Nav">
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/" data-ga-label="@clicked-text">Service & Support</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/manuals/" data-ga-label="@clicked-text">Manuals & Literature</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/my-appliances/" data-ga-label="@clicked-text">My Appliances</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/register-products/" data-ga-label="@clicked-text">Register Products</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/replacement-parts/" data-ga-label="@clicked-text">Replacement Parts</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/customer-service/schedule-service/" data-ga-label="@clicked-text">Schedule Service</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/2_2_91/global_certified-care.content.html" data-ga-label="@clicked-text">Certified Care</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/contact-us/" data-ga-label="@clicked-text">Contact Us</a></li>
            </ul>
            <ul data-ga-action="Clicked Footer Culinary Inspiration Nav">
                <li><a href="http://www.kitchenaid.ca/en_CA/culinary-inspiration/" data-ga-label="@clicked-text">Culinary Inspiration</a></li>
                <li><a href="http://blog.kitchenaid.ca/" data-ga-label="@clicked-text">Blog: United We Create</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/culinary-inspiration/kitchen-gallery/" data-ga-label="@clicked-text">Kitchen Gallery</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/culinary-inspiration/partners-and-events/" data-ga-label="@clicked-text">Partners and Events</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/2_2_762/global_stand-mixer-buying-guide.content.html" data-ga-label="@clicked-text">Find Your Stand Mixer</a></li>
            </ul>
            <ul data-ga-action="Clicked Footer Additional Resources Nav">
                <li>Additional Resources</li>
                <li><a href="http://www.kitchenaid.ca/en_CA/2_2_101/about-kitchenaid/" data-ga-label="@clicked-text">About Kitchenaid</a></li>
                <li><a href="http://www.whirlpoolcareers.com/" data-ga-label="@clicked-text">Careers</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/press-room/" data-ga-label="@clicked-text">Press Room</a></li>
                <li><a href="http://www.whirlpoolcorp.com/privacy/canada.aspx" data-ga-label="@clicked-text">Privacy Policy</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/site-map/" data-ga-label="@clicked-text">Site Map</a></li>
                <li><a href="http://www.kitchenaid.ca/en_CA/terms-of-use/" data-ga-label="@clicked-text">Terms of Use</a></li>
                <li class="split"><span>Canada</span>|<span><a href="http://international.kitchenaid.com/" data-ga-label="Canada | Change">Change</a></span></li>
            </ul>
        </div>
    </div>
    `
})
export class Footer {
}