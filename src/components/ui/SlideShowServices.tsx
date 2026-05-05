import { servicesData } from "@/lib/items"
import { HoverSlider, TextStaggerHover, HoverSliderImageWrap, HoverSliderImage } from "../animated-slideshow";

const SlideShowServices = () => {

    const SLIDES = servicesData;

    return (
        <HoverSlider className="place-content-center bg-background w-full text-[#3d3929]">
        <h2 className="mb-6 text-[rgb(201, 100, 66)] text-2xl font-semibold capitalize text-[#c96442]">
            Servizi offerti
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-12">
            <div className="flex flex-col space-y-2 md:space-y-4 w-full lg:w-fit">
            {SLIDES.map((slide, index) => (
                <TextStaggerHover
                key={slide.title}
                index={index}
                className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                text={slide.title}
                />
            ))}
            </div>
            <HoverSliderImageWrap>
            {SLIDES.map((slide, index) => (
                <div key={slide.id} className="  ">
                <HoverSliderImage
                    index={index}
                    imageUrl={slide.imageUrl}
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="size-full max-h-96 object-cover"
                    loading="eager"
                    decoding="async"
                />
                </div>
            ))}
            </HoverSliderImageWrap>
        </div>
        </HoverSlider>
    )
}

export default SlideShowServices