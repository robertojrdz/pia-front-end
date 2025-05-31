'use client'

import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {Dialog, DialogPanel, PopoverGroup} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const menuItems = [
    {
        title: 'WHAT IS FIA WEC?',
        link: '/about',
    },
    {
        title: 'NEWS',
        link: '/news',
    },
    {
        title: 'CALENDAR',
        link: '/#calendar',
    },
    {
        title: 'STANDINGS',
        link: '/#standings',
    },
    {
        title: 'GRID',
        link: '/grid',
    }
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-red-600">
            <nav aria-label="Global" className="flex max-w-7xl items-center justify-between py-4 mx-[50px] duration-300">
                <div className="flex lg:flex-1">
                    <NavLink to="/" className="-m-1.5 p-1.5" viewTransition>
                        <span className="sr-only">FIA WEC</span>
                        <img
                            alt=""
                            src="images/logos/logo.png"
                            className="h-10 w-auto"
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-10" color="white"/>
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-6">
                    {menuItems.map((element) => (
                        (element.title === 'CALENDAR' || element.title === 'STANDINGS') ? (
                            <HashLink smooth to={element.link} className="formula-1 text-white" viewTransition>{element.title}</HashLink>
                        ) : (
                            <NavLink to={element.link} className="formula-1 text-white" viewTransition>{element.title}</NavLink>
                        )
                    ))}
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                {/* Mobile Menu */}
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-red-600 py-4 p-[50px] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)} viewTransition>
                            <span className="sr-only">FIA WEC</span>
                            <img
                                alt=""
                                src="images/logos/logo.png"
                                className="h-10 w-auto"
                            />
                        </NavLink>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-10" color="white"/>
                        </button>
                    </div>
                    <div className="flex h-full">
                        <div className="content-center divide-y divide-gray-500/10">
                            <div className="space-y-4 py-6">
                                {menuItems.map((element) => (
                                    (element.title === 'CALENDAR' || element.title === 'STANDINGS') ? (
                                        <HashLink smooth to={element.link} onClick={() => setMobileMenuOpen(false)} className="formula-1 text-white -mx-3 block rounded-lg px-3 py-2 text-base/7" viewTransition>{element.title}</HashLink>
                                    ) : (
                                        <NavLink to={element.link} onClick={() => setMobileMenuOpen(false)} className="formula-1 text-white -mx-3 block rounded-lg px-3 py-2 text-base/7" viewTransition>{element.title}</NavLink>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}