import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white text-gray-900">
        About PortfolioRate
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Our Mission",
            content:
              "PortfolioPlus is dedicated to showcasing the best portfolio websites from around the web. We believe in promoting creativity and helping professionals in various fields gain visibility for their outstanding work.",
          },
          {
            title: "What We Do",
            content:
              "We curate a selection of top-notch portfolio websites, providing a platform for designers, developers, artists, and other professionals to gain inspiration and recognition. Our team of experts carefully reviews each submission, ensuring that only the highest quality portfolios are featured on our site.",
          },
          {
            title: "Join Our Community",
            content:
              "Whether you are looking for inspiration for your own portfolio or searching for top talent, PortfolioPlus is the place to be. Join our growing community of creative professionals and discover the power of outstanding portfolio presentation.",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="border dark:border-gray-700 border-gray-200 rounded-2xl overflow-hidden dark:bg-[#1a1a1a] bg-gray-100 shadow-md"
          >
            <CardHeader className="dark:bg-[#252525] bg-gray-200">
              <CardTitle className="dark:text-white text-gray-900">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="dark:text-gray-300 text-gray-700">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 rounded-2xl p-8 dark:bg-[#1a1a1a] bg-gray-100 shadow-md">
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
          How We Rate Sites
        </h2>
        <ul className="list-disc list-inside space-y-4 dark:text-gray-300 text-gray-700">
          <li>
            <strong>Hireability:</strong> Can recruiters quickly understand what
            you do, your skill level, and access additional information like a
            resume? A well-structured site ensures a recruiter can get a good
            impression in 10-20 seconds.
          </li>
          <li>
            <strong>Aesthetic:</strong> Does the site look great and maintain
            responsiveness? Simplicity often trumps overly complex designs, but
            it should also ensure smooth navigation and a delightful user
            experience.
          </li>
          <li>
            <strong>Creativity:</strong> Is the site unique and innovative
            without sacrificing usability or clarity? A balance of fundamentals
            with a creative twist makes for a memorable portfolio.
          </li>
        </ul>
      </div>
    </div>
  );
}