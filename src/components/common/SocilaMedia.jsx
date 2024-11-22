import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';

export default function SocilaMedia() {
  return (
    <div className="flex gap-x-4 ">
      <p className="mb-4 text-3xl">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <CiFacebook />
        </a>
      </p>
      <p className="mb-4 text-3xl">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <CiInstagram />
        </a>
      </p>
      <p className="mb-4 text-3xl">
        <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </p>
      <p className="text-3xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <CiTwitter />
        </a>
      </p>
    </div>
  );
}
