import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutHero}>
        <div className="container">
          <h1>ჩვენს შესახებ</h1>
          <p>
            გაიცანით Silhouette - თანამედროვე დიზაინის საყვავილე და
            დეკორატიული ნივთების შემქმნელი
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>ჩვენი ისტორია</h2>
              <p>
                Silhouette Georgia დაარსდა 2018 წელს მცირე სტუდიის სახით, სადაც
                იქმნებოდა ხელნაკეთი საყვავილეები. დროთა განმავლობაში, ჩვენი
                პროდუქციის ასორტიმენტი გაიზარდა და დღეს უკვე გთავაზობთ
                ინტერიერის დეკორის მრავალფეროვან კოლექციებს.
              </p>
              <p>
                ჩვენი მიზანია, შევქმნათ უნიკალური, მაღალი ხარისხის პროდუქტები,
                რომლებიც ნებისმიერ სახლს გაალამაზებს და მეტ სითბოს შესძენს.
                ყველა ნივთი იქმნება გულმოდგინედ, საუკეთესო მასალების გამოყენებით
                და დეტალებზე განსაკუთრებული ყურადღებით.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image
                src="/assets/1.jpg"
                alt="სახელოსნო"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className="section-title">ჩვენი ღირებულებები</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16V12"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3>ხარისხი</h3>
              <p>
                ვიყენებთ მხოლოდ მაღალხარისხიან მასალებს და უზრუნველვყოფთ
                თითოეული პროდუქტის სრულყოფილებას
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"></path>
                  <path d="M15 7h6v6"></path>
                </svg>
              </div>
              <h3>ინოვაცია</h3>
              <p>
                ვიკვლევთ ახალ ტენდენციებს და ვქმნით თანამედროვე დიზაინის
                პროდუქტებს
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3>ორიგინალობა</h3>
              <p>
                თითოეული ჩვენი პროდუქტი უნიკალურია და შექმნილია ინდივიდუალური
                მიდგომით
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>კლიენტზე ზრუნვა</h3>
              <p>
                ჩვენი პრიორიტეტია კლიენტების კმაყოფილება და მათთან გრძელვადიანი
                ურთიერთობა
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={styles.teamSection}>
        <div className="container">
          <h2 className="section-title">ჩვენი გუნდი</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src="/assets/4.jpg"
                  alt="გუნდის წევრი"
                  width={250}
                  height={250}
                />
              </div>
              <h3>ანა მაისურაძე</h3>
              <p>დამფუძნებელი და კრეატიული დირექტორი</p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src="/assets/5.jpg"
                  alt="გუნდის წევრი"
                  width={250}
                  height={250}
                />
              </div>
              <h3>გიორგი ნოზაძე</h3>
              <p>მთავარი დიზაინერი</p>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image
                  src="/assets/6.jpg"
                  alt="გუნდის წევრი"
                  width={250}
                  height={250}
                />
              </div>
              <h3>ნინო კაპანაძე</h3>
              <p>წარმოების მენეჯერი</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
