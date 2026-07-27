import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulwahidsheikh330.github.io"),
  title: "Abdul Wahid | React Developer & Full Stack Engineer | MERN Stack",
  description:
    "Abdul Wahid — React Developer & Full Stack Engineer based in Faisalabad, Pakistan. MERN Stack specialist at Synergic Professionals (Jazz partner). 2+ years building scalable web apps. CGPA 3.89.",
  keywords:
    "Abdul Wahid, React Developer, Full Stack Engineer, MERN Stack Developer, Web Developer Faisalabad, JavaScript Developer Pakistan, Node.js Developer, Abdul Wahid Sheikh",
  authors: [{ name: "Abdul Wahid" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://abdulwahidsheikh.me/",
    title: "Abdul Wahid | React Developer & Full Stack Engineer",
    description:
      "React Developer & MERN Stack Engineer with 2+ years of experience. Currently at Synergic Professionals (Jazz partner). Based in Faisalabad, Pakistan.",
    images: ["/images/image 1@2x.png"],
    siteName: "Abdul Wahid Portfolio",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://abdulwahidsheikh.me/" />
        <meta name="google-site-verification" content="94ffbe3d5fc0a289" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23F58D00'/><text x='50' y='68' font-family='sans-serif' font-size='50' font-weight='bold' text-anchor='middle' fill='%2300000'>AW</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdul Wahid",
              alternateName: "Abdul Wahid Sheikh",
              jobTitle: "React Developer & Full Stack Engineer",
              description:
                "React Developer and MERN Stack Engineer with 2+ years of experience building scalable web applications. Currently at Synergic Professionals, a Jazz partner.",
              url: "https://abdulwahidsheikh.me/",
              email: "abdulwahidsheikh330@gmail.com",
              telephone: "+923007664789",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faisalabad",
                addressCountry: "PK",
              },
              knowsAbout: [
                "React.js", "Node.js", "MERN Stack", "JavaScript", "TypeScript",
                "Full Stack Development", "MongoDB", "Express.js", "Next.js", 'REST APIs', "JWT Authentication", "Redux Toolkit", "Material UI", "Tailwind CSS",
                "Bootstrap", "Git", "Figma", "Agile Development", "Web Application Development", "Software Engineering", "Front-end Development", "Back-end Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "The University of Faisalabad",
              },
              sameAs: [
                "https://www.linkedin.com/in/abdul-wahid-qaiser-62a5b0324",
                "https://github.com/abdulwahidsheikh330",
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} bg-[#0B0F19] text-[#F8FAFC] antialiased`}>
        {children}
      </body>
    </html>
  );
}
