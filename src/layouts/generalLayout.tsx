import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { colourThemes, defaultTheme } from "./colours";
import { getTheme, Logo } from "./utils";

const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  return `
  .top {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: ${colours.bg};
    color: ${colours.fg};
    padding: 80px;
  }

    .logo {
      position: absolute;
      top: 60px;
      left: 60px;
    }

    h1 {
      margin: 0;
      text-align: right;
      font-size: 1.8em;
      font-weight: 800;
      max-width: 1700px;
    }

    .dicon-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 80px;
    }

    .dicon {
      width: 256px;
      height: 256px;
      border-radius: 2px;
    }

    .em {
      color: ${colours.accent_light};
    }

    .subtitle {
      margin-bottom: 48px;
      text-align: right;
      font-size: 80px;
      font-family: "JetBrains Mono", monospace;
      color: ${colours.accent_dark};
    }
    `;
};

const Component: LayoutComponent = ({ config }) => {
  const theme = getTheme(config);
  const subtitle = config.subtitle;
  const title = config.title;

  return (
    <div className="top">
      <Logo config={config} />

      <div className="content">
        <div className="subtitle">{subtitle}</div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export const generalLayout: ILayout = {
  name: "General",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark", "Gray", "Default", "Brown", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Red"],
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
