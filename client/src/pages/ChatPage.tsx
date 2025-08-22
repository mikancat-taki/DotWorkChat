import { useState, useEffect, useRef } from "react";
import { useRoute } from "wouter";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Copy, RefreshCw, Settings, Send, User, Share, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Room, Message } from "@shared/schema";

export default function ChatPage() {
  const [match, params] = useRoute("/chat/:roomId?");
  const [currentRoomId, setCurrentRoomId] = useState(params?.roomId || "");
  const [selectedChatType, setSelectedChatType] = useState<"private" | "shared" | "group">("private");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("Anonymous");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentRoomId]);

  // Fetch room data
  const { data: room, isLoading: roomLoading } = useQuery<Room>({
    queryKey: ["/api/rooms", currentRoomId],
    enabled: !!currentRoomId,
  });

  // Fetch messages
  const { data: messages = [], isLoading: messagesLoading, refetch: refetchMessages } = useQuery<Message[]>({
    queryKey: ["/api/rooms", currentRoomId, "messages"],
    enabled: !!currentRoomId,
    refetchInterval: 3000, // Poll every 3 seconds for new messages
  });

  // Create room mutation
  const createRoomMutation = useMutation({
    mutationFn: async (roomData: { type: string; name?: string }) => {
      const response = await apiRequest("POST", "/api/rooms", roomData);
      return response.json();
    },
    onSuccess: (newRoom: Room) => {
      setCurrentRoomId(newRoom.id);
      queryClient.invalidateQueries({ queryKey: ["/api/rooms"] });
      toast({
        title: "Room created successfully",
        description: `Room ID: ${newRoom.id}`,
      });
    },
    onError: () => {
      toast({
        title: "Error creating room",
        description: "Please try again later",
        variant: "destructive",
      });
    },
  });

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: async (messageData: { content: string; username: string }) => {
      const response = await apiRequest("POST", `/api/rooms/${currentRoomId}/messages`, messageData);
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({ queryKey: ["/api/rooms", currentRoomId, "messages"] });
      scrollToBottom();
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again",
        variant: "destructive",
      });
    },
  });

  const handleCreateRoom = () => {
    const roomTypes = {
      private: "private",
      shared: "shared",
      group: "group"
    };
    
    createRoomMutation.mutate({
      type: roomTypes[selectedChatType],
      name: `${t(selectedChatType + "Chat")} - ${Date.now()}`,
    });
  };

  const handleSendMessage = () => {
    if (!message.trim() || !currentRoomId) return;
    
    sendMessageMutation.mutate({
      content: message.trim(),
      username: username || "Anonymous",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyRoomUrl = () => {
    if (currentRoomId) {
      const url = `${window.location.origin}/chat/${currentRoomId}`;
      navigator.clipboard.writeText(url);
      toast({
        title: "URL copied to clipboard",
        description: url,
      });
    }
  };

  const formatTimestamp = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const chatTypeButtons = [
    { key: "private" as const, icon: User, label: t("privateChat") },
    { key: "shared" as const, icon: Share, label: t("sharedChat") },
    { key: "group" as const, icon: Users, label: t("groupChat") },
  ];

  // Get unique participants from messages
  const participants = Array.from(new Set(messages.map(m => m.username))).map(username => ({
    username,
    avatar: username.charAt(0).toUpperCase(),
    online: true, // Simplified - assume all are online
  }));

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Chat Controls */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("chat")}
          </h2>
          
          {/* Room Type Selector */}
          <div className="space-y-3 mb-4">
            {chatTypeButtons.map(({ key, icon: Icon, label }) => (
              <Button
                key={key}
                variant={selectedChatType === key ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedChatType(key)}
                data-testid={`button-select-${key}-chat`}
              >
                <Icon className="mr-3 h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>

          {/* Room URL Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t("roomUrl")}
            </label>
            <div className="flex gap-2">
              <Input
                type="text"
                value={currentRoomId}
                onChange={(e) => setCurrentRoomId(e.target.value)}
                placeholder="Enter room ID"
                data-testid="input-current-room-url"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={copyRoomUrl}
                disabled={!currentRoomId}
                data-testid="button-copy-room-url"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              data-testid="input-username"
            />
          </div>

          {/* Create New Room Button */}
          <Button
            onClick={handleCreateRoom}
            disabled={createRoomMutation.isPending}
            className="w-full bg-accent hover:bg-green-600"
            data-testid="button-create-new-room"
          >
            <Plus className="mr-2 h-4 w-4" />
            {t("createNewRoom")}
          </Button>
        </div>

        {/* Active Participants */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t("participants")} ({participants.length})
          </h3>
          <div className="space-y-2">
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center space-x-3" data-testid={`participant-${participant.username}`}>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {participant.avatar}
                </div>
                <span className="text-sm text-gray-900 dark:text-white">
                  {participant.username}
                </span>
                <div className={`w-2 h-2 ${participant.online ? 'bg-green-500' : 'bg-gray-400'} rounded-full`} />
              </div>
            ))}
          </div>
        </div>

        {/* Room Info */}
        <div className="flex-1 p-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t("roomInfo")}
          </h3>
          {room && (
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>Created: {formatTimestamp(room.createdAt)}</div>
              <div>Messages: {messages.length}</div>
              <div>Type: {room.type}</div>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        {currentRoomId ? (
          <>
            {/* Chat Header */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {room?.name || `Room ${currentRoomId}`}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Room ID: {currentRoomId}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => refetchMessages()}
                    data-testid="button-refresh-messages"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="button-open-settings"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" data-testid="messages-container">
              {messagesLoading ? (
                <div className="text-center text-gray-500">Loading messages...</div>
              ) : messages.length === 0 ? (
                <div className="text-center text-gray-500">No messages yet. Start the conversation!</div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.username === username ? "justify-end" : "justify-start"}`}
                    data-testid={`message-${msg.id}`}
                  >
                    {msg.username !== username && (
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-medium mr-3 flex-shrink-0">
                        {msg.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="max-w-xs lg:max-w-md">
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          msg.username === username
                            ? "bg-primary text-white rounded-br-none"
                            : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-bl-none"
                        }`}
                      >
                        <p className={`text-sm ${
                          msg.username === username ? "text-white" : "text-gray-900 dark:text-white"
                        }`}>
                          {msg.content}
                        </p>
                      </div>
                      <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                        msg.username === username ? "text-right" : ""
                      }`}>
                        {formatTimestamp(msg.createdAt)}
                      </div>
                    </div>
                    {msg.username === username && (
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium ml-3 flex-shrink-0">
                        {msg.username.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t("messagePlaceholder")}
                    className="min-h-[44px] max-h-32 resize-none"
                    rows={1}
                    data-testid="input-message"
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || sendMessageMutation.isPending}
                  className="bg-primary hover:bg-blue-700 flex-shrink-0"
                  data-testid="button-send-message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>Enter to send, Shift+Enter for new line</span>
                <Badge variant="outline" className="text-green-500 border-green-500">
                  Connected
                </Badge>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <Card className="max-w-md">
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-semibold mb-4">Welcome to DotWork</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Create a new room or enter a room ID to start chatting.
                </p>
                <Button onClick={handleCreateRoom} disabled={createRoomMutation.isPending}>
                  Create Room
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
