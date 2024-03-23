import { readFileSync } from 'node:fs';

export const findUser = (username) => {
  const rawText = readFileSync('./data/users.json', 'utf8');
  const users = JSON.parse(rawText);
  return users.find((user) => user.username === username);
};

export const getBooks = () => {
  try {
    const rawText = readFileSync('./data/books.json', { encoding: 'utf8' });
    const books = JSON.parse(rawText);
    return books;
  } catch (error) {
    return;
  }
};