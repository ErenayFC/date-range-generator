import moment from 'moment';

/**
 * generateDateRange
 * İki tarih arasındaki tarih aralıklarını belirli bir formatta döndürür.
 * 
 * @param {string} startDate - Başlangıç tarihi (YYYY-MM-DD formatında)
 * @param {string} endDate - Bitiş tarihi (YYYY-MM-DD formatında)
 * @param {string} interval - Aralığın sıklığı ('daily', 'weekly', 'monthly')
 * @returns {string[]} - Tarih aralıkları dizisi
 */
const generateDateRange = (startDate: string, endDate: string, interval: 'daily' | 'weekly' | 'monthly'): string[] => {
  const start = moment(startDate);
  const end = moment(endDate);
  const ranges: string[] = [];

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
    } else if (interval === 'weekly') {
      current.add(1, 'week');
    } else if (interval === 'monthly') {
      current.add(1, 'month');
    }
  }

  return ranges;
};

export default generateDateRange;