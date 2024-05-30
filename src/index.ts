type DateInput = Date | string;

/**
 * 日付文字列またはDateオブジェクトをDateオブジェクトに変換する
 * @param date - 基準となるDateオブジェクトまたは日付文字列
 * @returns Dateオブジェクト
 */
function parseDateInput(date: DateInput): Date {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid date input: ${date}`);
  }
  return parsedDate;
}

/**
 * 現在の日時に指定された時間を加算
 * @param hours - 加算する時間（負の値で減算）
 * @returns 加算後のDateオブジェクト
 */
export function addHours(hours: number): Date {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  return date;
}

/**
 * 指定された日時に指定された時間を加算
 * @param date - 基準となるDateオブジェクトまたは日付文字列
 * @param hours - 加算する時間（負の値で減算）
 * @returns 加算後のDateオブジェクト
 */
export function addHoursToDate(date: DateInput, hours: number): Date {
  const newDate = parseDateInput(date);
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
}

/**
 * 現在の日時から指定された時間を減算
 * @param hours - 減算する時間
 * @returns 減算後のDateオブジェクト
 */
export function subHours(hours: number): Date {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date;
}

/**
 * 指定された日時から指定された時間を減算
 * @param date - 基準となるDateオブジェクトまたは日付文字列
 * @param hours - 減算する時間
 * @returns 減算後のDateオブジェクト
 */
export function subHoursToDate(date: DateInput, hours: number): Date {
  const newDate = parseDateInput(date);
  newDate.setHours(newDate.getHours() - hours);
  return newDate;
}