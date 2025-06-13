"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import ImageViewer from "@/components/ImageViewer";

const products = [
  {
    id: 37,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/assets/37.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },

  {
    id: 2,
    title: "დეკორატიული საყვავილე",
    image: "/assets/2.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
  {
    id: 3,
    title: "დეკორატიული საყვავილე",
    image: "/assets/3.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
  {
    id: 4,
    title: "დეკორატიული საყვავილე",
    image: "/assets/4.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
  {
    id: 5,
    title: "სადგამი",
    image: "/assets/5.jpg",
    description: "მეტალის სილუეტისგან შექმნილი  სადგამი",
  },
  {
    id: 6,
    title: " სადგამი",
    image: "/assets/6.jpg",
    description: "მეტალის სილუეტისგან შექმნილი  სადგამი",
  },
  {
    id: 7,
    title: "ღვინის ბოთლის სადგამი",
    image: "/assets/7.jpg",
    description: "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლის სადგამი",
  },
  {
    id: 8,
    title: "ღვინის ბოთლის სადგამი",
    image: "/assets/8.jpg",
    description: "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლის სადგამი",
  },
  {
    id: 9,
    title: "მრგვალი საყვავილე",
    image: "/assets/9.jpg",
    description: "მრგვალი ფორმის მეტალის საყვავილე",
  },
  {
    id: 10,
    title: "მრგვალი საყვავილე",
    image: "/assets/10.jpg",
    description: "მრგვალი ფორმის მეტალის საყვავილე",
  },
  {
    id: 11,
    title: "ღვინის ბოთლების სტენდი",
    image: "/assets/11.jpg",
    description: "რამდენიმე ბოთლის განსათავსებელი მეტალის სტენდი",
  },

  {
    id: 12,
    title: "ღვინის ბოთლების სტენდი",
    image: "/assets/12.jpg",
    description: "რამდენიმე ბოთლის განსათავსებელი მეტალის სტენდი",
  },
  {
    id: 13,
    title: "ღვინის ბოთლების სტენდი",
    image: "/assets/13.jpg",
    description: "რამდენიმე ბოთლის განსათავსებელი მეტალის სტენდი",
  },
  {
    id: 14,
    title: "ღვინის ბოთლების სტენდი",
    image: "/assets/14.jpg",
    description: "რამდენიმე ბოთლის განსათავსებელი მეტალის სტენდი",
  },
  {
    id: 15,
    title: "საკიდი",
    image: "/assets/15.jpg",
    description: "პატარა ზომის მეტალის საკიდი",
  },
  {
    id: 16,
    title: "დეკორატიული ჩაიდანი",
    image: "/assets/16.jpg",
    description: "მეტალის სილუეტებისგან შექმნილი დეკორატიული ჩაიდანი",
  },
  {
    id: 17,
    title: "აბსტრაქტული კედლის დეკორი საკიდი",
    image: "/assets/17.jpg",
    description: "აბსტრაქტული დიზაინის მეტალის კედლის დეკორატიული საკიდი",
  },
  {
    id: 18,
    title: "საყვავილე ქოთანი",
    image: "/assets/18.jpg",
    description: "მეტალისგან დამზადებული ელეგანტური საყვავილე ქოთანი",
  },
  {
    id: 19,
    title: "შამპანურის ბოთლის სადგამი",
    image: "/assets/19.jpg",
    description: "მეტალის სილუეტისგან შექმნილი შამპანურის ბოთლის სადგამი ",
  },
  {
    id: 20,
    title: "ღვინის ბოთლების მეტალის სადგამი",
    image: "/assets/20.jpg",
    description: "მეტალის სილუეტის ფორმის ღვინის ბოთლების სადგამი",
  },
  {
    id: 21,
    title: "დეკორატიული საკიდი",
    image: "/assets/21.jpg",
    description: "თანამედროვე დიზაინის მეტალის დეკორატიული საკიდი",
  },
  {
    id: 22,
    title: "ულამაზესი სადგამი მცენარეებისთვის",
    image: "/assets/22.jpg",
    description:
      "მეტალის სილუეტისგან დამზადებული ულამაზესი სადგამი მცენარეებისთვის",
  },
  {
    id: 23,
    title: "დეკორატიული ფიგურა",
    image: "/assets/23.jpg",
    description:
      "მეტალის დეკორატიული ფიგურა, რომელიც შეიძლება გამოიყენოთ როგორც ინტერიერის ელემენტი",
  },
  {
    id: 24,
    title: "სუვენირების სტენდი",
    image: "/assets/24.jpg",
    description: "მეტალის სილუეტისგან შექმნილი სუვენირების სტენდი",
  },
  {
    id: 25,
    title: "საყვავილე ვაზა",
    image: "/assets/25.jpg",
    description: "გეომეტრიული ფორმის მეტალის საყვავილე ვაზა",
  },
  {
    id: 26,
    title: "აბსტრაქტული ფიგურა",
    image: "/assets/26.jpg",
    description: "მეტალის სილუეტისგან შექმნილი აბსტრაქტული ფიგურა",
  },
  {
    id: 27,
    title: "კოქტეილის სადგამი",
    image: "/assets/27.jpg",
    description: "მეტალის სილუეტისგან დამზადებული კოქტეილის სადგამი",
  },
  {
    id: 28,
    title: "მეტალის დეკორატიული ცხელი ყავასადგამი",
    image: "/assets/28.jpg",
    description:
      "მეტალის სილუეტისგან დამზადებული დეკორატიული ცხელი ყავასადგამი",
  },
  {
    id: 29,
    title: "დეკორატიული ღვინის სადგამი ჭიქით",
    image: "/assets/29.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი დეკორატიული ღვინის სადგამი ჭიქით",
  },
  {
    id: 30,
    title: "ინდუსტრიული სტილის საყვავილე",
    image: "/assets/30.jpg",
    description: "ინდუსტრიული სტილის მეტალის საყვავილე",
  },

  {
    id: 32,
    title: "ნივთების ორგანაიზერი",
    image: "/assets/32.jpg",
    description:
      "მეტალის სილუეტისგან დამზადებული სხვადასხვა ნივთების ორგანაიზერი",
  },
  {
    id: 33,
    title: "ქოთანი ჭიქით",
    image: "/assets/33.jpg",
    description: "ორიგინალური მეტალის ქოთანი ჭიქით",
  },
  {
    id: 34,
    title: "ქოთანი ჭიქით ყვავილებისთვის",
    image: "/assets/34.jpg",
    description: "ორიგინალური მეტალის ქოთანი ჭიქით ყვავილებისთვის",
  },
  {
    id: 35,
    title: "მეტალის ჩაიდანის დეკორატიული ელემენტი",
    image: "/assets/35.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი დეკორატიული ელემენტი ჩაიდანისთვის",
  },
  {
    id: 36,
    title: "უსაყვარლესი მეტალის ხილის კალათა",
    image: "/assets/36.jpg",
    description: "მეტალის სილუეტისგან შექმნილი ულამაზესი ხილის კალათა",
  },

  {
    id: 38,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/assets/38.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 39,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/assets/39.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 40,
    title: "ღვინის ბოთლების ორიგინალური სადგამი",
    image: "/assets/40.jpg",
    description:
      "მეტალის სილუეტისგან შექმნილი ღვინის ბოთლების ორიგინალური სადგამი",
  },
  {
    id: 1,
    title: "დეკორატიული საყვავილე",
    image: "/assets/1.jpg",
    description: "მეტალის სილუეტისგან შექმნილი მოდერნული დიზაინის საყვავილე",
  },
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
