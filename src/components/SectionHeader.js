export default function SectionHeader({ children, align }) {
  return (
    <>
      <h2
        className={`text-4xl font-bold mt-4 mb-8 ${
          // if [align] prop is set to "center" then add class "text-center" otherwise add class "text-left"
          align == "center" ? "text-center" : "text-left"
        }`}
      >
        {children}
      </h2>
    </>
  );
}
