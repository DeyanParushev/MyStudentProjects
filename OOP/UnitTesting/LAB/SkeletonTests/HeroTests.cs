using NUnit.Framework;

[TestFixture]
public class HeroTests
{
    [TestCase("Ivan")]
    [TestCase("123125dsa2e12!#@!#")]
    [TestCase("")]

    public void HeroIsInstantiatedCorrectly(string name)
    {
        Hero hero = new Hero(name);

        Assert.AreEqual(name, hero.Name);
        Assert.AreEqual(0, hero.Experience);
        Assert.IsInstanceOf<Axe>(hero.Weapon);
    }

    [Test]

    public void HeroGetsTheRightAmountOfExperience()
    {
        Hero hero = new Hero("Ivan");
        Dummy dummy = new Dummy(5, 10);
        hero.Attack(dummy);

        Assert.AreEqual(hero.Experience, dummy.GiveExperience());
    }
}
