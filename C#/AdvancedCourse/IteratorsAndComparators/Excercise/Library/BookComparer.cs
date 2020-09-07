namespace IteratorsAndComparators
{
    using System.Collections.Generic;

    public class BookComparator : IComparer<Book>
    {
        public int Compare(Book firstBook, Book secondBook)
        {
            int result = firstBook.Title.CompareTo(secondBook.Title);

            if (result == 0)
            {
                result = firstBook.Year.CompareTo(secondBook.Year);
            }

            return result;
        }
    }
}
