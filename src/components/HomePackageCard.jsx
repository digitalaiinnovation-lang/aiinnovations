export default function HomePackageCard({ children, heading }) {
    return (
        <div className="
            border-[1px] border-[#090814] rounded-[25px] md:w-[381px] md:h-[262px] w-[224px] h-[203px]
            shadow-[inset_0px_-80px_60px_-30px_#144CCD,inset_0px_-40px_30px_-8px_#6694FF80,inset_0px_-20px_20px_-6px_#FFFFFF66,inset_0px_6px_6px_-2px_#2365FF26]"
        >
            <h5 className="font-anek text-[20px] text-center">{heading}</h5>
            <hr className="border-[#B7E5F8] border-[1px]" />
            <ul className="list-disc list-inside md:text-[20px] text-[12px] md:h-[200px] flex flex-col items-start justify-center">
                {children}
            </ul>
        </div>
    )
}