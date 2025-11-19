export default function CompanyInfoCard({ img, text }) {
  return (
    <div
      className="
        flex md:flex-row items-center justify-between h-[245px] my-[36px] md:gap-10 gap-3
        odd:bg-white even:bg-[#C5EEFA] even:flex-row-reverse xl:px-[260px] lg:px-[25px] px-[10px]
      "
    >
      <img
        src={img}
        alt="Company"
        className="md:max-h-full max-h-[90%]"
      />
      <p className="xl:text-[20px] lg:text-[18px] text-[12px]">{text}</p>
    </div>
  );
}
