const generateDateRange = require('../dist/index.js').default;

describe('generateDateRange', () => {
  
  test('should generate daily ranges between two dates', () => {
    const ranges = generateDateRange('2023-01-01', '2023-01-05', 'daily');
    expect(ranges).toEqual([
      '2023-01-01',
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05'
    ]);
  });

  test('should generate weekly ranges between two dates', () => {
    const ranges = generateDateRange('2023-01-01', '2023-01-31', 'weekly');
    expect(ranges).toEqual([
      '2023-01-01',
      '2023-01-08',
      '2023-01-15',
      '2023-01-22',
      '2023-01-29'
    ]);
  });

  test('should generate monthly ranges between two dates', () => {
    const ranges = generateDateRange('2023-01-01', '2023-03-31', 'monthly');
    expect(ranges).toEqual([
      '2023-01-01',
      '2023-02-01',
      '2023-03-01'
    ]);
  });

  test('should throw an error for invalid date format', () => {
    expect(() => {
      generateDateRange('invalid-date', '2023-01-05', 'daily');
    }).toThrow('Geçersiz tarih formatı. Lütfen YYYY-MM-DD formatını kullanın.');
  });

  test('should throw an error if start date is after end date', () => {
    expect(() => {
      generateDateRange('2023-01-10', '2023-01-05', 'daily');
    }).toThrow('Başlangıç tarihi bitiş tarihinden büyük olamaz.');
  });
});