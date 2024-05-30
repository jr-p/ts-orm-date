import { addHours, addHoursToDate, subHours, subHoursToDate } from '../src/index';

describe('ts-orm-date', () => {
  it('should add hours to the current date', () => {
    const currentDate = new Date();
    const newDate = addHours(1);
    expect(newDate.getTime()).toBeGreaterThan(currentDate.getTime());
  });

  it('should add hours to a specific date object', () => {
    const date = new Date('2024-05-29T00:00:00Z');
    const newDate = addHoursToDate(date, 1);
    expect(newDate.getUTCHours()).toBe(1);
  });

  it('should add hours to a specific date string', () => {
    const date = '2024-05-29T00:00:00Z';
    const newDate = addHoursToDate(date, 1);
    expect(newDate.getUTCHours()).toBe(1);
  });

  it('should throw an error for invalid date string', () => {
    expect(() => addHoursToDate('invalid-date', 1)).toThrow('Invalid date input');
  });

  it('should subtract hours from the current date', () => {
    const currentDate = new Date();
    const newDate = subHours(1);
    expect(newDate.getTime()).toBeLessThan(currentDate.getTime());
  });

  it('should subtract hours from a specific date object', () => {
    const date = new Date('2024-05-29T00:00:00Z');
    const newDate = subHoursToDate(date, 1);
    expect(newDate.getUTCHours()).toBe(23);
  });

  it('should subtract hours from a specific date string', () => {
    const date = '2024-05-29T00:00:00Z';
    const newDate = subHoursToDate(date, 1);
    expect(newDate.getUTCHours()).toBe(23);
  });

  it('should throw an error for invalid date string', () => {
    expect(() => subHoursToDate('invalid-date', 1)).toThrow('Invalid date input');
  });
});