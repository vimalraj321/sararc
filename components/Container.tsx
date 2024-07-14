
type Props = {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <section className="mt-[100px] mb-[50px] w-[90%] md:w-3/4 max-w-[1200px] mx-auto">{children}</section>
  )
}

