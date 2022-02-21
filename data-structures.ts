import {ILayout} from "./src/types";
import {defaultTheme} from "./src/layouts/colours";

export const generalLayout: ILayout = {
    name: "General",
    properties: [
        {
            name: "Theme",
            type: "select",
            options: ["Light", "Dark", "Gray", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
            default: defaultTheme,
        },
        {
            name: "title",
            type: "text",
            default: "This is a Title",
            placeholder: "Title Text",
        },
        {
            name: "subtitle",
            type: "text",
            default: "This is a Subtitle",
            placeholder: "Subtitle Text",
        },
    ],
    getCSS,
    Component,
};

export const projectLayout: ILayout = {
    name: "Project",
    properties: [
        {
            name: "Theme",
            type: "select",
            options: ["Light", "Dark", "Gray", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
            default: defaultTheme,
        },
        {
            name: "title",
            type: "text",
            default: "This is a Title",
            placeholder: "Title Text",
        },
        {
            name: "subtitle",
            type: "text",
            default: "This is a Subtitle",
            placeholder: "Subtitle Text",
        },
    ],
    getCSS,
    Component,
};


export const leftImage: ILayout = {
    name: "Image Left",
    properties: [
        {
            name: "Theme",
            type: "select",
            options: ["Light", "Dark", "Gray", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
            default: defaultTheme,
        },
        {
            name: "title",
            type: "text",
            default: "",
            placeholder: "Title Text",
        },
        {
            name: "subtitle",
            type: "text",
            default: "",
            placeholder: "Subtitle Text",
        },
        {
            name: "image",
            type: "text",
            default: "https://cdn.cloudflare.steamstatic.com/steam/apps/1663040/ss_dddb99b7d2bae8f8a14deb74f58f0895919bdb68.1920x1080.jpg?t=1633022423",
            placeholder: "URL Text",
        },
    ],
    getCSS,
    Component,
};


export const topImage: ILayout = {
    name: "Image Top",
    properties: [
        {
            name: "Theme",
            type: "select",
            options: ["Light", "Dark", "Gray", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
            default: defaultTheme,
        },
        {
            name: "title",
            type: "text",
            default: "",
            placeholder: "Title Text",
        },
        {
            name: "image",
            type: "text",
            default: "https://cdn.cloudflare.steamstatic.com/steam/apps/1663040/ss_dddb99b7d2bae8f8a14deb74f58f0895919bdb68.1920x1080.jpg?t=1633022423",
            placeholder: "URL Text",
        },
    ],
    getCSS,
    Component,
};