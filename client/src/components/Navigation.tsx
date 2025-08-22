import { Link, useLocation } from "wouter";
import { useState } from "react";
import { MessageCircle, Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
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
  const { theme, toggleTheme } = useTheme();

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
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer">
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

          {/* Language Selector and Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
              <SelectTrigger className="w-32" data-testid="language-selector">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja" data-testid="language-ja">🇯🇵 日本語</SelectItem>
                <SelectItem value="en" data-testid="language-en">🇺🇸 English</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

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
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
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
