namespace ListyIterator
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public class ListyInternalIterator : IEnumerator<string>
    {
        private List<string> items;
        private int currentIndex = -1;

        public ListyInternalIterator(List<string> items)
        {
            this.Reset();
            this.Items = items
                .ToList();
        }

        public string Current { get => this.items[currentIndex];}

        private List<string> Items { get => items; set => items = value; }

        object IEnumerator.Current => this.Current;

        public void Dispose()
        {

        }

        public bool MoveNext()
        {
            if (++this.currentIndex < this.Items.Count)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Reset()
        {
            this.currentIndex = -1;
        }
    }
}
