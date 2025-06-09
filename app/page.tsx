import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const featuredProducts = [
    { id: 1, title: "მინიმალისტური საყვავილე", image: "/assets/1.jpg" },
    { id: 2, title: "კერამიკული დეკორი", image: "/assets/2.jpg" },
    { id: 3, title: "ხის საყვავილე", image: "/assets/3.jpg" },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            თანამედროვე სილუეტები <br />
            თქვენი სახლისთვის
          </h1>
          <p>ხელნაკეთი ორიგინალური საყვავილეები და ინტერიერის დეკორი</p>
          <div className={styles.heroCtas}>
            <Link href="/portfolio" className={styles.primaryButton}>
              ნახეთ პორტფოლიო
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className="section-title">რატომ გვირჩევენ</h2>

          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3>ხელნაკეთი</h3>
              <p>
                თითოეული პროდუქტი იქმნება ხელით და სიყვარულით, რაც უზრუნველყოფს
                უნიკალურ დიზაინს
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3>მაღალი ხარისხი</h3>
              <p>
                ვიყენებთ მხოლოდ მაღალხარისხიან მასალებს, რომ შევქმნათ გამძლე და
                ლამაზი პროდუქტები
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>ორიგინალური დიზაინი</h3>
              <p>
                თანამედროვე და ორიგინალური დიზაინი, რომელიც გამოარჩევს თქვენს
                სახლს
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className="container">
          <h2 className="section-title">პოპულარული პროდუქცია</h2>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <h3>{product.title}</h3>
                <Link
                  href={`/portfolio#product-${product.id}`}
                  className={styles.productLink}
                >
                  ნახე მეტი
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.productsCta}>
            <Link href="/portfolio" className={styles.secondaryButton}>
              იხილეთ სრული პორტფოლიო
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <h2 className="section-title">კლიენტების შეფასებები</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>
                "საუკეთესო საყვავილეები, რომელიც კი შემიძენია. ძალიან ლამაზია და
                ჩემი სახლის ინტერიერს სრულიად შეცვალა."
              </p>
              <p className={styles.author}>- ნინო</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>
                "შესანიშნავი ხარისხი და უნიკალური დიზაინი. აუცილებლად ვურჩევ
                ყველას, ვისაც ორიგინალური დეკორი სურს."
              </p>
              <p className={styles.author}>- გიორგი</p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.rating}>★★★★★</div>
              <p>
                "დიდი მადლობა ასეთი საოცარი პროდუქტებისთვის. სტუმრები ყოველთვის
                მეკითხებიან, სად ვიყიდე."
              </p>
              <p className={styles.author}>- თამარი</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
