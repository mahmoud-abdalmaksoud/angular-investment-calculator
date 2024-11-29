# Angular Investment Calculator

The Angular Investment Calculator is a web-based application designed to calculate and visualize the growth of an investment over a specified time period. The app allows users to input financial parameters and view projected growth in a dynamic, interactive table. This project is a practical exercise for learning and applying Angular concepts while building a real-world tool.

---

## **What Does the Project Do?**

The Investment Calculator provides users with an intuitive interface to:
- Input financial details:
  - **Initial Investment**: The starting amount of money.
  - **Annual Contribution**: The amount added to the investment each year.
  - **Expected Annual Return**: The projected percentage growth rate per year.
  - **Investment Duration**: The number of years the investment will grow.
- Calculate projected annual results, including:
  - **Year-by-Year Investment Value**: How much the investment is worth at the end of each year.
  - **Annual Interest Earned**: The interest generated in a specific year.
  - **Total Interest Accumulated**: The total interest earned up to a given year.
  - **Total Invested Capital**: The cumulative amount invested over the years.
- View results in a detailed, dynamically generated table.
- Enjoy a responsive, user-friendly design that works on both desktop and mobile.

---

## **Features**

1. **Interactive Input Form**:
   - Collects investment parameters using an Angular form.
   - Employs **two-way data binding** for real-time updates.

2. **Dynamic Results Table**:
   - Displays calculated investment projections.
   - Uses Angular directives (`*ngFor`, `*ngIf`) for dynamic rendering.
   - Applies the Angular **currency pipe** for clear financial formatting.

3. **Header Component**:
   - Provides a visually appealing title and logo for the app.

4. **Reusability & Modularity**:
   - Structured with Angular components, services, and (optionally) signals for clean, maintainable code.

5. **Customizable Logic**:
   - Easily extendable for advanced financial features like inflation adjustments, compound interest with variable rates, and more.

---

## **Why Use This Project?**

This project is ideal for:
- **Developers learning Angular**: Explore key concepts like components, services, forms, and reactive programming.
- **Educators or trainers**: Use as a teaching tool for demonstrating Angular essentials.
- **Financial enthusiasts**: Understand the power of visualization in financial planning.
- **Contributors to open-source**: Extend and improve the application with additional features.

---

## **Technologies Used**

- **Framework**: Angular
- **Language**: TypeScript
- **Styling**: CSS
- **Build Tool**: Angular CLI
- **Dependency Management**: npm
- **State Management**: Angular Signals (Optional)

---

## **How to Use the App**

1. **Enter Your Investment Details**:
   - Specify the initial investment amount.
   - Input how much you plan to invest annually.
   - Enter the expected annual return rate (percentage).
   - Set the duration for the investment in years.

2. **Click "Calculate"**:
   - View the yearly growth projections in a detailed table.

3. **Analyze the Results**:
   - Assess how the investment grows year by year, including interest earned and total value.

---

## **How to Run the Project**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/angular-investment-calculator.git
