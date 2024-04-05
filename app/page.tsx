import Logo from "./components/Logo"
import SignIn from "./components/SignIn";
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            <div style={{minHeight: 90 + 'vh'}}>
                <div className="grid lg:grid-cols-5 h-full">
                    <div className="order-last lg:order-first lg:col-span-2 flex flex-col py-20 px-10">
                        <Logo />
                        <SignIn className="mt-8" />
                    </div>
                    <div className="lg:col-span-3">
                        <Image
                            src="https://api.cxaone.com/Clients/newdemo3/shutterstock_1490890820.jpg"
                            className="w-full h-full"
                            width={600}
                            height={800}
                            alt="branding"
                        />
                    </div>
                </div>
            </div>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-slate-600">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                      © 2024
                      <a href="/" className="hover:underline"> Pacific Prime PCM™</a>.
                      All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </main>
    )
}
