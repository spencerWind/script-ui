import ButtonFilled from "../components/Buttons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/ButtonOutlined";

const HeroSection = () => {
    return (
        <section
            id="heroSection"
            className="text-slate-100 max-md:p-2 flex flex-col items-center justify-between py-32">
            <div className=" flex flex-col items-center mb-64">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide mb-4">
                    React and Tailwind just got better...
                </h1>
                <p className="text-xs md:text-base font-thin max-md:max-w-[280px] mb-8 md:max-w-sm lg:max-w-xl text-center">
                    With the combined power of TailwindCSS and React Components,
                    build lightning fast websites using our custom user
                    interface components{" "}
                </p>
                <div className="flex flex-row items-center justify-center gap-8">
                    <ButtonFilled
                        fillColor={"primary"}
                        className={"px-2 text-slate-50 max-md:text-sm"}
                        onClick={() => {
                            console.log("Button Clicked");
                        }}>
                        Get Started
                    </ButtonFilled>
                    <ButtonOutlined
                        borderColor="border-primary"
                        className={"px-2 text-slate-50 max-md:text-sm "}
                        onClick={() => {
                            console.log("Button Clicked");
                        }}>
                        Examples
                    </ButtonOutlined>
                </div>
            </div>
            <div className="w-full px-4 md:px-8 flex flex-col lg:flex-row gap-8">
                <div className="max-w-md text-sm font-thin">
                    <h3 className="font-semibold lg:text-xl mb-4">
                        Plug and play components at your fingertips
                    </h3>
                    <p className="mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus earum quis error nobis sapiente adipisci
                        asperiores aut ullam, quidem dolore nam perferendis non
                        modi nesciunt! Odio repellendus maiores reiciendis
                        provident?
                    </p>
                    <p className="mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum aut corrupti eum! Eos molestias doloremque
                        blanditiis odit hic? Eum soluta dignissimos eos
                        voluptatibus praesentium dolor adipisci alias culpa
                        temporibus delectus?
                    </p>
                    <div className="flex flex-row gap-8 text-base font-normal underline text-primary">
                        <p>Click Me</p>
                        <p>Click me too</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 bg-slate-800 h-96"></div>
            </div>
        </section>
    );
};

export default HeroSection;
