import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Target, Heart, ExternalLink } from "lucide-react"

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

import SyiaImage from "./syia.jpeg"

const coaches = [
  {
    name: "上杉 未宇",
    nameEn: "Miu Uesugi",
    role: "otomo 相談相手",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miuuesugi.png-9J7EDIggErM23F47P0RHUSJrsrwjph.jpeg",
    imageAlt: "上杉未宇 - ヴァイオリンを持つプロフィール写真",
    bio:
      "2001年生まれ。早稲田大学文学部文学科卒業。2歳よりピアノ、5歳よりヴァイオリンを始める。現在は会社員として働きながら、演奏活動や企画づくりを両立するパラレルキャリアを実践している。",
    tags: ["パラレルキャリア", "音楽と仕事の両立", "キャリア相談"],
    link: "https://miuviolin.com/",
    linkLabel: "Miuのサイトを見る",
  },
  {
    name: "SYIA",
    nameEn: "しあ",
    role: "ニューロメディアアーティスト",
    image: SyiaImage,
    imageAlt: "SYIA の写真",
    bio:
      "中学生よりヴァイオリニスト活動を開始。現在は東京科学大学修士課程で脳科学と数理モデルを融合させ、芸術による感動体験の本質に迫る研究と、科学と芸術の横断的な社会実装に取り組んでいる。",
    tags: ["脳科学", "芸術と社会実装", "ヴァイオリン"],
    link: "https://syiaviolin.com/",
    linkLabel: "SYIAのサイトを見る",
  },
 
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
            相談内容に合わせて、実践者の視点からあなたの人生設計を一緒に考えます。
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

        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
              コーチ紹介
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              現在のコーチを紹介します。今後も順次追加していけるよう、この一覧に積み上げていきます。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {coaches.map((coach) => (
              <Card key={coach.name} className="border-0 shadow-sm bg-background overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      {coach.image ? (
                        (() => {
                          const src = typeof coach.image === 'string' ? coach.image : coach.image.src
                          return (
                            <img
                              src={src}
                              alt={coach.imageAlt}
                              className="w-28 h-28 rounded-2xl object-cover"
                            />
                          )
                        })()
                      ) : (
                        <div className="w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-serif font-medium text-primary">
                          {coach.name.slice(0, 2)}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 mb-4">
                        <Badge variant="secondary" className="w-fit">
                          {coach.role}
                        </Badge>
                        <h4 className="font-serif text-2xl font-medium">{coach.name}</h4>
                        <p className="text-sm text-muted-foreground">{coach.nameEn}</p>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                        {coach.bio}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {coach.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {coach.link && (
                        <Link
                          href={coach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          {coach.linkLabel}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
