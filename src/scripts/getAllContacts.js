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

export const getAllContacts = async () => {
  const filePath = path.resolve(PATH_DB);
    const contacts = await readDataFromFile(filePath);
    return contacts;
};

console.log(await getAllContacts());
