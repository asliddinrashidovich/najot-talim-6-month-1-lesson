import PropTypes from "prop-types"

Dashboard.propTypes = {
    menuData: PropTypes.array.isRequired,
    dashboardData: PropTypes.array.isRequired
}

function Dashboard({menuData, dashboardData}) {
    console.log(menuData)
  return (
    <div className="w-full relative">
        <div className="w-[241px] hidden md:block fixed top-0 left-0 bottom-0 bg-[#152259] text-center">
            <img src="/public/assets/Ellipse 6.png" alt="ellepse" className="mt-[30px] w-[65px] mx-auto mb-[22px]"/>
            <p className="text-[14px] font-[600] leading-[100%] text-[#fff] mb-[40px]" >Udemy Inter. school</p>
            <hr className="border-[#BDBDBD] mb-[16px]"/>
            <ul className="mb-[100px]">
                {menuData.map(item => (
                    <li key={item.text} className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] ${item.active ? 'bg-[#509CDB]' : 'bg-transparent'} px-[16px] py-[12px] justify-start items-center mb-1`}>
                        <img src={item.img} alt={item.text} />
                        <span className="text-[#fff] text-[14px] font-[600] leading-[100%]">{item.text}</span>
                    </li>
                ))}
            </ul>
            <div className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] bg-transparent px-[16px] py-[12px] justify-start items-center mb-1`}>
                <img src="/public/assets/School Management Admin Dashboard UI (Community) (3)/vuesax/outline/bank.svg" alt="banking" />
                <span className="text-[#fff] text-[14px] font-[600] leading-[100%]">Features</span>
                <div className="py-[1px] px-[8px] text-[14px] font-[600] leading-[100%] bg-[#B9D7F1] rounded-[20px] ">NEW</div>
            </div>
        </div>
        <div className="w-full md:w-[calc(100vw-241px)] px-[50px] md:px-[127px] absolute right-0">
            <div className=" py-[30px] flex items-center justify-between mb-[68px]">
                <p className="text-[16px] leading-[100%] font-[400]">Learn  how to launch faster <br />
                watch our webinar for tips from our experts and get a limited time offer.</p>
                <div className="flex justify-between gap-[48px]">
                    <img src="/public/assets/iconoir_bell-notification.svg" className="cursor-pointer" alt="bell" />
                    <button className="px-[35px] py-[11px] rounded-[8px] bg-[#509CDB] cursor-pointer">Log out</button>
                </div>
            </div>
            <h1 className="text-[36px] font-[600] leading-[100%] text-[#4F4F4F] ">Welcome to your dashboard, Udemy school</h1>
            <div className="px-[50px] md:px-[106px]">
                <h2 className="text-[#4F4F4F] font-[600] text-[24px] leading-[100%] mt-[23px] mb-[74px]">Uyo/school/@teachable.com</h2>
                <div>
                    {dashboardData.map(item => (
                        <div key={item.text} className="flex gap-[19px] items-start mb-[50px]">
                            <div className="min-w-[36px] h-[36px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div>
                                <h3 className="text-[#4F4F4F] text-[24px] font-[500] leading-[100%] mb-[16px]">{item.title}</h3>
                                <p className="text-[#4F4F4F] max-w-[464px] text-[14px] font-[400] leadong-[133px]">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="cursor-pointer absolute right-[120px] bottom-[160px] flex items-center gap-[40px] bg-[#152259] p-[21px] rounded-[50px]">
                <div className="flex items-center gap-[8px]">
                    <img src="/public/assets/Vector.svg" alt="call" />
                    <span className="text-[#fff]">Support</span>
                </div>  
                <img src="/public/assets/Vector (1).svg" alt="vector" />
            </button>
        </div>
    </div>
  )
}

export default Dashboard