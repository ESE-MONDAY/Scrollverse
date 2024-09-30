import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="h-auto my-16 px-8 sm:px-16 py-4 sm:py-8 flex flex-col items-center justify-center gap-4">
      <motion.h1
        className="sm:text-2xl lg:text-5xl font-bold"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Discover. Support. Engage.
      </motion.h1>
      <motion.p
        className="sm:text-base lg:text-2xl text-center text-scroll-black max-w-[900px]"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Join our revolutionary platform where creators can showcase their projects, gather community feedback, and raise funds through donations.
      </motion.p>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link href="/ecosystem" className="bg-scroll-orange text-white px-4 py-2 text-xs sm:text-sm hover:shadow-md hover:shadow-scroll-foreground rounded-md">
          Explore Ecosystem
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
