import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appWriteConfig = {
  projectId: import.meta.env.APPWRITE_PROJECT_ID,
  url: import.meta.env.APPWRITE_URL,
};

export const client = new Client()
  .setEndpoint("")
  .setProject("");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
