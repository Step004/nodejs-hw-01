import { PATH_DB } from '../constants/contacts.js';
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
async function writeDataToFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (error) {
    console.error('Помилка запису у файл:', error);
  }
}

export const thanos = async () => {
     const filePath = path.resolve(PATH_DB);
    const contacts = await readDataFromFile(filePath);
    
    const remainingContacts = contacts.filter(() => Math.random() > 0.5);
    await writeDataToFile(filePath, remainingContacts);
};

await thanos();
