import { AiOutlinePhone, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="h-12 flex text-xl bg-blue-800 text-white items-center justify-center gap-10">
      <h1 className="font-bold">Contact Us</h1>
      <a href="tel:+919068319803" className="flex items-center gap-2 hover:underline">
        <AiOutlinePhone /> +91 9068319803
      </a>
      <a href="mailto:coonectors.co.in@gmail.com" className="flex items-center gap-2 hover:underline">
        <AiOutlineMail /> coonectors.co.in@gmail.com
      </a>
      <a href="https://www.instagram.com/connectors.in?igsh=MWdjYnVsb2l3cDdjbg%3D%3D&utm_source=qr" className="flex items-center gap-2 hover:underline">
        <AiOutlineInstagram /> @connectors
      </a>
    </div>
  );
}

export default Footer;
