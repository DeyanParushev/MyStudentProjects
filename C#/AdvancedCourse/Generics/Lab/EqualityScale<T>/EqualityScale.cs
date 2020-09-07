namespace GenericScale
{
    using System;

    public class EqualityScale<T>
        where T : IComparable<T>
    {
        public EqualityScale(T itemOne, T itemTwo)
        {
            this.ItemOne = itemOne;
            this.ItemTwo = itemTwo;
        }

        public T ItemOne { get; }

        public T ItemTwo { get; }

        public bool AreEqual()
        {
            return this.ItemOne.Equals(this.ItemTwo);
        }
    }
}
