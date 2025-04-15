# AccFoods CheckList 🥩🚚

This is a mobile-first checklist app for delivery drivers working with **ACC Foods**. It’s designed primarily for use on smartphones to ensure proper van loading, documentation, and route verification before leaving the **US Foods** warehouse. The app is used daily by **ACC Foods** to manage and verify van operations. All form submissions are automatically sent to a connected **Google Sheet** via a Google Apps Script Web App, allowing the company to track departures, deliveries, and potential issues in real time.

---

## 📋 Features

- ✅ **Van Departure Checklist Form**
  - Captures name, van number, date, and number of orders
  - Dynamically renders checklist sections per order
  - Records cities and product categories (Frozen, Dry, Refrigerated, Chemicals)

- 📦 **Checklist Submission**
  - Form data is validated with required fields
  - Missing fields trigger an animated alert with highlighted inputs
  - Smooth loading spinner followed by a checkmark confirmation
  - All form data is sent to a **Google Sheets backend** via Apps Script

- 📚 **FQA (Frequently Questioned Answers)**
  - A helpful troubleshooting guide for drivers
  - Common van issues with safety-first steps
  - Styled Q&A format, optimized for quick reading on mobile

- 🧠 Offline-safe design
  - Drivers can open the page before leaving signal range and fill out the form offline
  - Designed to be as fast and responsive as possible

---

## 📦 Tech Stack

- **React 18 + TypeScript**
- **CSS / Tailwind-inspired layout**
- **Google Apps Script** for backend form handling (Google Sheets)
- **GitHub Pages** for free, static hosting

---

## 🚀 Live Demo

🌐 [https://Dherington1.github.io/AccFoods-CheckList](https://Dherington1.github.io/AccFoods-CheckList)
