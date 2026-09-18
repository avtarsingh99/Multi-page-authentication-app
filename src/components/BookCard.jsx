import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const sampleBooks = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      ratings: 4.8,
      img: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Set in the sleepy Southern town of Maycomb, Alabama, during the height of the Great Depression, this classic novel follows young Scout Finch, her brother Jem, and their widowed father Atticus, a principled small-town lawyer. The story centers on Atticus defending Tom Robinson, a Black man falsely accused of raping a white woman, sparking racial tension throughout the deeply prejudiced community. Through Scout's innocent yet perceptive eyes, the narrative explores profound themes of empathy, racial injustice, moral courage, and the loss of innocence. Alongside the central trial, Scout and Jem become fascinated with their reclusive neighbor, Boo Radley, whose mysterious presence turns out to hold unexpected kindness. Harper Lee masterfully balances the warmth and humor of childhood discovery with the harsh, sobering realities of bigotry and prejudice. Atticus Finch's memorable advice to walk in another person's shoes before judging them serves as the moral anchor of the story, making it a timeless exploration of human conscience and compassion."
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      ratings: 4.7,
      img: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "George Orwell's haunting dystopian masterpiece presents a chilling vision of a totalitarian future dominated by an all-seeing regime known as the Party, led by the enigmatic figure Big Brother. Set in the superstate of Oceania, the story follows Winston Smith, an ordinary lower-tier Party member working at the Ministry of Truth, where his daily job involves rewriting historical records to align with changing Party propaganda. Internally disillusioned by the omnipresent surveillance, thought police, and forced psychological conformity, Winston secretly begins a forbidden diary and embarks on a dangerous romance with a fellow rebel named Julia. Together, they attempt to seek out an underground resistance known as the Brotherhood. Orwell masterfully dissects mechanisms of political manipulation, doublethink, language erosion, and total control over human thought and historical memory. The novel serves as an enduring warning against authoritarianism, loss of privacy, and the fragile nature of objective truth in the face of absolute power."
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      ratings: 4.4,
      img: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "F. Scott Fitzgerald's quintessential American novel paints a vivid and melancholic portrait of the Jazz Age during the roaring 1920s on Long Island, New York. Narrated by Nick Carraway, a quiet young bond salesman from the Midwest, the story revolves around his enigmatic neighbor Jay Gatsby, a mysteriously wealthy man who hosts extravagant weekend parties at his lavish mansion. Despite his immense fortune and flashy lifestyle, Gatsby's true motivation is rekindling a past romance with Daisy Buchanan, Nick's cousin who is now married to the arrogant aristocrat Tom Buchanan. As Nick becomes drawn into Gatsby's obsessed pursuit, the narrative exposes the emptiness, excess, and moral decay hiding beneath the glamorous surface of high society. Fitzgerald's lyrical prose captures themes of unrequited love, class distinction, memory, and the tragic disillusionment of the American Dream, culminating in a poignant climax that remains one of the most celebrated works in modern American literature."
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      ratings: 4.6,
      img: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Jane Austen's timeless romantic comedy of manners unfolds in 19th-century rural England, centering on the spirited and witty Elizabeth Bennet, the second of five sisters whose mother is desperately eager to secure wealthy husbands for them. When the rich, eligible bachelor Mr. Bingley moves to the nearby estate of Netherfield, he immediately catches the interest of Elizabeth's gentle elder sister, Jane. However, Bingley's proud and aloof friend, Mr. Fitzwilliam Darcy, initially dismisses Elizabeth and offends her proud nature. As their social circles interact through ballrooms, country visits, and family mishaps, Elizabeth and Darcy are forced to confront their own personal flaws—Elizabeth's hasty judgments based on first impressions and Darcy's arrogance born of aristocratic status. Austen brilliantly satirizes social mobility, marriage standards, and class expectations while crafting a nuanced love story about mutual respect, self-awareness, and overcoming social prejudices to find genuine happiness."
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      ratings: 4.1,
      img: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "J.D. Salinger's iconic novel captures the raw emotional landscape of teenage alienation, identity crisis, and angst through the indelible voice of Holden Caulfield. After being expelled from his prestigious prep school, Pencey Prep, 16-year-old Holden wanders through New York City alone over the course of three days before returning home. Intensely cynical and deeply grieving the tragic death of his younger brother Allie, Holden constantly criticizes the hypocritical and 'phony' behavior of the adult world around him. However, beneath his sarcastic demeanor lies a vulnerable, deeply lonely adolescent terrified of growing up and losing his innocence. Holden envisions himself as the 'catcher in the rye,' a protective figure saving young children from falling off a cliff into the corrupt adult world. Salinger's groundbreaking use of conversational voice and stream-of-consciousness narrative remains a powerful benchmark for youth culture and psychological vulnerability."
    },
    {
      id: 6,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      ratings: 4.8,
      img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "J.R.R. Tolkien's legendary high-fantasy adventure follows Bilbo Baggins, a quiet, comfortable hobbit residing in the peaceful Shire who loves routine, good food, and a quiet life. His tranquil world is disrupted when the wizard Gandalf and a company of thirteen dwarves, led by Thorin Oakenshield, enlist him as their official burglar on a quest to reclaim the Lonely Mountain and its vast treasure from the fearsome dragon Smaug. Reluctantly embarking on an epic journey across Middle-earth, Bilbo encounters goblins, giant spiders, wood-elves, and the mysterious creature Gollum, from whom he acquires a magical ring of invisibility. Along the way, Bilbo discovers unexpected courage, resourcefulness, and loyalty within himself, proving that even the humblest individual can alter the fate of the world. Tolkien's rich lore, charming storytelling, and vivid world-building lay the foundational groundwork for modern fantasy literature."
    },
    {
      id: 7,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      year: 1953,
      ratings: 4.5,
      img: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Ray Bradbury's vision of a dystopian future presents a society where books are strictly outlawed and 'firemen' burn any literature discovered in order to suppress critical thinking and maintain superficial happiness. The protagonist, Guy Montag, is a dedicated fireman who takes satisfaction in his work without questioning its broader purpose. However, a chance meeting with his free-spirited neighbor, Clarisse McClellan, awakens him to the shallow, sensory-overloaded nature of his world, dominated by wall-sized interactive screens and constant mindless entertainment. As Montag grows curious about the forbidden knowledge contained in books, he secretly begins stealing and reading volumes saved from the flames, setting off a dangerous intellectual transformation that turns him from an agent of state enforcement into a hunted fugitive. Bradbury's propulsive novel acts as an urgent critique of censorship, anti-intellectualism, mass media consumption, and the vital importance of literature."
    },
    {
      id: 8,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      year: 1932,
      ratings: 4.3,
      img: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Aldous Huxley's visionary science fiction novel depicts a futuristic World State where society is engineered through advanced reproductive technology, psychological conditioning, and caste classification from birth. Citizens are kept perpetually content through state-provided hedonism, consumerism, free love, and a mood-altering drug called soma, completely eliminating suffering at the cost of individuality, art, and emotional depth. The story follows Bernard Marx, an outcast Alpha who harbors hidden discontent with the uniform society, and John 'the Savage,' a man raised on a remote Native American reservation outside the World State's influence. When John is brought to the high-tech metropolis, his deep human values, appreciation for Shakespearean passion, and moral convictions clash violently with the sterilized, mindless compliance of the utopian society. Huxley presents a terrifying critique of technological overreach, forced conformity, and the sacrifice of human agency for ultimate comfort."
    },
    {
      id: 9,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      year: 1988,
      ratings: 4.6,
      img: 'https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Paulo Coelho's globally acclaimed philosophical novel tells the inspiring story of Santiago, an Andalusian shepherd boy who yearns to travel the world in search of a treasure located near the Egyptian pyramids. Driven by a recurring dream and encouraged by a mysterious king, Santiago leaves his quiet life in Spain and embarks on an extraordinary trek across the North African desert. Along his journey, he encounters various mentors, including a crystal merchant, an Englishman seeking secret knowledge, and a wise alchemist who teaches him to listen to his heart and decipher the signs of the universe. Rather than focusing merely on material wealth, the narrative emphasizes the concept of one's 'Personal Legend'—the true path or calling each person is meant to fulfill. Coelho blends simple, fable-like storytelling with deep spiritual reflections on fate, perseverance, courage, and self-discovery."
    },
    {
      id: 10,
      title: 'Dune',
      author: 'Frank Herbert',
      year: 1965,
      ratings: 4.7,
      img: 'https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Frank Herbert's magnificent science fiction epic takes place in a distant feudal galactic empire, centering on young Paul Atreides, son of Duke Leto Atreides. Paul's noble family is ordered by the Emperor to take control of Arrakis, a harsh desert planet that serves as the universe's sole source of 'spice'—a precious resource that extends life, enhances cognition, and enables interstellar space navigation. However, the move is a deadly trap set by their arch-enemies, the ruthless House Harkonnen. When betrayal strikes and his father is killed, Paul and his mother escape into the deadly desert, where they align with the Fremen, the resilient native inhabitants of Arrakis. As Paul embraces his destiny as a prophet and messianic leader, Herbert weaves complex themes of politics, ecology, religion, power dynamics, and human evolution set against an extraordinarily detailed universe."
    },
    {
      id: 11,
      title: 'Beloved',
      author: 'Toni Morrison',
      year: 1987,
      ratings: 4.5,
      img: 'https://images.pexels.com/photos/4627404/pexels-photo-4627404.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Toni Morrison's Pulitzer Prize-winning masterpiece explores the indelible trauma and psychological scars left by slavery in post-Civil War America. Set in 1873 near Cincinnati, Ohio, the story follows Sethe, an escaped enslaved woman living at 124 Bluestone Road with her daughter Denver. Their home is haunted by a violent, vengeful spirit believed to be the ghost of Sethe's unnamed baby, whom she killed eighteen years earlier to save the child from being recaptured into slavery at the brutal Sweet Home plantation. When a mysterious young woman calling herself Beloved appears at their doorstep, Sethe is forced to confront her horrifying past, deep guilt, and maternal trauma. Morrison combines haunting magical realism with lyrical prose to examine memory, community healing, and the destructive legacy of chattel slavery on human identity and family bonds."
    },
    {
      id: 12,
      title: 'The Shadow of the Wind',
      author: 'Carlos Ruiz Zafón',
      year: 2001,
      ratings: 4.7,
      img: 'https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:
        "Carlos Ruiz Zafón's captivating historical mystery is set in postwar Barcelona in 1945. The story opens when ten-year-old Daniel Sempere is taken by his antiquarian bookshop owner father to the secret 'Cemetery of Forgotten Books,' a hidden library preserved by the city's bibliophiles. Daniel is allowed to choose one book, selecting a rare novel titled 'The Shadow of the Wind' by an obscure author named Julián Carax. As Daniel grows into a young man, he becomes obsessed with discovering the mysterious backstory of Carax, only to learn that someone is systematically hunting down and burning every remaining copy of Carax's works. Daniel's investigation leads him down a dark, labyrinthine path filled with lost love, murder, political corruption, and dangerous secrets from Barcelona's troubled past. Zafón crafts a rich, gothic love letter to literature and storytelling."
    }
  ];

