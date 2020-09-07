namespace Threeuple
{
    using System.Text;

    public class Threeuple<T, T2, T3>
    {
        private T item1;
        private T2 item2;
        private T3 item3;

        public Threeuple(T item1, T2 item2, T3 item3)
        {
            this.Item1 = item1;
            this.Item2 = item2;
            this.Item3 = item3;
        }

        public T Item1
        {
            get { return this.item1; }
            set { this.item1 = value; }
        }

        public T2 Item2
        {
            get { return this.item2; }
            set { this.item2 = value; }
        }

        public T3 Item3
        {
            get { return this.item3; }
            set { this.item3 = value; }
        }

        public string Print()
        {
            StringBuilder sb = new StringBuilder();

            if (this.Item2 is double)
            {
                sb.Append($"{this.Item1} -> {this.item2:f1} -> {this.Item3}");
            }
            else
            {
                sb.Append($"{this.Item1} -> {this.item2} -> {this.Item3}");
            }

            return sb.ToString();
        }
    }
}
