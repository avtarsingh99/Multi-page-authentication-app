import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";

const Dashboard = () => {
  const { user, borrowedBooks, removeBook, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex justify-between items-center p-4 md:p-16 py-5 bg-emerald-100">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-emerald-900">
            Welcome back,{" "}
            <span className="text-3xl md:text-5xl font-extrabold text-amber-600">
              {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 border p-4 rounded-xl bg-emerald-900">
          <div className="flex justify-between items-center gap-4 md:gap-8">
            <CircleUser size={64} color="white" />
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-md text-white">
                Username:{" "}
                <span className="text-md md:text-lg font-semibold text-amber-300">
                  {user.username.charAt(0).toUpperCase() +
                    user.username.slice(1)}
                </span>
              </p>
              <p className="text-md text-white">
                Email:{" "}
                <span className="text-lg font-semibold text-amber-300">
                  {user.email}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-sm px-3 py-2 rounded-3xl bg-red-100 text-red-700 text-md hover:bg-red-700 hover:text-white hover:shadow-red-500/30 transition-all hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl text-center text-stone-600">
          Borrowed Books:
        </p>

        {borrowedBooks && borrowedBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full px-4 md:px-16 pb-12">
            {borrowedBooks.map((book) => (
              <div
                key={book.id}
                className="flex flex-col gap-4 p-5 border border-stone-300 rounded-xl w-full hover:shadow-xl hover:shadow-amber-300/40 transition-all"
              >
                <div className="flex justify-between items-center gap-6">
                  <p className="px-3 py-1 bg-emerald-900 text-amber-300 text-sm w-fit rounded-full font-bold"> 
                    {book.ratings} ⭐
                  </p>
                  <p className="text-sm text-emerald-900">Year: {book.year}</p>
                </div>

                <p className="font-bold text-lg">{book.title}</p>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-emerald-900 font-semibold">
                    By {book.author}
                  </p>
                </div>

                <div className="bg-stone-200 h-px"></div>

                <div className="flex justify-between items-center gap-6">
                  <button
                    className="px-6 py-3 rounded-xl bg-amber-200 text-emerald-900 font-bold text-md hover:bg-amber-300 hover:cursor-pointer transition-all w-full"
                    onClick={() => navigate(`/books/${book.id}`)}
                  >
                    View
                  </button>

                  <button
                    className="px-6 py-3 rounded-xl bg-red-100 text-red-700 font-bold text-md hover:bg-red-600 hover:text-white hover:cursor-pointer transition-all w-full"
                    onClick={() => removeBook(book.id)}
                  >
                    Return
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-stone-500 text-lg">No books borrowed yet.</p>
            <button
              className="px-6 py-3 rounded-xl bg-amber-300 text-emerald-900 font-bold text-lg hover:bg-amber-500 hover:cursor-pointer transition-all max-w-64 w-full"
              onClick={() => navigate("/books")}
            >
              Borrow A Book
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
