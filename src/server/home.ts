import { createServerFn } from "@tanstack/react-start";

const IMAGES = [
  "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg", // Rack
  "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg", // Hoodie
  "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg", // Street style
  "https://images.pexels.com/photos/6069083/pexels-photo-6069083.jpeg", // Folded shirts
  "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg", // Sneakers
  "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg", // Hangers
  "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg", // Concert
  "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg", // Fashion shoot
  "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg", // Urban
  "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg", // Vinyls
];

const TEXT_CONTENT = [
  {
    headline: "Where Music and Style Collide.",
    subheading:
      "Own a piece of the legacy. Buy and sell merchandise that defines your favorite music artists.",
  },
  {
    headline: "Wear the Beat.",
    subheading:
      "Exclusive drops from top artists. Limited edition merch available now.",
  },
  {
    headline: "Collector's Paradise.",
    subheading:
      "Rare finds, vintage tours, and signed memorabilia. Your collection starts here.",
  },
  {
    headline: "From the Stage to Your Closet.",
    subheading:
      "Authentic artist merchandise direct to fans. Don't miss the next drop.",
  },
  {
    headline: "Express Your Sound.",
    subheading:
      "Fashion that speaks louder than words. Find your unique rhythm.",
  },
];

export const getHeroSlides = createServerFn({ method: "GET" }).handler(
  async () => {
    // Randomize images
    const shuffledImages = [...IMAGES].sort(() => 0.5 - Math.random());

    // Randomize text
    const shuffledText = [...TEXT_CONTENT].sort(() => 0.5 - Math.random());

    const slides = shuffledImages.slice(0, 5).map((url, index) => {
      const text = shuffledText[index % shuffledText.length];
      return {
        id: index,
        url,
        alt: "MerchWay Collection",
        headline: text.headline,
        subheading: text.subheading,
      };
    });

    return slides;
  },
);
