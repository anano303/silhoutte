import Image from "next/image";
import styles from "./portfolio.module.css";

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
];

export default function PortfolioPage() {
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
            {products.map((product) => (
              <div
                key={product.id}
                className={styles.productCard}
                id={`product-${product.id}`}
              >
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className={styles.image}
                  />
                </div>
                <div className={styles.productDetails}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
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
    </>
  );
}
