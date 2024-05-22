// models/user.model.ts
export interface User {
    id: number;
    username: string;
    role: string;
    email: string;
    phone?: string;
    image?: string;
  }
  