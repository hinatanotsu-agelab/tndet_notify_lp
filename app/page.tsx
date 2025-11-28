
import { Bell, MessageCircle, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a1a36] font-sans text-[#0a1a36]">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-4 py-4 bg-white/90 shadow-sm sticky top-0 z-10">
        <div className="text-2xl font-bold tracking-tight text-[#0a1a36]">AI企業速報くん</div>
        <a
          href="https://lin.ee/6qpUXZF"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0051a8] text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-[#003366] transition-colors"
        >
          LINEで登録
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Hero Section */}
        <section className="w-full max-w-2xl flex flex-col items-center text-center py-12">
          <div className="mb-6">
            <img
              src="/ChatGPT icon cropped.png"
              alt="AI企業速報くん"
              className="mx-auto rounded-full border-4 border-[#0051a8] bg-white shadow"
              width={120}
              height={120}
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            決算情報を、AIが瞬時に翻訳・要約。<br className="hidden sm:inline" />投資のチャンスを逃さない。
          </h1>
          <p className="text-white/90 text-base sm:text-lg mb-6">
            TDnetの適時開示情報をリアルタイムで通知。英語の決算資料もAIが日本語で要約してLINEにお届けします。
          </p>
          <a
            href="https://lin.ee/6qpUXZF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00c300] text-white font-bold rounded-full px-8 py-3 text-lg shadow-lg hover:bg-[#009900] transition-colors"
          >
            今すぐLINEで使い始める（無料）
          </a>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
            <Bell className="text-[#0051a8] mb-2" size={36} />
            <h3 className="font-bold text-lg mb-1">リアルタイム通知</h3>
            <p className="text-sm text-gray-600 text-center">TDnetと連動し、発表から数秒でLINEに通知</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
            <MessageCircle className="text-[#0051a8] mb-2" size={36} />
            <h3 className="font-bold text-lg mb-1">AI翻訳・要約</h3>
            <p className="text-sm text-gray-600 text-center">難解な決算資料や海外情報を、AIが要約</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6">
            <Smartphone className="text-[#0051a8] mb-2" size={36} />
            <h3 className="font-bold text-lg mb-1">スマホで完結</h3>
            <p className="text-sm text-gray-600 text-center">専用アプリ不要。いつものLINEで完結</p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full max-w-2xl py-10">
          <h2 className="text-xl font-bold text-white mb-6 text-center">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="font-bold text-lg mb-2">フリープラン</div>
              <div className="text-2xl font-bold text-[#0051a8] mb-1">月額0円</div>
              <ul className="text-gray-700 text-sm mb-2">
                <li>登録可能 3社まで</li>
                <li>お試し利用に最適</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 border-[#0051a8]">
              <div className="font-bold text-lg mb-2">スタンダードプラン</div>
              <div className="text-2xl font-bold text-[#0051a8] mb-1">月額980円</div>
              <ul className="text-gray-700 text-sm mb-2">
                <li>登録可能 10社まで</li>
                <li>全機能利用可能</li>
              </ul>
            </div>
          </div>
          <div className="text-white/90 text-center mt-4 text-sm">
            ランチ1回分の価格で、1ヶ月の情報収集を自動化
          </div>
        </section>

        {/* Legal Section */}
        <section className="w-full max-w-2xl py-10 mt-8">
          <h2 className="text-lg font-bold text-white mb-4 text-center">特定商取引法に基づく表記</h2>
          <div className="bg-white rounded-xl shadow p-6 text-sm text-gray-800 leading-relaxed">
            <dl className="space-y-2">
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">販売業者</dt><dd className="ml-0 sm:ml-2">エイジラボ株式会社</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">運営統括責任者名</dt><dd className="ml-0 sm:ml-2">袴田 格</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">所在地</dt><dd className="ml-0 sm:ml-2">〒167-0043 東京都杉並区上荻2丁目39-17</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">電話番号</dt><dd className="ml-0 sm:ml-2">05017813215</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">メールアドレス</dt><dd className="ml-0 sm:ml-2">itaru.hakamada@age-lab.jp</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">販売価格</dt><dd className="ml-0 sm:ml-2">月額 980円（税込）</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">商品代金以外の必要料金</dt><dd className="ml-0 sm:ml-2">インターネット接続料金、通信料金等はお客様のご負担となります。</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">お支払い方法</dt><dd className="ml-0 sm:ml-2">クレジットカード決済</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">代金の支払時期</dt><dd className="ml-0 sm:ml-2">初回：お申し込み時、2回目以降：毎月同日に請求</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">商品の引渡時期</dt><dd className="ml-0 sm:ml-2">決済完了後、即時利用可能</dd></div>
              <div className="flex flex-col sm:flex-row"><dt className="font-semibold w-48">返品・交換・キャンセルについて</dt><dd className="ml-0 sm:ml-2">デジタルコンテンツの性質上、決済完了後の返品・返金はお受けできません。解約はいつでも公式LINE内のメニューから行っていただけます。</dd></div>
            </dl>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center text-xs text-white/60 py-4 bg-[#0a1a36]">
        &copy; {new Date().getFullYear()} AI企業速報くん
      </footer>
    </div>
  );
}
