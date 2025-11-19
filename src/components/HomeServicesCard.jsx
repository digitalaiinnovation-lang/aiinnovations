export default function HomeServicesCard({ children }) {
    return (
        <div className="
        border-[2px] border-[#4A1498] md:w-[427px] md:h-[261px] w-[228px] h-[139px] md:rounded-[100px] rounded-[55px] 
        shadow-[inset_0px_6px_6px_-2px_#2365FF26,inset_0px_-20px_20px_-6px_#FFFFFF66,inset_0px_-40px_30px_-8px_#6694FF80,inset_0px_-80px_60px_-30px_#144CCCDD]
        flex items-center justify-center
        "
        >
            <p className="md:text-[36px] text-[16px] mx-[32px]">
                {children}
            </p>
        </div>
    );
}
