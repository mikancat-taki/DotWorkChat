import { type Room, type InsertRoom, type Message, type InsertMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Room operations
  getRoom(id: string): Promise<Room | undefined>;
  createRoom(room: InsertRoom): Promise<Room>;
  
  // Message operations
  getMessages(roomId: string): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  // User operations (keeping existing for compatibility)
  getUser(id: string): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
}

export class MemStorage implements IStorage {
  private rooms: Map<string, Room>;
  private messages: Map<string, Message>;
  private users: Map<string, any>;

  constructor() {
    this.rooms = new Map();
    this.messages = new Map();
    this.users = new Map();
  }

  // Room operations
  async getRoom(id: string): Promise<Room | undefined> {
    return this.rooms.get(id);
  }

  async createRoom(insertRoom: InsertRoom): Promise<Room> {
    const id = randomUUID();
    const room: Room = { 
      ...insertRoom, 
      id, 
      createdAt: new Date()
    };
    this.rooms.set(id, room);
    return room;
  }

  // Message operations
  async getMessages(roomId: string): Promise<Message[]> {
    return Array.from(this.messages.values())
      .filter(message => message.roomId === roomId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = randomUUID();
    const message: Message = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.messages.set(id, message);
    return message;
  }

  // User operations (existing)
  async getUser(id: string): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = randomUUID();
    const user: any = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();
