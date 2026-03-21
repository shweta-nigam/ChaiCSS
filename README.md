# ChaiCSS

A lightweight utility-first CSS engine built using vanilla JavaScript.

ChaiCSS lets you write small utility classes directly inside your HTML (like `chai-p-20`, `chai-bg-red`) and automatically converts them into inline styles by scanning the DOM. The goal is to understand how utility-first frameworks work internally by building a simplified version from scratch.

---

## Live Demo

👉 [](https://github.com/shweta-nigam/ChaiCSS)

---

## GitHub Repository

👉 [github repo](https://github.com/shweta-nigam/ChaiCSS)

---

## Why ChaiCSS?

Writing CSS for every component again and again becomes repetitive very quickly. Utility-first frameworks solve this by letting you compose styles using small reusable classes.

Instead of writing:

```css
.card {
  padding: 20px;
  background-color: red;
  text-align: center;
}
```

You can just write:

```html
<div class="chai-p-20 chai-bg-red chai-text-center">
  Hello World
</div>
```

ChaiCSS converts those classes into inline styles automatically.

This project is not just a tool, it’s a learning project to understand:

- how class parsing works  
- how styles can be dynamically applied  
- how frameworks like Tailwind work internally  

---

## How to Use

Just add ChaiCSS to your project and start using `chai-*` classes in your HTML.

### Example

```html
<div class="chai-p-20 chai-bg-red chai-text-center">
  Hello World
</div>
```

### Output (auto-generated)

```html
<div style="padding:20px; background-color:#ef4444; text-align:center;">
  Hello World
</div>
```

No manual CSS required.

---

## How It Works

- Runs after the DOM is loaded  
- Scans all elements in the document  
- Filters classes that start with `chai-`  
- Parses each class into a style object  
- Applies styles directly using `element.style`  
- Removes original `chai-*` classes after processing  
- Uses `MutationObserver` to handle dynamically added elements  

---

## Features

### Spacing
- Padding → `chai-p-10`, `chai-pt-5`, `chai-px-20`  
- Margin → `chai-m-10`, `chai-mt-5`, `chai-my-20`  

### Colors
- Background → `chai-bg-red`, `chai-bg-blue`  
- Text → `chai-text-white`, `chai-text-black`  

### Typography
- Font size → `chai-fs-16`  
- Font weight → `chai-fw-bold`  
- Text alignment → `chai-text-center`, `chai-text-left`  

### Layout
- Flexbox → `chai-flex`, `chai-flex-col`, `chai-flex-row`  
- Alignment → `chai-items-center`, `chai-justify-between`  
- Gap → `chai-gap-10`  

### Sizing
- Width → `chai-w-100`, `chai-w-full`  
- Height → `chai-h-200`, `chai-h-screen`  

### Borders
- Radius → `chai-rounded-10`  
- Border → `chai-border-2`, `chai-border-2-red`  

### Positioning
- Position → `chai-pos-relative`, `chai-pos-absolute`  
- Offsets → `chai-top-10`, `chai-left-20`  

### Effects
- Shadow → `chai-shadow`, `chai-shadow-lg`  
- Overflow → `chai-overflow-hidden`  
- Transition → `chai-transition`  

---

## Example

```html
<div class="chai-flex chai-justify-between chai-p-20 chai-bg-blue">
  <span class="chai-text-white">Left</span>
  <span class="chai-text-white">Right</span>
</div>
```

---

## Project Structure

```
src/
  parser.js        // Converts class → style object
  applyStyles.js   // Applies styles to a single element
  engine.js        // Runs styling on entire DOM
  main.js          // Initializes and observes DOM changes
```

---

## Key Concepts Covered

- DOM traversal and manipulation  
- String parsing and pattern extraction  
- Dynamic style application using JavaScript  
- MutationObserver for reactive updates  
- Building a reusable client-side library  

---

## Future Improvements

- Responsive utilities (e.g. `chai-md-p-20`)  
- Hover and state-based styles  
- Custom color configuration  
- Class conflict resolution  
- Performance optimizations  

---

## Contributing

Contributions are welcome.

- Fork the repository  
- Create a new branch  
- Make your changes  
- Submit a pull request  

---

## License

This project is licensed under the MIT License.