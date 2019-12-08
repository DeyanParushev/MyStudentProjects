namespace CustomStack
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public class CustomStack<T> : IEnumerable
    {
        private List<T> stack  = new List<T>();

        public CustomStack(params T[] inputList)
        {
            this.Stack = inputList.ToList();
        }

        private List<T> Stack
        {
            get { return this.stack; }
            set { this.stack = value; }
        }

        public void Push(T item)
        {
            this.Stack.Add(item);
        }

        public void Pop()
        {
            if (this.Stack.Count > 0)
            {
                this.Stack.RemoveAt(this.Stack.Count - 1);
            }
            else
            {
                Console.WriteLine("No elements");
            }
        }

        public IEnumerator GetEnumerator()
        {
            return new CustomStackEnumerator(this.Stack);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }

        private class CustomStackEnumerator : IEnumerator<T>
        {
            private List<T> items;

            private int currentIndex;

            public CustomStackEnumerator(List<T> stack)
            {
                this.Items = stack;
                this.Reset();
            }

            private List<T> Items
            {
                get { return this.items; }
                set { this.items = value; }
            }

            public T Current => this.Items[currentIndex];

            object IEnumerator.Current => this.Current;

            public void Dispose()
            {
            }

            public bool MoveNext()
            {
                if (--this.currentIndex >= 0)
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
                this.currentIndex = this.Items.Count;
            }
        }
    }
}
