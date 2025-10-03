import { world } from "@minecraft/server";
import { itemShop } from "../config";
import { Database } from "./Database";

let ShopDB = new Database("shopData")
let ShopGroupDB = new Database("shopGroupData")

/**
 * Add a new Group to Shop
 * @param {string} groupname 
 */
async function addGroup(groupname) {
  await ShopGroupDB.set(groupname, groupname)
}

/**
 * Remove a new Group to Shop
 * @param {string} groupname 
 */
 async function removeGroup(groupname) {
  await ShopGroupDB.delete(groupname)
}

/**
 * Remove a new Group to Shop
 * @param {string} itemid 
 * @param {Object} itemdata 
 */
 async function addItem(itemid, itemdata) {
  await ShopDB.set(itemid, itemdata)
}

/**
 * Remove a new Group to Shop
 * @param {string} itemid 
 */
 async function removeItem(itemid) {
  await ShopDB.delete(itemid)
}

/**
 * Remove a new Group to Shop
 * @param {string} itemid 
 */
 async function editItem(itemid, itemdata) {
  await ShopDB.set(itemid)
}

/**
 * Remove a new Group to Shop
 * @returns {string[]}
 */
 async function getGroups() {
  return await ShopGroupDB.keys()
}

/**
 * Remove a new Group to Shop
 * @param {string | undefined} itemid
 * @returns {Object}
 */
 async function getItem(itemid) {
  if (itemid) return await ShopDB.get(itemid) ?? undefined
  let itemData = {}

  // Add Group and Item to Item data
  ShopGroupDB.keys().forEach(group => {
    itemData[group] = {}
    ShopDB.forEach(async (key, value) => {
      if (value.group == group) {
        itemData[group][key] = {
          id: value.id,
          data: value.data,
          price: value.price,
          enchantments: value.enchantments
        }
      } 
    })
  })

  return itemData
}

let Shop = {
  addGroup: addGroup,
  removeGroup: removeGroup,
  addItem: addItem,
  removeItem: removeItem,
  editItem: editItem,
  getGroups: getGroups,
  getItem: getItem
}

world.afterEvents.worldLoad.subscribe(async d => {
  Object.keys(itemShop).forEach(async group => {
    await Shop.addGroup(group)
    Object.keys(itemShop[group]).forEach(async name => {
      let item = itemShop[group][name]
      let data = {
        id: item.id,
        group: group,
        data: item.data,
        price: item.price,
        enchantments: item.enchantments ?? []
      }

      await Shop.addItem(name, data)
    })
  })
})

export { Shop }