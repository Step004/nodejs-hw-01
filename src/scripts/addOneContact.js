import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import path from 'node:path';

async function readDataFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
}

export const addOneContact = async () => {
  const filePath = path.resolve(PATH_DB);
  const contacts = await readDataFromFile(filePath);

  contacts.push(createFakeContact());

  try {
    await fs.writeFile(filePath, JSON.stringify(contacts), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await addOneContact();
