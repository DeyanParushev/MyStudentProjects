namespace BoxOfT
{
    using System.Collections.Generic;

    public class Box<T>
    {
        private List<T> items = new List<T>();

        public void Add(T item)
        {
            this.items.Add(item);
        }

        public T Remove()
        {
            T item = this.items[this.Count - 1];
            this.items.RemoveAt(this.Count - 1);

            return item;
        }

        public int Count { get => this.items.Count; }
    }
}
