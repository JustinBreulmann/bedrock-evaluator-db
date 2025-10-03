import { ChestFormData } from "../forms";
import {world, Player, ItemStack, system, ItemTypes} from "@minecraft/server";
import {ActionFormData,MessageFormData,ModalFormData,ActionFormResponse,MessageFormResponse,ModalFormResponse} from "@minecraft/server-ui";


export function primaryMenu(player) {
	new ChestFormData()
		.title('§l§0Builder Menu')
		.button(1, '§1§lToilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
		.button(2, '§1§lOfen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
		.button(3, '§1§lWeißer Stühl', [`§r§9Stühle`], 'textures/ui/kitchen/chair')
		.button(4, '§1§lWeißer Tisch', [`§r§9Tische`], 'textures/ui/kitchen/small_table_block')
		.button(5, '§1§lUmhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
		.button(6, `§1§lSofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
		.button(7, `§1§lTv`, [`§r§9Technik`], 'textures/ui/living/tv')
		.button(9, '', [], 'textures/blocks/tinted_glass')
		.button(10, '', [], 'textures/blocks/tinted_glass')
		.button(11, '', [], 'textures/blocks/tinted_glass')
		.button(12, '', [], 'textures/blocks/tinted_glass')
		.button(13, '', [], 'textures/blocks/tinted_glass')
		.button(14, '', [], 'textures/blocks/tinted_glass')
		.button(15, '', [], 'textures/blocks/tinted_glass')
		.button(16, '', [], 'textures/blocks/tinted_glass')
		.button(17, '', [], 'textures/blocks/tinted_glass')
		.show(player).then(response => {
			if (response.canceled) return;
			if (response.selection === 1) 
			BathroomMenu(player);
			if (response.selection === 2) 
			KitchenMenu(player);
			if (response.selection === 3) 
			ChairMenu(player);
			if (response.selection === 4) 
			TableMenu(player);
			if (response.selection === 5) 
			DecoMenu(player);
			if (response.selection === 6) 
			LivingMenu(player);
			if (response.selection === 7) 
			TechnicMenu(player);
		})
};


function BathroomMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')
	.button(19, '§eItem : §7Toilette', [`§r§eAnzahl : §71 x \n§ePreis : §7150 Coins`], 'textures/ui/bathroom/toilet')
	.button(28, '§eItem : §7Spiegel', [`§r§eAnzahl : §71 x \n§ePreis : §7160 Coins`], 'textures/ui/bathroom/mirror')
	.button(37, '§eItem : §7Schrank', [`§r§eAnzahl : §71 x \n§ePreis : §750 Coins`], 'textures/ui/bathroom/bathroom_cabinet')
	.button(46, '§eItem : §7Spüle', [`§r§eAnzahl : §71 x \n§ePreis : §7430 Coins`], 'textures/ui/bathroom/bathroom_sink')
	.button(25, '§eItem : §7Dusche', [`§r§eAnzahl : §71 x \n§ePreis : §7600 Coins`],'textures/ui/bathroom/shower')
	.button(34, '§eItem : §7Duschkopf', [`§r§eAnzahl : §71 x \n§ePreis : §750 Coins`], 'textures/ui/bathroom/shower_head')
	.button(52, '§eKategorie : §7Badezimmer Items', [`§r§eAnzahl : §71 x \n§ePreis : §7 3500 Coins`], 'textures/blocks/barrel_top')
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`function shop/bathroom/toilet`)
		if (response.selection === 28) 
		player.runCommandAsync(`function shop/bathroom/mirror`)
		if (response.selection === 37) 
		player.runCommandAsync(`function shop/bathroom/cabinet`)
		if (response.selection === 46) 
		player.runCommandAsync(`function shop/bathroom/sink`)

		if (response.selection === 25) 
		player.runCommandAsync(`function shop/bathroom/shower`)
		if (response.selection === 34) 
		player.runCommandAsync(`function shop/bathroom/shower_head`)
		if (response.selection === 52) 
		player.runCommandAsync(`function all/bathroom`)
	})
}

function KitchenMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')
	.button(19, '§eItem : §7Theke', [`§r§eAnzahl : §71 x \n§ePreis : §71200 Coins`], 'textures/ui/kitchen/kitchen_counter')
	.button(28, '§eItem : §7Spüle', [`§r§eAnzahl : §71 x \n§ePreis : §798 Coins`], 'textures/ui/kitchen/kitchen_sink_water')
	.button(37, '§eItem : §7Schrank', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/kitchen_cabinet')
	.button(46, '§eItem : §7Schublade', [`§r§eAnzahl : §71 x \n§ePreis : §7129 Coins`],'textures/ui/kitchen/kitchen_drawer')
	.button(25, '§eItem : §7Ofen', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/kitchen/oven')
	.button(34, '§eItem : §7Kühlschrank', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/kitchen/fridge')
	.button(43, '§eItem : §7Kaffee Maschine', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/kitchen/coffe_machine')
	.button(52, '§eItem : §7Mikrowelle', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/kitchen/microwave')
	.button(31, '§eItem : §7Brush', [`§r§eAnzahl : §71 x \n§ePreis : §7-`], 'textures/items/brush')
	.button(40, '§eKategorie : §7Küche', [`§r§eAnzahl : §71 x \n§ePreis : §77000 Coins`], 'textures/blocks/barrel_top')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`function shop/kitchen/counter/white`)
		if (response.selection === 28) 
		player.runCommandAsync(`function shop/kitchen/sink/white`)
		if (response.selection === 37) 
		player.runCommandAsync(`function shop/kitchen/cabinet/white`)
		if (response.selection === 46) 
		player.runCommandAsync(`function shop/kitchen/drawer/white`)
		if (response.selection === 25) 
		player.runCommandAsync(`function shop/kitchen/oven`)
		if (response.selection === 34) 
		player.runCommandAsync(`function shop/kitchen/fridge`)
		if (response.selection === 43) 
		player.runCommandAsync(`/function shop/kitchen/coffe_machine`)
		if (response.selection === 52) 
		player.runCommandAsync(`/function shop/extra/microwave`)
	})
}

function ChairMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')

	.button(20, '§eItem : §7Bunter Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/kitchen/chair')
	.button(29, '§eItem : §7Gaming Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7250 Coins`], 'textures/ui/kitchen/gaming_chair')
	.button(38, '§eItem : §7Bar Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7150 Coins`], 'textures/ui/kitchen/bar_stool')
	
	.button(24, '§eItem : §7Eichen  Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7150 Coins`], 'textures/ui/kitchen/oak_chair')
	.button(33, '§eItem : §7Fichten Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7150 Coins`], 'textures/ui/kitchen/spruce_chair')
	.button(42, '§eItem : §7Schwarzeichen Stuhl', [`§r§eAnzahl : §71 x \n§ePreis : §7150 Coins`], 'textures/ui/kitchen/dark_chair')

	.button(31, '§eItem : §7Brush', [`§r§eAnzahl : §71 x \n§ePreis : §7-`], 'textures/items/brush')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 20) 
		player.runCommandAsync(`function shop/chair/concrete/white`)
		if (response.selection === 29) 
		player.runCommandAsync(`function shop/chair/gaming/white`)
		if (response.selection === 38) 
		player.runCommandAsync(`function shop/kitchen/bar_stool/white`)
	
		if (response.selection === 24) 
		player.runCommandAsync(`function shop/chair/wood/oak`)
		if (response.selection === 33) 
		player.runCommandAsync(`function shop/chair/wood/spruce`)
		if (response.selection === 42) 
		player.runCommandAsync(`function shop/chair/wood/dark_oak`)
		if (response.selection === 31) 
		player.runCommandAsync(`give @s brush`)
	})
}
 

function TableMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')

	.button(19, '§eItem : §7Weißer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/table_top_block')
	.button(20, '§eItem : §7Weißer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/small_table_block')

	.button(28, '§eItem : §7Cyan Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/cyan_table_top_block')
	.button(29, '§eItem : Cyan Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/cyan_small_table_block')

	.button(37, '§eItem : §7Blauer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/blue_table_top_block')
	.button(38, '§eItem : §7Blauer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/blue_small_table_block')
	
	.button(46, '§eItem : §7Schwarzer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/black_table_top_block')
	.button(47, '§eItem : §7Schwarzer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/black_small_table_block.pn')

	.button(24, '§eItem : §7Brauer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/brown_table_top_block')
	.button(25, '§eItem : §7Brauer Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/brown_small_table_block')

	.button(33, '§eItem : §7Eichen Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/spruce_chair')
	.button(34, '§eItem : §7Eichen Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/spruce_chair')

	.button(42, '§eItem : §7Schwarzeichen Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/dark_chair')
	.button(42, '§eItem : §7Schwarzeichen Tisch', [`§r§eAnzahl : §71 x \n§ePreis : §7500 Coins`], 'textures/ui/kitchen/dark_chair')

	.button(31, '§eItem : §7Brush', [`§r§eAnzahl : §71 x \n§ePreis : §7-`], 'textures/items/brush')
	.button(40, '§eKategorie : §7Tische', [`§r§eAnzahl : §71 x \n§ePreis : -`], 'textures/blocks/barrel_top')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`function shop/table/white`)
		if (response.selection === 20) 
		player.runCommandAsync(`function shop/table/white_top`)

		if (response.selection === 24) 
		player.runCommandAsync(`function shop/table/brown`)
		if (response.selection === 25) 
		player.runCommandAsync(`function shop/table/brown_top`)

		if (response.selection === 37) 
		player.runCommandAsync(`function shop/table/blue`)
		if (response.selection === 38) 
		player.runCommandAsync(`function shop/table/blue_top`)
	
		if (response.selection === 46) 
		player.runCommandAsync(`function shop/table/black`)
		if (response.selection === 47) 
		player.runCommandAsync(`function shop/table/black_top`)

		if (response.selection === 31) 
		player.runCommandAsync(`give @s brush`)
		if (response.selection === 40) 
		player.runCommandAsync(`function all/table`)
	})
}

function DecoMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')

	.button(19, '§eItem : §7Pfanne', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`],  'textures/ui/decocration/pan')
	.button(28, '§eItem : §7Teller', [`§r§eAnzahl : §71 x \n§ePreis : §710 Coins`],  'textures/ui/decocration/Plate')
	.button(37, '§eItem : §7Besteck', [`§r§eAnzahl : §71 x \n§ePreis : §70 Coins`],  'textures/ui/decocration/Utensils')
	.button(46, '§eItem : §7Toaster', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`],  'textures/ui/decocration/toaster')
	.button(25, '§eItem : §7Tasse', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`],  'textures/items/cup')
	.button(34, '§eItem : §7Licht', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/decocration/light')
	.button(43, '§eItem : §7Brush', [`§r§eAnzahl : §71 x \n§ePreis : §7-`], 'textures/items/brush')
	.button(52, '§eItem : §7Vorhang', [`§r§eAnzahl : §71 x \n§ePreis : §7100 Coins`], 'textures/ui/decocration/curtain')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`function shop/extra/pan`)
		if (response.selection === 28) 
		player.runCommandAsync(`function shop/extra/plate`)

		if (response.selection === 37) 
		player.runCommandAsync(`function shop/extra/utensils`)
		if (response.selection === 46) 
		player.runCommandAsync(`function shop/kitchen/toaster`)

		if (response.selection === 25) 
		player.runCommandAsync(`function shop/kitchen/coffe_cup`)
		if (response.selection === 34) 
		player.runCommandAsync(`function shop/extra/light`)

		if (response.selection === 43) 
		player.runCommandAsync(`give @s brush`)
		if (response.selection === 52) 
		player.runCommandAsync(`function shop/extra/curtain`)
	})
}
 
function LivingMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')

	.button(19, '§eItem : §7Couch', [`§r§eAnzahl : §71 x \n§ePreis : §7799 Coins`], 'textures/ui/living/couch_right')
	.button(28, '§eItem : §7Couch', [`§r§eAnzahl : §71 x \n§ePreis : §7799 Coins`], 'textures/ui/living/couch_inter')
	.button(37, '§eItem : §7Couch', [`§r§eAnzahl : §71 x \n§ePreis : §7799 Coins`], 'textures/ui/living/couch_middle')
	.button(46, '§eItem : §7Couch', [`§r§eAnzahl : §71 x \n§ePreis : §7799 Coins`], 'textures/ui/living/couch_left')

	.button(34, '§eItem : §7Sofa', [`§r§eAnzahl : §71 x \n§ePreis : §7299 Coins`], 'textures/ui/living/sofa')
	.button(43, '§eItem : §7Schrank', [`§r§eAnzahl : §71 x \n§ePreis : §7499 Coins`], 'textures/ui/living/tv_furniture')

	.button(31, '§eItem : §7Brush', [`§r§eAnzahl : §71 x \n§ePreis : §7-`], 'textures/items/brush')
	.button(40, '§eKategorie : §7Wohnzimmer', [`§r§eAnzahl : §71 x \n§ePreis : 4500`], 'textures/blocks/barrel_top')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`/function shop/sofa/sofa_l`)
		if (response.selection === 28) 
		player.runCommandAsync(`/function shop/sofa/sofa_i`)

		if (response.selection === 37) 
		player.runCommandAsync(`/function shop/sofa/sofa_m`)
		if (response.selection === 46) 
		player.runCommandAsync(`/function shop/sofa/sofa_r`)


		if (response.selection === 34) 
		player.runCommandAsync(`/function shop/sofa/sofa`)

		if (response.selection === 43) 
		player.runCommandAsync(`/function shop/tv_funiture/tv_funiture`)
		if (response.selection === 31) 
		player.runCommandAsync(`give @s brush`)
		if (response.selection === 40) 
		player.runCommandAsync(`/function all/living`)
	})
}

function TechnicMenu(player) {
	new ChestFormData('large')
	.title('§l§0Builder Menu')
	.button(1, '§1Toilette', ['§r§9Badezimmer Möbel'], 'textures/ui/bathroom/toilet')
	.button(2, '§1Ofen', ['§r§9Küche Möbel'], 'textures/ui/kitchen/oven')
	.button(3, '§1Stühle', [`§r§9`], 'textures/ui/kitchen/chair')
	.button(4, '§1Tische', [`§r§9`], 'textures/ui/kitchen/small_table_block')
	.button(5, '§1Umhang', [`§r§9Dekoration`], 'textures/ui/decocration/curtain')
	.button(6, `§1Sofa`, [`§r§9Wohnzimmer Möbel`], 'textures/ui/living/sofa')
	.button(7, `§1Tv`, [`§r§9Technik`], 'textures/ui/living/tv')
	.button(9, '', [], 'textures/blocks/tinted_glass')
	.button(10, '', [], 'textures/blocks/tinted_glass')
	.button(11, '', [], 'textures/blocks/tinted_glass')
	.button(12, '', [], 'textures/blocks/tinted_glass')
	.button(13, '', [], 'textures/blocks/tinted_glass')
	.button(14, '', [], 'textures/blocks/tinted_glass')
	.button(15, '', [], 'textures/blocks/tinted_glass')
	.button(16, '', [], 'textures/blocks/tinted_glass')
	.button(17, '', [], 'textures/blocks/tinted_glass')

	.button(19, '', [], 'textures/ui/technic/doorbell')
	.button(28, '', [], 'textures/ui/technic/alarm')
	.button(37, '', [], 'textures/ui/technic/camera')
	.button(46, '', [], 'textures/ui/technic/hydrant')

	.button(21, '', [], 'textures/ui/technic/Pc')
	.button(30, '', [], 'textures/ui/technic/Headphones')
	.button(39, '', [], 'textures/ui/technic/Printer')
	.button(48, '', [], 'textures/ui/technic/roteador_wifi')

	.button(23, '', [], 'textures/ui/technic/ps5')
	.button(32, '', [], 'textures/ui/technic/notebook')
	.button(41, '', [], 'textures/ui/living/tv')
	.button(50, '', [], 'textures/ui/technic/microphone')

	.button(25, '', [], 'textures/ui/technic/traffic_light_0')
	.button(34, '', [], 'textures/ui/technic/cone')
	.button(43, '', [], 'textures/ui/technic/absperrung')
	.button(52, '', [], 'textures/ui/technic/pole')
	
	.show(player).then(response => {
		if (response.canceled) return;
		if (response.selection === 1) 
		BathroomMenu(player);
		if (response.selection === 2) 
		KitchenMenu(player);
		if (response.selection === 3) 
		ChairMenu(player);
		if (response.selection === 4) 
		TableMenu(player);
		if (response.selection === 5) 
		DecoMenu(player);
		if (response.selection === 6) 
		LivingMenu(player);
		if (response.selection === 7) 
		TechnicMenu(player);
		if (response.selection === 19) 
		player.runCommandAsync(`/function shop/extra/doorbell`)
		if (response.selection === 28) 
		player.runCommandAsync(`/function shop/extra/alarm`)
		if (response.selection === 37) 
		player.runCommandAsync(`/function shop/extra/camera`)
		if (response.selection === 46) 
		player.runCommandAsync(`/function shop/extra/hydrant`)

		if (response.selection === 21) 
		player.runCommandAsync(`/function shop/extra/pc`)
		if (response.selection === 30) 
		player.runCommandAsync(`/function shop/extra/headphones`)
		if (response.selection === 39) 
		player.runCommandAsync(`/function shop/extra/printer`)
		if (response.selection === 48) 
		player.runCommandAsync(`/function shop/extra/wifi`)

		if (response.selection === 23) 
		player.runCommandAsync(`/function shop/extra/ps5`)
		if (response.selection === 32) 
		player.runCommandAsync(`/function shop/extra/notebook`)
		if (response.selection === 41) 
		player.runCommandAsync(`/function shop/living/tv`)
		if (response.selection === 50) 
		player.runCommandAsync(`/function shop/extra/microphone`)

		if (response.selection === 25) 
		player.runCommandAsync(`/function shop/extra/traffic_light`)
		if (response.selection === 34) 
		player.runCommandAsync(`/function shop/extra/cone`)
		if (response.selection === 43) 
		player.runCommandAsync(`/function shop/extra/absperrung`)
		if (response.selection === 52) 
		player.runCommandAsync(`/function shop/extra/pole`)
	})
}