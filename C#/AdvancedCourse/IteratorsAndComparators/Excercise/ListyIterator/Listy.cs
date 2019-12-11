namespace ListyIterator
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    public class ListyIterator : IEnumerable
    {
        private List<string> internalList;
        private int currentIndex = 0;

        public ListyIterator(params string[] inputList)
        {
            this.InternalList = inputList
                .ToList();
        }

        public List<string> InternalList
        {
            get { return this.internalList; }
            set { this.internalList = value; }
        }

        public bool Move()
        {
            if (++this.currentIndex < this.InternalList.Count)
            {
                return true;
            }
            else
            {
                --this.currentIndex;

                return false;
            }
        }

        public bool HasNext()
        {
            if (this.currentIndex + 1 < this.InternalList.Count)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Print()
        {
            if (this.InternalList.Count == 0)
            {
                Console.WriteLine("Invalid operation exceptio");
            }
            else
            {
                Console.WriteLine($"{this.InternalList[currentIndex]}");
            }
        }

        public void PrintAll()
        {
            StringBuilder sb = new StringBuilder();

            sb.AppendJoin(' ', this.InternalList);

            Console.WriteLine(sb.ToString());
        }

        public IEnumerator GetEnumerator()
        {
            yield return new ListyInternalIterator(this.InternalList);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
