import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  const steps = [
    {
      number: "01",
      title: "Explore",
      description: "Browse our collection and discover interesting books.",
    },
    {
      number: "02",
      title: "View Details",
      description: "Read the book information and description.",
    },
    {
      number: "03",
      title: "Login or Signup",
      description: "Create an account or login to borrow books.",
    },
    {
      number: "04",
      title: "Borrow and Manage",
      description: "Borrow books and manage them from your dashboard.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6">
      <section className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-amber-400 text-center">
          About LibNest
        </h1>

        <div className="flex flex-col gap-5 max-w-225">
          <p className="text-sm text-stone-500 text-justify">
            LibNest is a simple and user-friendly online library application
            created to make book discovery and borrowing easier. Our goal is to
            provide readers with a comfortable digital space where they can
            explore books, learn about different authors, and manage their
            borrowed books from one place. Whether you are a regular reader or
            someone trying to build a reading habit, LibNest helps you discover
            books that match your interests.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-amber-400 text-center">
          Our Mission
        </h1>

        <div className="flex flex-col gap-5 max-w-225">
          <p className="text-sm text-stone-500 text-justify">
            Our mission is to make reading more accessible, organized, and
            enjoyable. We believe that books are not only a source of
            information but also a way to explore new ideas, understand
            different perspectives, and improve our imagination. LibNest brings
            the basic library experience into a simple digital platform where
            users can browse books, view details, borrow books, and manage their
            personal collection.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-4xl font-bold text-amber-400">How LibNest Works</h2>

        <div className="grid grid-cols-2 gap-12 items-center max-w-300 w-full justify-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 items-center justify-center px-5 py-4 border border-l-6 border-amber-300 rounded-xl bg-white shadow-lg shadow-amber-300/10"
            >
              <p className="font-bold text-3xl text-amber-400">{step.number}</p>
              <div className="flex flex-col gap-0 items-center">
                <p className="font-bold text-lg text-emerald-800">
                  {step.title}
                </p>
                <p className="text-md text-justify text-stone-600">
                  {step.description}
                </p>
              </div>
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

export default About;
