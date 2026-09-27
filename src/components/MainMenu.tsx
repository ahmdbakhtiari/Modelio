import { Button } from '@heroui/react'
import Link from 'next/link'
import React from 'react'

export default function MainMenu() {
    return (
        <div className='flex items-center py-5 bg-gray-50 border-b-[1px] justify-around'>
            <div>
                <p> 
                    <span className='bg-sky-500 mr-2 px-2 rounded-sm'></span>
                    Modelio</p>
            </div>
            <div>
                <ul className='flex items-center justify-around gap-8 *:hover:font-bold *:transition-all'>
                    <li><Link href={'#'}>Home</Link></li>
                    <li><Link href={'#'}>Models</Link></li>
                    <li><Link href={'#'}>About</Link></li>
                    <li><Link href={'#'}>Contact</Link></li>
                </ul>
            </div>

            <div>
                <Button>Start Chatting</Button>
            </div>
        </div>
    )
}
