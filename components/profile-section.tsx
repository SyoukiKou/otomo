import { Badge } from "@/components/ui/badge"
import { Music, Briefcase, GraduationCap, Award, Users, Building } from "lucide-react"

const timeline = [
  {
    year: "2004",
    event: "ピアノを始める（スズキメソード）",
    icon: Music
  },
  {
    year: "2006",
    event: "ヴァイオリンを始める",
    icon: Music
  },
  {
    year: "2014",
    event: "ノートルダム清心中・高等学校入学、弦楽部長・コンサートミストレスを務める",
    icon: GraduationCap
  },
  {
    year: "2020",
    event: "早稲田大学文学部入学、福祉施設でのボランティア演奏団体を創設",
    icon: Users
  },
  {
    year: "2024",
    event: "大手通信会社に入社、法人営業として勤務開始",
    icon: Briefcase
  },
  {
    year: "2025",
    event: "全日本弦楽コンクール優秀賞受賞、ラ・フォルジュルネ東京出演",
    icon: Award
  },
  {
    year: "現在",
    event: "会社員として週5日勤務しながら、年間20箇所以上で演奏活動を継続。芸術×脳科学によるウェルビーイング向上プログラムの開発や、音楽と異分野のコラボレーション企画の制作・実現にも携わるなど、芸術の社会実装にも取り組む。",
    icon: Building
  }
]

const highlights = [
  "早稲田大学在学中にエンカレッジで毎月30人の学生とキャリア面談を実施",
  "芸術×脳科学のウェルビーイングプログラム開発企業「The Hearth」創業",
  "Marunouchi Street Parkにミュージシャンとして参画中"
]

export function ProfileSection() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-primary mb-4 uppercase">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            相談相手について
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miuuesugi.png-9J7EDIggErM23F47P0RHUSJrsrwjph.jpeg" 
                  alt="上杉未宇 - ヴァイオリンを持つプロフィール写真"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-2">上杉 未宇</h3>
              <p className="text-muted-foreground mb-4">Miu Uesugi</p>
              <Badge variant="secondary" className="mb-6">
                パラレルキャリアアーティスト
              </Badge>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              2001年生まれ。早稲田大学文学部文学科卒業。2歳よりピアノ、5歳よりヴァイオリンを始める。
              現在は大手通信会社で法人営業として働きながら、演奏活動・起業活動を両立する
              <strong className="text-foreground">「パラレルキャリア」</strong>を実践中。
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <h4 className="font-medium text-lg mb-8">これまでの歩み</h4>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                      {item.icon ? (
                        <item.icon className="w-4 h-4 text-primary" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="text-sm font-medium text-primary">{item.year}</span>
                    <p className="text-muted-foreground text-sm mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed italic">
            &ldquo;音楽を辞めるか続けるか、ではなく、
            <br className="hidden md:block" />
            どうすれば音楽と一生付き合っていけるかを一緒に考えたい。&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
