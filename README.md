# React Dot Art Editor

## Overview

This project is a simple dot art editor built with React and TypeScript. It features an 8×8 grid, a palette of 3 colors (selectable via color pickers), and a pen selector to draw on the grid. The current palette and grid state are output in JSON format, which you can edit directly to update the editor.

## Features

- **8×8 Grid:** The canvas consists of an 8×8 grid where every cell is initially transparent. Transparent cells are displayed with a checkered pattern.
- **Color & Pen Selector:** Choose 3 colors using color pickers and select a pen for drawing. Pen 0 represents transparency.
- **Real-Time JSON Output:** Both the palette and grid state are shown in JSON format. Changes in the text areas update the editor state once you move focus away from the text area.
- **Direct JSON Editing:** Edit the JSON directly to update the palette and grid state; changes are applied immediately after editing.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-dot-art-editor.git
   cd react-dot-art-editor
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open the provided URL (e.g., `http://localhost:3000`) in your browser.

## Usage

- **Drawing on the Grid:** Click or drag on the 8×8 grid to fill cells with the color of the selected pen.
- **Pen Selection:** Use the pen selector buttons to choose between transparency (pen 0) and the three colors (pens 1–3). The selected pen is highlighted.
- **Color Pickers:** Change each pen’s color using the corresponding color picker.
- **Direct JSON Editing:** Edit the JSON displayed for the palette and grid in the provided text areas. When the text area loses focus, the changes are parsed and applied to the editor.

## File Structure

```
react-dot-art-editor/
├── index.html            // Entry point HTML
├── package.json          // npm configuration file
├── tsconfig.json         // TypeScript configuration file
├── vite.config.ts        // Vite configuration file
└── src/
    ├── App.tsx           // Main component (dot art editor)
    ├── App.css           // Stylesheet
    └── ...               // Other files from the Vite template
```

## Customization

- **Grid Size:** Modify the `GRID_SIZE` constant in `App.tsx` to change the dimensions of the grid.
- **Additional Pens/Colors:** Extend the pen selector logic to add more colors or pens.
- **Export/Import:** Use the JSON outputs to implement export/import functionality for your dot art.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
