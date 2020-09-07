namespace P01_StudentSystem.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Dynamic;

    public class Homework
    {
        public enum ContentTypes 
        { 
            Application,
            Pdf,
            Zip
        }

        [Key]
        public int HomeworkId { get; set; }

        [Column(TypeName = "varchar(max)")]
        public string Content { get; set; }

        [Required]
        public ContentTypes ContentType { get; set; }

        [Required]
        public DateTime SubmissionTime { get; set; }

        [Required]
        public int StudentId { get; set; }

        [Required]
        public int CourseId { get; set; }
    }
}
