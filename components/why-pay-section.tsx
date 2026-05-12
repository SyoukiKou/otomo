import { Card, CardContent } from "@/components/ui/card"
import { X, Check, ArrowRight } from "lucide-react"

const comparisons = [
  {
    notThis: "就職先を紹介してもらう",
    butThis: "自分に合う業界・働き方を見つける力をつける",
    detail: "紹介されて入った会社が合わなければ意味がない。自分で選べる判断軸を一緒に作ります。"
  },
  {
    notThis: "「音楽を諦めろ」と説得される",
    butThis: "「どう続けるか」を一緒に戦略立案",
    detail: "音楽を辞める・続けるの二択ではなく、あなたの人生に音楽をどう組み込むかを設計します。"
   {
     notThis: "\u一般論のキャリアアドバイス",
     butThis: "\u音楽×仕事両立の実践的アドバイス",
     detail: "\u音楽を続けながら仕事をしている人の視点から、パラレルキャリアの現実的な両立戦略をお伝えします。"
   }
  }
]

const valuePoints = [
  {
    number: "01",
    title: "自己理解が深まる",
    description: "漠然とした不安を言語化し、自分が本当に大切にしたいものが見えてくる"
  },
  {
    number: "02",
    title: "選択肢が増える",
    description: "知らなかった働き方、キャリアパス、両立の方法など具体的な選択肢を知れる"
  },
  {
    number: "03",
    title: "行動に移せる",
    description: "「何から始めればいいかわからない」から「まずこれをやる」が明確になる"
  }
]

export function WhyPaySection() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            otomo の相談で得られること
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            就職エージェントとは違う。
            <br />
            「自分で選べる力」を身につけるための1時間です。
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-4 mb-20">
          {comparisons.map((item, index) => (
            <Card key={index} className="border shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 bg-muted/50 flex items-center gap-4">
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground line-through">{item.notThis}</span>
                  </div>
                  <div className="p-6 bg-card flex items-center gap-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{item.butThis}</span>
                      <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Points */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl font-medium mb-4">
            1時間の相談後、あなたは...
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {valuePoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-sm bg-card text-center">
              <CardContent className="p-8">
                <span className="text-4xl font-serif text-primary/30 block mb-4">
                  {point.number}
                </span>
                <h4 className="font-medium text-lg mb-3">{point.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <ArrowRight className="w-4 h-4 inline mr-2" />
            だから、3,000円は「紹介料」ではなく「自己投資」です
          </p>
        </div>
      </div>
    </section>
  )
}
