import { world, Player, ItemStack, system, ItemTypes, BlockPermutation } from "@minecraft/server";

export function addElement(DynamicProperty, data, player) {
	const Database = JSON.parse(world.getDynamicProperty(DynamicProperty));

  if (Database) {
	let existingData = JSON.stringify(Database);
	world.sendMessage(DynamicProperty, data + ";" + existingData)
	world.setDynamicProperty(DynamicProperty, data + ";" + existingData);
  }
  else {
	world.setDynamicProperty(DynamicProperty, JSON.stringify(data));
	
  }
}