import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appWriteConfig = {
  projectId: import.meta.env.APPWRITE_PROJECT_ID,
  url: import.meta.env.APPWRITE_URL,
  databaseId: import.meta.env.APPWRITE_DATABASE_ID,
  storageId: import.meta.env.APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.APPWRITE_USERS,
  postCollectionId: import.meta.env.APPWRITE_POSTS,
  savesCollectionId: import.meta.env.APPWRITE_SAVES,
};

export const client = new Client()
  .setEndpoint("")
  .setProject("");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
