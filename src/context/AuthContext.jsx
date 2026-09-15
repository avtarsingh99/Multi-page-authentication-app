import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const useAuth = () => {

    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        const storedUser = localStorage.getItem('user')

        if (storedUser) {
            setUser(storedUser)
            setIsAuthenticated(true)
        }

        setLoading(false)

    }, [])

    const login = (email, password) => {

        // retrieve users object from the localStorage
        const users = JSON.parse(localStorage.getItem('users')) || []

        // check if user already exists or not
        const userExists = users.find((u) => u.email === email && u.password === password)

        if (userExists) {

            const userWithoutPassword = {

                username: userExists.username,
                email: userExists.email
            }

            const storedBooks = JSON.parse(localStorage.getItem(`borrowedBooks_${userExists.email}`)) || '[]'

            setUser(userWithoutPassword)
            setIsAuthenticated(true)
            setBorrowedBooks(storedBooks)
            localStorage.setItem('user', JSON.stringify(userWithoutPassword))

            return { success: true }

        } else {

            return { success: false, message: 'Entered email or password is invalid' }

        }

    }

    const signup = (username, email, password) => {

        // retrieve users object array from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || []

        // check if user already exits or not
        const userExists = users.some((u) => u.email === email)

        if (userExists) {
            return { success: false, message: 'User already exits, please login' }
        }

        // if new user, create user object
        const newUser = {
            username,
            email,
            password
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        const userWithoutPassword = {
            username,
            email
        }
        setUser(userWithoutPassword)
        setIsAuthenticated(true)
        setBorrowedBooks([])
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))

        return { success: true }
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        setBorrowedBooks([])
        localStorage.removeItem('user')
    }

    const borrowBook = (book) => {

        if (!user) {
            return { success: false, message: "Please login to borrow a book" }
        }

        console.log('Borrow request: ', book)
        // retrieve borrowed books object array from localStorage
        const storedBooks = JSON.parse(localStorage.getItem(`borrowedBooks_${user.email}`)) || []
        console.log('storedBooks :', storedBooks)

        // prevent borrowing the same book twice
        const alreadyBorrowed = storedBooks.some((b) => b.id === book.id)

        // if already borrowed return false
        if (alreadyBorrowed) {
            return { success: false, message: 'You have already borrowed this book' }
        }
        const updatedBooks = [...storedBooks, book]
        setBorrowedBooks(updatedBooks)

        // save updated books in localStorage
        localStorage.setItem(`borrowedBooks_${user.email}`, JSON.stringify(updatedBooks))
        console.log("Total borrowed books: ", borrowedBooks)

        return { success: true }

    }

    const removeBook = (bookId) => {

        if (!user) return

        // get borrowed books from localStorage
        const storedBooks = JSON.parse(localStorage.getItem(`borrowedBooks_${user.email}`)) || []
        console.log("Remove book from storedBooks: ", storedBooks)
        // remove the selected borrowed books
        const updatedBooks = storedBooks.filter((book) => book.id !== bookId)

        // update the borrowed books 
        setBorrowedBooks(updatedBooks)
        localStorage.setItem(`borrowedBooks_${user.email}`, JSON.stringify(updatedBooks))

        return { success: true }
    }

    const value = {
        user, isAuthenticated, loading, borrowedBooks, login, signup, logout, borrowBook, removeBook
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}