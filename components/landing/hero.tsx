import Image from "next/image";
import { Button } from "../ui/button";
import { Login } from "./login";


export function Hero() {
    return (
        <div className="flex w-full px-60 bg-[#191C1F]">
            {/** left */}
            <div className="flex flex-col flex w-1/2 items-end justify-center">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col font-semibold gap-5 w-[50rem] text-7xl max-3xl:text-[4.2rem] max-3xl:w-[39.5rem]">
                        <p>AFFORDABLE 3WHEELER MADE <span className="text-yellow-400">EASY</span></p>
                    </div>
                    <div className="flex text-2xl w-[33rem] max-3xl:text-xl max-3xl:w-[27rem]">
                        <p>
                            Empower your Life, Own a 3wheeler and Create a sustainable future Onchain.
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <Button>ADD TO HOME SCREEN</Button>
                        <Login/>
                    </div>
                </div>
            </div>


            {/** right */}
            <div className="flex w-1/2 justify-center">
                <Image
                    src="/images/kekeHero.svg"
                    alt=""
                    width={800}
                    height={800}
                />
            </div>
        </div>
    );
}