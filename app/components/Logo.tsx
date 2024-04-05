import Image from 'next/image'

export default function Logo() {
    return (
        <section className="w-full mx-auto flex">
            <div
                className="border-2 border-black bg-slate-400 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto py-20 px-2">
                <Image
                    src="/next.svg"
                    width={180}
                    height={180}
                    alt="Logo"
                    priority={true}
                />
            </div>
        </section>
    )
}