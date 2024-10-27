"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
/**
 * generateDateRange
 * İki tarih arasındaki tarih aralıklarını belirli bir formatta döndürür.
 *
 * @param {string} startDate - Başlangıç tarihi (YYYY-MM-DD formatında)
 * @param {string} endDate - Bitiş tarihi (YYYY-MM-DD formatında)
 * @param {string} interval - Aralığın sıklığı ('daily', 'weekly', 'monthly')
 * @returns {string[]} - Tarih aralıkları dizisi
 */
const generateDateRange = (startDate, endDate, interval) => {
    const start = (0, moment_1.default)(startDate);
    const end = (0, moment_1.default)(endDate);
    const ranges = [];
    if (!start.isValid() || !end.isValid()) {
        throw new Error('Geçersiz tarih formatı. Lütfen YYYY-MM-DD formatını kullanın.');
    }
    if (start.isAfter(end)) {
        throw new Error('Başlangıç tarihi bitiş tarihinden büyük olamaz.');
    }
    let current = start.clone();
    // Tarihler arasında döngü kur
    while (current.isSameOrBefore(end)) {
        ranges.push(current.format('YYYY-MM-DD'));
        // Aralığa göre ilerle
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
