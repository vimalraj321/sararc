type Props = {
  children: React.ReactNode;
  id?: string;
};

export const Container = ({ children, id }: Props) => {
  return (
    <section
      id={id}
      className="mt-[100px] mb-[50px] w-[90%] md:w-3/4 max-w-[1200px] mx-auto"
    >
      {children}
    </section>
  );
};
