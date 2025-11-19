// 뉴스 데이터
export interface NewsItem {
  id: number | string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  content?: string;
  link?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: '/news/15-03-2025.png',
    category: 'Event',
    date: '15/03/2025',
    title: 'ABM Open Day – Explore Your Future Career Path!',
    description: `Come and experience what it’s really like to study at ABM Further Education! Whether you’re passionate about Fitness, Hospitality, Kitchen Management, or Business, our Open Day is your chance to explore real classes, meet trainers, tour our facilities, and find the right course for you.

`,
    link: '/',
  },
  {
    id: 2,
    image: '/news/15-03-2025_2.png',
    category: 'ABM',
    date: '15/03/2025',
    title: 'New Option: Direct Debit Instalment Plan for Tuition Fees',
    description: `We are pleased to inform you that ABM Further Education now offers a Direct Debit Instalment Plan for tuition fee payments.

Please note: Enrolment fees and material fees are not included in this arrangement.

Direct Debit Instalment Plan for Tuition Fees

• What’s Included: Tuition fees only (excludes enrolment and material fees)
• Availability: From the second term payment of your course
• How to Apply: Contact the Accounts Team before the invoice due date
• Contact for Enquiries: accounts@abm.edu.au

Instalment Plan Details

• Monthly payments:
  - Surcharge: 3% per payment
  - Payment Method: Credit Card or Bank Account (Direct)
  - Bank Surcharge: 1.99% (charged by bank) for credit card, no additional charge for bank account
  - Set-Up Fee: $20
• Fortnightly payments:
  - Surcharge: 5% per payment
  - Payment Method: Credit Card or Bank Account (Direct)
  - Bank Surcharge: 1.99% (charged by bank) for credit card, no additional charge for bank account
  - Set-Up Fee: $20

Important Conditions

• Late payment (missed scheduled debit): $200
• Bank dishonour fee (failed transaction): $9.90 (charged by the bank)

Direct Debit Payment Terms:
• A $20 set-up fee applies to establish a direct debit arrangement.
• The original Offer Letter instalment schedule will not be revised to reflect direct debit breakdowns.

Important Conditions:
• Direct debit is only available to students who have completed at least one term with ABM.
• Students must contact our Accounts Team to arrange direct debit prior to their invoice due date.

📩 For enquiries, please contact our Accounts Team at: accounts@abm.edu.au`,
    link: '/',
  },
  {
    id: 3,
    image: '/news/01-03-2025.png',
    category: 'ABM',
    date: '01/03/2025',
    title: 'ABM May 2025 Nationality Mix',
    description: `Diversity matters because it helps you feel right at home, no matter how far you’ve come. At ABM, you’ll study alongside students from all over the world, learn from different cultures, and build global friendships. It’s not just about education, it’s about connection, confidence, and preparing for a world that’s truly international.

We’re proud to celebrate the diversity at ABM Further Education!

In May 2025, our students come from over 25 countries, creating a vibrant and multicultural learning environment.

Top nationalities this month:

South Korea: 21.1%
Indonesia: 15.0%
Colombia: 14.4%
Thailand: 6.3%
Argentina: 5.7%
Philippines: 4.8%
Chile: 4.3%
Malaysia: 3.9%
Spain: 3.5%

We also welcome students from China, Japan, Mexico, Nepal, Mongolia, Italy, France, the UK, the US, Vietnam, and many more!

At ABM, you’ll study alongside classmates from around the world, building global connections and lifelong friendships.

Join our global community today. Your future starts here.
`,
    link: '/',
  },
  {
    id: 4,
    image: '/news/26-02-2025.jpg',
    category: 'ABM',
    date: '26/02/2025',
    title: 'A Special Day: ABM’s Graduation Ceremony Highlights',
    description: `On 25th February, ABM proudly hosted its first on-campus graduation ceremony, marking a significant milestone as we celebrated our second group of 20 graduates. It was a truly special occasion, bringing together students, their families, and friends to honour their dedication, perseverance, and hard work. Seeing the graduates’ proud faces, filled with a well-earned sense of accomplishment, made the event all the more meaningful.

We extend our heartfelt congratulations to each graduate and wish them every success in their future careers and endeavours. Completing their studies is just the beginning of an exciting journey, and we have no doubt they will go on to achieve great things in the hospitality and fitness industries.

A special thank you goes to our Advanced Diploma of Hospitality Management students, whose professionalism and hospitality shone throughout the event. They prepared and served a selection of non-alcoholic beverages and delicious food to all guests, enhancing the celebratory atmosphere and making the occasion even more memorable.

We look forward to seeing many more students reach this incredible milestone in the future and can’t wait to celebrate their achievements together at ABM.
`,
    link: '/',
  },
  {
    id: 5,
    image: '/news/20-02-2025.jpg',
    category: 'Event',
    date: '20/02/2025',
    title:
      'ABM Further Education celebrated its Grand Opening and Information Day',
    description: `ABM Further Education celebrated its Grand Opening and Information Day yesterday at our new Castlereagh Street campus with 92 guests, including our valued agents and ELICOS partners.

Our dedicated trainers prepared food while Advanced Diploma of Hospitality Management students showcased their skills by crafting mocktails and serving food and beverages as part of their “Serve Food and Beverage” unit.

The event, hosted by Felipe, featured presentations from Richard Kiefer, Harley introducing our Fitness courses, and Hannah providing admissions guidance. The day concluded with an exciting World Gym tour led by Felipe and his team.

A special thanks to Felipe for decorating the campus and to Ake and Hannah for setting up the screens and welcoming our guests.

It was a fantastic opportunity to showcase our new campus and our students’ practical learning. Thank you to everyone who attended!
`,
    link: '/',
  },
];
