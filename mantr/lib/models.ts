import type { Collection, Db } from "mongodb";

import { getMongoClientPromise } from "./mongodb";
import type { WaitlistEntry } from "@/types/waitlist";

const DEFAULT_DB_NAME = "mantr";
const WAITLIST_COLLECTION = "waitlist";

async function getDb(): Promise<Db> {
  const client = await getMongoClientPromise();
  const dbName = process.env.MONGODB_DB ?? DEFAULT_DB_NAME;
  return client.db(dbName);
}

export async function getWaitlistCollection(): Promise<
  Collection<WaitlistEntry>
> {
  const db = await getDb();
  return db.collection<WaitlistEntry>(WAITLIST_COLLECTION);
}

let ensureWaitlistIndexesPromise: Promise<void> | null = null;
export function ensureWaitlistIndexes(): Promise<void> {
  if (!ensureWaitlistIndexesPromise) {
    ensureWaitlistIndexesPromise = (async () => {
      const col = await getWaitlistCollection();
      await col.createIndex({ email: 1 }, { unique: true });
      await col.createIndex({ createdAt: -1 });
    })();
  }

  return ensureWaitlistIndexesPromise;
}

export async function insertWaitlistEntry(input: {
  email: string;
  name?: string;
}): Promise<WaitlistEntry> {
  await ensureWaitlistIndexes();
  const col = await getWaitlistCollection();

  const doc: WaitlistEntry = {
    email: input.email.toLowerCase().trim(),
    name: input.name?.trim() || undefined,
    createdAt: new Date(),
  };

  await col.insertOne(doc);
  return doc;
}
