'use client'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Navbar = ({ open, setOpen }) => {
    const [category, setCategory] = useState('10');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <div className='fixed top-0 flex justify-between w-screen px-7 py-5 bg-white transition-all delay-75'
                style={open && {
                    width: `calc(100% - 280px)`,
                    marginLeft: `280px`,
                } || { width: '100%', marginLeft: '0px' }}
            >
                <button
                    onClick={() => setOpen(!open)}
                    className="text-slate-500"
                >
                    <MenuIcon color='inherit' />
                </button>
                <div className='flex items-center gap-3'>
                    <Link
                        href="#"
                    >
                        <Image
                            src="/Icons/Person.svg"
                            alt="home"
                            width={30}
                            height={30}
                        />
                    </Link>

                    <Link
                        href="#"
                    >
                        <Image
                            src="/Icons/Date.svg"
                            alt="home"
                            width={30}
                            height={30}
                        />
                    </Link>

                    <Link
                        href="#"
                    >
                        <Image
                            src="/Icons/Person.svg"
                            alt="home"
                            width={30}
                            height={30}
                        />
                    </Link>

                    <Link
                        href="#"
                    >
                        <Image
                            src="/Icons/Pc.svg"
                            alt="home"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
            <div className={`fixed bg-white transition-all delay-75 flex flex-col gap-2 border-r border-slate-300 h-full py-5 px-3 ${open ? 'w-[280px]' : 'w-[0px] !px-0'} overflow-hidden`}>
                <div className='flex justify-between items-center'>
                    <img
                        width={113}
                        height={37}
                        src="https://patipos.app/logo-dark.svg"
                        alt="logo"
                    />
                    <button
                        onClick={() => setOpen(!open)}
                        className='text-slate-500 md:hidden'
                    >
                        <ArrowBackIosNewIcon color='inherit' />
                    </button>

                    <span className='bg-slate-200 rounded-full px-2 py-1 text-green-700 text-sm hidden md:block'>
                        1.2.132 Beta
                    </span>
                </div>
                <div className='mt-5'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Odalar"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ameliyathane 1</MenuItem>
                            <MenuItem value={20}>İlaç Odası</MenuItem>
                            <MenuItem value={30}>Muayene Odası</MenuItem>
                            <MenuItem value={40}>Karşılama</MenuItem>
                            <MenuItem value={50}>Muayene 2</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className='flex items-center justify-center gap-5 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200'>
                    <div>
                        <img
                            width={60}
                            height={60}
                            src="https://patipos.app/_next/image?url=%2Fassets%2Fclinic%2Fuser%2Fu.png&w=128&q=100"
                            alt="logo"
                        />
                    </div>
                    <div>
                        <h3 className='font-semibold'>mert.erdogdu</h3>
                        <span className='text-sm'>Süper Admin</span>
                    </div>
                    <div>
                        <SettingsIcon />
                    </div>
                </div>

                <div>
                    <div>
                        Menu
                    </div>
                    <div className='my-3 flex flex-col gap-5'>
                        <Link
                            href="#"
                            className='flex gap-3 items-center bg-blue-100 text-blue-700 px-3 py-2 rounded-md w-full'
                        >
                            <Image
                                src="/Icons/Home.svg"
                                alt="home"
                                width={30}
                                height={30}
                            />
                            Anasayfa
                        </Link>

                        <Link
                            href="#"
                            className='flex gap-3 items-center px-3 py-2 rounded-md w-full'
                        >
                            <Image
                                src="/Icons/Pc.svg"
                                alt="home"
                                width={30}
                                height={30}
                            />
                            Hızlı Satış
                        </Link>

                        <Link
                            href="#"
                            className='flex gap-3 items-center px-3 py-2 rounded-md w-full'
                        >
                            <Image
                                src="/Icons/Love.svg"
                                alt="home"
                                width={30}
                                height={30}
                            />
                            Tedavi & Aşı
                        </Link>

                        <Link
                            href="#"
                            className='flex gap-3 items-center px-3 py-2 rounded-md w-full'
                        >
                            <Image
                                src="/Icons/Person.svg"
                                alt="home"
                                width={30}
                                height={30}
                            />
                            Hasta Portfalı
                        </Link>

                        <Link
                            href="#"
                            className='flex gap-3 items-center px-3 py-2 rounded-md w-full'
                        >
                            <Image
                                src="/Icons/Date.svg"
                                alt="home"
                                width={30}
                                height={30}
                            />
                            Randevu İşlemleri
                        </Link>

                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar