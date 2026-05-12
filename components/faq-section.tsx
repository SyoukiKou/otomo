import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "誰でも相談できますか？",
    answer: "はい、音楽を続けながら仕事もしたい、好きなことと生活のバランスを取りたいという方であれば誰でもご相談いただけます。学生、既卒者、転職を考えている方など、どのような方でもお気軽にお問い合わせください。"
  },
  {
    question: "どんな内容を相談できますか？",
    answer: "「好きなことと仕事、どう両立させるか」「自分の適性がわからない」「このままでいいのか不安」など、キャリアに関することなら何でもお話しいただけます。答えを押し付けるのではなく、あなたの「本当にしたいこと」を見つけるお手伝いをします。"
  },
  {
    question: "カフェでの相談の場所はどこですか？",
    answer: "東京都内で、ご希望に合わせて決定します。静かで落ち着いて話せる場所を選びますので、お申し込み時にアクセスしやすいエリアをお知らせください。"
  },
  {
    question: "支払い方法は？",
    answer: "相談当日に現金、またはPayPay等のキャッシュレス決済でお支払いいただけます。オンラインの場合は事前振込となります。詳細はお申し込み後にご案内します。"
  },
  {
    question: "1回の相談で十分ですか？",
    answer: "1回60分のセッションで、現状の整理と方向性の確認ができます。継続的なサポートをご希望の方には、複数回のセッションもご案内可能です。まずは1回お試しいただき、必要に応じてご検討ください。"
  },
  {
    question: "キャンセルはできますか？",
    answer: "はい、前日までにご連絡いただければキャンセル可能です。当日のキャンセルについては、キャンセル料が発生する場合があります。詳細はお申し込み時にご案内します。"
  }
]

export function FAQSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-primary mb-4 uppercase">
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-balance">
            よくあるご質問
          </h2>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
