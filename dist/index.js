"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
/**
 * generateDateRange
 * Generates date ranges between two dates with a specified interval.
 *
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @param {string} endDate - End date in YYYY-MM-DD format
 * @param {string} interval - Interval for the ranges ('daily', 'weekly', 'monthly')
 * @returns {string[]} - Array of date ranges
 */
const generateDateRange = (startDate, endDate, interval) => {
    const start = (0, moment_1.default)(startDate);
    const end = (0, moment_1.default)(endDate);
    const ranges = [];
    if (!start.isValid() || !end.isValid()) {
        throw new Error('Invalid date format. Please use YYYY-MM-DD.');
    }
    if (start.isAfter(end)) {
        throw new Error('Start date cannot be after end date.');
    }
    let current = start.clone();
    while (current.isSameOrBefore(end)) {
        ranges.push(current.format('YYYY-MM-DD'));
        if (interval === 'daily') {
            current.add(1, 'day');
        }
        else if (interval === 'weekly') {
            current.add(1, 'week');
        }
        else if (interval === 'monthly') {
            current.add(1, 'month');
        }
    }
    return ranges;
};
exports.default = generateDateRange;
