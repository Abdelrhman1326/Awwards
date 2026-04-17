const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full overflow-hidden border-[1px] border-white/25 rounded-lg">

            {src && (
                <video
                    src={src}
                    loop
                    muted
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            <div className="relative z-10 flex flex-col px-6 py-7 gap-5">

                {title && (
                    <h2
                        className="special-font font-zentry text-blue-50 text-5xl md:text-6xl uppercase"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}

                {description && (
                    <p
                        className="max-w-xs special-font font-robert-regular text-blue-50 text-md md:text-lg"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </div>
        </div>
    );
};

export default BentoCard;