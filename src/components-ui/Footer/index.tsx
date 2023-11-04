import { FacebookIcon, InstagramIcon, MessageSquareIcon } from 'lucide-react'
import { ReactElement } from 'react'

interface SocialProps {
  link: string
  label: string
  icon: ReactElement
}

// TODO Verificar se todas as redes estao corretas
const social: SocialProps[] = [
  {
    link: 'https://www.facebook.com/DucksSports/',
    label: 'Página do Facebook',
    icon: <FacebookIcon size={20} />,
  },
  {
    link: 'https://www.instagram.com/duckssportsoficial/',
    label: 'Página do Instagram',
    icon: <InstagramIcon size={20} />,
  },
  {
    link: 'https://api.whatsapp.com/send?phone=553438231315',
    label: 'Conversa no Whatsapp',
    icon: <MessageSquareIcon size={20} />,
  },
]

const SocialButton = ({ link, label, icon }: SocialProps) => (
  <a
    href={link}
    target="_blank"
    className="bg-gray-50 flex p-2 justify-center items-center rounded-full text-zinc-800 hover:bg-gray-50/60"
    rel="noreferrer"
  >
    {icon}
    <span className="sr-only">{label}</span>
  </a>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <hr className="border-zinc-100" />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-6 py-8 flex flex-wrap item-center justify-center sm:justify-between gap-6">
          <span className="text-md text-zinc-800 sm:text-center sm:whitespace-nowrap">
            © {currentYear} SDUI. Todos os direitos reservados.
          </span>
          <div className="flex gap-4  item-center">
            {social.map((item) => (
              <SocialButton key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer
