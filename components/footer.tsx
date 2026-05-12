import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium mb-1">
              音大生キャリア相談
            </p>
            <p className="text-sm text-muted-foreground">
              by 上杉未宇
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              href="https://miuviolin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Artist Website
            </Link>
            <Link 
              href="https://thehearth.jp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              The Hearth
            </Link>
            <Link 
              href="https://linkbio.co/miuviolin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Miu Uesugi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
