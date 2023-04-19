import { default as NextHead } from 'next/head'

interface Props {
  title?: string
  description?: string
}

const DEFAULT_TITLE = 'Address book'
const DEFAULT_DESCRIPTION = 'An address book app built with Next JS'

const Head = ({ title, description }: Props) => {
  return (
    <NextHead>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}

export default Head
