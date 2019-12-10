namespace IteratorsAndComparators
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public class Library : IEnumerable<Book>
    {
        private List<Book> books;

        public Library(params Book[] books)
        {
            this.Books = books
                .OrderBy(x => x.Title)
                .ThenBy(x => x.Year)
                .ToList();
        }

        public List<Book> Books
        {
            get { return this.books; }
            set { this.books = value; }
        }

        public IEnumerator<Book> GetEnumerator()
        {
            return new LibraryIterator(this.Books);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        private class LibraryIterator : IEnumerator<Book>
        {
            private List<Book> books;
            private int currentIndex = -1;

            public LibraryIterator(IEnumerable<Book> books)
            {
                this.Reset();
                this.Books = new List<Book>(books);
            }

            public List<Book> Books
            {
                get { return this.books; }
                private set { this.books = value; }
            }

            public Book Current => this.Books[this.currentIndex];

            object IEnumerator.Current => this.Current;

            public void Dispose() { }

            public bool MoveNext()
            {
                ++this.currentIndex;
                if (this.currentIndex < this.Books.Count)
                {
                    return true;
                }

                return false;
            }
            public void Reset()
            {
                this.currentIndex = -1;
            }
        }
    }
}
