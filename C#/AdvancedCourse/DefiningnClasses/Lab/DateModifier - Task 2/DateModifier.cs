namespace DefiningClasses
{
    using System;

    public class DateModifier
    {
        private int daysDifference;

        public int GetDaysDifference(string date, string secondDate)
        {
            DateTime startDate = StringChanger(date);
            DateTime endDate = StringChanger(secondDate);

            daysDifference = (int) Math.Abs((endDate - startDate).TotalDays);

            return daysDifference;
        }

        private DateTime StringChanger(string inputDate)
        {
            string workingDate = inputDate.Replace(' ', '-');

            DateTime date = DateTime.Parse(workingDate);

            return date;
        }
    }
}
