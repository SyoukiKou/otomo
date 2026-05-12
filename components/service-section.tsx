import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const features = [
  {
    title: "音楽と仕事、具体的な両立方法を一緒に考える",
    description: "「続けたい」気持ちはあっても、どう両立すればいいかわからない。パラレルキャリアの実践者から、時間の使い方、練習環境の確保、仕事選びのコツなど、リアルな両立ノウハウをお伝えします。"
  },
  {
    title: "あなたの強みを「企業が求めるスキル」の言葉に翻訳",
    description: "音楽活動を通じてあなたが培ってきたこと—毎日の練習、本番での集中力、先生や仲間との関係構築、チームでの協力。これらは企業が求める「継続力」「プレゼン力」「コミュニケーション力」「協調性」そのもの。社会人の視点から、あなたの経験を就活で伝わる言葉に翻訳します。"
  },
  {
    title: "楽器・環境に合わせた現実的なプランを設計",
    description: "楽器や住環境によって両立のしやすさは異なります。あなたの楽器、住環境、経済状況に合わせて「本当に続けられる」具体的なプランを一緒に考えます。"
  }
]

const consultationOptions = [
  "カフェで対面（お茶代込み）",
  "オンライン（Zoom）"
]

export function ServiceSection() {
  return (
    <section id="service" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            otomo でできること
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            1時間のセッションで、あなたの「今」と「これから」を整理します。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg mb-6">
                  {index + 1}
                </div>
                <h3 className="font-medium text-xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Card */}
        <Card className="max-w-2xl mx-auto border-2 border-primary/20">
          <CardContent className="p-10 text-center">
            <p className="text-sm tracking-widest text-primary mb-2 uppercase">
              Session Fee
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-6">
              <span className="font-serif text-5xl md:text-6xl font-medium">3,000</span>
              <span className="text-xl text-muted-foreground">円 / 60分</span>
            </div>
            <div className="flex flex-col items-center gap-3 mb-6">
              {consultationOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{option}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              カフェでの対面の場合、飲み物代は料金に含まれています。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
