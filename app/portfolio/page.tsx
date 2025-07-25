"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import ImageViewer from "@/components/ImageViewer";

const products = [
  {
    id: 1,
    title: "დეკორატიული საყვავილე",
    image: "/images/1.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
  {
    id: 3,
    title: "დეკორატიული საყვავილე",
    image: "/images/3.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
  {
    id: 4,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/images/4.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 5,
    title: "ორიგინალური აბსტრაქტული დეკორი",
    image: "/images/5.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის დეკორი",
  },

  {
    id: 6,
    title: " სადგამი",
    image: "/images/6.jpg",
    description: "მეტალის სილუეტისგან შექმნილი  სადგამი",
  },
  {
    id: 7,
    title: "საკიდი ნოტების დეკორით",
    image: "/images/7.jpg",
    description: "მეტალის სილუეტისგან შექმნილი  ორიგინალური ნოტების საკიდი",
  },
  {
    id: 8,
    title: "დეკორატიული საყვავილე",
    image: "/images/8.jpg",
    description: "მეტალის სილუეტისგან შექმნილი დეკორატიული საყვავილე",
  },
  {
    id: 9,
    title: "ორიგინალური, თანამედროვე დეკორაცია ",
    image: "/images/9.jpg",
    description: "მეტალის სილუეტისგან შექმნილი დეკორატიული ელემენტი",
  },
  {
    id: 10,
    title: "საკიდი ქალის აბსტრაქტული ფიგურით",
    image: "/images/10.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ქალის აბსტრაქტული ფიგურის საკიდი",
  },
  {
    id: 11,
    title: "ყავის ჭიქების საკიდი",
    image: "/images/11.jpg",
    description: " მეტალის ყავის ჭიქების საკიდი, ყავის ჭიქის გამოსახულებით",
  },
  {
    id: 12,
    title: "ყავის ჭიქების საკიდი",
    image: "/images/12.jpg",
    description: " მეტალის ყავის ჭიქების საკიდი, სხვა და სხვა გამოსახულებით",
  },

  {
    id: 13,
    title: "აბსტრაქტული დეკორატიული ფიგურები",
    image: "/images/13.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი აბსტრაქტული დეკორატიული ფიგურები",
  },
  {
    id: 14,
    title: "დეკორატიული ფიგურები გოგონას გამოსახულებით",
    image: "/images/14.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი გოგონას გამოსახულების დეკორატიული ფიგურები",
  },
  {
    id: 15,
    title: "დეკორატიული ფიგურები",
    image: "/images/15.jpg",
    description: "მეტალის სილუეტისგან შექმნილი დეკორატიული ფიგურები",
  },

  {
    id: 16,
    title: "სადგამი ყვავილისთვის",
    image: "/images/16.jpg",
    description: "მეტალის სილუეტებისგან შექმნილი სადგამი ყვავილისთვის",
  },
  {
    id: 17,
    title: "აბსტრაქტული კედლის დეკორი თევზების გამოსახულებით",
    image: "/images/17.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი აბსტრაქტული კედლის დეკორი თევზების გამოსახულებით",
  },
  {
    id: 18,
    title: "საყვავილე ქოთანი",
    image: "/images/18.jpg",
    description: "მეტალისგან დამზადებული ელეგანტური საყვავილე ქოთანი",
  },
  {
    id: 19,
    title: "სადგამი სანთლებისთვის",
    image: "/images/19.jpg",
    description: "მეტალის სილუეტისგან შექმნილი სადგამი  სანთლებისთვის",
  },
  {
    id: 20,
    title: "ქოთანი",
    image: "/images/20.jpg",
    description: "მეტალის სილუეტის ფორმის ქოთანი",
  },

  {
    id: 21,
    title: "ულამაზესი სადგამი მცენარეებისთვის",
    image: "/images/21.jpg",
    description:
      "მეტალის სილუეტისგან დამზადებული ულამაზესი სადგამი მცენარეებისთვის",
  },
  {
    id: 22,
    title: "საყვავილე ლარნაკი",
    image: "/images/22.jpg",
    description: "გეომეტრიული ფორმის მეტალის საყვავილე ლარნაკი",
  },
  {
    id: 23,
    title: "სასანთლეების დეკორატიული ფიგურა",
    image: "/images/23.jpg",
    description:
      "მეტალის დეკორატიული ფიგურა, რომელიც შეიძლება გამოიყენოთ როგორც ინტერიერის ელემენტი, ან სასანთლე",
  },
  {
    id: 24,
    title: "საყვავილე",
    image: "/images/24.jpg",
    description: "მეტალის სილუეტისგან შექმნილი საყვავილე",
  },
  {
    id: 25,
    title: "საყვავილე დოქი და ჭიქა",
    image: "/images/25.jpg",
    description: "გეომეტრიული ფორმის მეტალის საყვავილე დოქი და ჭიქა",
  },
  {
    id: 26,
    title: "ყვავილების ქოთანი",
    image: "/images/26.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ყვავილების ქოთანი სხვა და სხვა დიზაინით",
  },
  {
    id: 27,
    title: "ჩაიდნის ფორმის საყვავილე",
    image: "/images/27.jpg",
    description: "მეტალის სილუეტისგან დამზადებული ჩაიდნის ფორმის საყვავილე",
  },

  {
    id: 28,
    title: "დეკორატიული ღვინის სადგამი ჭიქით",
    image: "/images/28.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი დეკორატიული ღვინის სადგამი ჭიქით",
  },
  {
    id: 29,
    title: "ნივთების ორგანაიზერი",
    image: "/images/29.jpg",
    description:
      "მეტალის სილუეტისგან დამზადებული სხვადასხვა ნივთების ორგანაიზერი",
  },

  {
    id: 30,
    title: "ინდუსტრიული სტილის საყვავილე",
    image: "/images/30.jpg",
    description: "ინდუსტრიული სტილის მეტალის საყვავილე",
  },
  {
    id: 31,
    title: "ქოთნის სტილის საყვავილე",
    image: "/images/31.jpg",
    description: "ქოთნის სტილის მეტალის საყვავილე",
  },
  {
    id: 32,
    title: "უსაყვარლესი მეტალის ხილის კალათა",
    image: "/images/32.jpg",
    description: "მეტალის სილუეტისგან შექმნილი ულამაზესი ხილის კალათა",
  },
  {
    id: 33,
    title: "მეტალის ჩაიდანის დეკორატიული ელემენტი",
    image: "/images/33.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი დეკორატიული ელემენტი ჩაიდანისთვის",
  },

  {
    id: 34,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/images/34.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 35,
    title: "ორიგინალური სადგამი",
    image: "/images/35.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი დეკორატიული, ორიგინალური სადგამი",
  },
  {
    id: 36,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/images/36.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 37,
    title: "დეკორი",
    image: "/images/37.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი აბსტრაქტული დეკორატიული ელემენტი",
  },
  {
    id: 38,
    title: "ქოთანი  ყვავილებისთვის",
    image: "/images/38.jpg",
    description: "ორიგინალური მეტალის ქოთანი  ყვავილებისთვის",
  },

  // {
  //   id: 1,
  //   title: "დეკორატიული საყვავილე",
  //   image: "/assets/1.jpg",
  //   description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  // },
];

export default function PortfolioPage() {
  const [visibleProducts, setVisibleProducts] = useState(12); // Show 12 products initially
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Function to load more products
  const loadMore = () => {
    setLoading(true);
    // Add a small delay to simulate loading
    setTimeout(() => {
      setVisibleProducts((prev) => Math.min(prev + 12, products.length));
      setLoading(false);
    }, 500);
  };

  // Check if there are more products to load
  const hasMore = visibleProducts < products.length;

  return (
    <>
      <section className={styles.portfolioHero} style={{ paddingTop: "120px" }}>
        <div className="container">
          <h1>ჩვენი პროდუქცია</h1>
          <p>გაეცანით ჩვენს ნამუშევრებს და უნიკალურ პროდუქციას</p>
        </div>
      </section>

      <section className={styles.portfolioGallery}>
        <div className="container">
          <div className={styles.productGrid}>
            {products.slice(0, visibleProducts).map((product, index) => (
              <div
                key={product.id}
                className={styles.productCard}
                id={`product-${product.id}`}
              >
                <div
                  className={styles.productImage}
                  onClick={() =>
                    setSelectedImage({
                      src: product.image,
                      alt: product.title,
                    })
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`გადიდება: ${product.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedImage({
                        src: product.image,
                        alt: product.title,
                      });
                    }
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className={styles.image}
                    loading={index < 8 ? "eager" : "lazy"}
                    priority={index < 4}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}>
                    <span className={styles.zoomIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3H21V9"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 21H3V15"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 3L14 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 21L10 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.productDetails}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <button
                onClick={loadMore}
                disabled={loading}
                className={styles.loadMoreButton}
              >
                {loading ? "იტვირთება..." : "მეტის ნახვა"}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className={styles.customOrders}>
        <div className="container">
          <div className={styles.customContent}>
            <div className={styles.customText}>
              <h2>ინდივიდუალური შეკვეთები</h2>
              <p>
                თუ ვერ ნახეთ ის, რაც გჭირდებათ, ან გინდათ რაიმე განსაკუთრებული
                პროდუქტი, ჩვენ ვიღებთ ინდივიდუალურ შეკვეთებს. თქვენი იდეა
                შეგვიძლია რეალობად ვაქციოთ.
              </p>
              <br />
              <button className={styles.customButton}>
                დაგვიკავშირდით შეკვეთისთვის
              </button>
              <br />
            </div>
            <br />
            <div className={styles.customImage}>
              <Image
                src="/assets/78.png"
                alt="ინდივიდუალური შეკვეთები"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
