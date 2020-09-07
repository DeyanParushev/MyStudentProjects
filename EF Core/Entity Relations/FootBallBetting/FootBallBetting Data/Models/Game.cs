namespace P03_FootballBetting.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Game
    {
        [Key]
        public int GameId { get; set; }

        [Required]
        [ForeignKey("Team")]
        public int HomeTeamId { get; set; }

        [Required]
        [ForeignKey("Team")]
        public int AwayTeamId { get; set; }

        [Required]
        public int HomeTeamGoals { get; set; }

        [Required]
        public int AwayTeamGoals { get; set; }

        [Required]
        public DateTime DateTime { get; set; }

        [Required]
        public decimal HomeTeamBetRate { get; set; }

        [Required]
        public decimal AwayTeamBetRate { get; set; }

        [Required]
        public decimal DrawBetRate { get; set; }

        [Required]
        public int Result { get; set; }

        [InverseProperty("HomeGames")]
        public Team HomeTeam { get; set; }

        [InverseProperty("AwayGames")]
        public Team AwayTeam { get; set; }

        public ICollection<Bet> Bets { get; set; }

        public ICollection<PlayerStatistic> PlayerStatistics { get; set; }

    }
}
