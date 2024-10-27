declare module 'date-range-generator' {
    /**
     * Generates date ranges between two dates with a specified interval.
     * 
     * @param {string} startDate - The starting date in YYYY-MM-DD format.
     * @param {string} endDate - The ending date in YYYY-MM-DD format.
     * @param {'daily' | 'weekly' | 'monthly'} interval - The interval for the ranges ('daily', 'weekly', 'monthly').
     * @returns {string[]} - An array of date strings in the format YYYY-MM-DD.
     * @throws {Error} - Throws an error if the date format is invalid or if the start date is after the end date.
     */
    export function generateDateRange(
      startDate: string,
      endDate: string,
      interval: 'daily' | 'weekly' | 'monthly'
    ): string[];
  }