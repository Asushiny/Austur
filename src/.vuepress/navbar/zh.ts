import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
	"/",
	{
		text: "笔记",
		icon: "note",
		link: "/notes/politics",
	},
	{
		text: "歌词",
		icon: "blog",
		link: "/lyrics/xiju",
	},
	{
		text: "时间轴",
		icon: "time",
		link: "/timeline/",
	},
	{
		text: "回顾",
		icon: "page",
		link: "/docs/",
	},
]);
