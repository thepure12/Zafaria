function Weapon(name, desc, stats)
{
	Item.call(this, name, desc);
	this.itemStats = stats;
}

Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;