"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import ImageViewer from "@/components/ImageViewer";

const products = [
  {
    id: 1,
    title: "მინიმალისტური საყვავილე",
    image: "/assets/1.jpg",
    description: "თანამედროვე მინიმალისტური დიზაინის კერამიკული საყვავილე",
  },
  {
    id: 2,
    title: "კერამიკული დეკორი",
    image: "/assets/2.jpg",
    description: "ხელნაკეთი კერამიკული დეკორატიული ნივთი",
  },
  {
    id: 3,
    title: "ხის საყვავილე",
    image: "/assets/3.jpg",
    description: "ბუნებრივი ხის მასალისგან დამზადებული საყვავილე",
  },
  {
    id: 4,
    title: "დეკორატიული ლარნაკი",
    image: "/assets/4.jpg",
    description: "გეომეტრიული ფორმის თანამედროვე დეკორატიული ლარნაკი",
  },
  {
    id: 5,
    title: "კედლის დეკორი",
    image: "/assets/5.jpg",
    description: "მინიმალისტური სტილის კედლის დეკორატიული ელემენტი",
  },
  {
    id: 6,
    title: "სანთლის დამჭერი",
    image: "/assets/6.jpg",
    description: "ელეგანტური დიზაინის სანთლის დამჭერი",
  },
  {
    id: 7,
    title: "თანამედროვე საყვავილე",
    image: "/assets/7.jpg",
    description: "თანამედროვე გეომეტრიული ფორმების საყვავილე",
  },
  {
    id: 8,
    title: "ინტერიერის აქსესუარი",
    image: "/assets/8.jpg",
    description: "უნიკალური დიზაინის ინტერიერის აქსესუარი",
  },
  {
    id: 9,
    title: "მინის საყვავილე",
    image: "/assets/9.jpg",
    description: "გამჭვირვალე მინის მოდერნისტული საყვავილე",
  },
  {
    id: 10,
    title: "კერამიკული ვაზა",
    image: "/assets/10.jpg",
    description: "ხელნაკეთი კერამიკული ვაზა ყვავილებისთვის",
  },
  {
    id: 11,
    title: "სანათი",
    image: "/assets/11.jpg",
    description: "თანამედროვე სტილის დეკორატიული სანათი",
  },
  {
    id: 12,
    title: "კედლის საყვავილე",
    image: "/assets/12.jpg",
    description: "კედელზე დასამონტაჟებელი ელეგანტური საყვავილე",
  },
  {
    id: 13,
    title: "გეომეტრიული დეკორი",
    image: "/assets/13.jpg",
    description: "თანამედროვე სტილის გეომეტრიული დეკორატიული ნივთი",
  },
  {
    id: 14,
    title: "ხის დეკორი",
    image: "/assets/14.jpg",
    description: "ბუნებრივი ხის მასალისგან დამზადებული დეკორატიული ნივთი",
  },
  {
    id: 15,
    title: "მცირე ზომის საყვავილე",
    image: "/assets/15.jpg",
    description: "მინიმალისტური დიზაინის მცირე ზომის საყვავილე",
  },
  {
    id: 16,
    title: "ინტერიერის კომპლექტი",
    image: "/assets/16.jpg",
    description: "თანამედროვე სტილის ინტერიერის დეკორის კომპლექტი",
  },
  {
    id: 17,
    title: "კედლის პანელი",
    image: "/assets/17.jpg",
    description: "დეკორატიული კედლის პანელი აბსტრაქტული დიზაინით",
  },
  {
    id: 18,
    title: "მაგიდის აქსესუარი",
    image: "/assets/18.jpg",
    description: "ელეგანტური დიზაინის მაგიდის დეკორატიული აქსესუარი",
  },
  {
    id: 19,
    title: "მეტალის საყვავილე",
    image: "/assets/19.jpg",
    description: "თანამედროვე მეტალის საყვავილე მინიმალისტური დიზაინით",
  },
  {
    id: 20,
    title: "ხის ყუთი",
    image: "/assets/20.jpg",
    description: "ხელნაკეთი ხის დეკორატიული ყუთი",
  },
  {
    id: 21,
    title: "კერამიკული თეფში",
    image: "/assets/21.jpg",
    description: "ხელნაკეთი კერამიკული დეკორატიული თეფში",
  },
  {
    id: 22,
    title: "სტილიზებული ვაზა",
    image: "/assets/22.jpg",
    description: "არტ-დეკორის სტილის კერამიკული ვაზა",
  },
  {
    id: 23,
    title: "გეომეტრიული საყვავილე",
    image: "/assets/23.jpg",
    description: "გეომეტრიული ფორმის თანამედროვე საყვავილე",
  },
  {
    id: 24,
    title: "მინიატურული ქოთანი",
    image: "/assets/24.jpg",
    description: "მინიატურული ზომის დეკორატიული ქოთანი მცენარეებისთვის",
  },
  {
    id: 25,
    title: "შავი კერამიკული ვაზა",
    image: "/assets/25.jpg",
    description: "მატი ზედაპირის შავი კერამიკული ვაზა",
  },
  {
    id: 26,
    title: "დეკორატიული ფიგურა",
    image: "/assets/26.jpg",
    description: "აბსტრაქტული ფორმის დეკორატიული ფიგურა",
  },
  {
    id: 27,
    title: "მრგვალი საყვავილე",
    image: "/assets/27.jpg",
    description: "სფერული ფორმის თანამედროვე კერამიკული საყვავილე",
  },
  {
    id: 28,
    title: "ტექსტურირებული ვაზა",
    image: "/assets/28.jpg",
    description: "ხელნაკეთი ტექსტურირებული ზედაპირის მქონე ვაზა",
  },
  {
    id: 29,
    title: "დეკორატიული ჯამი",
    image: "/assets/29.jpg",
    description: "მრავალფუნქციური დეკორატიული კერამიკული ჯამი",
  },
  {
    id: 30,
    title: "ინდუსტრიული საყვავილე",
    image: "/assets/30.jpg",
    description: "ინდუსტრიული სტილის მეტალის საყვავილე",
  },
  {
    id: 31,
    title: "კერამიკული სკულპტურა",
    image: "/assets/31.jpg",
    description: "აბსტრაქტული კერამიკული სკულპტურა ინტერიერისთვის",
  },
  {
    id: 32,
    title: "ხის დეკორატიული თეფში",
    image: "/assets/32.jpg",
    description: "ხელნაკეთი ხის დეკორატიული თეფში",
  },
  {
    id: 33,
    title: "მაღალი საყვავილე",
    image: "/assets/33.jpg",
    description: "მაღალი ფორმის ელეგანტური საყვავილე",
  },
  {
    id: 34,
    title: "ხის სანთლის დამჭერი",
    image: "/assets/34.jpg",
    description: "ბუნებრივი ხის სანთლის დამჭერი",
  },
  {
    id: 35,
    title: "მოზაიკური დეკორი",
    image: "/assets/35.jpg",
    description: "მოზაიკური დიზაინის დეკორატიული ნივთი",
  },
  {
    id: 36,
    title: "მინიმალისტური ვაზა",
    image: "/assets/36.jpg",
    description: "სუფთა ხაზების მქონე მინიმალისტური დიზაინის ვაზა",
  },
  {
    id: 37,
    title: "დეკორატიული ლამპა",
    image: "/assets/37.jpg",
    description: "მოდერნისტული სტილის დეკორატიული ლამპა",
  },
  {
    id: 38,
    title: "ტრადიციული საყვავილე",
    image: "/assets/38.jpg",
    description: "ტრადიციული მოტივებით შექმნილი საყვავილე",
  },
  {
    id: 39,
    title: "აბსტრაქტული დეკორი",
    image: "/assets/39.jpg",
    description: "აბსტრაქტული ფორმის დეკორატიული ელემენტი",
  },
  {
    id: 40,
    title: "სამაგიდო დეკორი",
    image: "/assets/40.jpg",
    description: "ელეგანტური დიზაინის სამაგიდო დეკორატიული ნივთი",
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
          <h1>პორტფოლიო</h1>
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
