import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import { Orbit } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-3 px-6 bg-dark-gray border-b border-border-light">
      <Link href="/" className="flex items-center space-x-2">
        <Orbit className="w-6 h-6 text-accent" />
        <span className="text-accent font-bold text-xl">Orbit</span>
      </Link>
      <ConnectButton />
    </header>
  );
};

export default Navbar;
