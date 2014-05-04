this.activated = function()
{
	if (!player.ship.weaponsOnline)
	{
		return;
	}
	player.ship.dealEnergyDamage(1000,25600,0);
	player.ship.removeEquipment("EQ_ENERGY_BOMB");
	player.consoleMessage(expandDescription("[energy-bomb-activated]"),4.5);
	var sound = new SoundSource;
	sound.sound = "[energy-bomb-fired]";
	sound.play();
}