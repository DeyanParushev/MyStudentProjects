namespace P01_StudentSystem.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class StudentCourse
    {
        [ForeignKey("Student")]
        [Required]
        public int StudentId { get; set; }

        public Student Student { get; set; }

        [ForeignKey("Course")]
        [Required]
        public int CourseId { get; set; }

        public Course Course { get; set; }
    }
}
