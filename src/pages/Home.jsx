import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const genres = [
    {
      title: "Fiction",
      description:
        "Enter imaginary worlds filled with memorable characters and stories.",
    },
    {
      title: "Romance",
      description:
        "Enjoy emotional stories about love, relationships, and connection.",
    },
    {
      title: "Mystery",
      description:
        "Solve interesting cases, enjoy the thrill and uncover hidden secrets.",
    },
    {
      title: "Self Development",
      description: "Learn new habits, improve your skills, and grow every day.",
    },
    {
      title: "Biography",
      description: "Read inspiring stories about the lives of real people.",
    },
    {
      title: "Adventure",
      description:
        "Travel through exciting stories full of action and discovery.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <section
        className="min-h-125 bg-cover bg-center px-12 py-12 w-full text-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg')",
        }}
      >
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold text-amber-400">
              Discover Your Next Great Read
            </h1>
            <p className="text-lg text-white/80 ">
              Explore amazing books, discover new authors, and start your
              reading journey with LibNest.
            </p>
          </div>

          <button
            className="px-6 py-3 rounded-xl bg-amber-400 text-emerald-900 font-bold text-lg hover:bg-amber-600 hover:cursor-pointer transition-all max-w-64 w-full"
            onClick={() => navigate("/books")}
          >
            Explore Books
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-4xl font-bold text-amber-400">
          Why Choose LibNest?
        </h2>

        <div className="grid grid-cols-2 gap-12 items-center max-w-300 w-full justify-center">
          <div className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-amber-300 rounded-xl bg-white shadow-lg shadow-amber-300/10">
            <p className="font-bold text-lg text-emerald-800">
              A Collection for Everyone
            </p>
            <p className="text-md text-justify text-stone-600">
              Explore books from different genres, authors, and writing styles.
              Find something for every mood and interest.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-amber-300 rounded-xl bg-white shadow-lg shadow-amber-300/10">
            <p className="font-bold text-lg text-emerald-800">
              Borrow with Ease
            </p>
            <p className="text-md text-justify text-stone-600">
              Logged-in users can borrow books and manage their borrowed
              collection from their personal dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-amber-300 rounded-xl bg-white shadow-lg shadow-amber-300/10">
            <p className="font-bold text-lg text-emerald-800">
              Track Your Reading
            </p>
            <p className="text-md text-justify text-stone-600">
              Visit your dashboard to view borrowed books, read book details,
              and return books whenever you want with ease.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-amber-300 rounded-xl bg-white shadow-lg shadow-amber-300/10">
            <p className="font-bold text-lg text-emerald-800">
              Explore 10K+ Books from Worldwide
            </p>
            <p className="text-md text-justify text-stone-600">
              Explore books from different genres, authors, and writing styles.
              Find something for every mood and interest.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-4xl font-bold text-amber-400">
          Explore Different Genres
        </h2>

        <div className="grid grid-cols-3 gap-12 items-center max-w-300 w-full justify-center">
          {genres.map((genre) => (
            <div
              key={genre.title}
              className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-l-6 border-emerald-800 rounded-xl bg-white shadow-lg shadow-emerald-800/10"
            >
              <p className="font-bold text-lg text-emerald-800">
                {genre.title}
              </p>
              <p className="text-md text-justify text-stone-600">
                {genre.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 items-center justify-between bg-emerald-950 w-full py-8">
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-4xl font-bold text-amber-400">
              Your Next Chapter Starts Here
            </h1>
            <p className="text-lg text-white/80 ">
              A good book can introduce you to a new idea, a new world, or a new
              version of yourself. Explore our collection and find your next
              favorite book.
            </p>
          </div>

          <button
            className="px-6 py-3 rounded-xl bg-amber-400 text-emerald-900 font-bold text-lg hover:bg-amber-600 hover:cursor-pointer transition-all max-w-64 w-full"
            onClick={() => navigate("/books")}
          >
            Start Exploring
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
