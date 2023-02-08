import Head from "next/head";

type props = {
  title?: string
}

export default function CustomHead({ title }: props) {
  return (
    <Head>
      <title>{title ? title : 'EmailTube'}</title>
      <meta name="description" content="Receive email newsletters of your interest." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
