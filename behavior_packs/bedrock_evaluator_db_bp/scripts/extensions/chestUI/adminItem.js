import { ChestFormData } from "../forms";
import {world, Player, ItemStack, system, ItemTypes} from "@minecraft/server";
import {ActionFormData,MessageFormData,ModalFormData,ActionFormResponse,MessageFormResponse,ModalFormResponse} from "@minecraft/server-ui";

export function AdminMenu(player) {
	new ChestFormData()
		.title('§l§0Admin Item')
		.button(9, 'Barrier', [], 'textures/blocks/barrier')
		.button(10, 'Lichtblock', [], 'textures/items/light_block_15')
		.button(11, 'Befehlsblock', [], 'textures/blocks/command_block')
		.button(12, 'Structureblock', [], 'textures/blocks/structure_block_data')
		.button(13, 'Structurevoid', [], 'textures/blocks/structure_void')
		.button(14, 'Besen', [], 'textures/items/brush')
		.button(15, 'Debug Stick', [], 'textures/items/stick')
		.button(16, 'NPC', [], 'textures/items/egg_npc')
		.button(17, 'Moderator', [], 'textures/items/microfon')
		.show(player).then(response => {
			if (response.canceled) return;
			if (response.selection === 9) {
			const inv = player.getComponent("inventory").container
    		inv.addItem(new ItemStack("minecraft:barrier",1))
			}
			if (response.selection === 10) {
			player.runCommandAsync("give @s light_block 1 15")
			}
			if (response.selection === 11) {
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("minecraft:command_block",1))
				}
			if (response.selection === 12) {
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("minecraft:structure_block",1))
				}
			if (response.selection === 13) {
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("minecraft:structure_void",1))
				}
			if (response.selection === 14){
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("minecraft:brush",1))
				}
			if (response.selection === 15) 
			{
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("block:debug_stick_block",1))
				}
			if (response.selection === 16) 
			{
			player.runCommandAsync(`give @s spawn_egg 1 51`)
				}
			if (response.selection === 17) 			{
				const inv = player.getComponent("inventory").container
				inv.addItem(new ItemStack("moderator:microfon",1))
				}
		})
};