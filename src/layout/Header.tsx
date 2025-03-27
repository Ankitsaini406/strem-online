"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

export default function Header() {
    const [headerOpen, setHeaderOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Movies" },
        { name: "Animes" },
        { name: "TV Series" },
        { name: "Others" },
    ];

    return (
        <>
            <motion.div
                className="fixed w-full top-0 z-50 flex flex-col items-center"
                initial={false}
                animate={{ y: headerOpen ? 0 : -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <AnimatePresence>
                    {headerOpen && (
                        <motion.header
                            className="w-full z-50 bg-gradient-to-b from-background/90 to-background/70 backdrop-blur-lg shadow-lg relative border-b border-primary"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="flex items-center justify-between px-6 py-4">
                                {/* Logo */}
                                <Link href="/">
                                    <motion.h1
                                        className="text-3xl font-extrabold text-primary tracking-wide cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Stream<span className="text-secondary">Online</span>
                                    </motion.h1>
                                </Link>

                                {/* Desktop Navigation */}
                                <nav className="hidden md:flex gap-8 text-foreground font-medium">
                                    {menuItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={`/${item.name.toLowerCase().replace(" ", "-")}`}
                                            className="hover:text-secondary transition-all duration-300 ease-in-out"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>

                                {/* Actions (Login + Mobile Menu Toggle) */}
                                <div className="flex items-center gap-4">
                                    <Button className="hidden md:block bg-primary hover:bg-accent text-background px-6 py-2 transition-all shadow-md rounded-lg">
                                        Login
                                    </Button>
                                    <button
                                        className="md:hidden text-foreground p-2 focus:outline-none"
                                        onClick={() => setMenuOpen(!menuOpen)}
                                    >
                                        {menuOpen ? <X size={28} className="text-secondary" /> : <MenuIcon size={28} />}
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Navigation Menu */}
                            <AnimatePresence>
                                {menuOpen && (
                                    <motion.nav
                                        className="md:hidden bg-background/90 backdrop-blur-md text-foreground text-center flex flex-col gap-4 py-6 shadow-lg rounded-lg border border-border"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {menuItems.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={`/${item.name.toLowerCase().replace(" ", "-")}`}
                                                className="hover:text-primary transition-all text-lg"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Button className="bg-primary hover:bg-accent text-background px-6 py-2 transition-all w-fit mx-auto shadow-md rounded-lg">
                                            Login
                                        </Button>
                                    </motion.nav>
                                )}
                            </AnimatePresence>
                        </motion.header>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Toggle Button for Header */}
            <motion.div
                className="hidden md:block fixed top-0 left-1/2 transform -translate-x-1/2 z-50"
                initial={{ y: -50 }}
                animate={{ y: headerOpen ? 68 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <Button
                    className="bg-primary hover:bg-accent text-background px-6 py-2 transition-all shadow-md rounded-t-none rounded-b-lg hover:text-foreground"
                    onClick={() => setHeaderOpen(!headerOpen)}
                >
                    <MenuIcon className="hover:text-foreground" size={20} />
                </Button>
            </motion.div>
        </>
    );
}