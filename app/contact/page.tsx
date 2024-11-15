'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Sending the form data to the server
    console.log('Form submitted:', { name, email, website, message });

    // Simulate success feedback
    toast({
      title: 'Message Sent',
      description: "Thank you for your message. We'll review your website and get back to you soon!",
    });

    // Reset form fields
    setName('');
    setEmail('');
    setWebsite('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center dark:text-white text-gray-900 mb-12">
        Contact
      </h1>
      <Card className="max-w-3xl mx-auto dark:bg-[#1a1a1a] bg-gray-100 border dark:border-gray-700 border-gray-200 rounded-2xl overflow-hidden shadow-md">
        <CardHeader className="dark:bg-[#252525] bg-gray-200">
          <CardTitle className="dark:text-white text-gray-900">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="dark:bg-[#252525] bg-gray-200 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="dark:bg-[#252525] bg-gray-200 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-600"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
              >
                Website
              </label>
              <Input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
                className="dark:bg-[#252525] bg-gray-200 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-600"
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="dark:bg-[#252525] bg-gray-200 border dark:border-gray-600 border-gray-300 dark:text-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-600"
                placeholder="Your message here..."
                rows={6}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-md rounded-lg"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}