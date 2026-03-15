import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "u8ips4on", // تأكد أنه نفس Project ID الخاص بك
  dataset: "production", // أو dataset اللي أنشأته
  apiVersion: "2026-03-15", // أحدث نسخة API
  useCdn: true, // true للإنتاج، false للتطوير
});