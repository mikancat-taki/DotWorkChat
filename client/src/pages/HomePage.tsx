import { useState } from "react";
import { useLocation } from "wouter";
import { Rocket, Book, Link as LinkIcon, Users, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [roomUrl, setRoomUrl] = useState("");
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleStartChat = () => {
    setLocation("/chat");
  };

  const handleViewDocs = () => {
    setLocation("/docs");
  };

  const handleJoinRoom = () => {
    if (!roomUrl.trim()) {
      toast({
        title: t("invalidRoomUrl"),
        description: "Please enter a valid room URL",
        variant: "destructive",
      });
      return;
    }

    // Extract room ID from URL or use as is
    const roomId = roomUrl.includes("/") ? roomUrl.split("/").pop() : roomUrl;
    setLocation(`/chat/${roomId}`);
  };

  const features = [
    {
      icon: LinkIcon,
      title: t("urlJoinTitle"),
      description: t("urlJoinDesc"),
      color: "bg-blue-100 dark:bg-blue-900/30 text-primary",
    },
    {
      icon: Users,
      title: t("chatTypesTitle"),
      description: t("chatTypesDesc"),
      color: "bg-green-100 dark:bg-green-900/30 text-accent",
    },
    {
      icon: Globe,
      title: t("multiLanguageTitle"),
      description: t("multiLanguageDesc"),
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-8 flex items-center justify-center">
            <i className="fas fa-comments text-white text-2xl"></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("appTitle")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {t("appDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartChat}
              className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8"
              data-testid="button-start-chat"
            >
              <Rocket className="mr-2 h-4 w-4" />
              {t("startChat")}
            </Button>
            <Button
              variant="outline"
              onClick={handleViewDocs}
              className="font-semibold py-3 px-8"
              data-testid="button-view-docs"
            >
              <Book className="mr-2 h-4 w-4" />
              {t("viewDocs")}
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("quickStartTitle")}
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("quickStartDesc")}
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder={t("roomUrlPlaceholder")}
                value={roomUrl}
                onChange={(e) => setRoomUrl(e.target.value)}
                className="flex-1 text-gray-900 placeholder-gray-500"
                data-testid="input-room-url"
              />
              <Button
                onClick={handleJoinRoom}
                className="bg-white hover:bg-gray-100 text-primary font-semibold"
                data-testid="button-join-room"
              >
                <i className="fas fa-sign-in-alt mr-2"></i>
                {t("join")}
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              {t("createNewRoomLabel")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
