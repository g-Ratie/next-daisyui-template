interface TextProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"
  className?: string
}

export const HeroContentText = ({
  variant,
  className,
  children,
}: React.PropsWithChildren<TextProps>) => {
  const Component = variant

  return <Component className={className}>{children}</Component>
}
