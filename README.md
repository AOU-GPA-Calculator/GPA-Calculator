# AOU GPA Calculator

A simple web-based GPA Calculator developed as a graduation project for the Arab Open University (Faculty of Computer Studies – Networks & Information Security).

The tool allows AOU students to estimate their cumulative GPA on a 4.0 scale based on course grades (0–100) and credit hours.

> **Disclaimer:**  
> This calculator is for guidance and educational purposes only. The official GPA remains the one calculated by the university information system.

---

## Features

- Dynamic course entry (add multiple courses).
- Grade input on a 0–100 scale with conversion to 4.0 GPA.
- Merit classification based on AOU GPA ranges:
  - 4.00–3.67: Excellent  
  - 3.66–3.00: Very Good  
  - 2.99–2.33: Good  
  - 2.32–2.00: Pass  
  - &lt; 2.00: Fail
- Input validation (grades must be 0–100, credit hours must be positive numbers).
- Inline error messages instead of browser alerts.
- Automatic saving and restoring of the last entered courses using `localStorage`.
- Dark/Light mode toggle.
- Print-friendly layout (Print Result button).
- Bilingual usage instructions (English + Arabic).
- AOU-themed visual design with university logo.

---

## How to Use

1. Click **Add New Course** to add a course entry.
2. For each course, enter:
   - The **grade** (0–100).
   - The **credit hours** (positive number).
3. Click **Calculate GPA** to compute the cumulative GPA.
4. The GPA and its **merit classification** will appear at the bottom.
5. Use **Reset** to clear all data.
6. Use **Print Result** to print or save the page as PDF.

---

## Technology Stack

- HTML5  
- CSS3 (responsive, AOU-themed design)  
- Vanilla JavaScript (no external libraries)

---

## Project Structure

- `index.html` – Main single-page application for the GPA calculator.
- `aou-logo.png` – AOU logo used in the header.
- `README.md` – Project documentation.

---

## Future Enhancements

- Support for different grading schemes or campuses.
- Option to export results to PDF or share via email.
- Multi-semester history and charts.
- Accessibility improvements (WCAG compliance).

---

## Author

- **Homam Shaaban**  
  Faculty of Computer Studies – Networks & Information Security  
  Arab Open University