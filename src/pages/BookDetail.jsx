import React from "react";
import { useParams } from "react-router-dom";
import { sampleBooks } from "../components/BookCard";

const BookDetail = () => {
  const { id } = useParams();

  const book = sampleBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="text-center">
        <h2 className="font-bold text-2xl text-stone-500">Book Not Found!</h2>
        <p className="text-xl text-stone-400">
          Sorry, the book you're looking for isn't found.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 px-4 md:px-16 py-16">
      <img
        src={book.img}
        alt={book.title}
        className="w-full max-h-125 object-cover rounded-2xl"
      />
      <h1 className="text-2xl md:text-3xl text-center font-bold text-emerald-900">
        {book.title}
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-lg text-stone-700">
          By <span className="font-semibold text-amber-600">{book.author}</span>
        </p>
        <p className="text-lg text-stone-700">
          Published in{" "}
          <span className="font-semibold text-amber-600">{book.year}</span>
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-xl text-stone-600">Description</h3>
        <p className="text-justify text-md text-stone-500 leading-relaxed">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
