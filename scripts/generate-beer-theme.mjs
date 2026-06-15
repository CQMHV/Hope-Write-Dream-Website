import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
    argbFromHex,
    Hct,
    hexFromArgb,
    MaterialDynamicColors,
    SchemeTonalSpot,
} from "@material/material-color-utilities";
import { siteConfig } from "../src/data/site.config.mjs";

const sourceCssPath = fileURLToPath(new URL("../node_modules/beercss/dist/cdn/beer.min.css", import.meta.url));
const sourceAssetsPath = fileURLToPath(new URL("../node_modules/beercss/dist/cdn/", import.meta.url));
const targetCssPath = fileURLToPath(new URL("../src/generated/beer-themed.css", import.meta.url));
const targetFontsCssPath = fileURLToPath(new URL("../src/generated/noto-fonts.css", import.meta.url));
const targetAssetsPath = fileURLToPath(new URL("../public/beercss/", import.meta.url));
const targetFontsPath = fileURLToPath(new URL("../public/fonts/", import.meta.url));
const brandThemeColor = siteConfig.themeSeedColor;
const fontStack = [
    "\"Noto Sans\"",
    "\"Noto Sans SC\"",
    "\"Noto Sans TC\"",
    "\"Noto Sans JP\"",
    "sans-serif",
].join(",");
const fontCssFiles = [
    "../node_modules/@fontsource/noto-sans/latin-400.css",
    "../node_modules/@fontsource/noto-sans/latin-500.css",
    "../node_modules/@fontsource/noto-sans/latin-700.css",
    "../node_modules/@fontsource/noto-sans-jp/japanese-400.css",
    "../node_modules/@fontsource/noto-sans-jp/japanese-500.css",
    "../node_modules/@fontsource/noto-sans-jp/japanese-700.css",
    "../node_modules/@fontsource/noto-sans-sc/chinese-simplified-400.css",
    "../node_modules/@fontsource/noto-sans-sc/chinese-simplified-500.css",
    "../node_modules/@fontsource/noto-sans-sc/chinese-simplified-700.css",
    "../node_modules/@fontsource/noto-sans-tc/chinese-traditional-400.css",
    "../node_modules/@fontsource/noto-sans-tc/chinese-traditional-500.css",
    "../node_modules/@fontsource/noto-sans-tc/chinese-traditional-700.css",
];

const themeVariables = [
    ["--primary", MaterialDynamicColors.primary],
    ["--on-primary", MaterialDynamicColors.onPrimary],
    ["--primary-container", MaterialDynamicColors.primaryContainer],
    ["--on-primary-container", MaterialDynamicColors.onPrimaryContainer],
    ["--secondary", MaterialDynamicColors.secondary],
    ["--on-secondary", MaterialDynamicColors.onSecondary],
    ["--secondary-container", MaterialDynamicColors.secondaryContainer],
    ["--on-secondary-container", MaterialDynamicColors.onSecondaryContainer],
    ["--tertiary", MaterialDynamicColors.tertiary],
    ["--on-tertiary", MaterialDynamicColors.onTertiary],
    ["--tertiary-container", MaterialDynamicColors.tertiaryContainer],
    ["--on-tertiary-container", MaterialDynamicColors.onTertiaryContainer],
    ["--error", MaterialDynamicColors.error],
    ["--on-error", MaterialDynamicColors.onError],
    ["--error-container", MaterialDynamicColors.errorContainer],
    ["--on-error-container", MaterialDynamicColors.onErrorContainer],
    ["--background", MaterialDynamicColors.background],
    ["--on-background", MaterialDynamicColors.onBackground],
    ["--surface", MaterialDynamicColors.surface],
    ["--on-surface", MaterialDynamicColors.onSurface],
    ["--surface-variant", MaterialDynamicColors.surfaceVariant],
    ["--on-surface-variant", MaterialDynamicColors.onSurfaceVariant],
    ["--outline", MaterialDynamicColors.outline],
    ["--outline-variant", MaterialDynamicColors.outlineVariant],
    ["--shadow", MaterialDynamicColors.shadow],
    ["--scrim", MaterialDynamicColors.scrim],
    ["--inverse-surface", MaterialDynamicColors.inverseSurface],
    ["--inverse-on-surface", MaterialDynamicColors.inverseOnSurface],
    ["--inverse-primary", MaterialDynamicColors.inversePrimary],
    ["--surface-dim", MaterialDynamicColors.surfaceDim],
    ["--surface-bright", MaterialDynamicColors.surfaceBright],
    ["--surface-container-lowest", MaterialDynamicColors.surfaceContainerLowest],
    ["--surface-container-low", MaterialDynamicColors.surfaceContainerLow],
    ["--surface-container", MaterialDynamicColors.surfaceContainer],
    ["--surface-container-high", MaterialDynamicColors.surfaceContainerHigh],
    ["--surface-container-highest", MaterialDynamicColors.surfaceContainerHighest],
];

