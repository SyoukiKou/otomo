"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 pb-20 md:pb-32 flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-balance">
          <span className="block">好きなことと仕事、</span>
          <span className="block">どう両立させる？</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed text-pretty">
          音楽の夢を諦めたくない。
          <br className="hidden md:block" />
          でも生活の安定も必要。
        </p>

        <p className="text-xl md:text-2xl font-bold text-primary mb-6">
          その両方、叶えられます。
        </p>

        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          otomo は、あなたのキャリア選択を
          <br className="hidden md:block" />
          プロが一緒に考えるサービスです。
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-12 shadow-sm">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">好きなことを続けながら</span>
            <br />
            <span className="font-semibold text-foreground">安定した生活も実現する</span>
            <br />
            <span className="text-primary font-bold text-lg md:text-xl">その両立方法を一緒に考えます！</span>
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
