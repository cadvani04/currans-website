import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Curran Advani. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:advanicurran@gmail.com" className="text-gray-600 hover:text-black">Email</a>
            <a href="tel:+12084243349" className="text-gray-600 hover:text-black">Call</a>
            <a href="https://linkedin.com/in/curran-advani-9663011b6/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}