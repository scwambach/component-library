'use client'
import { Container, Markdown } from '../utility'

export const Footer = ({ copy, title }: { copy?: string; title: string }) => {
  const year = new Date().getFullYear()
  return (
    <footer className="wdrlscw-footer">
      <Container>
        <p>
          &copy; {year} {title}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </Container>
    </footer>
  )
}
