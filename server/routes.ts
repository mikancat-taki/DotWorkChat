import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRoomSchema, insertMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Room routes
  app.post("/api/rooms", async (req, res) => {
    try {
      const roomData = insertRoomSchema.parse(req.body);
      const room = await storage.createRoom(roomData);
      res.json(room);
    } catch (error) {
      res.status(400).json({ message: "Invalid room data" });
    }
  });

  app.get("/api/rooms/:id", async (req, res) => {
    try {
      const room = await storage.getRoom(req.params.id);
      if (!room) {
        return res.status(404).json({ message: "Room not found" });
      }
      res.json(room);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Message routes
  app.get("/api/rooms/:roomId/messages", async (req, res) => {
    try {
      const messages = await storage.getMessages(req.params.roomId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/rooms/:roomId/messages", async (req, res) => {
    try {
      const messageData = insertMessageSchema.parse({
        ...req.body,
        roomId: req.params.roomId
      });
      const message = await storage.createMessage(messageData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid message data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
