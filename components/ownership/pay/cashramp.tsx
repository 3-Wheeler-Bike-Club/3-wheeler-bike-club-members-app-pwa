import { Minimize2 } from "lucide-react";
import { useRouter } from "next/navigation";


interface CashrampProps {
    hostedLink: string | undefined
}

export function Cashramp({ hostedLink } : CashrampProps) {

    const router = useRouter()

    return (
        <main className="fixed flex flex-col z-20 bg-gray-900/25 w-screen h-screen items-center justify-center top-0 left-0 right-0 bottom-0 backdrop-blur-[0.666px]">

            <div className="w-full h-full relative">
                <div
                    onClick={async()=>{
                        router.push("/ownership")
                    }}
                    className="absolute cursor-pointer p-5 top-0 right-0"
                >
                    <Minimize2 className="text-yellow-600"/>
                </div>
                <div className="h-full w-full">
                    <iframe
                        src={`${hostedLink}`}
                        title="cashramp"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>

        </main>
    );
}
