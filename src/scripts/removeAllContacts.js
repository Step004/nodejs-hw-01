import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'node:path';


export const removeAllContacts = async () => {
  const filePath = path.resolve(PATH_DB);
  try {
    await fs.writeFile(filePath, '[]', 'utf8');
    console.log('Вміст файлу успішно очищено.');
  } catch (err) {
    console.error('Помилка очищення файлу:', err);
  }
};

await removeAllContacts();
