import { system, world } from "@minecraft/server";
import {ActionFormData,MessageFormData,ModalFormData,ActionFormResponse,MessageFormResponse,ModalFormResponse} from "@minecraft/server-ui";

export function textToBinary(text) {
	return text.split("").map((char) => {
		return char.charCodeAt(0).toString(2);
	}).join(" ");
}

export function binaryToText(binary) {
	return binary.split(" ").map((char) => {
		return String.fromCharCode(parseInt(char, 2));
	}).join("");
}