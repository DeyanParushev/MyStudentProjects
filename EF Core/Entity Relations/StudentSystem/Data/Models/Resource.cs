namespace P01_StudentSystem.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Resource
    {
        public enum ResourceTypes 
        {
            Video,
            Presentation,
            Document,
            Other
        }

        [Key]
        public int ResourceId { get; set; }

        [MaxLength(50)]
        [Required]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(max)")]
        public string Url { get; set; }

        [Required]
        public ResourceTypes ResourceType { get; set; }

        [Required]
        [ForeignKey("Course")]
        public int CourseId { get; set; }
    }
}
