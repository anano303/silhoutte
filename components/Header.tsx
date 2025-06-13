"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(51, 51, 51, 0.9)"
          : "rgba(51, 51, 51, 0.7)",
      }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Silhouette Georgia"
            width={180}
            height={60}
            priority
            style={{
              filter: "brightness(1.2)",
            }}
          />
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "დახურვა" : "მენიუს გახსნა"}
        >
          <span
            className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
            style={{ backgroundColor: "#ffffff" }}
          ></span>
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                style={{ color: "#ffffff" }}
              >
                მთავარი
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                style={{ color: "#ffffff" }}
              >
                ჩვენს შესახებ
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                onClick={() => setIsOpen(false)}
                style={{ color: "#ffffff" }}
              >
                ჩვენი პროდუქცია
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                style={{ color: "#ffffff" }}
              >
                კონტაქტი
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
