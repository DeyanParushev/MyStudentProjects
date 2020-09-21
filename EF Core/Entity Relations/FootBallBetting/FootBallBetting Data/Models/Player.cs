namespace P03_FootballBetting.Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Player
    {
        [Key]
        public int PlayerId { get; set; }

        [MaxLength(50)]
        [Required]
        public string Name { get; set; }

        [Required]
        public int SquadNumber { get; set; }

        [ForeignKey("Team")]
        [Required]
        public int TeamId { get; set; }

        [Required]
        public int PositionId { get; set; }

        [Required]
        public bool IsInjured { get; set; }

        public Team Team { get; set; }

        public Position Position { get; set; }

        public ICollection<PlayerStatistic> PlayerStatistics { get; set; }
    }
}
