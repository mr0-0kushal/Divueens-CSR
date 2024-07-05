import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules' 

const Slider = () => {

    const ServiceData = [
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: "/images/cardBgmobile.png",
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: "/images/cardBgmobile.png",
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: "/images/cardBgmobile.png",
        }, {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage:"/images/cardBgmobile.png",
        }, {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: "/images/cardBgmobile.png",
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: "/images/cardBgmobile.png",
        },
    ];

    return (
        <div className="slideBar flex items-center justify-center flex-col min-h-60 p-6 bg-transparent">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}

                freeMode={true}
                Pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[90%] lg:max-w[80%]'>

                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title} className='p-4'>
                        <div className="flex flex-col gap-6 group relative shadow-lg shadow-black rounded-xl px-7 py-8 h-[260px] w-[190px] lg:h-[400px] lg:w-[310px] overflow-hidden">
                            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${item.backgroundImage})`}} />
                            <div className="absolute inset-0 bg-[#FBBDBB] opacity-10 hover:opacity-50" />
                            <div className="relative flex flex-col gap-3">
                                <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
                                <p className="lg:text-[18px]">{item.content}</p>
                           </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Slider