const BookCard = () => {

    const navigate = useNavigate()
    const { user, borrowedBooks, borrowBook, removeBook } = useAuth()

    return (
        sampleBooks.map((book) => {

            const isBorrowed = borrowedBooks.some((borrowedBook) => borrowedBook.id === book.id)

            return (
                <div key={book.id} className='flex flex-col gap-4 p-5 border border-stone-300 rounded-xl md:max-w-80 w-full hover:shadow-xl hover:shadow-amber-300/40 transition-all'>

                    <div className='flex justify-between items-center gap-6'>
                        <p className='px-3 py-1 bg-emerald-900 text-amber-300 text-sm w-fit rounded-full font-bold'>{book.ratings} ⭐</p>
                        <p className='text-sm text-emerald-900'>Year: {book.year}</p>
                    </div>

                    <p className='font-bold text-lg'>{book.title}</p>

                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-emerald-900 font-semibold'>By {book.author}</p>
                    </div>

                    <div className='bg-stone-200 h-px'></div>

                    <div className='flex justify-between items-center gap-6'>
                        <button className='px-6 py-3 rounded-xl bg-amber-200 text-emerald-900 font-bold text-md hover:bg-amber-300 hover:cursor-pointer transition-all w-full' onClick={() => navigate(`/books/${book.id}`)}>View</button>
                        {isBorrowed ? (
                            <>
                                <button className='px-6 py-3 rounded-xl bg-red-100 text-red-800 font-bold text-md hover:bg-red-600 hover:text-white hover:cursor-pointer transition-all w-full' onClick={() => removeBook(book.id)}>Return</button>
                            </>
                        ) : (
                            <>
                                <button className='px-6 py-3 rounded-xl bg-emerald-800 text-amber-300 font-bold text-md hover:bg-emerald-950 hover:cursor-pointer transition-all w-full' onClick={() => {
                                    if (!user) {
                                        alert('Please login to borrow a book')
                                        navigate('/login')
                                        return
                                    }
                                    borrowBook(book)
                                }}>Borrow</button>
                            </>
                        )}
                    </div>

                </div>
            )
        })
    )
}

export default BookCard
