import React from 'react'

export const GTag: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${props.id}`}/>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${props.id}');`,
      }}/>
    </>
  )
}

type Props = {
  id: string
}