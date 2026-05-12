import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Heart, Lightbulb, Clock } from "lucide-react"

const painPoints = [
  {
    icon: MessageCircle,
    title: "誰に相談すればいいかわからない",
    description: "音楽の先生は「続けろ」と言う。でも就職のことは聞けない。一般の就活アドバイザーには音大生の気持ちが伝わらない。"
  },
  {
    icon: Heart,
    title: "音楽をやめる = 負けだと思ってしまう",
    description: "小さい頃から続けてきた音楽。演奏家以外の道を選ぶことが「裏切り」や「敗北」に感じてしまう。"
  },
  {
    icon: Lightbulb,
    title: "自分に何ができるかわからない",
    description: "「音楽しかやってこなかった」と思いがち。でも本当は、音大で身につけた力は社会で武器になる。"
  },
  {
    icon: Clock,
    title: "時間がない、焦りがある",
    description: "練習、レッスン、バイト...忙しくて進路のことをゆっくり考える余裕がない。でも卒業は迫ってくる。"
  }
]

export function PainPointsSection() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            こんな悩み、ありませんか？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            音大生の多くが抱える「キャリアの迷い」。
            あなただけではありません。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
