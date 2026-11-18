export type User = { id: string; name: string; plan: "free" | "pro" };

export const users: User[] = [
  { id: "user-1", name: "Ada", plan: "free" },
  { id: "user-2", name: "Ben", plan: "free" },
  { id: "user-3", name: "Cleo", plan: "pro" },
  { id: "user-4", name: "Dev", plan: "free" },
  { id: "user-5", name: "Eli", plan: "free" },
  { id: "user-6", name: "Fay", plan: "free" },
];
