import React from "react";
import amazonfooterlogo from "./Images/amazonfooterlogo.png";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will animate the scroll
    });
  };

  return (
    <div className="main-Footer">
      <div className="Footer-1">
        <span className="backtotop" onClick={handleBackToTop}>
          Back to top
        </span>
      </div>
      <div className="Footer-2">
        <div classname="subfooter2-1">
          <span className="footer-option">Get to Know Us</span>
          <ul>
            <li>
              <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">
                About Us
              </a>
            </li>
            <li>
              <a href="https://amazon.jobs/">Careers</a>
            </li>
            <li>
              <a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">
                Press Releases
              </a>
            </li>
            <li>
              <a href="https://www.amazon.science/">Amazon Science</a>
            </li>
          </ul>
        </div>

        <div classname="subfooter2-2">
          <span className="footer-option"> Connect with Us</span>
          <ul>
            <li>
              <a href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div classname="subfooter2-3">
          <span className="footer-option">Make Money with us </span>
          <ul>
            <li>
              <a href="https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C">
                Sell on Amazon
              </a>
            </li>
            <li>
              <a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT">
                Sell under Amazon Accelerator
              </a>
            </li>
            <li>
              <a href="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT">
                Protect and Build Your Brand
              </a>
            </li>
            <li>
              <a href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1">
                Amazon Global Selling
              </a>
            </li>
            <li>
              <a href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter">
                Fulfilment by Amazon
              </a>
            </li>
            <li>
              <a href="https://advertising.amazon.in/?ref=Amz.in">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a href="https://www.amazonpay.in/merchant">
                Amazon Pay on Merchants
              </a>
            </li>
          </ul>
        </div>

        <div classname="subfooter2-4">
          <span className="footer-option">Let Us Help You</span>
          <ul>
            <li>
              <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
                COVID-19 and Amazon
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">
                Your Account
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/css/returns/homepage.html?ref_=footer_hy_f_4">
                Returns Centre
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc">
                100% Purchase Protection
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp">
                Amazon App Download
              </a>
            </li>
            <li>
              <a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-three">
        <div className="three-one">
          <img src={amazonfooterlogo} alt="amazon.in" />
          <button>
            <LanguageIcon sx={{ fontSize: 15 }} className="lang-icon" />
            English
          </button>
        </div>
        <div className="three-two">
          <div className="three-three">
            <ul>
              <li>
                <a href="https://www.amazon.com.au/ref=footer_au">Australia</a>
              </li>
              <li>
                <a href="https://www.amazon.com.br/ref=footer_br">Brazil</a>
              </li>
              <li>
                <a href="https://www.amazon.ca/ref=footer_ca">Canada</a>
              </li>
              <li>
                <a href="https://www.amazon.cn/ref=footer_cn">China</a>
              </li>
              <li>
                <a href="https://www.amazon.fr/ref=footer_fr">France</a>
              </li>
              <li>
                <a href="https://www.amazon.de/ref=footer_de">Germany</a>
              </li>
              <li>
                <a href="https://www.amazon.it/ref=footer_it">Italy</a>
              </li>
              <li>
                <a href="https://www.amazon.co.jp/ref=footer_jp">Japan</a>
              </li>
              <li>
                <a href="https://www.amazon.com.mx/ref=footer_mx">Mexico</a>
              </li>
              <li>
                <a href="https://www.amazon.nl/ref=footer_nl">Netherlands</a>
              </li>
              <li>
                <a href="https://www.amazon.pl/ref=footer_pl">Poland</a>
              </li>
              <li>
                <a href="https://www.amazon.sg/ref=footer_sg">Singapore</a>
              </li>
              <li>
                <a href="https://www.amazon.es/ref=footer_es">Spain</a>
              </li>
              <li>
                <a href="https://www.amazon.tr/ref=footer_tr">Turkey</a>
              </li>
              <li>
                <a href="https://www.amazon.ae/ref=footer_ae">
                  United Arab Emirates
                </a>
              </li>
            </ul>
          </div>
          <div className="three-four">
            <ul>
              <li>
                <a href="https://www.amazon.co.uk/ref=footer_uk">
                  United Kingdom
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/ref=footer_us">United States</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-four">
        <div className="four-one">
          <div className="four-one-option">
            <a href="https://www.abebooks.com/">
              <span className="Books">AbeBooks</span>
              <span className="art">Books, art</span>
              <span className="art">& collectibles</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter">
              <span className="Books">Amazon Web Services</span>
              <span className="art">Scalable Cloud</span>
              <span className="art">Computing Services</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.audible.in/">
              <span className="Books">Audible</span>
              <span className="art">Download</span>
              <span className="art">Audio Books</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.imdb.com/">
              <span className="Books">IMDB</span>
              <span className="art">Movies, TV</span>
              <span className="art">& Celebrities</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.shopbop.com/">
              <span className="Books">Shopbop</span>
              <span className="art">Designer</span>
              <span className="art">Fashion Brands</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.amazon.in/business?ref=footer_aingw">
              <span className="Books">Amazon Business</span>
              <span className="art">Everthing For</span>
              <span className="art">Your Bussiness</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.amazon.in/now?ref=footer_amznow">
              <span className="Books">Prime Now</span>
              <span className="art">2-Hour Deleviry</span>
              <span className="art">on Everyday Items</span>
            </a>
          </div>
          <div className="four-one-option">
            <a href="https://www.amazon.in/music/prime?ref=footer_apm">
              <span className="Books">Amazon Prime Music</span>
              <span className="art">100 million songs, ad-free</span>
              <span className="art">Over 15 million podcast episodes</span>
            </a>
          </div>
        </div>
        <div className="four-two">
          <ul>
            <li>
              <a href="#">Conditions of Use & Sale</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Interest-Based Ads</a>
            </li>
          </ul>
        </div>
        <div className="four-two">
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
