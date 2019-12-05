namespace GenericBoxOfString
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Linq;

    public class Box<T>
        where T : IComparable<T>
    {
        private List<T> item = new List<T>();

        public Box()
        {

        }
        public void Add(T item)
        {
            this.Item.Add(item);
        }

        public void Swap(int firstIndex, int secondIndex)
        {
            if (firstIndex > this.Item.Count || secondIndex > this.Item.Count)
            {
                throw new IndexOutOfRangeException();
            }

            T temp = this.Item[firstIndex];
            this.Item[firstIndex] = this.Item[secondIndex];
            this.Item[secondIndex] = temp;

            this.PrintAll();
        }

        public List<T> Item
        {
            get => this.item;
        }

        private void PrintAll()
        {
            StringBuilder sb = new StringBuilder();

            foreach (T item in this.Item)
            {
                sb.AppendLine($"{item.GetType().ToString()}: {item}");
            }

            Console.Write(sb);
        }

        public int GenericCount(T item)
        {
            int greaterItems = this.Item
                .Select(x => x.CompareTo(item))
                .Where(p => p > 0)
                .Count();

            return greaterItems;
        }
    }
}
