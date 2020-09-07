namespace Froggy
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public class LakeEnumerator<T> : IEnumerator<T>
    {
        private int currentIndex = -2;
        private T[] stones;
        private int cicleCounter = 0;

        public LakeEnumerator(T[] stones)
        {
            this.stones = stones;
        }

        public T Current => this.stones[currentIndex];

        object IEnumerator.Current => this.Current;

        public void Dispose()
        {
        }

        public bool MoveNext()
        {

            if (cicleCounter == 0)
            {
                this.currentIndex += 2;

                if (this.currentIndex < this.stones.Length)
                {
                    return true;
                }
                else
                {
                    if (this.currentIndex == this.stones.Length)
                    {
                        this.currentIndex--;
                    }
                    else if (this.currentIndex == this.stones.Length - 1)
                    {
                        this.currentIndex++;
                    }
                    else if (this.currentIndex > this.stones.Length)
                    {
                        this.currentIndex -= 3;
                    }
                    cicleCounter++;

                    return true;
                }
            }
            else if (cicleCounter == 1)
            {
                this.currentIndex -= 2;

                if (this.currentIndex > 0)
                {
                    return true;
                }
                else
                {
                    cicleCounter++;
                }
            }

            return false;
        }

        public void Reset()
        {
            throw new NotImplementedException();
        }
    }
}
