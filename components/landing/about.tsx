

export function About() {
    return (
        <div className="flex flex-col items-center py-24 gap-12 bg-[#1F2327]">
            {/** top */}
            <div className="flex flex-col w-[36rem] max-5xl:w-[30rem] gap-4 items-center max-lg:w-[16rem]">
                <p className="text-center text-4xl text-yellow-400 font-semibold max-5xl:text-3xl">ABOUT 3WHEELER</p>
                <p className="text-center max-5xl:text-sm">The 3 Wheeler Bike Club aims to empower KEKE drivers by using blockchain technology to improve their lives. Many drivers work hard but earn little, so our goal is to help them break free from this cycle of hardship.</p>
            </div>
            {/** down */}
            <div className="flex flex-col w-[36rem] max-5xl:w-[30rem] gap-4 items-center max-lg:w-[16rem]">
                <p className="text-center text-4xl text-yellow-400 font-semibold max-5xl:text-3xl">MISSION</p>
                <p className="text-center max-5xl:text-sm">The 3 Wheeler Bike Club aims to empower KEKE drivers by using blockchain technology to improve their lives. Many drivers work hard but earn little, so our goal is to help them break free from this cycle of hardship.</p>
            </div>
        </div>
    );
}