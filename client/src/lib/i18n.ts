export interface Translations {
  [key: string]: string;
}

export const translations = {
  ja: {
    // Navigation
    home: "ホーム",
    chat: "チャット",
    docs: "ドキュメント",
    about: "インフォメーション",
    
    // HomePage
    appTitle: "ドットワーク",
    appDescription: "シンプルで使いやすいリアルタイムチャットアプリケーション。個人チャット、共有チャット、グループチャットをURLで簡単に参加できます。",
    startChat: "チャットを始める",
    viewDocs: "使い方を見る",
    
    // Features
    urlJoinTitle: "URLで簡単参加",
    urlJoinDesc: "URLを共有するだけで、誰でも簡単にチャットルームに参加できます。アカウント作成は不要です。",
    chatTypesTitle: "多様なチャット形式",
    chatTypesDesc: "個人チャット、共有チャット、グループチャットなど、用途に応じたチャット形式を選択できます。",
    multiLanguageTitle: "多言語対応",
    multiLanguageDesc: "日本語と英語に対応。グローバルなチームでのコミュニケーションもスムーズです。",
    
    // Chat Interface
    privateChat: "個人チャット",
    sharedChat: "共有チャット",
    groupChat: "グループチャット",
    roomUrl: "ルームURL",
    createNewRoom: "新しいルーム作成",
    participants: "参加者",
    roomInfo: "ルーム情報",
    messagePlaceholder: "メッセージを入力...",
    
    // Quick Join
    quickStartTitle: "今すぐチャットを始めよう",
    quickStartDesc: "URLを生成してチャットルームを作成するか、既存のルームに参加してください。",
    roomUrlPlaceholder: "ルームURLを入力...",
    join: "参加",
    createNewRoomLabel: "または新しいルームを作成",
    
    // Errors
    roomNotFound: "ルームが見つかりません",
    invalidRoomUrl: "無効なルームURLです",
    connectionError: "接続エラーが発生しました",
  },
  en: {
    // Navigation
    home: "Home",
    chat: "Chat",
    docs: "Documentation",
    about: "About",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "A simple and easy-to-use real-time chat application. Join individual, shared, and group chats easily with URLs.",
    startChat: "Start Chatting",
    viewDocs: "View Documentation",
    
    // Features
    urlJoinTitle: "Easy URL Joining",
    urlJoinDesc: "Anyone can easily join chat rooms by simply sharing a URL. No account creation required.",
    chatTypesTitle: "Multiple Chat Types",
    chatTypesDesc: "Choose from individual, shared, and group chat formats depending on your needs.",
    multiLanguageTitle: "Multi-language Support",
    multiLanguageDesc: "Supports both Japanese and English. Smooth communication for global teams.",
    
    // Chat Interface
    privateChat: "Private Chat",
    sharedChat: "Shared Chat",
    groupChat: "Group Chat",
    roomUrl: "Room URL",
    createNewRoom: "Create New Room",
    participants: "Participants",
    roomInfo: "Room Info",
    messagePlaceholder: "Type a message...",
    
    // Quick Join
    quickStartTitle: "Start Chatting Now",
    quickStartDesc: "Generate a URL to create a chat room or join an existing room.",
    roomUrlPlaceholder: "Enter room URL...",
    join: "Join",
    createNewRoomLabel: "Or create a new room",
    
    // Errors
    roomNotFound: "Room not found",
    invalidRoomUrl: "Invalid room URL",
    connectionError: "Connection error occurred",
  }
};

export type Language = keyof typeof translations;

export function t(key: string, language: Language): string {
  return translations[language][key] || key;
}
