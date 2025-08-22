import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import HomePage from "@/pages/HomePage";
import ChatPage from "@/pages/ChatPage";
import DocsPage from "@/pages/DocsPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/chat/:roomId?" component={ChatPage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-200">
              <Navigation />
              <main className="transition-all duration-200">
                <Router />
              </main>
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
