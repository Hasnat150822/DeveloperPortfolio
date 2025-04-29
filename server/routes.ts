import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submission
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    
    // In a real application, you would send the message to an email service
    // or store it in a database
    console.log('Contact form submission:', { name, email, subject, message });
    
    return res.status(200).json({ success: true, message: 'Message received!' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
