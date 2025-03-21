interface IIfProps {
  cond?: boolean | string
}

export const If = ({ children, cond = false }: React.PropsWithChildren<IIfProps>) => {
  if (!cond) {
    return null
  }

  return <>{children}</>
}
