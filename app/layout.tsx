import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import Header from './components/header'
import StyledJsxRegistry from './lib/registry'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledJsxRegistry>
          <Header/>
          {children} 
          <footer>aaaaaa</footer>
        </StyledJsxRegistry>
        </body>
    </html>
  )
}
