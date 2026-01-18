import { ShortCourseData } from './shortCourseData.en';

export const shortCourseData_jp: { [key: string]: ShortCourseData } = {
  barista: {
    title: '1日バリスタクラス ☕️',
    description: `コーヒー好き集まれ！たった1日で、完璧なエスプレッソの抽出、なめらかなスチームミルク、そして美しいラテアートまで学べます。カフェクオリティのコーヒーの秘密をプロから直接習得。初心者もスキルアップしたい方も大歓迎の実践型クラスです。各回6名限定！`,
    images: [
      '/short-course/barista_1.jpg',
      '/short-course/barista/barista_course_1.jpg',
      '/short-course/barista/barista_course_2.jpg',
      '/short-course/barista_2.jpg',
      '/short-course/barista/barista_course_3.jpg',
      '/short-course/barista/barista_course_4.jpg',
      '/short-course/barista/barista_course_5.jpg',
    ],
    courseDeliveryLabel: '実施形態：',
    courseDelivery: '対面（ハンズオン中心の実習を行います）',
    timeLabel: '時間：',
    addressLabel: '住所：',
    address:
      'ABMメインキャンパス（242 Castlereagh Street Sydney NSW 2000 Australia）',
    locationLabel: '会場：',
    selectDateOptionLabel: '日程を選択',
    dates: [
      {
        date: '2025-02-21',
        displayDate: '2025年2月21日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-04-15',
        displayDate: '2025年4月15日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-05-23',
        displayDate: '2025年5月23日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-06-17',
        displayDate: '2025年6月17日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-07-16',
        displayDate: '2025年7月16日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-08-15',
        displayDate: '2025年8月15日',
        time: '午後1:00〜午後5:00',
      },
      {
        date: '2025-09-01',
        displayDate: '2025年9月1日',
        time: '午後3:00〜午後7:00',
        available: false,
      },
      {
        date: '2025-10-17',
        displayDate: '2025年10月17日',
        time: '午後4:00〜午後8:00',
      },
      {
        date: '2025-10-28',
        displayDate: '2025年10月28日',
        time: '午後3:00〜午後7:00',
        available: false,
      },
      {
        date: '2025-11-28',
        displayDate: '2025年11月28日',
        time: '午後2:00〜午後6:00',
      },
    ],
    location:
      'ABMメインキャンパス（242 Castlereagh Street Sydney NSW 2000 Australia）',
    price: 150,
    duration: '4時間（1日のみ）',
    whoShouldAttend: [
      '完璧なエスプレッソを学びたいコーヒー愛好家',
      'コーヒースキルを上達させたい方',
      'ラテアートとミルクフォーミングを楽しく極めたい初心者の方',
    ],
    whatYoullLearn: [
      '理想的なエスプレッソの抽出方法',
      'クリーミーでシルキーなミルクのスチーミング技術',
      'シンプルで美しいラテアートの基本',
      'プロ用コーヒー機器を使った実践',
    ],
    takeHomeMessage:
      '自宅でも“バリスタ級”のコーヒーで家族や友人を驚かせましょう！',
    dressCode:
      '安全のため、滑りにくいゴム底のつま先まで覆う靴をご着用ください。長い髪は束ね、食品衛生上不要な装飾品は外してください。',
    callToAction: '定員わずか！今すぐご予約ください！',
  },

  cake: {
    title: 'クラシック・フレンチケーキ マスタークラス 🍰',
    description: `フレンチケーキに挑戦してみたい方へ。初心者からホームベーカーまで、実践を通じてクラシックなフランス菓子の必須テクニックを学び、美しいデザートを作れるようになります。`,
    images: [
      '/short-course/classic_french_cakes_2.png',
      '/short-course/cake/cake_1.jpg',
      '/short-course/french_cakes.jpg',
      '/short-course/cake/cake_7.jpg',
      '/short-course/cake/cake_2.jpg',
      '/short-course/cake/cake_3.jpg',
      '/short-course/cake/cake_4.jpg',
      '/short-course/cake/cake_5.jpg',
      '/short-course/cake/cake_6.jpg',
    ],
    dates: [
      {
        date: '2025-03-27',
        displayDate: '2025年3月27日',
        time: '午後12:30〜午後6:00',
      },
    ],
    location:
      'Kitchen Haymarket（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, NSW 2000）',
    price: 180,
    duration: '5.5時間（1日のみ）',
    whoShouldAttend: [
      'お菓子作りが好きでフレンチケーキは未経験の方',
      '新しいスキルを学び家族・友人を驚かせたい方',
      'プロの製菓テクニックに興味がある方',
    ],
    whatYoullLearn: [
      '層が美しいオペラの焼成と組み立て',
      'サクサクの生地と滑らかなレモンカードの秘訣',
      '簡単に映えるデコレーションのコツ',
      '自信がつくフランス菓子の基礎',
    ],
    whatYoullMake: [
      'クラシック・オペラケーキ—アーモンド生地、コーヒーバタークリーム、チョコガナッシュの贅沢な層ケーキ',
      'レモンプチタルト—香ばしい生地に酸味の効いたレモンカード、艶やかな仕上げ',
    ],
    instructor:
      'シドニーの著名店（ハット獲得）で経験を積んだ元パティシエが担当。高級パティスリーでの経験を活かし、初めての方にも分かりやすく指導します。',
    dressCode:
      '安全と衛生のため、つま先まで覆う滑りにくい靴をご着用ください。長い髪は束ね、装飾品は外してください。',
    callToAction:
      '定員制です。トップパティシエから学べるこの機会をお見逃しなく！',
  },

  focaccia: {
    title: 'サワードウ＆フォカッチャ マスタークラス 🥖✨',
    description: `受賞歴のあるサワードウのプロから学ぶ、アーティザンブレッドの世界。サワードウとフォカッチャを“最初から最後まで”作れるようになる充実のハンズオン講座です。`,
    images: [
      '/short-course/focaccia/focaccia_1.jpg',
      '/short-course/focaccia/focaccia_2.jpg',
      '/short-course/focaccia/focaccia_3.jpg',
      '/short-course/focaccia/focaccia_4.jpg',
      '/short-course/focaccia/focaccia_5.jpg',
      '/short-course/focaccia/focaccia_6.jpg',
      '/short-course/focaccia/focaccia_7.jpg',
      '/short-course/focaccia/focaccia_8.jpg',
    ],
    dates: [
      {
        date: '2025-06-17',
        displayDate: '2025年6月17日',
        time: '午後1:00〜午後6:30',
      },
      {
        date: '2025-09-24',
        displayDate: '2025年9月24日',
        time: '午前10:00〜午後3:30',
      },
    ],
    location:
      'Kitchen Haymarket（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000）',
    price: 160,
    duration: '5.5時間（1日のみ）',
    whoShouldAttend: [
      '初心者から腕を磨きたい方まで幅広く歓迎',
      'サワードウを基礎からやり直したい方',
      '毎日の生活に無理なくサワードウ作りを取り入れたい方',
    ],
    whatYoullExperience: [
      '受賞歴のあるサワードウ職人から直接学べます',
      'サワードウ＆フォカッチャの一連の工程をマスター',
      '焼きたてのフォカッチャとサワードウをお持ち帰り',
      '家族や友人と手作りパンを楽しむ特別な体験',
      '一生ものの手ごね技術を身につける忘れられない時間',
    ],
    whyThisCourse:
      '自然発酵のサワードウは消化しやすく、旨味も豊か。フォカッチャは軽い食感とオリーブオイルの風味で、加工パンよりも満足度の高いヘルシーな選択肢です。',
    whyLearnToMake: [
      '添加物不使用—材料を自分でコントロール',
      '自然発酵で腸活にもうれしい',
      '一生楽しめる“手作り”のスキル',
      '大切な人に高品質な自家製パンをシェア',
    ],
    takeHomeMessage:
      '単なるパン作りを超えた“技”を身につけて、日常をもっと豊かに！',
    dressCode:
      '滑りにくいゴム底のつま先まで覆う靴を推奨。長い髪は束ね、不要な装飾品は外してください。',
    callToAction:
      '少人数制です。専門家から学べる貴重なチャンスをお見逃しなく！',
  },

  wine: {
    title: 'ワイン 1日クラス 🍷✨',
    description: `ワインの基本からテイスティング、品種の違い、料理とのペアリングまで。学びながらアンティパスト＆チーズの盛り合わせも楽しめます。初心者から知識を深めたい方まで歓迎！`,
    images: [
      '/short-course/wine/wine_1.jpg',
      '/short-course/wine/wine_2.jpg',
      '/short-course/wine/wine_3.png',
      '/short-course/wine/wine_4.png',
    ],
    dates: [
      {
        date: '2025-04-16',
        displayDate: '2025年4月16日',
        time: '午後5:00〜午後8:30',
      },
      {
        date: '2025-05-09',
        displayDate: '2025年5月9日',
        time: '午後5:00〜午後8:30',
      },
      {
        date: '2025-07-03',
        displayDate: '2025年7月3日',
        time: '午後5:00〜午後8:30',
      },
    ],
    location:
      'ABMメインキャンパス（242 Castlereagh Street Sydney NSW 2000 Australia）',
    price: 150,
    duration: '3.5時間（1日のみ）',
    whoShouldAttend: [
      '18歳以上でワインに興味のある方',
      'テイスティングを本格的に学びたいワイン愛好家',
      'ペアリングやサーブ方法の基礎を知りたい初心者',
    ],
    whatYoullLearn: [
      '基本のテイスティング技法',
      '料理とのペアリングの考え方',
      '主要品種の特徴',
      '適切なサーブと保存方法',
    ],
    antipastoMessage:
      '🍴 アンティパスト＆チーズの盛り合わせ付き！学びながら多様なワインとともに楽しめます。',
    takeHomeMessage:
      '🎁 自信を持って“選ぶ・味わう・提供する”ための実践知識をお持ち帰りください！',
    dressCode:
      '安全と衛生のため、滑りにくいゴム底のつま先まで覆う靴をご着用ください。長い髪は束ね、装飾品は外してください。',
    callToAction: '🔥 定員制です。今すぐご予約を！',
  },

  dessert: {
    title: 'ファインダイニング・デザートプレーティング講座 🍰✨',
    description: `ピスタチオスポンジにレモングラスクリーム、仕上げにラズベリーソルベ。レストラン級の一皿を完成させる、盛り付けに特化した講座です。`,
    images: [
      '/short-course/dessert/fine_dining_dessert_1.jpg',
      '/short-course/dessert/fine_dining_dessert_2.png',
      '/short-course/dessert/fine_dining_dessert_3.png',
    ],
    dates: [
      {
        date: '2025-10-03',
        displayDate: '2025年10月3日',
        time: '午後12:30〜午後4:00',
        available: false,
      },
    ],
    location:
      'ABM Kitchen（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000）',
    price: 150,
    duration: '3.5時間（1日のみ）',
    whoShouldAttend: [
      'シェフ／ホームクック／フード系インフルエンサー志望の方',
      'SNS映えするデザートを作りたいカフェ・レストラン経営者',
      'ファインダイニングの盛り付け基礎を固めたい方',
    ],
    whatYoullLearn: [
      'ファインダイニングの盛り付け美学と技術',
      'レモングラスクリーム×ピスタチオスポンジの構成',
      'ラズベリーソルベの美しい盛り付け',
      '“おいしい”を“魅せる”に変えるプロのテクニック',
    ],
    takeHomeMessage: 'あなたのデザートを“忘れられない一皿”に！',
    dressCode:
      '滑りにくいゴム底のつま先まで覆う靴を推奨。長い髪は束ね、不要な装飾品は外してください。',
    callToAction: '🔥 定員制。お早めにご予約ください！',
  },

  mixology: {
    title: 'カクテル＆ミクソロジー講座 🍹',
    description: `シェイク、ステア、ミックスの基礎から、見た目も美しい一杯の作り方まで。初心者も愛好家も楽しめる、体験型のカクテルクラスです。友達同士での参加にも最適、思い出に残る午後を！`,
    images: [
      '/short-course/mixology/cocktail_1.png',
      '/short-course/mixology/cocktail_2.png',
    ],
    dates: [
      {
        date: '2025-08-29',
        displayDate: '2025年8月29日',
        time: '午後2:00〜午後6:00',
        available: false,
      },
      {
        date: '2025-11-07',
        displayDate: '2025年11月7日',
        time: '午後2:00〜午後6:00',
        available: false,
      },
    ],
    location:
      'ABMメインキャンパス（242 Castlereagh Street Sydney NSW 2000 Australia）',
    price: 150,
    duration: '4時間（1日のみ）',
    whoShouldAttend: [
      '🎉 ヘンパーティー',
      '🎂 誕生日（18歳以上）',
      '👯‍♀️ ガールズナイト',
      '🥂 チームビルディング',
      '🍹 カクテル初心者・愛好家',
    ],
    whatYoullLearn: [
      'シェイク／ステア／ミックスの基本',
      'おいしく美しいカクテルの設計',
      'プロのバーテンディング技法',
      '友人を驚かせる“魅せる一杯”の作り方',
    ],
    takeHomeMessage: '最高の仲間と、忘れられない午後を！',
    dressCode:
      '安全と衛生のため、滑りにくいゴム底のつま先まで覆う靴をご着用ください。長い髪は束ね、装飾品は外してください。',
    callToAction: '📅 今すぐ予約！※受講は18歳以上限定',
  },

  petit: {
    title: 'フレンチ・プチフール—マカロン編！',
    description: `外はサクッ、中はしっとりの完璧なマカロンを目指して。シドニーの有名ハット店で腕を磨いた元パティシエから学ぶ実践クラス。ホームベーカーもプロ志向の方も、ワンランク上の仕上がりへ。`,
    images: [
      '/short-course/classic_french_pastries_1.png',
      '/short-course/petit/petit_2.png',
      '/short-course/petit/petit_3.png',
      '/short-course/petit/petit_4.png',
    ],
    dates: [
      {
        date: '2025-04-02',
        displayDate: '2025年4月2日',
        time: '午後1:00〜午後4:30',
      },
      {
        date: '2025-09-18',
        displayDate: '2025年9月18日',
        time: '午後1:00〜午後4:30',
        available: false,
      },
    ],
    location:
      'Kitchen Haymarket（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, NSW 2000）',
    price: 120,
    duration: '3.5時間（1日のみ）',
    whoShouldAttend: [
      'マカロン作りを極めたいホームベーカー',
      'パティスリースキルを磨きたいシェフ',
      '繊細なフランス菓子が大好きな方',
    ],
    whatYoullLearn: [
      'なめらかで艶のあるマカロンシェルの秘訣',
      '軽やかで風味豊かなフィリングの作り方',
      '絞り・焼成・組み立てのプロセス',
    ],
    takeHomeMessage:
      '🎁 手作りマカロンは箱に詰めてお持ち帰り！ご家族やご友人とお楽しみください。',
    instructor:
      'シドニー有名ハット店の元パティシエが丁寧に指導。初めての方でも安心してご参加いただけます。',
    dressCode:
      '安全のため、滑りにくいゴム底のつま先まで覆う靴をご着用ください。長い髪は束ね、装飾品は外してください。',
    callToAction: '🔥 定員制。今すぐご予約を！',
  },

  vegan: {
    title: 'ヴィーガン＆ベジタリアン料理クラス',
    description: `ヴィーガン料理＝サラダだけ、ではありません。栄養たっぷりで満足感のある“おいしい”植物由来料理を、プロのシェフから学びましょう。家族や友人も驚く、創造的で風味豊かなメニューが作れるようになります。`,
    images: [
      '/short-course/vegan/vegan_1.png',
      '/short-course/vegan/vegan_2.png',
      '/short-course/vegan/vegan_3.png',
      '/short-course/vegan/vegan_4.png',
      '/short-course/vegan/vegan_5.png',
    ],
    dates: [
      {
        date: '2025-07-11',
        displayDate: '2025年7月11日',
        time: '午後1:00〜午後5:30',
      },
    ],
    location:
      'ABM Kitchen（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000）',
    price: 150,
    duration: '5.5時間（1日のみ）',
    whoShouldAttend: [
      'スキルを広げたいホームクック・シェフ',
      'プラントベース料理に興味がある方',
      'ヘルシーでおいしい食事作りを学びたい方',
    ],
    whatYoullLearn: [
      '満足感のあるプラントベース料理の作り方',
      'バラエティ豊かなヴィーガン／ベジタリアンレシピ',
      '植物性食材を活かすプロの調理技法',
      '家族や友人を驚かせる盛り付けと味の工夫',
    ],
    takeHomeMessage:
      '新しいスキルで“おいしい驚き”を届けましょう。プラントベースの概念が変わります！',
    dressCode:
      '滑りにくいゴム底のつま先まで覆う靴を推奨。長い髪は束ね、不要な装飾品は外してください。',
    callToAction: '📅 定員制—今すぐご予約ください！',
  },

  chocolate: {
    title: 'チョコレートクラス – クリスマス 🍫',
    description: `ホリデー気分を高める、クリスマス向けチョコレート講座。華やかなチョコレートスイーツと季節のデコレーションを学びましょう。`,
    images: [
      '/short-course/chocolate/xmas_1.png',
      '/short-course/chocolate/xmas_2.avif',
      '/short-course/chocolate/xmas_3.png',
      '/short-course/chocolate/xmas_4.png',
    ],
    dates: [
      {
        date: '2025-12-16',
        displayDate: '2025年12月16日',
        time: '午後1:00〜午後4:30',
        available: false,
      },
    ],
    location:
      'Kitchen Haymarket（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000）',
    price: 130,
    duration: '3.5時間（1日のみ）',
    whoShouldAttend: [
      'プロフェッショナルスキルを伸ばしたいホームクック・シェフ',
      'テンパリング技術を学びたい方',
      'クリスマスの焼き菓子やデコレーションに興味がある方',
    ],
    whatYoullLearn: [
      'チョコレートテンパリングの基礎',
      '美しいチョコデコレーションの作り方',
      'ジンジャーブレッドハウスのデコレーション技法',
      'プロのチョコレートワーキング',
    ],
    takeHomeMessage:
      'デコレーションしたジンジャーブレッドハウスやチョコ作品はお持ち帰り！クリスマスに家族・友人と楽しみましょう。',
    dressCode:
      '滑りにくいゴム底のつま先まで覆う靴を推奨。長い髪は束ね、不要な装飾品は外してください。',
    callToAction: '🎄 定員制—ホリデーの“甘い思い出作り”を今すぐ予約！',
  },

  pastries: {
    title: 'クラシック・フレンチペストリー マスタークラス 🥐',
    description: `ミルフィーユとクロカンブッシュ（Croque en Bouche）の2品を制作し、お持ち帰り。アフタヌーンティーやバースデー、特別なイベントを上品に演出します。香ばしいパイ生地とバニラカスタードのミルフィーユ、キャラメルの糸で飾るシュー塔・クロカンブッシュは、結婚式や洗礼式でも主役級の華やかさです。`,
    images: [
      '/short-course/classic_french_pastries_1.png',
      '/short-course/pastries/pastries_2.png',
      '/short-course/pastries/pastries_3.png',
      '/short-course/pastries/pastries_4.png',
    ],
    dates: [
      {
        date: '2025-06-26',
        displayDate: '2025年6月26日',
        time: '午前10:00〜午後3:30',
      },
    ],
    location:
      'ABM Kitchen Haymarket（Shop 22, The Quay Haymarket, 61-79 Quay Street, Haymarket, 2000）',
    price: 160,
    duration: '5.5時間（1日のみ）',
    whoShouldAttend: [
      'スキルアップしたいホームクック・シェフ',
      'イベントにフレンチの華を添えたい方',
      '代表的なフランス菓子の技術を極めたい方',
    ],
    whatYoullLearn: [
      'サクサクのパイ生地と濃厚バニラカスタードで作る理想のミルフィーユ',
      'キャラメルの糸で仕上げるクロカンブッシュの組み立て',
      'プロのフランス菓子テクニックと段取り',
      '“映える”おもてなしの作り方',
    ],
    whatYoullMake: [
      '🥐 ミルフィーユ—サクサクのパイ生地×バニラカスタード。ティータイムやお祝いに最適',
      '🏰 クロカンブッシュ—シューを積み上げキャラメルで飾る華やかなタワー',
    ],
    takeHomeMessage:
      '焼き上げた作品はお持ち帰り可能。バターの香りに包まれた幸せな時間をご家庭でもどうぞ。',
    dressCode:
      '安全と衛生のため、滑りにくいゴム底のつま先まで覆う靴をご着用ください。長い髪は束ね、装飾品は外してください。',
    callToAction: '今すぐ予約して、あなたのキッチンに“憧れのパティスリー”を。',
  },

  fss: {
    title: 'NSW フードセーフティ・スーパーバイザー認定（FSS）🍽️✨',
    description: `NSW州のFSS認定を取得し、店舗の食品衛生コンプライアンスを確実に。カフェ、レストラン、ケータリングなど食品関連事業に必須の知識・実技を学びます。`,
    images: [
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
    ],
    dates: [
      {
        date: '2025-08-08',
        displayDate: '8 August',
        time: '午前9:00〜午後5:00',
      },
      {
        date: '2025-08-29',
        displayDate: '29 August',
        time: '午前9:00〜午後5:00',
      },
      {
        date: '2025-09-15',
        displayDate: '15 September',
        time: '午前9:00〜午後5:00',
      },
      {
        date: '2025-10-17',
        displayDate: '17 October',
        time: '午前9:00〜午後5:00',
      },
      {
        date: '2025-11-21',
        displayDate: '21 November',
        time: '午前9:00〜午後5:00',
      },
      {
        date: '2025-12-12',
        displayDate: '12 December',
        time: '午前9:00〜午後5:00',
      },
    ],
    location: 'ABMキャンパス',
    price: 180,
    duration: '8時間（1日のみ）',
    specialOffer: {
      code: 'ABMFSS15',
      discount: '15%割引',
      validUntil: '',
      note: '（新規受講者のみ）',
    },
    selectDateOptionLabel: '日程を選択',
    courseType: {
      label: 'コースを選択',
      options: ['Certificate（新規）', 'Recertificate（更新）'],
    },
    courseOverview:
      'ABM Further Educationの「SITSS00069 Food Safety Supervisor（FSS）」では、職場の食品安全を確保するために必要なスキルを身につけます。カフェ、レストラン、ケータリングなど、高い衛生基準が求められる環境で働く方に最適です。',
    keyUnits: [
      {
        code: 'SITXFSA005',
        title: '食品安全のための衛生的実践',
        description: '食品汚染を防ぐための衛生習慣と食品取扱いを学びます。',
      },
      {
        code: 'SITXFSA006',
        title: '安全な食品取扱いへの参加',
        description:
          '法的要件を満たすための安全な食品取扱いを理解し実践します。',
      },
    ],
    activities: [
      {
        occasion: 'Occasion 1（A）',
        description: '制服・PPEの適切な使用、手洗い、衛生的実践。',
      },
      {
        occasion: 'Occasion 2（B/C）',
        description: '食品の受け取りと保管、温度計の校正。',
      },
      {
        occasion: 'Occasion 3（D/E）',
        description: '安全な調理・陳列・提供・包装・輸送。',
      },
      {
        occasion: 'Occasion 4（F/G）',
        description: '清掃、食品廃棄、ハザード識別。',
      },
    ],
    whoNeedsFSS: [
      'カフェ／レストランのマネージャー',
      '食品事業のオーナー',
      'ケータリングスタッフ',
      '食品安全を管理するスーパーバイザー',
    ],
  },
  rsa: {
    title: 'アルコール責任提供サービス（RSA）- NSW（対面）',
    description: `アルコール責任提供サービス（RSA）証明書は、NSWでライセンス施設で働くすべての人に必須です。この対面コースは、責任あるアルコール提供、法的要件、アルコール関連の害を防ぐ方法について包括的なトレーニングを提供します。`,
    images: [
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
      '/short-course/fss_1.png',
    ],
    dates: [
      {
        date: '2026-01-16',
        displayDate: '2026年1月16日',
        time: '午前9時 - 午後5時',
      },
      {
        date: '2026-02-20',
        displayDate: '2026年2月20日',
        time: '午前9時 - 午後5時',
      },
      {
        date: '2026-03-13',
        displayDate: '2026年3月13日',
        time: '午前9時 - 午後5時',
      },
    ],
    location: 'ABMキャンパス',
    price: 180,
    duration: '8時間（1日のみ）',
    courseDeliveryLabel: 'コース提供:',
    courseDelivery: '対面。参加者は実践的な活動に参加します',
    timeLabel: '時間:',
    time: '午前9時 - 午後5時',
    addressLabel: '住所:',
    address: 'ABMメインキャンパス（242 Castlereagh Street Sydney NSW 2000 Australia）',
    callToAction: '今すぐ登録',
    whatYoullLearn: [
      'NSWでのアルコール提供の法的要件',
      '酔った客を識別し、サービスを拒否する方法',
      'アルコール関連の害を防ぐ戦略',
      '血中アルコール濃度（BAC）の理解',
      '責任ある提供の実践と技術',
      '困難な状況の処理と紛争解決',
    ],
    courseFormat: [
      '最小7時間の学生接触時間（休憩を除く）。',
      'NSWが公式に発行した参加者ワークブック、ファシリテーションガイド、評価ブックレットを使用します。',
      'サービス拒否のロールプレイや基本的な計算タスクなどの監督された知識と実践的な活動を含みます。',
    ],
    whoShouldAttend: [
      'バースタッフとバーテンダー',
      'ライセンス施設のウェイター',
      'ライセンス施設の警備員',
      'ライセンス施設のマネージャーとスーパーバイザー',
      'アルコールを提供するホスピタリティ業界で働くすべての人',
    ],
    whyYouNeedRSA: [
      'NSWでライセンス施設で働く際にRSA証明書を保持することは法的要件です',
      'あなたと雇用主を法的責任から保護します',
      'バー、レストラン、クラブ、ホテルでの就職に不可欠です',
      '責任あるアルコール提供へのコミットメントを示します',
      '客とスタッフのためのより安全な環境を作るのに役立ちます',
    ],
    faq1: {
      question: 'なぜRSAが必要なのか',
      answer: 'アルコール責任提供サービス（RSA）証明書は、NSWでライセンス施設で働くすべての人に必須です。あなたと雇用主を法的責任から保護し、バー、レストラン、クラブ、ホテルでの就職に不可欠であり、責任あるアルコール提供へのコミットメントを示し、客とスタッフのためのより安全な環境を作るのに役立ちます。',
    },
    faq2: {
      question: '何を学ぶか',
      answer: 'NSWでのアルコール提供の法的要件、酔った客を識別し、サービスを拒否する方法、アルコール関連の害を防ぐ戦略、血中アルコール濃度（BAC）の理解、責任ある提供の実践と技術、そして困難な状況の処理と紛争解決を学びます。',
    },
  },
};
