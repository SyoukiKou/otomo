"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm tracking-widest text-muted-foreground mb-6 uppercase">
          Career Consultation for Music Students
        </p>
        
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-balance">
          <span className="block">音大卒業して、</span>
          <span className="block">そのあとどうする問題。</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed text-pretty">
          きっとあなたの心にあるのは、
          <br className="hidden md:block" />
          <span className="font-medium text-foreground">「音楽を続けたい」</span>という本音だと思います。
        </p>

        <p className="text-xl md:text-2xl font-bold text-primary mb-6">
          諦めなくていい！
        </p>

        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          パラレルキャリアで、
          <br className="hidden md:block" />
          より豊かな人生を歩めるという選択肢があります。
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-12 shadow-sm">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">大手企業に週5勤務</span>しながら
            <br />
            <span className="font-semibold text-foreground">音楽のキャリアも実現する</span>私と
            <br />
            <span className="text-primary font-bold text-lg md:text-xl">一緒に考えましょう！</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-base px-8 py-6 rounded-full"
          >
            相談を予約する
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-base px-8 py-6 rounded-full"
          >
            詳しく見る
          </Button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
