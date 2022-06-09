type BannerProps = {
    title: string;
    slogan: string;
};

function Banner({ title, slogan }: BannerProps) {
    return (
        <div className="w-full lg:w-1/2 py-8 flex items-center justify-center gap-2 relative">
            <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-kc-orange-dark text-3xl lg:text-5xl flex items-center text-center">
                    {title}
                </h1>
                <em className="hidden lg:block w-1/2 text-kc-orange-light text-lg font-semibold text-center">
                    {slogan}
                </em>
            </div>
            <img
                className="absolute bottom-0 hidden lg:block"
                alt="border-img"
                src="https://krugercorp.com/wp-content/uploads/2022/02/borde-color3-03.png"
            />
        </div>
    );
}

export default Banner;
