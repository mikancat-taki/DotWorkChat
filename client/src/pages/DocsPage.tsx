import { useState } from "react";
import { Keyboard, Lightbulb } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("getting-started");
  const { t, language } = useLanguage();

  const tabs = [
    { id: "getting-started", label: language === "ja" ? "はじめに" : "Getting Started" },
    { id: "chat-types", label: language === "ja" ? "チャットの種類" : "Chat Types" },
    { id: "faq", label: language === "ja" ? "よくある質問" : "FAQ" },
  ];

  const gettingStartedContent = language === "ja" ? {
    title: "はじめに",
    sections: [
      {
        title: "1. チャットルームの作成",
        description: "新しいチャットルームを作成するには、以下の手順に従ってください：",
        steps: [
          "ホームページの「チャットを始める」ボタンをクリック",
          "サイドバーでチャットの種類を選択（個人、共有、グループ）",
          "「新しいルーム作成」ボタンをクリック",
          "生成されたURLを他の人に共有"
        ]
      },
      {
        title: "2. チャットルームへの参加",
        description: "既存のチャットルームに参加する方法：",
        steps: [
          "ルームURLを取得（共有されたリンクまたは直接入力）",
          "ホームページのURL入力欄にペースト、または「チャット」ページで入力",
          "「参加」ボタンをクリック",
          "名前を入力（任意）してチャット開始"
        ]
      },
      {
        title: "3. メッセージの送信",
        description: "チャットでメッセージを送信する方法：",
        steps: [
          "画面下部のテキストエリアにメッセージを入力",
          "Enterキーを押すか、送信ボタンをクリック",
          "Shift+Enterで改行が可能",
          "メッセージは即座に他の参加者に表示されます"
        ]
      }
    ]
  } : {
    title: "Getting Started",
    sections: [
      {
        title: "1. Creating a Chat Room",
        description: "To create a new chat room, follow these steps:",
        steps: [
          "Click the 'Start Chatting' button on the homepage",
          "Select chat type in the sidebar (private, shared, group)",
          "Click the 'Create New Room' button",
          "Share the generated URL with others"
        ]
      },
      {
        title: "2. Joining a Chat Room",
        description: "To join an existing chat room:",
        steps: [
          "Get the room URL (shared link or direct input)",
          "Paste into the URL input on homepage or enter on 'Chat' page",
          "Click the 'Join' button",
          "Enter your name (optional) and start chatting"
        ]
      },
      {
        title: "3. Sending Messages",
        description: "To send messages in chat:",
        steps: [
          "Type your message in the text area at the bottom",
          "Press Enter or click the send button",
          "Use Shift+Enter for line breaks",
          "Messages appear instantly for other participants"
        ]
      }
    ]
  };

  const chatTypesContent = language === "ja" ? {
    title: "チャットの種類",
    types: [
      {
        title: "個人チャット",
        description: "1対1のプライベートな会話に最適です。",
        features: ["プライベートルーム", "直接的なコミュニケーション", "シンプルなインターフェース"]
      },
      {
        title: "共有チャット",
        description: "複数の人が参加できるオープンなチャットルームです。",
        features: ["誰でも参加可能", "リアルタイム会話", "URLで簡単共有"]
      },
      {
        title: "グループチャット",
        description: "チームや組織での議論に適したグループ会話です。",
        features: ["参加者管理", "グループディスカッション", "組織的なコミュニケーション"]
      }
    ]
  } : {
    title: "Chat Types",
    types: [
      {
        title: "Private Chat",
        description: "Perfect for one-on-one private conversations.",
        features: ["Private room", "Direct communication", "Simple interface"]
      },
      {
        title: "Shared Chat",
        description: "Open chat rooms where multiple people can join.",
        features: ["Anyone can join", "Real-time conversation", "Easy URL sharing"]
      },
      {
        title: "Group Chat",
        description: "Group conversations suitable for team or organization discussions.",
        features: ["Participant management", "Group discussions", "Organized communication"]
      }
    ]
  };

  const faqContent = language === "ja" ? {
    title: "よくある質問",
    questions: [
      {
        question: "アカウントを作成する必要がありますか？",
        answer: "いいえ、ドットワークはアカウント作成不要で使用できます。名前を入力するだけでチャットに参加できます。"
      },
      {
        question: "どのブラウザに対応していますか？",
        answer: "Chrome、Firefox、Safari、Edgeなどの主要なモダンブラウザに対応しています。"
      },
      {
        question: "メッセージは保存されますか？",
        answer: "メッセージは一時的に保存されますが、永続的なストレージではありません。重要な情報は別途保存することをお勧めします。"
      },
      {
        question: "参加人数に制限はありますか？",
        answer: "技術的な制限はありませんが、パフォーマンスの観点から適度な人数での使用を推奨します。"
      }
    ]
  } : {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "Do I need to create an account?",
        answer: "No, DotWork can be used without creating an account. Simply enter your name to join the chat."
      },
      {
        question: "Which browsers are supported?",
        answer: "We support major modern browsers including Chrome, Firefox, Safari, and Edge."
      },
      {
        question: "Are messages saved?",
        answer: "Messages are temporarily stored but not in permanent storage. We recommend saving important information separately."
      },
      {
        question: "Is there a limit on participants?",
        answer: "There's no technical limit, but we recommend moderate numbers for optimal performance."
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case "getting-started":
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {gettingStartedContent.title}
            </h2>
            <div className="space-y-8">
              {gettingStartedContent.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {section.description}
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "chat-types":
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {chatTypesContent.title}
            </h2>
            <div className="space-y-6">
              {chatTypesContent.types.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case "faq":
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {faqContent.title}
            </h2>
            <div className="space-y-6">
              {faqContent.questions.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const shortcuts = language === "ja" ? [
    { key: "Enter", action: "メッセージ送信" },
    { key: "Shift + Enter", action: "改行" },
    { key: "Ctrl + R", action: "メッセージ更新" },
  ] : [
    { key: "Enter", action: "Send Message" },
    { key: "Shift + Enter", action: "New Line" },
    { key: "Ctrl + R", action: "Refresh Messages" },
  ];

  const tips = language === "ja" ? [
    "URLをブックマークして素早くアクセス",
    "言語設定は右上から変更可能",
    "ダークモードで目の疲れを軽減",
    "参加者リストで現在のメンバーを確認"
  ] : [
    "Bookmark URLs for quick access",
    "Change language settings from top right",
    "Use dark mode to reduce eye strain",
    "Check participant list for current members"
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("docs")}
          </h1>
          <p className="text-lg text-gray-600">
            {language === "ja" ? "ドットワークの使い方と機能について詳しく説明します" : "Learn how to use DotWork and its features"}
          </p>
        </div>

        {/* Documentation Navigation */}
        <Card className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                className={`px-6 py-4 rounded-none border-b-2 ${
                  activeTab === tab.id
                    ? "text-primary border-primary"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`tab-${tab.id}`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <CardContent className="p-8">
            {renderContent()}
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <Keyboard className="mr-2 h-5 w-5" />
                {language === "ja" ? "キーボードショートカット" : "Keyboard Shortcuts"}
              </h3>
              <div className="space-y-2 text-sm">
                {shortcuts.map((shortcut, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-blue-800 font-mono">
                      {shortcut.key}
                    </span>
                    <span className="text-blue-600">
                      {shortcut.action}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5" />
                {language === "ja" ? "使用のヒント" : "Usage Tips"}
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                {tips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
