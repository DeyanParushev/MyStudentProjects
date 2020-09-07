namespace P03_FootballBetting.Data
{
    using Microsoft.EntityFrameworkCore;

    using P03_FootballBetting.Data.Models;

    public class FootballBettingContext : DbContext
    {
        public FootballBettingContext() { }

        public FootballBettingContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Bet> Bets { get; set; }

        public DbSet<Color> Colors { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<Game> Games { get; set; }

        public DbSet<Player> Players { get; set; }

        public DbSet<PlayerStatistic> PlayerStatistics { get; set; }

        public DbSet<Position> Positions { get; set; }

        public DbSet<Team> Teams { get; set; }

        public DbSet<Town> Towns { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer("Server=.;Database=FootballBetting;Integrated Security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PlayerStatistic>()
                    .HasKey(k => new { k.PlayerId, k.GameId });

            modelBuilder.Entity<Team>()
                    .HasOne(t => t.PrimaryKitColor)
                    .WithMany(c => c.PrimaryKitTeams)
                    .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Team>()
                    .HasOne(t => t.SecondaryKitColor)
                    .WithMany(c => c.SecondaryKitTeams)
                    .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Game>()
                    .HasOne(g => g.HomeTeam)
                    .WithMany(t => t.HomeGames)
                    .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Game>()
                    .HasOne(g => g.AwayTeam)
                    .WithMany(t => t.AwayGames)
                    .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
