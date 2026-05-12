import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium mb-1">
              otomo
            </p>
            <p className="text-sm text-muted-foreground">
              キャリア相談サービス
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} otomo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
