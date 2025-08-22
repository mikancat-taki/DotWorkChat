import { Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = language === "ja" ? {
    title: "インフォメーション",
    subtitle: "ドットワークについて詳しく知る",
    appOverview: {
      title: "アプリケーション概要",
      description1: "ドットワークは、シンプルで使いやすいリアルタイムチャットアプリケーションです。URLベースのルーム参加システムにより、面倒な登録プロセスなしで、すぐにチャットを始めることができます。",
      description2: "個人的な会話から大規模なグループディスカッションまで、様々な用途に対応した柔軟なチャット環境を提供します。日本語と英語の両方に対応し、国際的なチームでも安心してご利用いただけます。"
    },
    features: {
      title: "主な機能",
      items: [
        {
          title: "URLベース参加",
          description: "URLを共有するだけで簡単にチャットルームに参加できます"
        },
        {
          title: "多様なチャット形式",
          description: "個人、共有、グループチャットに対応"
        },
        {
          title: "多言語対応",
          description: "日本語と英語でのインターフェース"
        }
      ]
    },
    techSpecs: {
      title: "技術仕様",
      version: "1.0.0",
      platform: "Web",
      browsers: "Chrome, Firefox, Safari, Edge",
      updateMethod: "ポーリング"
    },
    contact: {
      title: "お問い合わせ",
      description: "ご質問やご提案がございましたら、お気軽にお問い合わせください。"
    }
  } : {
    title: "About",
    subtitle: "Learn more about DotWork",
    appOverview: {
      title: "Application Overview",
      description1: "DotWork is a simple and easy-to-use real-time chat application. With URL-based room joining system, you can start chatting immediately without any cumbersome registration process.",
      description2: "From personal conversations to large group discussions, we provide a flexible chat environment suitable for various purposes. Supporting both Japanese and English, it's perfect for international teams."
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "URL-based Joining",
          description: "Easy chat room access by simply sharing URLs"
        },
        {
          title: "Multiple Chat Types",
          description: "Support for private, shared, and group chats"
        },
        {
          title: "Multi-language Support",
          description: "Interface available in Japanese and English"
        }
      ]
    },
    techSpecs: {
      title: "Technical Specifications",
      version: "1.0.0",
      platform: "Web",
      browsers: "Chrome, Firefox, Safari, Edge",
      updateMethod: "Polling"
    },
    contact: {
      title: "Contact Us",
      description: "If you have any questions or suggestions, please feel free to contact us."
    }
  };

  const featureIcons = ["🔗", "💬", "🌐"];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {/* App Overview */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {content.appOverview.title}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {content.appOverview.description1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {content.appOverview.description2}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content.features.title}
              </h2>
              
              <div className="space-y-4">
                {content.features.items.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {featureIcons[index]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content.techSpecs.title}
              </h2>
              
              <Card className="bg-gray-50 dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "ja" ? "バージョン" : "Version"}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {content.techSpecs.version}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "ja" ? "プラットフォーム" : "Platform"}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {content.techSpecs.platform}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "ja" ? "対応ブラウザ" : "Supported Browsers"}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {content.techSpecs.browsers}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {language === "ja" ? "更新方式" : "Update Method"}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {content.techSpecs.updateMethod}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{content.contact.title}</h2>
            <p className="text-blue-100 mb-6">{content.contact.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="ghost"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                data-testid="contact-email"
              >
                <Mail className="mr-2 h-4 w-4" />
                support@dotwork.app
              </Button>
              <Button
                variant="ghost"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                data-testid="contact-github"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
