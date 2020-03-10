using System;
using NUnit.Framework;

[TestFixture]
public class AxeTests
{
    [TestCase(0, 5)]
    [TestCase(5, 0)]
    [TestCase(-1, 5)]
    [TestCase(5, -1)]
    [TestCase(5, 5)]

    public void AxeIsCorrectlyInstantiated(int attack, int durability)
    {
        Axe axe = new Axe(attack, durability);

        Assert.AreEqual(axe.AttackPoints, attack);
        Assert.AreEqual(axe.DurabilityPoints, durability);
    }

    [TestCase(5, -1)]
    [TestCase(1, 0)]

    public void AttackMethodThrowsAnErrorForDurabilityLessOrEqualToZero(int attack, int durability)
    {
        Axe axe = new Axe(attack, durability);
        Dummy dummy = new Dummy(15, 15);
        Assert.Throws<InvalidOperationException>(delegate { axe.Attack(dummy); });
    }

    [TestCase(5, 5)]

    public void AttackMethodReducesTheDurabilityByOne(int attack, int durability)
    {
        Axe axe = new Axe(attack, durability);
        Dummy dummy = new Dummy(15, 15);
        axe.Attack(dummy);
        Assert.AreEqual(4, axe.DurabilityPoints);
    }
}
