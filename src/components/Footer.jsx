import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="h-12 flex text-xl bg-blue-800 text-white items-center justify-center gap-10">
      <h1 className="font-bold">Contact Us</h1>
      <a href="tel:+911234567890" className="flex items-center gap-2 hover:underline">
        <AiOutlinePhone /> 1234567890
      </a>
      <a href="mailto:nago@ngo.com" className="flex items-center gap-2 hover:underline">
        <AiOutlineMail /> ngo@ngo.com
      </a>
    </div>
  );
}

export default Footer;
