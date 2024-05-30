# ts-orm-date

A utility library for adding or subtracting hours to date objects, useful for adjusting time in ORM operations. This library supports both `Date` objects and date strings as input.

*Note: This is an experimental library intended for testing purposes.*

## Table of Contents

- [English](#english)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Adding Hours](#adding-hours)
    - [Subtracting Hours](#subtracting-hours)
    - [Error Handling](#error-handling)
  - [API](#api)
  - [License](#license)
- [日本語](#日本語)
  - [インストール](#インストール)
  - [使用方法](#使用方法)
    - [時間を加算する](#時間を加算する)
    - [時間を減算する](#時間を減算する)
    - [エラーハンドリング](#エラーハンドリング)
  - [API](#api-1)
  - [ライセンス](#ライセンス)

---

## English

### Installation

You can install the library using npm:

```bash
$ npm install ts-orm-date
```

Or, you can install the library using yarn:

```bash
$ yarn add ts-orm-date
```

### Usage

Here's how to use the `ts-orm-date` library:

#### Adding Hours

You can add hours to the current date or to a specific date.

```typescript
import { addHours, addHoursToDate } from 'ts-orm-date';

const newDate = addHours(1);
console.log(`Current date plus 1 hour: ${newDate}`);

const specificDate = new Date('2024-05-29T12:00:00Z');
const updatedDate = addHoursToDate(specificDate, 1);
console.log(`Specific date plus 1 hour: ${updatedDate}`);

const dateString = '2024-05-29T12:00:00Z';
const updatedDateString = addHoursToDate(dateString, 1);
console.log(`Specific date string plus 1 hour: ${updatedDateString}`);
```

#### Subtracting Hours

You can subtract hours from the current date or from a specific date.

```typescript
import { subHours, subHoursToDate } from 'ts-orm-date';

const subtractedDate = subHours(1);
console.log(`Current date minus 1 hour: ${subtractedDate}`);

const specificDate = new Date('2024-05-29T12:00:00Z');
const updatedSubtractedDate = subHoursToDate(specificDate, 1);
console.log(`Specific date minus 1 hour: ${updatedSubtractedDate}`);

const dateString = '2024-05-29T12:00:00Z';
const updatedSubtractedDateString = subHoursToDate(dateString, 1);
console.log(`Specific date string minus 1 hour: ${updatedSubtractedDateString}`);
```

#### Error Handling

The library throws an error if an invalid date string is passed.

```typescript
import { addHoursToDate } from 'ts-orm-date';

try {
  const invalidDateString = 'invalid-date';
  addHoursToDate(invalidDateString, 1);
} catch (error) {
  console.error(error.message); // Invalid date input: invalid-date
}
```

### API

#### Functions

- `addHours(hours: number): Date`
- `addHoursToDate(date: Date | string, hours: number): Date`
- `subHours(hours: number): Date`
- `subHoursToDate(date: Date | string, hours: number): Date`

### License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 日本語

### インストール

npmを使用してライブラリをインストールできます：

```bash
$ npm install ts-orm-date
```

または, yarnを使用してライブラリをインストールできます：

```bash
$ yarn add ts-orm-date
```

### 使用方法

#### 時間を加算する

```typescript
import { addHours, addHoursToDate } from 'ts-orm-date';

const newDate = addHours(1);
console.log(`現在の日付に1時間を加算: ${newDate}`);

const specificDate = new Date('2024-05-29T12:00:00Z');
const updatedDate = addHoursToDate(specificDate, 1);
console.log(`特定の日付に1時間を加算: ${updatedDate}`);

const dateString = '2024-05-29T12:00:00Z';
const updatedDateString = addHoursToDate(dateString, 1);
console.log(`特定の日付文字列に1時間を加算: ${updatedDateString}`);
```

#### 時間を減算する

```typescript
import { subHours, subHoursToDate } from 'ts-orm-date';

const subtractedDate = subHours(1);
console.log(`現在の日付から1時間を減算: ${subtractedDate}`);

const specificDate = new Date('2024-05-29T12:00:00Z');
const updatedSubtractedDate = subHoursToDate(specificDate, 1);
console.log(`特定の日付から1時間を減算: ${updatedSubtractedDate}`);

const dateString = '2024-05-29T12:00:00Z';
const updatedSubtractedDateString = subHoursToDate(dateString, 1);
console.log(`特定の日付文字列から1時間を減算: ${updatedSubtractedDateString}`);
```

#### エラーハンドリング

無効な日付文字列が渡された場合、ライブラリはエラーをスローします。

```typescript
import { addHoursToDate } from 'ts-orm-date';

try {
  const invalidDateString = 'invalid-date';
  addHoursToDate(invalidDateString, 1);
} catch (error) {
  console.error(error.message); // Invalid date input: invalid-date
}
```

### API

#### 関数

- `addHours(hours: number): Date`
- `addHoursToDate(date: Date | string, hours: number): Date`
- `subHours(hours: number): Date`
- `subHoursToDate(date: Date | string, hours: number): Date`

### ライセンス

このプロジェクトはISCライセンスの下でライセンスされています。詳細については[LICENSE](LICENSE)ファイルを参照してください。