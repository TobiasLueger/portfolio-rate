type Portfolio = {
  id: number
  title: string
  image: string
  url: string
  rating: number
  recommended?: boolean
}

export const portfolios: Portfolio[] = [
  { id: 1, title: "Enrique Paulino", image: "/images/enrique-paulino.png", url: "https://enrique-paulino.github.io/", rating: 2.67},
  { id: 2, title: "Ras Mic", image: "/images/rasmic.png", url: "https://www.rasmic.xyz/", rating: 4.0},
  { id: 3, title: "Achyuth S S", image: "/images/achyudev.png", url: "https://achyudev.vercel.app/", rating: 2.83},
  { id: 4, title: "Nike Suputra", image: "/images/fourleaves.png", url: "https://resume.fourleaves.studio/", rating: 2.83},
  { id: 5, title: "Joshua Onyeuche", image: "/images/joshuaonyeuche.png", url: "https://joshuaonyeuche.com/", rating: 1.0},
  { id: 6, title: "Aldo Fernando Vilardy Roa", image: "/images/aldovilardy.png", url: "https://aldovilardy.azurewebsites.net/", rating: 2.5},
  { id: 7, title: "Prasoon Mahawar", image: "/images/prasoon.png", url: "https://prasoon-mahawar.dev/", rating: 4.17},
  { id: 8, title: "Andy Sharma", image: "/images/andysharma.png", url: "https://andysharma.vercel.app/", rating: 2.17},
  { id: 9, title: "Aaditya Srivastava", image: "/images/sumionochi.png", url: "https://sumionochi.github.io/Portfolio-landing-page/", rating: 2.83},
  { id: 10, title: "Manish Gotame", image: "/images/manishgotame.png", url: "https://www.manishgotame.com.np/", rating: 2.0},
  { id: 11, title: "Dushyanth Gali", image: "/images/dushyanth.png", url: "https://dushyanth.in/", rating: 2.33},
  { id: 12, title: "Daniel Moya", image: "/images/moyadaniel.png", url: "https://moyadaniel.com/", rating: 3.33},
  { id: 13, title: "Binil B", image: "/images/thegr8binil.png", url: "https://www.thegr8binil.me/ContactMe", rating: 4.67, recommended: true},
]