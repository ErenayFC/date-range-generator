# Date Range Generator

The `date-range-generator` is a simple module to generate date ranges between two dates with specified intervals such as daily, weekly, or monthly. It can be used to generate date periods between a start date and an end date, useful for scheduling, reporting, and tracking.

## Usage

### Installation

First, install the module and its dependencies:

```bash
npm install
```

### Example

```javascript
const generateDateRange = require('date-range-generator').default;

const ranges = generateDateRange("2023-01-01", "2023-01-15", "daily");

console.log(ranges);
// Output: ["2023-01-01", "2023-01-02", "2023-01-03", ..., "2023-01-15"]
```

### Parameters

- `startDate` (string): The starting date in `YYYY-MM-DD` format.
- `endDate` (string): The ending date in `YYYY-MM-DD` format.
- `interval` (string): The interval of dates:
  - `'daily'`: Generate dates for each day.
  - `'weekly'`: Generate dates for each week.
  - `'monthly'`: Generate dates for each month.

### Example Outputs

#### Daily Range

```javascript
generateDateRange("2023-01-01", "2023-01-05", "daily");
// Output: ["2023-01-01", "2023-01-02", "2023-01-03", "2023-01-04", "2023-01-05"]
```

#### Weekly Range

```javascript
generateDateRange("2023-01-01", "2023-01-31", "weekly");
// Output: ["2023-01-01", "2023-01-08", "2023-01-15", "2023-01-22", "2023-01-29"]
```

#### Monthly Range

```javascript
generateDateRange("2023-01-01", "2023-03-31", "monthly");
// Output: ["2023-01-01", "2023-02-01", "2023-03-01"]
```

### Error Handling

1. **Invalid Date Format**: If the date format is not in `YYYY-MM-DD`, the function will throw an error.

    ```javascript
    generateDateRange('invalid-date', '2023-01-05', 'daily');
    // Throws: 'Invalid date format. Please use YYYY-MM-DD.'
    ```

2. **Start Date After End Date**: If the start date is after the end date, an error will be thrown.

    ```javascript
    generateDateRange('2023-01-10', '2023-01-05', 'daily');
    // Throws: 'Start date cannot be after end date.'
    ```

## Testing

The project uses Jest for testing. To run the tests:

```bash
npm test
```

A coverage report will also be generated after the tests are run.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
