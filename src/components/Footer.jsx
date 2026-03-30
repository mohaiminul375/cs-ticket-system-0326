import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black p-10">
        <div className="footer sm:footer-horizontal text-white  grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 p-0">
          <aside className="md:col-span-4 xl:col-span-4">
            <h2 href="/" className="text-2xl font-bold">
              CS-Ticket System
            </h2>
            <p className="text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav className="xl:col-span-2">
            <h6 className="font-bold text-base text-white">Company</h6>
            <a className="link link-hover text-[#A1A1AA]">About Us</a>
            <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
            <a className="link link-hover text-[#A1A1AA]">Contact us</a>
          </nav>
          <nav className="xl:col-span-2">
            <h6 className="font-bold text-base text-white">Service</h6>
            <a className="link link-hover text-[#A1A1AA]">
              Products & Services
            </a>
            <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
            <a className="link link-hover text-[#A1A1AA]">Download Stories</a>
          </nav>
          <nav className="xl:col-span-2">
            <h6 className="font-bold text-base text-white">Information</h6>
            <a className="link link-hover text-[#A1A1AA]">Privacy policy</a>
            <a className="link link-hover text-[#A1A1AA]">Terms & Condition</a>
            <a className="link link-hover text-[#A1A1AA]">Join Us</a>
          </nav>
          <nav className="space-y-2 xl:col-span-2">
            <h6 className="font-bold text-base text-white">Social Links</h6>
            <p className="link link-hover text-[#A1A1AA] flex items-center gap-3">
              <img className="" src={twitter} alt="" /> @CS — Ticket System
            </p>
            <a className="link link-hover text-[#A1A1AA] flex items-center gap-3">
              <img src={linkedin} alt="" />
              @CS — Ticket System
            </a>
            <a className="link link-hover text-[#A1A1AA] flex items-center gap-3">
              <img src={fb} alt="" />
              @CS — Ticket System
            </a>
            <a className="link link-hover text-[#A1A1AA] flex items-center gap-3">
              <img src={mail} alt="" />
              support@cst.com
            </a>
          </nav>
        </div>
        <hr className="my-5 text-2xl text-white" />
        <div className="text-center text-white">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </div>
      </footer>
    </>
  );
};

export default Footer;