function createTheme(isDark) {
    const sourceColor = Hct.fromInt(argbFromHex(brandThemeColor));
    const scheme = new SchemeTonalSpot(sourceColor, isDark, 0);

    return themeVariables
        .map(([cssName, color]) => `${cssName}:${hexFromArgb(color.getArgb(scheme))};`)
        .join("");
}

function replaceRequired(css, pattern, value) {
    if (!pattern.test(css)) {
        throw new Error(`Beer CSS block was not found for pattern: ${pattern}`);
    }

    return css.replace(pattern, value);
}

let css = await readFile(sourceCssPath, "utf8");
let fontCss = "";

css = css.replace(
    /--font:Inter,Roboto,"Helvetica Neue","Arial Nova","Nimbus Sans","Noto Sans",Arial,sans-serif;/,
    `--font:${fontStack};`,
);

css = replaceRequired(
    css,
    /:root,body\.light\{--primary:#6750a4;[^}]*--surface-container-highest:#e6e1e6\}/,
    `:root,body.light,html[data-theme-mode="light"] body{${createTheme(false)}}`,
);
css = replaceRequired(
    css,
    /body\.dark\{--primary:#cfbcff;[^}]*--surface-container-highest:#363438\}/,
    `body.dark,html[data-theme-mode="dark"] body{${createTheme(true)}}`,
);
css = css.replace(/body\.dark\{--image:/, "body.dark,html[data-theme-mode=\"dark\"] body{--image:");
css = css.replace(/url\((?!data:|https?:|\/)([^)]+)\)/g, "url(/beercss/$1)");
css = css.replace(
    /,url\(https:\/\/cdn\.jsdelivr\.net\/npm\/beercss@[^)]+\/dist\/cdn\/[^)]+\.woff2\)format\("woff2"\)/g,
    "",
);

await mkdir(dirname(targetCssPath), { recursive: true });
await mkdir(targetAssetsPath, { recursive: true });
await mkdir(targetFontsPath, { recursive: true });
await writeFile(targetCssPath, css);

for (const fontCssFile of fontCssFiles) {
    const sourceFontCssPath = fileURLToPath(new URL(fontCssFile, import.meta.url));
    const sourceFontPath = dirname(sourceFontCssPath);
    const sourceFontCss = await readFile(sourceFontCssPath, "utf8");
    const woff2File = sourceFontCss.match(/files\/([^")]+\.woff2)/)?.[1];

    if (!woff2File) {
        throw new Error(`Font file was not found in ${sourceFontCssPath}`);
    }

    fontCss += sourceFontCss.replace(
        /src: url\(\.\/files\/([^")]+\.woff2)\) format\('woff2'\), url\(\.\/files\/([^")]+\.woff)\) format\('woff'\);/,
        "src: url('/fonts/$1') format('woff2');",
    );
    fontCss += "\n";

    await copyFile(join(sourceFontPath, "files", woff2File), join(targetFontsPath, woff2File));
}

await writeFile(targetFontsCssPath, fontCss);

for (const entry of await readdir(sourceAssetsPath)) {
    if (entry.endsWith(".css") || entry.endsWith(".js")) {
        continue;
    }

    await copyFile(join(sourceAssetsPath, entry), join(targetAssetsPath, entry));
}

console.log(`Generated themed Beer CSS: ${targetCssPath}`);
console.log(`Generated Noto font CSS: ${targetFontsCssPath}`);
