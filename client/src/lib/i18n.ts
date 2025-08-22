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
    multiLanguageDesc: "全世界の言語に対応。グローバルなチームでのコミュニケーションもスムーズです。",
    
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
    multiLanguageDesc: "Supports languages from around the world. Smooth communication for global teams.",
    
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
  },
  zh: {
    // Navigation
    home: "首页",
    chat: "聊天",
    docs: "文档",
    about: "关于",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "简单易用的实时聊天应用程序。通过URL轻松加入个人、共享和群组聊天。",
    startChat: "开始聊天",
    viewDocs: "查看文档",
    
    // Features
    urlJoinTitle: "URL简易加入",
    urlJoinDesc: "只需分享URL，任何人都可以轻松加入聊天室。无需创建账户。",
    chatTypesTitle: "多种聊天类型",
    chatTypesDesc: "根据需要选择个人、共享和群组聊天格式。",
    multiLanguageTitle: "多语言支持",
    multiLanguageDesc: "支持全球语言。全球团队沟通顺畅。",
    
    // Chat Interface
    privateChat: "私人聊天",
    sharedChat: "共享聊天",
    groupChat: "群组聊天",
    roomUrl: "房间URL",
    createNewRoom: "创建新房间",
    participants: "参与者",
    roomInfo: "房间信息",
    messagePlaceholder: "输入消息...",
    
    // Quick Join
    quickStartTitle: "立即开始聊天",
    quickStartDesc: "生成URL创建聊天室或加入现有房间。",
    roomUrlPlaceholder: "输入房间URL...",
    join: "加入",
    createNewRoomLabel: "或创建新房间",
    
    // Errors
    roomNotFound: "找不到房间",
    invalidRoomUrl: "无效的房间URL",
    connectionError: "连接错误",
  },
  es: {
    // Navigation
    home: "Inicio",
    chat: "Chat",
    docs: "Documentación",
    about: "Acerca de",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "Una aplicación de chat en tiempo real simple y fácil de usar. Únete a chats individuales, compartidos y grupales fácilmente con URLs.",
    startChat: "Comenzar a Chatear",
    viewDocs: "Ver Documentación",
    
    // Features
    urlJoinTitle: "Unión Fácil por URL",
    urlJoinDesc: "Cualquiera puede unirse fácilmente a salas de chat simplemente compartiendo una URL. No se requiere crear cuenta.",
    chatTypesTitle: "Múltiples Tipos de Chat",
    chatTypesDesc: "Elige entre formatos de chat individual, compartido y grupal según tus necesidades.",
    multiLanguageTitle: "Soporte Multiidioma",
    multiLanguageDesc: "Compatible con idiomas de todo el mundo. Comunicación fluida para equipos globales.",
    
    // Chat Interface
    privateChat: "Chat Privado",
    sharedChat: "Chat Compartido",
    groupChat: "Chat Grupal",
    roomUrl: "URL de Sala",
    createNewRoom: "Crear Nueva Sala",
    participants: "Participantes",
    roomInfo: "Información de Sala",
    messagePlaceholder: "Escribe un mensaje...",
    
    // Quick Join
    quickStartTitle: "Comenzar a Chatear Ahora",
    quickStartDesc: "Genera una URL para crear una sala de chat o únete a una sala existente.",
    roomUrlPlaceholder: "Ingresa URL de sala...",
    join: "Unirse",
    createNewRoomLabel: "O crear una nueva sala",
    
    // Errors
    roomNotFound: "Sala no encontrada",
    invalidRoomUrl: "URL de sala inválida",
    connectionError: "Error de conexión",
  },
  fr: {
    // Navigation
    home: "Accueil",
    chat: "Chat",
    docs: "Documentation",
    about: "À propos",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "Une application de chat en temps réel simple et facile à utiliser. Rejoignez facilement des chats individuels, partagés et de groupe avec des URLs.",
    startChat: "Commencer à Chatter",
    viewDocs: "Voir la Documentation",
    
    // Features
    urlJoinTitle: "Rejoindre Facilement par URL",
    urlJoinDesc: "N'importe qui peut facilement rejoindre des salles de chat en partageant simplement une URL. Aucune création de compte requise.",
    chatTypesTitle: "Plusieurs Types de Chat",
    chatTypesDesc: "Choisissez entre les formats de chat individuel, partagé et de groupe selon vos besoins.",
    multiLanguageTitle: "Support Multilingue",
    multiLanguageDesc: "Prend en charge les langues du monde entier. Communication fluide pour les équipes mondiales.",
    
    // Chat Interface
    privateChat: "Chat Privé",
    sharedChat: "Chat Partagé",
    groupChat: "Chat de Groupe",
    roomUrl: "URL de Salle",
    createNewRoom: "Créer Nouvelle Salle",
    participants: "Participants",
    roomInfo: "Infos de Salle",
    messagePlaceholder: "Tapez un message...",
    
    // Quick Join
    quickStartTitle: "Commencer à Chatter Maintenant",
    quickStartDesc: "Générez une URL pour créer une salle de chat ou rejoignez une salle existante.",
    roomUrlPlaceholder: "Entrez l'URL de la salle...",
    join: "Rejoindre",
    createNewRoomLabel: "Ou créer une nouvelle salle",
    
    // Errors
    roomNotFound: "Salle non trouvée",
    invalidRoomUrl: "URL de salle invalide",
    connectionError: "Erreur de connexion",
  },
  de: {
    // Navigation
    home: "Startseite",
    chat: "Chat",
    docs: "Dokumentation",
    about: "Über",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "Eine einfache und benutzerfreundliche Echtzeit-Chat-Anwendung. Treten Sie einfach über URLs individuellen, geteilten und Gruppen-Chats bei.",
    startChat: "Chat Starten",
    viewDocs: "Dokumentation Anzeigen",
    
    // Features
    urlJoinTitle: "Einfacher URL-Beitritt",
    urlJoinDesc: "Jeder kann Chat-Räumen einfach beitreten, indem er einfach eine URL teilt. Keine Kontoerstellung erforderlich.",
    chatTypesTitle: "Mehrere Chat-Typen",
    chatTypesDesc: "Wählen Sie je nach Bedarf zwischen individuellen, geteilten und Gruppen-Chat-Formaten.",
    multiLanguageTitle: "Mehrsprachige Unterstützung",
    multiLanguageDesc: "Unterstützt Sprachen aus der ganzen Welt. Reibungslose Kommunikation für globale Teams.",
    
    // Chat Interface
    privateChat: "Privater Chat",
    sharedChat: "Geteilter Chat",
    groupChat: "Gruppen-Chat",
    roomUrl: "Raum-URL",
    createNewRoom: "Neuen Raum Erstellen",
    participants: "Teilnehmer",
    roomInfo: "Raum-Info",
    messagePlaceholder: "Nachricht eingeben...",
    
    // Quick Join
    quickStartTitle: "Jetzt Chatten",
    quickStartDesc: "Generieren Sie eine URL, um einen Chat-Raum zu erstellen oder einem bestehenden Raum beizutreten.",
    roomUrlPlaceholder: "Raum-URL eingeben...",
    join: "Beitreten",
    createNewRoomLabel: "Oder neuen Raum erstellen",
    
    // Errors
    roomNotFound: "Raum nicht gefunden",
    invalidRoomUrl: "Ungültige Raum-URL",
    connectionError: "Verbindungsfehler",
  },
  ko: {
    // Navigation
    home: "홈",
    chat: "채팅",
    docs: "문서",
    about: "정보",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "간단하고 사용하기 쉬운 실시간 채팅 애플리케이션. URL로 개인, 공유, 그룹 채팅에 쉽게 참여하세요.",
    startChat: "채팅 시작",
    viewDocs: "문서 보기",
    
    // Features
    urlJoinTitle: "URL로 쉬운 참여",
    urlJoinDesc: "URL을 공유하기만 하면 누구나 쉽게 채팅방에 참여할 수 있습니다. 계정 생성이 필요하지 않습니다.",
    chatTypesTitle: "다양한 채팅 유형",
    chatTypesDesc: "필요에 따라 개인, 공유, 그룹 채팅 형식 중에서 선택하세요.",
    multiLanguageTitle: "다국어 지원",
    multiLanguageDesc: "전 세계 언어를 지원합니다. 글로벌 팀을 위한 원활한 소통.",
    
    // Chat Interface
    privateChat: "개인 채팅",
    sharedChat: "공유 채팅",
    groupChat: "그룹 채팅",
    roomUrl: "방 URL",
    createNewRoom: "새 방 만들기",
    participants: "참가자",
    roomInfo: "방 정보",
    messagePlaceholder: "메시지를 입력하세요...",
    
    // Quick Join
    quickStartTitle: "지금 채팅 시작",
    quickStartDesc: "URL을 생성하여 채팅방을 만들거나 기존 방에 참여하세요.",
    roomUrlPlaceholder: "방 URL을 입력하세요...",
    join: "참여",
    createNewRoomLabel: "또는 새 방 만들기",
    
    // Errors
    roomNotFound: "방을 찾을 수 없습니다",
    invalidRoomUrl: "잘못된 방 URL",
    connectionError: "연결 오류",
  },
  pt: {
    // Navigation
    home: "Início",
    chat: "Chat",
    docs: "Documentação",
    about: "Sobre",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "Uma aplicação de chat em tempo real simples e fácil de usar. Junte-se facilmente a chats individuais, compartilhados e em grupo com URLs.",
    startChat: "Começar a Conversar",
    viewDocs: "Ver Documentação",
    
    // Features
    urlJoinTitle: "Entrada Fácil por URL",
    urlJoinDesc: "Qualquer pessoa pode facilmente entrar em salas de chat simplesmente compartilhando uma URL. Nenhuma criação de conta necessária.",
    chatTypesTitle: "Múltiplos Tipos de Chat",
    chatTypesDesc: "Escolha entre formatos de chat individual, compartilhado e em grupo conforme suas necessidades.",
    multiLanguageTitle: "Suporte Multilíngue",
    multiLanguageDesc: "Suporta idiomas de todo o mundo. Comunicação suave para equipes globais.",
    
    // Chat Interface
    privateChat: "Chat Privado",
    sharedChat: "Chat Compartilhado",
    groupChat: "Chat em Grupo",
    roomUrl: "URL da Sala",
    createNewRoom: "Criar Nova Sala",
    participants: "Participantes",
    roomInfo: "Info da Sala",
    messagePlaceholder: "Digite uma mensagem...",
    
    // Quick Join
    quickStartTitle: "Começar a Conversar Agora",
    quickStartDesc: "Gere uma URL para criar uma sala de chat ou entre em uma sala existente.",
    roomUrlPlaceholder: "Digite a URL da sala...",
    join: "Entrar",
    createNewRoomLabel: "Ou criar nova sala",
    
    // Errors
    roomNotFound: "Sala não encontrada",
    invalidRoomUrl: "URL da sala inválida",
    connectionError: "Erro de conexão",
  },
  ru: {
    // Navigation
    home: "Главная",
    chat: "Чат",
    docs: "Документация",
    about: "О программе",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "Простое и удобное приложение для чата в реальном времени. Легко присоединяйтесь к индивидуальным, общим и групповым чатам с помощью URL.",
    startChat: "Начать Чат",
    viewDocs: "Просмотр Документации",
    
    // Features
    urlJoinTitle: "Простое Присоединение по URL",
    urlJoinDesc: "Любой может легко присоединиться к комнатам чата, просто поделившись URL. Регистрация аккаунта не требуется.",
    chatTypesTitle: "Несколько Типов Чата",
    chatTypesDesc: "Выберите между индивидуальными, общими и групповыми форматами чата в зависимости от ваших потребностей.",
    multiLanguageTitle: "Многоязычная Поддержка",
    multiLanguageDesc: "Поддерживает языки со всего мира. Плавное общение для глобальных команд.",
    
    // Chat Interface
    privateChat: "Приватный Чат",
    sharedChat: "Общий Чат",
    groupChat: "Групповой Чат",
    roomUrl: "URL Комнаты",
    createNewRoom: "Создать Новую Комнату",
    participants: "Участники",
    roomInfo: "Информация о Комнате",
    messagePlaceholder: "Введите сообщение...",
    
    // Quick Join
    quickStartTitle: "Начать Чат Сейчас",
    quickStartDesc: "Сгенерируйте URL для создания комнаты чата или присоединитесь к существующей комнате.",
    roomUrlPlaceholder: "Введите URL комнаты...",
    join: "Присоединиться",
    createNewRoomLabel: "Или создать новую комнату",
    
    // Errors
    roomNotFound: "Комната не найдена",
    invalidRoomUrl: "Недействительный URL комнаты",
    connectionError: "Ошибка соединения",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    chat: "الدردشة",
    docs: "التوثيق",
    about: "حول",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "تطبيق دردشة بسيط وسهل الاستخدام في الوقت الفعلي. انضم بسهولة إلى الدردشات الفردية والمشتركة والجماعية باستخدام روابط URL.",
    startChat: "بدء الدردشة",
    viewDocs: "عرض التوثيق",
    
    // Features
    urlJoinTitle: "انضمام سهل عبر الرابط",
    urlJoinDesc: "يمكن لأي شخص الانضمام بسهولة إلى غرف الدردشة من خلال مشاركة الرابط فقط. لا حاجة لإنشاء حساب.",
    chatTypesTitle: "أنواع دردشة متعددة",
    chatTypesDesc: "اختر بين تنسيقات الدردشة الفردية والمشتركة والجماعية حسب احتياجاتك.",
    multiLanguageTitle: "دعم متعدد اللغات",
    multiLanguageDesc: "يدعم لغات من جميع أنحاء العالم. تواصل سلس للفرق العالمية.",
    
    // Chat Interface
    privateChat: "دردشة خاصة",
    sharedChat: "دردشة مشتركة",
    groupChat: "دردشة جماعية",
    roomUrl: "رابط الغرفة",
    createNewRoom: "إنشاء غرفة جديدة",
    participants: "المشاركون",
    roomInfo: "معلومات الغرفة",
    messagePlaceholder: "اكتب رسالة...",
    
    // Quick Join
    quickStartTitle: "ابدأ الدردشة الآن",
    quickStartDesc: "أنشئ رابطًا لإنشاء غرفة دردشة أو انضم إلى غرفة موجودة.",
    roomUrlPlaceholder: "أدخل رابط الغرفة...",
    join: "انضمام",
    createNewRoomLabel: "أو إنشاء غرفة جديدة",
    
    // Errors
    roomNotFound: "الغرفة غير موجودة",
    invalidRoomUrl: "رابط غرفة غير صحيح",
    connectionError: "خطأ في الاتصال",
  },
  hi: {
    // Navigation
    home: "होम",
    chat: "चैट",
    docs: "दस्तावेज़",
    about: "के बारे में",
    
    // HomePage
    appTitle: "DotWork",
    appDescription: "एक सरल और उपयोग में आसान वास्तविक समय चैट एप्लिकेशन। URL के साथ व्यक्तिगत, साझा और समूह चैट में आसानी से शामिल हों।",
    startChat: "चैट शुरू करें",
    viewDocs: "दस्तावेज़ देखें",
    
    // Features
    urlJoinTitle: "URL के साथ आसान शामिल होना",
    urlJoinDesc: "कोई भी व्यक्ति URL साझा करके आसानी से चैट रूम में शामिल हो सकता है। खाता बनाने की आवश्यकता नहीं।",
    chatTypesTitle: "कई चैट प्रकार",
    chatTypesDesc: "अपनी आवश्यकताओं के अनुसार व्यक्तिगत, साझा और समूह चैट प्रारूपों में से चुनें।",
    multiLanguageTitle: "बहुभाषी समर्थन",
    multiLanguageDesc: "दुनिया भर की भाषाओं का समर्थन करता है। वैश्विक टीमों के लिए सुगम संचार।",
    
    // Chat Interface
    privateChat: "निजी चैट",
    sharedChat: "साझा चैट",
    groupChat: "समूह चैट",
    roomUrl: "रूम URL",
    createNewRoom: "नया रूम बनाएं",
    participants: "प्रतिभागी",
    roomInfo: "रूम जानकारी",
    messagePlaceholder: "संदेश टाइप करें...",
    
    // Quick Join
    quickStartTitle: "अभी चैट शुरू करें",
    quickStartDesc: "चैट रूम बनाने के लिए URL जेनरेट करें या मौजूदा रूम में शामिल हों।",
    roomUrlPlaceholder: "रूम URL दर्ज करें...",
    join: "शामिल हों",
    createNewRoomLabel: "या नया रूम बनाएं",
    
    // Errors
    roomNotFound: "रूम नहीं मिला",
    invalidRoomUrl: "अमान्य रूम URL",
    connectionError: "कनेक्शन त्रुटि",
  }
};

export type Language = keyof typeof translations;

export function t(key: string, language: Language): string {
  return translations[language][key] || key;
}
