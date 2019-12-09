namespace Froggy
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public class Lake<T> : IEnumerable<T>
    {
        private T[] lakeStones;

        public Lake(T[] lakeStones)
        {
            this.LakeStones = lakeStones;
        }

        public T[] LakeStones
        {
            get { return this.lakeStones; }
            set { this.lakeStones = value; }
        }

        public IEnumerator<T> GetEnumerator()
        {
            return new LakeEnumerator<T>(this.LakeStones);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
