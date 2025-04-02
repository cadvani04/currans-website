import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Image 
        src={src} 
        alt={alt}
        fill
        className="object-cover"
      />
    </motion.div>
  );
}