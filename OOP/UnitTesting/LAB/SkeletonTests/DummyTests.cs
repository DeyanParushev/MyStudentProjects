using System;
using NUnit.Framework;

[TestFixture]
public class DummyTests
{
    [TestCase(15, 15)]
    [TestCase(0, 15)]
    [TestCase(-5, 15)]
    public void DummyIsInstatiatedWithAnyGivenInt(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);

        Assert.AreEqual(health, dummy.Health);
    }

    [TestCase(0, 15)]
    [TestCase(-5, 15)]
    public void DummyThrowsAnErrorIfAttackedWithLesThanZeroHealth(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);

        Assert.AreEqual(true, dummy.IsDead());
        Assert.Throws<InvalidOperationException>(delegate { dummy.TakeAttack(5); }, "Dummy is dead.");
    }

    [TestCase(0, 15)]
    [TestCase(-5, 15)]
    public void DummyMethodIsDeadReturnsTrueWhenHealthIsLessOrEqualToZero(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);

        Assert.AreEqual(true, dummy.IsDead());
    }

    [TestCase(5, 15)]

    public void DummyMethodIsDeadReturnsFalseWhenHealthIsLessOrEqualToZero(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);

        Assert.AreEqual(false, dummy.IsDead());
    }

    [TestCase(5, 15, 1)]
    [TestCase(5, 15, 5)]
    [TestCase(5, 15, -2)]

    public void DummyTakeDamageReducesTheHealthCorrectly(int health, int experience, int attackDamage)
    {
        Dummy dummy = new Dummy(health, experience);
        int remainingHealth = dummy.Health - attackDamage;

        dummy.TakeAttack(attackDamage);

        Assert.AreEqual(remainingHealth, dummy.Health);
    }

    [TestCase(5, 15)]
    [TestCase(1, 15)]

    public void GetExperienceMethodThrowsExceptionForALiveDummy(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);

        Assert.Throws<InvalidOperationException>(delegate { dummy.GiveExperience(); }, "Target is not dead.");
    }

    [TestCase(0, 15)]
    [TestCase(-1, 15)]

    public void DummyReturnsTheCorrectAmountOfExperienceWhenKilled(int health, int experience)
    {
        Dummy dummy = new Dummy(health, experience);
        int expetedExperience = 15;
        Assert.AreEqual(expetedExperience, dummy.GiveExperience());
    }
}
