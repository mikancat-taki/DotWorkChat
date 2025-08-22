import { Link, useLocation } from "wouter";
import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: t("home") },
    { path: "/chat", label: t("chat") },
    { path: "/docs", label: t("docs") },
    { path: "/about", label: t("about") },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="text-white w-4 h-4" />
              </div>
            </div>
            <Link href="/">
              <h1 className="text-xl font-bold text-gray-900 cursor-pointer">
                {t("appTitle")}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`nav-link ${
                    isActive(item.path) ? "active" : ""
                  }`}
                  data-testid={`nav-${item.path.slice(1) || "home"}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-40" data-testid="language-selector">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja" data-testid="language-ja">🇯🇵 日本語</SelectItem>
                <SelectItem value="en" data-testid="language-en">🇺🇸 English</SelectItem>
                <SelectItem value="zh" data-testid="language-zh">🇨🇳 中文</SelectItem>
                <SelectItem value="es" data-testid="language-es">🇪🇸 Español</SelectItem>
                <SelectItem value="fr" data-testid="language-fr">🇫🇷 Français</SelectItem>
                <SelectItem value="de" data-testid="language-de">🇩🇪 Deutsch</SelectItem>
                <SelectItem value="ko" data-testid="language-ko">🇰🇷 한국어</SelectItem>
                <SelectItem value="pt" data-testid="language-pt">🇵🇹 Português</SelectItem>
                <SelectItem value="ru" data-testid="language-ru">🇷🇺 Русский</SelectItem>
                <SelectItem value="ar" data-testid="language-ar">🇸🇦 العربية</SelectItem>
                <SelectItem value="hi" data-testid="language-hi">🇮🇳 हिन्दी</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-blue-50"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.path.slice(1) || "home"}`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
