import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Target, Heart } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "あなたの目標を整理する",
    description: "何がしたいのか、本当は何を大切にしたいのか。漠然とした不安を明確にしていきます。"
  },
  {
    icon: Lightbulb,
    title: "隠れた強みを見つける",
    description: "音楽活動を通じて身についたあなたの力を、企業が求める言葉に翻訳します。"
  },
  {
    icon: Users,
    title: "実例をもとに考える",
    description: "実際にパラレルキャリアを実践している相談者からのリアルなアドバイス。"
  },
  {
    icon: Heart,
    title: "選択肢を一緒に検討",
    description: "二者択一ではなく、あなたらしい第三の道を一緒に探します。"
  }
]

export function ProfileSection() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            otomo について
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            好きなことと仕事、両立したいすべての人へ
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h3 className="font-serif text-2xl font-medium mb-6 text-center">otomo とは</h3>
          <p className="text-muted-foreground leading-relaxed text-center mb-6">
            otomo は、「好きなことと仕事の両立」を実現したいあなたのためのキャリア相談サービスです。
            <br className="hidden md:block" />
            音楽と仕事、または好きな活動と生活費のバランスを取ることに悩んでいませんか？
          </p>
          <p className="text-foreground leading-relaxed text-center">
            音楽の夢を諦める必要はありません。
            パラレルキャリアを実践した経験を持つ相談者が、あなたの人生設計を一緒に考えます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm bg-background">
              <CardContent className="p-8">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-medium text-lg mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed">
            好きなことと仕事、どちらかを選ぶ必要はありません。
            <br className="hidden md:block" />
            あなたらしい両立の道を、一緒に見つけましょう。
          </blockquote>
        </div>
      </div>
    </section>
  )
}
