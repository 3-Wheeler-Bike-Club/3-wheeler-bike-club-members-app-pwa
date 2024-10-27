import { Button } from "../ui/button";


export function Contact() {
    return (
        <div className="flex flex-col py-24 gap-14 items-center bg-[#191C1F]">
            {/** top */}
            <div className="text-6xl font-semibold max-2xl:text-5xl">
                <p>Ready to <span className="text-yellow-400">Ride</span>?</p>
            </div>
            {/** middle */}
            <div className="w-[30rem] max-2xl:w-[26rem] text-center">
                <p className="text-2xl max-2xl:text-xl">Start Your Journey with Affordable 3wheeler and empower your future</p>
            </div>
            {/** down */}
            <div className="">
                <Button >Get Started</Button>
            </div>
        </div>
    );
}