"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MessageCircle, MapPin, Video } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "お申し込み",
    description: "下のフォームからご希望の日程・方法をお知らせください",
    icon: Calendar
  },
  {
    step: 2,
    title: "日程調整",
    description: "お返事後、詳細を決めていきます",
    icon: MessageCircle
  },
  {
    step: 3,
    title: "相談当日",
    description: "カフェまたはオンラインで60分のセッション",
    icon: Video
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-primary mb-4 uppercase">
            Book a Session
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            相談を予約する
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            まずは気軽に話してみませんか。
            <br />
            あなたの「今」を聞かせてください。
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((item) => (
            <Card key={item.step} className="border-0 shadow-sm bg-secondary/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs text-primary font-medium">STEP {item.step}</span>
                <h3 className="font-medium mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Cafe Option */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-lg">カフェで対面</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  東京都内のカフェで直接お会いしてお話しします。飲み物代は料金に含まれています。
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>・ 落ち着いた雰囲気で話せる</li>
                  <li>・ 対面ならではの安心感</li>
                  <li>・ 場所は相談して決定</li>
                </ul>
              </div>

              {/* Online Option */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Video className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-lg">オンライン</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Zoomを使って全国どこからでもご参加いただけます。
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>・ 自宅からリラックスして参加</li>
                  <li>・ 全国どこからでもOK</li>
                  <li>・ 移動時間ゼロ</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/50 p-8 md:p-10 text-center">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="font-serif text-4xl font-medium">3,000</span>
                <span className="text-muted-foreground">円 / 60分</span>
              </div>
              <Button 
                size="lg" 
                className="rounded-full px-10"
                asChild
              >
                <a 
                  href="https://linkbio.co/miuviolin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  予約フォームへ進む
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                外部予約ページに移動します
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
