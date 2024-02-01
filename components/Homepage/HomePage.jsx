import Link from 'next/link'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className='mt-24 w-full px-7 flex flex-col gap-5'>
            <div className='flex justify-between w-full'>
                <div>
                    <Link
                        href="/"
                        className='text-blue-700'
                    >
                        Klinik
                    </Link>
                    <ArrowForwardIosIcon fontSize='small' color='disabled' />
                    <span>Anasayfa</span>
                </div>
                <div>
                    <button
                        className='bg-gradient-to-r from-blue-400 to-blue-600 px-3 py-2 text-white rounded-lg'
                    >
                        Geri Dön
                    </button>
                </div>
            </div>
            <h1 className='text-[#1d2630] text-2xl font-semibold'>
                Anasayfa
            </h1>
            <div className='flex flex-wrap gap-5'>
                <Link
                    href="#"
                    className='bg-slate-100 border border-slate-400 px-5 py-5 flex justify-center gap-5 w-fit items-center rounded-xl'
                >
                    <Image
                        src="/HomeImages/star.png"
                        width={70}
                        height={70}
                        alt='star'
                    />

                    <span className='font-semibold text-lg text-slate-900'>
                        Hızlı Satış
                    </span>
                </Link>

                <Link
                    href="#"
                    className='bg-slate-100 border border-slate-400 px-5 py-5 flex justify-center gap-5 w-fit items-center rounded-xl'
                >
                    <Image
                        src="/HomeImages/pati.png"
                        width={70}
                        height={70}
                        alt='star'
                    />

                    <span className='font-semibold text-lg text-slate-900'>
                        Hasta Kayıt
                    </span>
                </Link>

                <Link
                    href="#"
                    className='bg-slate-100 border border-slate-400 px-5 py-5 flex justify-center gap-5 w-fit items-center rounded-xl'
                >
                    <Image
                        src="/HomeImages/hospital.png"
                        width={70}
                        height={70}
                        alt='star'
                    />

                    <span className='font-semibold text-lg text-slate-900'>
                        Pansiyon
                    </span>
                </Link>

                <Link
                    href="#"
                    className='bg-slate-100 border border-slate-400 px-5 py-5 flex justify-center gap-5 w-fit items-center rounded-xl'
                >
                    <Image
                        src="/HomeImages/test.png"
                        width={70}
                        height={70}
                        alt='star'
                    />

                    <span className='font-semibold text-lg text-slate-900'>
                        Ajanda
                    </span>
                </Link>

                <Link
                    href="#"
                    className='bg-slate-100 border border-slate-400 px-5 py-5 flex justify-center gap-5 w-fit items-center rounded-xl'
                >
                    <Image
                        src="/HomeImages/qr.png"
                        width={70}
                        height={70}
                        alt='star'
                    />

                    <span className='font-semibold text-lg text-slate-900'>
                        Belge Yükle
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default HomePage