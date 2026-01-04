import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#5044e50d] py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between mt-auto">
      <div>
        <img className="max-w-12" alt="Logo" src={logo} />
        <div className="max-w-[410px] mt-6 text-card-foreground text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
          quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full md:w-auto mt-10 md:mt-0">
        <div className="flex justify-between w-full min-w-full md:min-w-[450px] gap-5 flex-col md:flex-row">
          <div>
            <h3 className="font-semibold text-base mb-2">Quick Links</h3>
            <ul>
              {[
                "Home",
                "Best Sellers",
                "Offers & Deals",
                "Contact Us",
                "FAQs",
              ].map((item) => (
                <li key={item}>
                  <a
                    className="text-foreground text-xs hover:text-primary"
                    href="/"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">Need Help?</h3>
            <ul>
              {[
                "Delivery Information",
                "Return & Refund Policy",
                "Payment Methods",
                "Track your Order",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    className="text-foreground text-xs hover:text-primary"
                    href="/"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">Follow Us</h3>
            <ul>
              {["Instagram", "Twitter", "Facebook", "YouTube"].map((item) => (
                <li key={item}>
                  <a
                    className="text-foreground text-xs hover:text-primary"
                    href="/"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
