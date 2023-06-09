import { default as NextHead } from 'next/head'

import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from 'src/utils/consts'

interface Props {
  title?: string
  description?: string
}

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
