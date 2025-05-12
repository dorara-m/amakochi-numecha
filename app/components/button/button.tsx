import './button.scss'

export default function Button(
  {
    text,
    href,
    isBlank,
  }: {
    text: React.ReactNode,
    href: string,
    isBlank?: boolean,
  } = {
    text: 'Test button.',
    href: '#',
    isBlank: false,
  }
) {
  return (
    <a href={href} className="button" target={isBlank ? '_blank' : '_self'}>
      {text}
    </a>
  )
}